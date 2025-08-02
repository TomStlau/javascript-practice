<script lang="ts">
	import './trillo.css';
	import type { Snippet } from 'svelte';

	import '@fontsource-variable/open-sans';
	type Props = { children: Snippet };

	let { children, ...props }: Props = $props();
</script>

<main class="trillo-main">
	{@render children()}
</main>
