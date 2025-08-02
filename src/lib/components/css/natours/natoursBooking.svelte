<script lang="ts">
	import { onMount } from 'svelte';
	import NatoursForm from './natoursForm.svelte';

	let sectionContainer: HTMLDivElement;
	let imgShown = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver((entries, obs) => {
			if (entries[0].isIntersecting) {
				imgShown = true;
				obs.disconnect();
			}
		});
		if (sectionContainer) observer.observe(sectionContainer);
	});
</script>

<div bind:this={sectionContainer}>
	{#if imgShown}
		<section class="from-light-main to-dark-main flex bg-gradient-to-br py-[10rem]">
			<div class="book mx-auto aspect-[2.2/1] max-w-9/10 rounded bg-cover py-16 drop-shadow-xl">
				<div>
					<NatoursForm></NatoursForm>
				</div>
			</div>
		</section>
	{/if}
</div>

<style>
	.book {
		background-image:
			linear-gradient(105deg, oklch(from white l c h / 0.9) 50%, transparent 50%),
			url('/css/natours/img/nat-10.jpg');
		height: 31.25rem;
	}
</style>
