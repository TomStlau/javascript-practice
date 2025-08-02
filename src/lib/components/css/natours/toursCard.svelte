<script lang="ts">
	import { cn } from '$lib/utils';
	import ToursCardBack from './toursCardBack.svelte';
	import ToursCardFront from './toursCardFront.svelte';

	interface Props {
		url: string;
		heading: string[];
		details: string[];
		color1: String;
		color2: String;
		price: Number;
		class?: string;
		[key: string]: unknown;
	}

	let { children, url, heading, details, color1, color2, price }: Props = $props();
</script>

<div
	class={cn(
		'tours-card group h-130 perspective-distant [&>*]:drop-shadow-lg/25 [&>*]:transition-transform [&>*]:duration-700'
	)}
>
	<ToursCardFront {url} {heading} {details} {color1} {color2}></ToursCardFront>

	<ToursCardBack {color1} {color2} {price}></ToursCardBack>
</div>
