<script context="module" lang="ts">
	import { page } from '$app/stores';
	import { selectedSkills } from '../../store';
	import type { IBadge } from './ui/badge.svelte';

	export interface ISkill {
		name: string;
		category: 'devops' | 'backend' | 'frontend' | 'system' | 'science' | 'data' | 'other';
		color?: IBadge['color'];
	}
</script>

<script lang="ts">
	import RemoveFilteredSkills from './removeFilteredSkills.svelte';
	import SkillBadge from './ui/skillBadge.svelte';

	export let skills: ISkill[] = [
		{
			name: 'golang',
			category: 'backend',
			color: 'red'
		}
	];

	$: english = $page.url.pathname.includes('/en');

	export let allSkills: ISkill[] = [];

	$: searchedSkills = skillSearch
		? allSkills.filter((skill) => skill.name.includes(skillSearch))
		: allSkills;

	$: reducedAllSkills = searchedSkills.reduce((acc, skill) => {
		if (!acc.has(skill.category)) {
			acc.set(skill.category, [skill]);
		} else {
			acc.get(skill.category)?.push(skill);
		}

		return acc;
	}, new Map<ISkill['category'], ISkill[]>());

	const categories: ISkill['category'][] = ['devops', 'backend', 'frontend', 'system', 'data'];
	const mobileCategories: Array<ISkill['category'][]> = [
		['backend', 'frontend'],
		['devops', 'system'],
		['data']
	];

	let skillSearch = '';
</script>

<div class="stats shadow h-fit hidden sm:inline-grid">
	{#each categories as category}
		<div class="stat w-44">
			<div class="stat-title capitalize text-center h-fit">{category}</div>
			{#each skills.filter((skill) => skill.category === category) as skill}
				<button
					aria-label="filter by skill {skill.name}"
					on:click={() => selectedSkills.add(skill)}
					class="mb-1"
				>
					<SkillBadge {skill} scale />
				</button>
			{/each}
		</div>
	{/each}
	<div class="stat w-44">
		<div class="stat-title capitalize text-center h-fit">
			{english ? 'All' : 'Tous'}
		</div>
		<button class="btn" on:click={() => document.getElementById('allSkillModal')?.showModal()}
			>+</button
		>
	</div>
</div>

<div class="sm:hidden">
	{#each mobileCategories as mCategories}
		<div class="stats shadow mb-2 mx-2">
			{#each mCategories as mCategory}
				<div class="stat w-44">
					<div class="stat-title capitalize text-center">{mCategory}</div>
					{#each skills.filter((skill) => skill.category === mCategory) as skill}
						<button
							aria-label="filter by skill {skill.name}"
							on:click={() => selectedSkills.add(skill)}
							class="mb-1"
						>
							<SkillBadge {skill} scale />
						</button>
					{/each}
				</div>
			{/each}
		</div>
	{/each}
	<div class="stat w-44">
		<div class="stat-title capitalize text-center">
			{english ? 'All' : 'Tous'}
		</div>
		<button class="btn" on:click={() => document.getElementById('allSkillModal')?.showModal()}
			>+</button
		>
	</div>
</div>

<dialog id="allSkillModal" class="modal">
	<div class="modal-box">
		<div class="flex gap-2 my-3">
			<input
				type="text"
				class="input input-bordered w-full"
				placeholder={english ? 'Filter' : 'Filtrer'}
				bind:value={skillSearch}
			/>
			{#if $selectedSkills.length > 0}
				<RemoveFilteredSkills />
			{/if}
		</div>
		<div class="flex flex-wrap justify-center">
			{#each reducedAllSkills.entries() as [category, skills]}
				<div class="flex flex-col">
					<h5 class="stat-title capitalize text-center my-3">{category}</h5>
					{#each skills.sort((a, b) => a.name.localeCompare(b.name)) as skill}
						<button
							aria-label="filter by skill {skill.name}"
							on:click={() => selectedSkills.add(skill)}
							class="mb-1"
						>
							<SkillBadge {skill} scale />
						</button>
					{/each}
				</div>
			{/each}
		</div>
		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn">
					{english ? 'Close' : 'Fermer'}
				</button>
			</form>
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<!-- if there is a button in form, it will close the modal -->
		<button>Close</button>
	</form>
</dialog>
