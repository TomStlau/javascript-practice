<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import imgUrl from '$lib/logo-green-2x.png?enhanced';

	interface Props extends HTMLAttributes<HTMLElement> {}
	let { ...props }: Props = $props();
</script>

<footer {...props} class={cn(' py-25 ', props.class)}>
	<div class="logo-box mb-20 flex justify-center">
		<enhanced:img class="h-auto w-[10rem]" src={imgUrl}></enhanced:img>
	</div>
	<div
		class="flex w-full [&>*]:border-t [&>*]:pt-5 [&>div]:mx-auto [&>div]:w-[calc((100%-28rem)/2)] [&>div]:text-center"
	>
		<div class="h-full">
			<div class="footer-navigation h-full">
				<ul
					class=" flex h-full items-center justify-center gap-4 [&>*]:uppercase [&>*]:hover:shadow-lg"
				>
					<li>Company</li>
					<li>Contact Us</li>
					<li>Careers</li>
					<li>Privacy</li>
					<li>Terms</li>
				</ul>
			</div>
		</div>
		<div>
			<p class="copyright text-justify">
				Built by someone for a reason Copyright &copy; Lorem ipsum dolor sit amet consectetur,
				adipisicing elit. Ea vel dolore a ipsam itaque, architecto quo, provident tempore qui,
				cupiditate explicabo ut esse in. Ex eveniet in odit ut aperiam.
			</p>
		</div>
	</div>
</footer>

<style>
	footer {
		background-color: oklch(from black calc(l + 0.22) c h);
	}
	li {
		color: white;
		cursor: pointer;
		transition: all 0.2s;
		&:hover {
			color: var(--medium-main);
			rotate: 5deg;
			scale: 1.2;
		}
	}
</style>
