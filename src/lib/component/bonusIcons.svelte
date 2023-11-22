<script>
	import { fullExperienceExport, snapshotMode } from '../../store';
	import Camping from './ui/svg/camping.svelte';
	import Docker from './ui/svg/docker.svelte';
	import Elk from './ui/svg/elk.svelte';
	import FootballKick from './ui/svg/football-kick.svelte';
	import Gopher from './ui/svg/gopher.svelte';
	import K8s from './ui/svg/k8s.svelte';
</script>

<div class="flex flex-col {$snapshotMode && !$fullExperienceExport ? 'sm:flex-row sm:justify-evenly' : ''}  items-center gap-2">
	<div class="stats {$snapshotMode ? '' : 'shadow'} w-min">
		<div class="stat">
			<FootballKick width={44} />
		</div>
		<div class="stat">
			<Camping width={44} />
		</div>
	</div>
	<div class="flex flex-col items-center gap-2">
		<div class="stats {$snapshotMode ? '' : 'shadow'} w-min">
			<div class="stat">
				<img src="/strategy.png" class="max-w-none w-[44px]" alt="chess" />
			</div>
			<div class="stat">
				<img src="/harmony.png" class="max-w-none w-[44px]" alt="man in harmony" />
			</div>
		</div>
	</div>
	<div class="stats {$snapshotMode ? '' : 'shadow'} w-min">
		<div class="stat">
			<Docker width={44} />
		</div>
		<div class="stat">
			<Gopher width={44} />
		</div>
	</div>
	<div class="stats {$snapshotMode ? '' : 'shadow'} w-min">
		<div class="stat">
			<Elk width={44} />
		</div>
		<div class="stat">
			<K8s width={44} />
		</div>
	</div>
</div>
