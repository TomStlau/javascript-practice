<script>
	import { cn } from '$lib/utils';
	let { color1, color2, url, details, heading, ...props } = $props();
</script>

<div
	class={cn(
		'front absolute inset-0  rounded bg-white backface-hidden group-hover:-rotate-y-180',
		props.class
	)}
>
	<div class="relative flex h-full flex-col justify-between">
		<div class="card-picture relative h-58 w-full">
			<div
				style={`background-image:linear-gradient(to right bottom,  ${color1}, ${color2} ),url(${url})`}
				class={[
					'absolute inset-0 bg-cover bg-blend-color [clip-path:polygon(0_0,100%_0,100%_85%,0_100%)]'
				]}
			></div>
		</div>
		<div class="absolute top-32 right-4 flex flex-col self-end [&>*]:self-end">
			<div
				style={`background-image:linear-gradient(to right bottom, oklch(from ${color1} l c h / 0.85), oklch(from ${color2} l c h / 0.85))`}
				class="card-heading inline-block px-2 py-1 text-2xl text-white uppercase"
			>
				{heading[0]}
			</div>
			<div
				style={`background-image:linear-gradient(to right bottom, oklch(from ${color1} l c h / 0.85), oklch(from ${color2} l c h / 0.85))`}
				class="card-heading -mt-1 inline-block px-2 py-1 text-2xl text-white uppercase"
			>
				{heading[1]}
			</div>
		</div>
		<div class="card-details">
			<div class="mb-6">
				{#each details as detail}
					<div class="mx-auto w-[75%] border-b-gray-200 p-3 not-last:border-b">
						{detail}
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
