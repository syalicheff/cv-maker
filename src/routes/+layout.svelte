<script>
	import Footer from '$lib/component/ui/footer.svelte';
	import '../app.css';
	import dayjs from 'dayjs';
	import 'dayjs/locale/fr';
	import 'dayjs/locale/en';
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import { fullExperienceExport, snapshotMode } from '../store';
	import { onMount } from 'svelte';

	$: $page.url.pathname.includes('en') ? dayjs.locale('en') : dayjs.locale('fr');

	onMount(() => {
		page.subscribe((p) => {
			snapshotMode.set(p.url.searchParams.has('snapshot'));
			fullExperienceExport.set(p.url.searchParams.has('full'));
		});
	});
</script>

{#key $page.url.pathname}
	<div class="min-h-screen dark:bg-base-300" in:fly>
		<slot />
	</div>
{/key}

{#if !$snapshotMode}
	<Footer />
{/if}
