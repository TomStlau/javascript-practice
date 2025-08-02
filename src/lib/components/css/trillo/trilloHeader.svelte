<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import headerImg from '$lib/img/trillo/logo.png?enhanced';
	import SearchIcon from '@lucide/svelte/icons/search';
	import BookmarkIcon from '@lucide/svelte/icons/bookmark';
	import ChatIcon from '@lucide/svelte/icons/messages-square';
	import UserImg from '$lib/img/trillo/user.jpg?enhanced';
	type Props = {} & HTMLAttributes<HTMLElement>;

	let { ...props }: Props = $props();
</script>

<header
	{...props}
	class={cn(
		'border-b-trillo-grey-light-2 flex h-17.5 items-center justify-between border-b bg-white pl-4',
		props.class
	)}
>
	<enhanced:img class="h-8 w-auto" src={headerImg}></enhanced:img>
	<form action="#" class="flex w-2/5 justify-center">
		<input
			type="text"
			class="placeholder:text-trillo-grey-light-4 bg-trillo-grey-light-2 transition-width focus:bg-trillo-grey-light-3 w-9/10 rounded-full px-4 py-1.5 duration-200 placeholder:font-thin focus:w-full"
			placeholder="Search hotels..."
		/>
		<button
			class="hover:bg-trillo-grey-dark-3/40 -ml-8 rounded-tr-full rounded-br-full px-2 transition"
		>
			<SearchIcon class="size-4"></SearchIcon>
		</button>
	</form>
	<nav
		class="user-nav [&>*]:hover:bg-trillo-grey-light-2 flex self-stretch [&>*]:flex [&>*]:cursor-pointer [&>*]:items-center [&>*]:px-5 [&>*]:py-0"
	>
		<div>
			<BookmarkIcon
				class="fill-trillo-grey-dark-2 stroke-trillo-grey-dark-2 size-5.5 [anchor-name:--bookIcon]"
			></BookmarkIcon>
			<span
				class="bg-trillo-primary text-2xs absolute bottom-[calc(anchor(top)-12px)] left-[calc(anchor(right)-12px)] flex size-4 justify-center rounded-full text-white [position-anchor:--bookIcon]"
				>8</span
			>
		</div>
		<div>
			<ChatIcon
				class="fill-trillo-grey-dark-2 stroke-trillo-grey-dark-2 size-5.5 [anchor-name:--chatIcon]"
			></ChatIcon>
			<span
				class="bg-trillo-primary text-2xs absolute bottom-[calc(anchor(top)-12px)] left-[calc(anchor(right)-12px)] flex size-4 items-center justify-center rounded-full text-white [position-anchor:--chatIcon]"
				>17</span
			>
		</div>
		<div>
			<enhanced:img class="size-9.5 rounded-full" src={UserImg} alt="" />
		</div>
	</nav>
</header>

<style>
</style>
