<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import Sidemenu from '$lib/components/sidemenu.svelte';
	import SimpleBurger from '$lib/components/simpleBurger.svelte';
	import SuperDebug from '$lib/components/SuperDebug.svelte';

	import '../app.css';

	let { children, data } = $props();
	let checked = $state(false);
	let actualPage = page.url.toString().split('/').at(-1);
	let title = actualPage ? actualPage.at(0)?.toUpperCase() + actualPage.slice(1) : '';

	onNavigate(() => {
		checked = false;
	});
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<SimpleBurger bind:checked class={['fixed top-3 right-3 z-50']}></SimpleBurger>
{@render children()}

<Sidemenu bind:checked></Sidemenu>
