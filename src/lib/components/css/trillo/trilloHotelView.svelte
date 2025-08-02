<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import StarIcon from '@lucide/svelte/icons/star';
	import MappinIcon from '@lucide/svelte/icons/map-pin';

	type Props = {} & HTMLAttributes<HTMLElement>;

	let { ...props }: Props = $props();
</script>

<section class={cn(' grow bg-white', props.class)}>
	<div class="gallery flex w-full">
		<figure>
			<img src="/css/trillo/img/hotel-1.jpg" alt="" />
		</figure>
		<figure>
			<img src="/css/trillo/img/hotel-2.jpg" alt="" />
		</figure>
		<figure>
			<img src="/css/trillo/img/hotel-3.jpg" alt="" />
		</figure>
	</div>
	<div class="overview border-b-trillo-grey-light-2 flex w-full justify-between border-b">
		<div class="flex items-center gap-6 px-4">
			<h1 class="text-xl font-thin tracking-wider uppercase">Hotel Las Palmas</h1>
			<div
				class="[&>*]:fill-trillo-primary [&>*]:stroke-trillo-primary flex [&>*]:size-4 [&>*]:stroke-1"
			>
				<StarIcon />
				<StarIcon />
				<StarIcon />
				<StarIcon />
				<StarIcon />
			</div>
		</div>
		<div class="flex items-center gap-6">
			<div class="flex gap-2">
				<MappinIcon size="16" class="text-trillo-primary "></MappinIcon>
				<button
					class=" text-trillo-primary-dark focus:animate-pulse-scale hover:text-trillo-grey-dark-1 cursor-pointer text-xs font-semibold underline underline-offset-4"
					>Albufeira, Portugal</button
				>
			</div>
			<div
				class="bg-trillo-primary flex flex-col items-center justify-center px-3 py-2 leading-tight text-white"
			>
				<span class="text-xl">8.6</span>
				<span class="text-[0.6rem]">429 votes</span>
			</div>
		</div>
	</div>
	<div
		class="content-container border-b-trillo-grey-light-2 detail bg-trillo-grey-light-1 flex gap-8 border-b p-8 text-sm"
	>
		<div class="flex basis-3/5 flex-col rounded p-8 shadow">
			<div class="flex flex-col gap-4 pb-8 text-sm">
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque deserunt sunt voluptates
					commodi aut ad blanditiis repellendus aperiam beatae! Quis at dolor esse temporibus
					reprehenderit mollitia quam maxime molestias nulla.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, voluptate. Dolorum
					blanditiis quaerat voluptas dignissimos soluta reiciendis? Facere atque est molestiae
					ratione, incidunt.
				</p>
			</div>
			<div class=" flex h-full flex-col justify-between">
				<ul class="border-trillo-grey-light-2 flex flex-wrap space-y-2 border-y py-8 [&>li]:w-1/2">
					<li>Close to the beach</li>
					<li>Breakfast included</li>
					<li>Free airport</li>
					<li>Free wifi in all rooms</li>
					<li>Air conditioning and heating</li>
					<li>Pets allowed</li>
					<li>We speak all languages</li>
					<li>Perfect for families</li>
				</ul>
				<div
					class="recommend text-trillo-grey-dark-3 mt-4 flex items-center justify-between text-sm"
				>
					<p>Lucy and 3 other friends recommend this hotel.</p>
					<div
						class="flex [&>*]:box-content [&>*]:size-10 [&>*]:rounded-full [&>*]:border-3 [&>*]:border-white [&>*]:not-last:-mr-4"
					>
						<img src="/css/trillo/img/user-3.jpg" alt="" />
						<img src="/css/trillo/img/user-4.jpg" alt="" />
						<img src="/css/trillo/img/user-5.jpg" alt="" />
						<img src="/css/trillo/img/user-6.jpg" alt="" />
					</div>
				</div>
			</div>
		</div>
		<div class="flex basis-2/5 flex-col gap-8">
			<div class="flex flex-col gap-6 rounded p-8 shadow">
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex at aut explicabo eaque
					accusantium sunt vitae placeat delectus. Ad natus quia laudantium at quae a excepturi
					deserunt voluptates quasi hic!
				</p>
				<div class="flex w-full items-center gap-6">
					<img class="size-12 rounded-full" src="/css/trillo/img/user-1.jpg" alt="" />
					<div class="flex flex-col gap-1">
						<span class="text-xs font-semibold uppercase"> nick smith </span>
						<span class="text-2xs"> Feb 23rd, 2017 </span>
					</div>
					<div class="text-trillo-primary-dark ml-auto text-xl">7.8</div>
				</div>
			</div>
			<div class="flex flex-col gap-6 rounded p-8 shadow">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta quisquam nobis,
					reprehenderit enim in aliquid ullam ea amet, iusto neque obcaecati.
				</p>
				<div class="flex w-full items-center gap-6">
					<img class="size-12 rounded-full" src="/css/trillo/img/user-2.jpg" alt="" />
					<div class="flex flex-col gap-1">
						<span class="text-xs font-semibold uppercase">mary thomas</span>
						<span class="text-2xs"> Sep 13th, 2016 </span>
					</div>
					<div class="text-trillo-primary-dark ml-auto text-xl">9.3</div>
				</div>
			</div>
			<button
				class="text-trillo-primary-dark group hover:text-trillo-grey-dark-1 focus:animate-pulse-scale mx-auto flex w-18 cursor-pointer justify-between border-b transition-all hover:w-20"
			>
				<span>Show all</span>
				<span>&rarr;</span>
			</button>
		</div>
	</div>
</section>

<style>
	li {
		&::before {
			content: '';
			mask-image: url('/css/trillo/img/chevron-thin-right.svg');
			background-color: var(--color-trillo-primary-dark);
			mask-size: cover;
			mask-repeat: no-repeat;
			background-size: cover;
			display: inline-block;
			width: 0.75rem;
			height: 0.75rem;
			margin-right: 0.3rem;
			stroke: var(--color-trillo-primary-dark);
		}
	}
</style>
