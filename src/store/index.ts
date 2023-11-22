import type { IExperience } from '$lib/component/experience.svelte';
import type { ISkill } from '$lib/component/skill.svelte';
import { writable } from 'svelte/store';

export const snapshotMode = writable(false);
export const fullExperienceExport = writable(false);

const selectedSkillStore = () => {
	const { set, update, subscribe } = writable<ISkill[]>([]);

	const reset = () => set([]);

	const add = (skill: ISkill) =>
		update((list) =>
			list.some((a) => a.name === skill.name)
				? list.filter((a) => a.name !== skill.name)
				: [...list, skill]
		);

	return {
		set,
		update,
		subscribe,
		reset,
		add
	};
};

export const selectedSkills = selectedSkillStore();

const experiencesStore = () => {
	const { set, update, subscribe } = writable<IExperience[]>([]);
	let initial: IExperience[] = [];

	const sortFn = (a: IExperience, b: IExperience) => b.endDate.getTime() - a.endDate.getTime();

	selectedSkills.subscribe((skills) =>
		skills.length > 0
			? set(
					initial
						.reduce((acc, cur) => {
							const missions = cur.missions.filter((mission) =>
								skills.some((skill) =>
									mission.skills.some(
										({ name }) =>
											name === skill.name || skill.name.includes(name) || name.includes(skill.name)
									)
								)
							);

							if (missions.length > 0) acc.push({ ...cur, missions });
							return acc;
						}, [] as IExperience[])
						.sort(sortFn)
			  )
			: set(initial)
	);

	const filterByType = (...types: ISkill['category'][]) => {
		update((list) =>
			list
				.reduce((acc, cur) => {
					const missions = cur.missions.filter((mission) =>
						types.some((type) => mission.skills.some(({ category }) => category === type))
					);

					if (missions.length > 0) acc.push({ ...cur, missions });
					return acc;
				}, [] as IExperience[])
				.sort(sortFn)
		);
	};

	return {
		set: (list: IExperience[]) => {
			initial = list;
			set(list);
		},
		update,
		subscribe,
		reset: () => {
			set(initial);
		}
	};
};

export const experiences = experiencesStore();

export const darkMode = writable(false);
