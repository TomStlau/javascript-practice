<script>
	let {
		checked = $bindable(false),
		onclick = () => {
			checked = !checked;
		},

		...props
	} = $props();
</script>

<button
	onclick={() => onclick()}
	aria-label="burger button"
	class={['z-50 h-auto cursor-pointer p-0', props.class]}
>
	<svg
		{...props}
		viewBox="0 0 60 45"
		fill="none"
		role="button"
		tabindex="0"
		stroke-width="4"
		class={[
			,
			'size-8 p-1 text-black transition-colors outline-none',
			checked ? 'open' : '',
			{ 'stroke-red-500': checked }
		]}
		stroke="currentColor"
	>
		<path
			class={['top']}
			d="m 10,8 h 40 c 3.722839,0 7.5,3.126468 7.5,7 c 0,4.873532 -3.777161,8 -7.5,8 h -20 "
		/>
		<path class="center" d="m 10,23 h 40" />
		<path
			class="bottom"
			d="m 50,38 h -40 c 0,0 -7.5,-0.802118 -7.5,-6.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
		/>
	</svg>
</button>

<style>
	:root {
		--transition-duration: 300ms;
	}
	svg,
	.top,
	.bottom,
	.center {
		transition-property: rotate, stroke-dashoffset, stroke-dasharray;
		transition-duration: var(--transition-duration);
		transition-timing-function: ease;
	}
	.top {
		stroke-dasharray: 40 160;
	}
	.center {
		transform-origin: 50%;
	}
	.bottom {
		stroke-dasharray: 40 85;
	}

	svg:is(.open) {
		rotate: -45deg;
		.top,
		.bottom {
			stroke-dashoffset: -64px;
		}
		.center {
			rotate: 90deg;
		}
	}
</style>
