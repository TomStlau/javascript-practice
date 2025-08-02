<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	interface Props extends HTMLAttributes<HTMLElement> {
		imgUrl: string;
		imgCaption: string;
		title: string;
		text: string;
	}

	let { imgUrl, imgCaption, title, text, ...props }: Props = $props();
</script>

<article
	{...props}
	class={cn(
		'relative mx-auto h-60 w-[75%] -skew-x-(--skew-testimonial) items-center rounded bg-white/70 px-12 drop-shadow-2xl [--skew-testimonial:12deg]',
		props.class
	)}
>
	<div class="absolute top-1/2 -translate-y-1/2 skew-x-(--skew-testimonial)">
		<figure class="group relative grid w-fit pr-6">
			<div class="aspect-square h-[5lh] rounded-full [clip-path:circle(50%)]">
				<img
					src={imgUrl}
					alt=""
					class="h-full scale-140 transition group-hover:scale-120 group-hover:blur-xs group-hover:brightness-80"
				/>
			</div>
			<figcaption
				class="absolute top-1/2 left-1/2 -ml-2.5 -translate-x-1/2 translate-y-2 cursor-default text-center text-white uppercase opacity-0 transition duration-600 select-none backface-hidden group-hover:-translate-y-1/2 group-hover:opacity-100"
			>
				{imgCaption}
			</figcaption>
		</figure>
		<div class="text inline leading-6">
			<h3 class="text-dark-gray mb-3 font-bold uppercase">
				{title}
			</h3>
			<p class="w-fit px-12">
				{text}
			</p>
		</div>
	</div>
</article>

<style>
	figure {
		shape-outside: circle(50% at 50% 50%);
		float: left;
	}
</style>
