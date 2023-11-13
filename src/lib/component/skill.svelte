<script context="module" lang="ts">
	import { selectedSkills } from '../../store';
	import type { IBadge } from './ui/badge.svelte';

	export interface ISkill {
		name: string;
		category: 'devops' | 'backend' | 'frontend' | 'system' | 'science' | 'data' | 'other';
		color?: IBadge['color'];
	}
</script>

<script lang="ts">
	import SkillBadge from './ui/skillBadge.svelte';

	export let skills: ISkill[] = [
		{
			name: 'golang',
			category: 'backend',
			color: 'red'
		}
	];

	const categories: ISkill['category'][] = ['devops', 'backend', 'frontend', 'system', 'data'];
	const mobileCategories: Array<ISkill['category'][]> = [
		['backend', 'frontend'],
		['devops', 'system'],
		['data']
	];
</script>

<div class="stats shadow h-fit hidden sm:inline-grid">
	{#each categories as category}
		<div class="stat w-44 ">
			<div class="stat-title capitalize text-center h-fit">{category}</div>
			{#each skills.filter((skill) => skill.category === category) as skill}
				<button aria-label="filter by skill {skill.name}" on:click={() => selectedSkills.add(skill)} class="mb-1">
					<SkillBadge {skill} scale />
				</button>
			{/each}
		</div>
	{/each}
</div>

<div class="sm:hidden">
	{#each mobileCategories as mCategories}
		<div class="stats shadow mb-2 mx-2">
			{#each mCategories as mCategory}
				<div class="stat w-44">
					<div class="stat-title capitalize text-center">{mCategory}</div>
					{#each skills.filter((skill) => skill.category === mCategory) as skill}
						<button aria-label="filter by skill {skill.name}" on:click={() => selectedSkills.add(skill)} class="mb-1">
							<SkillBadge {skill} scale />
						</button>
					{/each}
				</div>
			{/each}
		</div>
	{/each}
</div>
