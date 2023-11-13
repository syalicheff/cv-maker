<script context="module" lang="ts">
	export interface IHobby {
		name: string;
		comment?: string;
		svg?: string;
	}
</script>

<script lang="ts">
	import { snapshotMode } from '../../store';
	
	export let hobbies: IHobby[] = [
		{
			name: 'Boxe',
			comment: 'anglaise & thaïlandaise'
		}
	];
</script>

<div class="stats {$snapshotMode ? '' : 'shadow'} stats-vertical w-full">
	{#each hobbies as hobby}
		<div class="stat">
			{#if hobby.svg}
				<!-- content here -->
				<div class="stat-figure justify-self-center flex flex-col justify-center text-secondary">
					<div class="avatar">
						<div class="w-8">
							<img src={hobby.svg} alt={hobby.name} />
						</div>
					</div>
				</div>
			{/if}
			<div class="stat-value text-lg capitalize">
				{hobby.name}
			</div>
			<div class="stat-desc">
				{hobby.comment}
			</div>
		</div>
	{/each}
</div>
