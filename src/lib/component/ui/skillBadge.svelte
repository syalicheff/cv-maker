<script lang="ts">
	import { selectedSkills, snapshotMode } from '../../../store';
	import type { ISkill } from '../skill.svelte';

	export let skill: ISkill;
	export let scale = false;
</script>

<span
	class="inline-flex items-center {snapshotMode
		? 'text-xs'
		: ''} font-bold rounded-md {skill.category} default px-2 py-1 ring-1 ring-inset {scale
		? 'hover:scale-[1.03]'
		: 'hover:skew-y-2'} transition
		{$selectedSkills.includes(skill) ? 'outline outline-2' : ''}
		"
	>{skill?.name.toLocaleUpperCase()}
</span>

<style lang="postcss">
	.backend {
		@apply bg-backend-200 dark:bg-backend-800 ring-backend-500/10 !important;
	}
	.frontend {
		@apply bg-frontend-200 dark:bg-frontend-800 ring-frontend-500/10 !important;
	}
	.data {
		@apply bg-data-200 dark:bg-data-800 ring-data-500/10 !important;
	}
	.system {
		@apply bg-system-200 dark:bg-system-800 ring-system-500/10 !important;
	}
	.devops {
		@apply bg-devops-200 dark:bg-devops-800 ring-devops-500/10 !important;
	}

	.default {
		@apply bg-gray-200 dark:bg-gray-800 ring-gray-500/10;
	}
</style>
