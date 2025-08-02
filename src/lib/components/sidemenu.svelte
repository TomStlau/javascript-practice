<script lang="ts">
	let { checked = $bindable(false) } = $props();
	let menuEl: HTMLElement | undefined;
</script>

<div
	bind:this={menuEl}
	data-open={checked ? 'open' : 'close'}
	class={[
		'menu fixed top-0 left-0 isolate z-50 flex h-svh w-[75vw] items-center justify-center bg-slate-900  lg:w-[35vw]'
	]}
>
	<nav class="relative z-20">
		<ul class="flex flex-col gap-4 text-2xl text-amber-100 [&>li]:hover:text-amber-200">
			<li><a href="/">Home</a></li>
			<li><a href="/css">CSS</a></li>
			<li><a href="/javascript">Javascript</a></li>
		</ul>
	</nav>
</div>
<button
	type="button"
	data-open={checked ? 'open' : 'close'}
	class="overlay absolute inset-0 z-10"
	aria-label="Close menu overlay"
	onclick={() => (checked = false)}
	tabindex="0"
></button>

<style>
	.menu {
		will-change: opacity, transform;
		transition-behavior: allow-discrete;
		transform: translateZ(0);
		transition:
			transform 500ms,
			opacity 500ms;

		&[data-open='open'] {
			transform: translateX(0);
		}
		&[data-open='close'] {
			transform: translateX(-100%);
			opacity: 0;
			pointer-events: none;
		}
	}

	.overlay {
		will-change: opacity;
		transition: opacity 500ms;
		visibility: visible;
		background-color: rgba(0, 0, 0, 0.4);
		opacity: 1;
		transition-behavior: allow-discrete;
		&[data-open='close'] {
			visibility: hidden;
			opacity: 0;
		}
	}
</style>
