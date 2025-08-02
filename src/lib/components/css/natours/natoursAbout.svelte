<script lang="ts">
	import { onMount } from 'svelte';
	import HeadingSecondary from './headingSecondary.svelte';

	let imgContainer: HTMLDivElement;
	let imgShown = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver((entries, obs) => {
			if (entries[0].isIntersecting) {
				imgShown = true;
				obs.disconnect();
			}
		});
		if (imgContainer) observer.observe(imgContainer);
	});
</script>

<section
	class="section-about -mt-[25vh] overflow-visible bg-gray-100 py-[25rem] [clip-path:polygon(0_25vh,100%_0,100%_100%,0_100%)]"
>
	<div class="space-y-20 text-center">
		<HeadingSecondary>Exciting tours for adventurous people</HeadingSecondary>
		<div
			class="mx-auto grid max-w-285 justify-items-center gap-8 text-left md:grid-cols-2 [&_h3]:mb-4 [&_h3]:font-bold [&_h3]:uppercase [&_p]:not-last:mb-8"
		>
			<div class=" col mx-auto">
				<h3 class="tertiary-heading">You're going to fall in love with nature</h3>
				<p class="paragraph">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vitae omnis numquam iure.
					Rerum inventore repellat, quis distinctio cupiditate eligendi? Aliquam accusamus nisi iste
					laborum repellat, esse ipsum blanditiis repudiandae.
				</p>
				<h3 class="tertiary-heading">Live adventures like you never have before</h3>
				<p class="paragraph">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum quam repellendus saepe
					doloremque corrupti, porro eius iure veniam ipsam velit voluptatem quisquam perspiciatis
					voluptate.
				</p>
				<a
					href="#"
					class="text-dark-main hover:border-dark-main hover:bg-dark-main inline-block border-b p-1 transition hover:-translate-y-0.5 hover:text-white hover:drop-shadow-lg"
					>Learn more &rarr;</a
				>
			</div>
			<div bind:this={imgContainer} class=" col">
				{#if imgShown}
					<div
						class="composition group [&>img]:hover:border-medium-main mt-8 grid min-w-64 -translate-x-10 justify-items-center [&>img]:col-1 [&>img]:row-1 [&>img]:w-1/3 [&>img]:rounded [&>img]:shadow-lg/50 [&>img]:transition [&>img]:duration-300 [&>img]:ease-in-out [&>img]:group-hover:scale-95 [&>img]:hover:z-20 [&>img]:hover:scale-115 [&>img]:hover:border-10 [&>img]:hover:p-2.5 md:[&>img]:w-[55%]"
					>
						<img
							src="/css/natours/img/nat-1-large.jpg"
							alt=""
							class="composition-photo -translate-x-2/6 -translate-y-1/6"
						/>
						<img
							src="/css/natours/img/nat-2-large.jpg"
							alt=""
							class="composition-photo translate-x-3/6"
						/>
						<img
							src="/css/natours/img/nat-3-large.jpg"
							alt=""
							class="composition-photo translate-y-2/6"
						/>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	@reference "tailwindcss";
	.col {
		width: calc(100% - --spacing(8) / 2);
	}
</style>
