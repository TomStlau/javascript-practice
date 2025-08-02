<script lang="ts">
	import { onMount } from 'svelte';
	import HeadingSecondary from './headingSecondary.svelte';
	import Testimonial from './testimonial.svelte';
	let showVideo = $state(false);
	let sectionContainer: HTMLDivElement;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries, obs) => {
				if (entries[0].isIntersecting) {
					showVideo = true;
					obs.disconnect();
				}
			},
			{ rootMargin: '200px' }
		);
		if (sectionContainer) observer.observe(sectionContainer);
	});
</script>

<div bind:this={sectionContainer}>
	{#if showVideo}
		<section class="-mt-[35vh] h-[90rem] bg-gray-100/80">
			<div class="video">
				<video autoplay loop muted class="h-full object-cover">
					<source src="/css/natours/img/video.mp4" type="video/mp4" />
					<source src="/css/natours/img/video.webm" type="video/webm" />

					<track kind="captions" src="" label="English captions" />
				</video>
			</div>
			<div class="content flex flex-col items-center gap-20 space-y-20 self-center">
				<HeadingSecondary>We make people genuinely happy</HeadingSecondary>
				<div class="testimonials grid w-full gap-20">
					<Testimonial
						imgUrl="/css/natours/img/nat-8.jpg"
						imgCaption="Mary Smith"
						title="i had the best week ever with my family"
						text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut asperiores amet quae
				sapiente! Dicta provident obcaecati dolores quas, iusto odio assumenda quod ipsa! Magni
				illo aperiam ab vel velit sit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Laborum labore laboriosam expedita minima inventore quis similique porro."
					></Testimonial>

					<Testimonial
						imgUrl="/css/natours/img/nat-9.jpg"
						imgCaption="Jack wilson"
						title="wow! my life is completely different now"
						text="Pariatur voluptatibus voluptas corporis magnam voluptate sunt similique vitae quis eius repudiandae. Quos, asperiores. Ea, quos. Architecto quae sunt voluptatum eius magni. Lorem ipsum dolor sit amet consectetur, adipisicing elit."
					></Testimonial>
					<a
						href="#"
						class="text-dark-main hover:border-dark-main hover:bg-dark-main inline-block w-fit justify-self-center border-b p-1 transition hover:-translate-y-0.5 hover:text-white hover:drop-shadow-lg"
						>Read all stories &rarr;</a
					>
				</div>
			</div>
		</section>
	{/if}
</div>

<style>
	section {
		display: grid;
		grid-template-areas: stack;
	}
	.video {
		z-index: -99;
		grid-area: stack;
	}
	.content {
		grid-area: stack;
	}
	/* section {
		background-image:
			linear-gradient(to bottom, oklch(from white l c h / 0.7), oklch(from white l c h / 0.7)),
			url('/css/natours/img/nat-9.jpg');
	} */
</style>
