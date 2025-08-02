<script lang="ts">
	import { cn } from '$lib/utils';
	import '@fontsource/lato/300.css';

	interface Props {
		color1: String;
		color2: String;
		price: Number;
		class?: string;
		[key: string]: unknown;
	}

	let { color1, color2, price, ...props }: Props = $props();
</script>

<div
	class={cn(
		'back absolute inset-0 rotate-y-180  rounded bg-white backface-hidden group-hover:rotate-y-0',
		props.class
	)}
>
	<div
		class="absolute inset-0 grid"
		style={`background-image:linear-gradient(to right bottom,  ${color1}, ${color2} )`}
	>
		<div class="cta m-auto grid gap-28">
			<div class="price-box grid gap-2 text-white">
				<p>Only</p>
				<p class="text-6xl font-light">${price}</p>
			</div>
			<a class="btn btn-white btn-pulsing" href="#">Buy now</a>
		</div>
	</div>
</div>
