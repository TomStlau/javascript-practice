<script lang="ts">
	import Globe from '@lucide/svelte/icons/globe';
	import Compass from '@lucide/svelte/icons/compass';
	import Map from '@lucide/svelte/icons/map';
	import Heart from '@lucide/svelte/icons/heart';
	import { onMount } from 'svelte';
	let sectionContainer: HTMLElement;
	let imgOnscreen = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries, obs) => {
				if (entries[0].isIntersecting) {
					imgOnscreen = true;
					obs.disconnect();
				}
			},
			{ rootMargin: '200px' }
		);
		if (sectionContainer) observer.observe(sectionContainer);
	});
</script>

<div bind:this={sectionContainer}>
	{#if imgOnscreen}
		<section
			class="section -mt-[35vh] bg-gray-100 py-[25rem] [clip-path:polygon(0_25vh,100%_0,100%_100%,0_100%)]"
		>
			<div class="mx-auto flex max-w-285 grid-cols-4 justify-between">
				<div class="col-1">
					<div class="feature-box">
						<div class="card-icon">
							<Globe></Globe>
						</div>
						<h3 class="">Explore the world</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eveniet recusandae
							ratione, quos vitae optio praesentium dignissimos numquam.
						</p>
					</div>
				</div>
				<div class="col-2">
					<div class="feature-box">
						<div class="card-icon">
							<Compass></Compass>
						</div>
						<h3 class="">meet nature</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eveniet recusandae
							ratione, quos vitae optio praesentium dignissimos numquam.
						</p>
					</div>
				</div>
				<div class="col-3">
					<div class="feature-box">
						<div class="card-icon">
							<Map></Map>
						</div>
						<h3 class="">find your way</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eveniet recusandae
							ratione, quos vitae optio praesentium dignissimos numquam.
						</p>
					</div>
				</div>
				<div class="col-4">
					<div class="feature-box">
						<div class="card-icon">
							<Heart></Heart>
						</div>
						<h3 class="">live a healthier life</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eveniet recusandae
							ratione, quos vitae optio praesentium dignissimos numquam.
						</p>
					</div>
				</div>
			</div>
		</section>
	{/if}
</div>

<style>
	@reference "tailwindcss";
	.section {
		background:
			linear-gradient(
				to bottom right,
				oklch(from var(--color-light-main) l c h / 0.8),
				oklch(from var(--color-dark-main) l c h / 0.8)
			),
			url(/css/natours/img/nat-4.jpg);
		background-size: cover;
	}

	.feature-box {
		@apply flex w-58 flex-col items-center gap-4 rounded bg-white/65 p-6 text-center shadow-xl transition hover:-translate-y-1.5;
	}

	.card-icon {
		@apply [&>*]:size-16 [&>*]:stroke-(--medium-main);
	}
</style>
