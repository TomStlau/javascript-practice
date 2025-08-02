<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import HouseIcon from '@lucide/svelte/icons/house';
	import PlaneIcon from '@lucide/svelte/icons/plane-takeoff';
	import KeyIcon from '@lucide/svelte/icons/key-round';
	import MapIcon from '@lucide/svelte/icons/map';

	type Props = {} & HTMLAttributes<HTMLElement>;

	let { ...props }: Props = $props();
	let iconSize = 18;
</script>

<nav
	{...props}
	class={cn(
		'bg-trillo-grey-dark-1 flex min-w-[200px] shrink-0 basis-[18%] flex-col justify-between [&_*]:shrink-0',
		props.class
	)}
>
	<ul
		class="text-trillo-grey-light-1 flex flex-col [&_a]:absolute [&_a]:inset-0 [&_a]:z-10 [&_p]:uppercase"
	>
		<li class="relative">
			<div class="content">
				<HouseIcon size={iconSize}></HouseIcon>

				<p>hotel</p>
			</div>
			<a class="" href="#"></a>
		</li>
		<li>
			<div class="content">
				<PlaneIcon size={iconSize}></PlaneIcon>

				<p>flight</p>
			</div>
			<a href="#"></a>
		</li>
		<li>
			<div class="content">
				<KeyIcon size={iconSize}></KeyIcon>

				<p>car rental</p>
			</div>
			<a href="#"></a>
		</li>
		<li>
			<div class="content">
				<MapIcon size={iconSize}></MapIcon>

				<p>tours</p>
			</div>
			<a href="#"></a>
		</li>
	</ul>
	<div class="legal">&copy; 2001 by Jonas. All rights useless</div>
</nav>

<style>
	@reference "tailwindcss";

	.legal {
		font-size: 0.7rem;
		text-align: center;
		color: var(--color-trillo-grey-light-4);
		padding: 1.5rem;
	}

	ul li {
		display: flex;
		position: relative;
		padding: 1rem 2rem;

		&:first-child {
			@apply bg-(--color-trillo-primary);
		}

		&:hover::after {
			scale: 100% 100%;
		}

		&::after {
			content: '';
			position: absolute;
			inset: 0;
			scale: 0 100%;
			z-index: 1;
			transition:
				scale 200ms ease-in,
				transform 200ms ease-in 200ms;
			transform-origin: left;
			@apply bg-(--color-trillo-primary);
		}
		& .content {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 1rem;
			z-index: 2;
		}
	}
</style>
