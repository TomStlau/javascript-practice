<script lang="ts">
	let { checked = $bindable(false) } = $props();
	let menuEl: HTMLElement | undefined;
	let menuRect = menuEl?.getBoundingClientRect();
</script>

<div
	bind:this={menuEl}
	data-open={checked ? 'open' : 'close'}
	class={[
		'menu fixed top-0 left-0 isolate z-50 grid h-svh w-[75vw] place-items-center bg-slate-900 transition-all duration-500 lg:w-[35vw]'
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
		will-change: opacity, translate;
		transition-behavior: allow-discrete;
		&[data-open='open'] {
			visibility: visible;
		}
		&[data-open='close'] {
			visibility: hidden;
			translate: -100% 0;
			opacity: 0;
			pointer-events: none;
		}
	}

	.overlay {
		transition: opacity 500ms;
		backdrop-filter: blur(1px);
		backdrop-filter: brightness(60%);
		opacity: 1;
		transition-behavior: allow-discrete;
		&[data-open='close'] {
			visibility: hidden;
			opacity: 0;
		}
	}
</style>
