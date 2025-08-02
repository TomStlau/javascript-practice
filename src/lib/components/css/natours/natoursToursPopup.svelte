<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import HeadingSecondary from './headingSecondary.svelte';

	type Props = {} & HTMLAttributes<HTMLElement>;

	let { ...props }: Props = $props();
	let { class: classes } = props;
</script>

<div {...props} class={cn('fixed top-0 left-0 z-50 grid h-screen w-screen bg-black/80', classes)}>
	<div
		class="m-auto flex h-auto w-[80%] overflow-hidden rounded bg-white drop-shadow-2xl max-lg:flex-col lg:aspect-[2/1]"
	>
		<div
			class="flex h-full max-lg:w-full lg:w-1/3 lg:flex-col [&>*]:object-cover lg:[&>*]:h-1/2 max-lg:[&>img]:w-1/2"
		>
			<img src="/css/natours/img/nat-8.jpg" alt="" />
			<img src="/css/natours/img/nat-9.jpg" alt="" />
		</div>
		<div class="right mx-8 flex w-2/3 flex-col place-content-center gap-2 pb-4 lg:gap-3 xl:gap-6">
			<HeadingSecondary>Start booking now</HeadingSecondary>
			<h3 class="text-dark-gray text-md uppercase">
				Important &ndash; Please read these terms before booking
			</h3>
			<p
				class=" text-[clamp(var(--text-xs),1vw,var(--text-md))] text-wrap text-ellipsis lg:columns-2"
			>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolores deserunt error
				nulla officia. Deserunt aut accusantium tenetur nulla est quibusdam et magni dolorem
				quisquam ea, expedita facilis deleniti ipsa? Nostrum minima velit ullam aspernatur, ut ipsum
				repudiandae, odit asperiores natus reiciendis nobis maxime repellendus voluptas error
				voluptatibus debitis sed neque harum maiores? Dignissimos inventore expedita impedit animi
				beatae exercitationem? Laudantium libero qui aliquid tempora inventore ad pariatur, et alias
			</p>
			<a href="#" class="btn self-start bg-green-400">Next step &rarr;</a>
		</div>
	</div>
</div>
