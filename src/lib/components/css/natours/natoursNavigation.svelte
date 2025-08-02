<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {}
	let { ...props }: Props = $props();
</script>

<div class="navigation">
	<input type="checkbox" id="navi-toggle" class="peer hidden" />
	<label
		for="navi-toggle"
		class="navi-button fixed top-12 left-12 z-22 grid size-15 place-items-center rounded-full bg-white drop-shadow-sm/20"
	>
		<span class="nav-icon"></span>
	</label>
	<div
		class={[
			'from-light-main to-dark-main bg-radial',
			'fixed top-12 left-12 z-20  peer-checked:top-0 peer-checked:left-0',
			'size-15 peer-checked:scale-8000',
			' rounded-full  transition duration-500'
		]}
	></div>
	<nav
		class={[
			'fixed top-1/2 left-1/2 z-20 peer-checked:-translate-x-1/2 peer-checked:-translate-y-1/2',
			'-translate-x-[40vw] -translate-y-[15vw] transition duration-300',
			'not-peer-checked:invisible not-peer-checked:opacity-0 peer-checked:visible peer-checked:opacity-100'
		]}
	>
		<ul class="flex flex-col gap-6 text-center">
			<li><a href="#"><span class="mr-3">01</span> About Natours</a></li>
			<li><a href="#"><span class="mr-3">02</span> Your benefits</a></li>
			<li><a href="#"><span class="mr-3">03</span> Popular tours</a></li>
			<li><a href="#"><span class="mr-3">04</span> Stories</a></li>
			<li><a href="#"><span class="mr-3">05</span> Book now</a></li>
		</ul>
	</nav>
</div>

<style>
	@reference "tailwindcss";

	a {
		font-size: clamp(1.5rem, 5vw, 2rem);
		padding: 0.6rem 1.2rem;
		background-image: linear-gradient(120deg, transparent 0%, transparent 50%, white 50%);
		font-weight: 300;
		background-size: 230%;
		color: white;
		text-transform: uppercase;
		transition-duration: 400ms;
		transition: background-position color;
		border-radius: 5px;
		&:hover {
			transform: translateX(1rem);
			color: var(--color-dark-main);
			background-position: 100%;
		}
	}
	li {
		transition: translate 400ms;
		&:has(a:hover) {
			translate: 0.5rem 0;
		}
	}

	.nav-icon {
		width: 1.8rem;
		height: 2px;
		position: relative;
		background-color: black;
		display: inline-block;

		&::after,
		&::before {
			position: absolute;
			width: 1.8rem;
			height: 2px;
			display: inline-block;
			z-index: 999;
			background-color: black;
		}

		&::after,
		&::before {
			content: '';
			transition:
				translate 200ms,
				rotate 200ms;
		}

		&::before {
			bottom: 0.5rem;
		}

		&::after {
			top: 0.5rem;
		}

		&:hover::after {
			translate: -5px 0;
		}
	}

	label {
		cursor: pointer;

		&:hover .nav-icon::before {
			translate: 0 -2px;
		}
		&:hover .nav-icon::after {
			translate: 0 2px;
		}
	}

	.peer:checked + label span {
		background-color: transparent;
		&::before {
			rotate: 135deg;
			translate: 0 8px;
			background-color: red;
		}
		&::after {
			rotate: 45deg;
			translate: 0 -8px;
			background-color: red;
		}
	}
</style>
