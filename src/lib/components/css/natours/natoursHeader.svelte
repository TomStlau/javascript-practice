<script>
	import img from '$lib/hero.jpg?enhanced';
</script>

<header
	class="relative -z-50 grid h-[95vh] place-items-center [anchor-name:--header] backface-hidden"
>
	<enhanced:img
		class="img-background absolute top-0 left-0 h-full w-full object-cover opacity-20 [position-anchor:--header]"
		src={img}
	/>

	<div class={['logo-box absolute top-10 left-10 z-10']}>
		<img class="h-9" src="/css/natours/img/logo-white.png" alt="" />
	</div>
	<div class="text-box relative bottom-20 flex flex-col items-center gap-16">
		<h1 class="headerlogo-box flex flex-col items-center gap-3 text-white">
			<span class="animate-from-left text-6xl tracking-[1.9rem] uppercase text-shadow-md/20"
				>outdoors</span
			>
			<span
				class="animate-from-right text-xl font-semibold tracking-[1rem] uppercase text-shadow-md"
				>is where life happens</span
			>
		</h1>
		<a href="#" class="animate-from-bottom btn btn-pulsing btn-white w-fit uppercase text-shadow-xs"
			>discover our tours</a
		>
	</div>
</header>

<style>
	@reference "tailwindcss";
	header {
		background: linear-gradient(
			to bottom right,
			oklch(from var(--color-light-main) l c h),
			oklch(from var(--color-dark-main) l c h)
		);
		/* url(/css/natours/img/hero.jpg); */
		background-size: cover;
		/* clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%); */
		clip-path: shape(from 0 0, hline to 100%, vline to 75%, line to 0% 100%);
		z-index: 10;
	}
</style>
