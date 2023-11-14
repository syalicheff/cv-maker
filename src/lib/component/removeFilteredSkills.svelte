<script>
	import { slide } from 'svelte/transition';
	import FilterMinus from './ui/svg/filterMinus.svelte';
	import { selectedSkills } from '../../store';

	export let width = 22;
</script>

<a
	transition:slide
	on:click|preventDefault={() => selectedSkills.reset()}
	href="/"
	class="p-2 m-auto"
>
	<FilterMinus {width} />
</a>
