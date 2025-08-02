<script lang="ts">
	import { onMount } from 'svelte';
	import HeadingSecondary from './headingSecondary.svelte';

	import ToursCard from './toursCard.svelte';
	import NatoursToursPopup from './natoursToursPopup.svelte';

	let imgShown = $state(false);
	let sectionContainer: HTMLDivElement;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries, obs) => {
				if (entries[0].isIntersecting) {
					imgShown = true;
					obs.disconnect();
				}
			},
			{ rootMargin: '200px' }
		);
		if (sectionContainer) observer.observe(sectionContainer);
	});
</script>

<div bind:this={sectionContainer}>
	{#if imgShown}
		<section
			id="tours"
			class="-mt-[35vh] -scroll-mt-80 space-y-40 bg-gray-100 pt-[25rem] pb-[15rem] text-center [clip-path:polygon(0_25vh,100%_0,100%_100%,0_100%)]"
		>
			<HeadingSecondary>Most popular tours</HeadingSecondary>
			<div class="mx-auto grid max-w-285 justify-items-center gap-4 landscape:lg:grid-cols-3">
				<div class="col">
					<div>
						<ToursCard
							url="/css/natours/img/nat-5.jpg"
							heading={['the sea', 'explorer']}
							details={[
								'3 day tour',
								'Up to 30 people',
								'2 tour guides',
								'Sleep in cozy hotels',
								'Difficulty: easy'
							]}
							color1="var(--color-secondary-light)"
							color2="var(--color-secondary-dark)"
							price={297}
						></ToursCard>
					</div>
				</div>
				<div class="col">
					<div>
						<ToursCard
							url="/css/natours/img/nat-5.jpg"
							heading={['the forest', 'hiker']}
							details={[
								'7 day tour',
								'Up to 40 people',
								'6 tour guides',
								'Sleep in provided tents',
								'Difficulty: medium'
							]}
							color1="var(--color-light-main)"
							color2="var(--color-dark-main)"
							price={397}
						></ToursCard>
					</div>
				</div>
				<div class="col">
					<div>
						<ToursCard
							url="/css/natours/img/nat-5.jpg"
							heading={['the snow', 'adventurer']}
							details={[
								'5 day tour',
								'Up to 15 people',
								'3 tour guides',
								'Sleep in provided tents',
								'Difficulty: hard'
							]}
							color1="var(--color-tertiary-light)"
							color2="var(--color-tertiary-dark)"
							price={497}
						></ToursCard>
					</div>
				</div>
			</div>
			<div>
				<a class="btn bg-medium-main text-white" href="#tours">Discover all tours</a>
			</div>
		</section>
	{/if}
</div>

<style>
	@reference "tailwindcss";
	.col {
		width: 20rem;
	}
</style>
