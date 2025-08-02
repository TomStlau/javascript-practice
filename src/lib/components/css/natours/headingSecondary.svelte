<script>
	let { children, ...props } = $props();
	import { cn } from '$lib/utils';
</script>

<h2
	class={cn(
		'heading-secondary from-light-main to-dark-main inline-block bg-gradient-to-r bg-clip-text text-[clamp(var(--text-2xl),3vw,var(--text-4xl))] font-bold tracking-wider text-transparent uppercase transition hover:-skew-x-12 hover:-skew-y-2 hover:drop-shadow-xl/20',
		props.class
	)}
>
	{@render children()}
</h2>
