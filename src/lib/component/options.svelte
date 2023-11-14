<script>
	import { browser } from '$app/environment';
	import { slide } from 'svelte/transition';
	import { selectedSkills } from '../../store';
	import FilterMinus from './ui/svg/filterMinus.svelte';
	import DarkModeBtn from './darkModeBtn.svelte';
	import { page } from '$app/stores';
	import Fr from './ui/svg/fr.svelte';
	import Uk from './ui/svg/uk.svelte';
	import Pdf from './ui/svg/pdf.svelte';
	import Html from './ui/svg/html.svelte';
	import Download from './ui/svg/download.svelte';
	import RemoveFilteredSkills from './removeFilteredSkills.svelte';

	let pulseCount = 0;
	let pulse = false;

	$: if (reset && $selectedSkills.length > 0 && pulseCount < 2) {
		reset = false;
		pulseCount++;
		pulse = true;
		setTimeout(() => {
			pulse = false;
		}, 3000);
	}

	let reset = true;

	$: if ($selectedSkills.length === 0) reset = true;
</script>

<div class="sm:w-28 sm:h-24">
	<ul
		class="menu sm:menu-vertical menu-horizontal flex-row-reverse sm:justify-center sm:w-min h-full flex-wrap sm:py-1 gap-4 sm:gap-0"
	>
		{#if browser}
			<li>
				<DarkModeBtn width={22} classes="p-2 m-auto" />
			</li>
		{/if}
		<li>
			<a href={$page.url.pathname.includes('en') ? '/' : '/en'} class="p-2 m-auto">
				{#if $page.url.pathname.includes('en')}
					<Fr width={22} />
				{:else}
					<Uk width={22} />
				{/if}
			</a>
		</li>
		<li>
			<a
				href="#"
				on:click|preventDefault={() => document.getElementById('dl-dialog')?.showModal()}
				class="p-2 m-auto"
			>
				<Download width={22} />
			</a>
		</li>
		{#if $selectedSkills.length > 0}
			<li class:animate-ping={pulse}>
				<RemoveFilteredSkills width={22} />
			</li>
		{/if}
	</ul>
</div>
<dialog id="dl-dialog" class="modal">
	<form method="dialog" class="modal-box">
		<p class="py-4">
			{$page.url.pathname.includes('en')
				? 'Download in pdf or mhtml (recommended) format'
				: 'Télécharger au format pdf ou mhtml (recommandé)'}
		</p>
		<div class="flex justify-center gap-8">
			<a
				href={$page.url.pathname.includes('en') ? '/cv-en.pdf' : '/cv.pdf'}
				class="btn btn-ghost"
				download
			>
				<Pdf width={22} />
			</a>
			<a
				href={$page.url.pathname.includes('en') ? '/cv-en.mhtml' : '/cv.mhtml'}
				class="btn btn-ghost"
				download
			>
				<Html width={22} />
			</a>
		</div>
		<div class="modal-action">
			<button class="btn" id="dl-close-btn"
				>{$page.url.pathname.includes('en') ? 'Close' : 'Fermer'}</button
			>
		</div>
	</form>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
