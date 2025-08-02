<script>
	import TrilloHeader from '$lib/components/css/trillo/trilloHeader.svelte';
	import TrilloHotelView from '$lib/components/css/trillo/trilloHotelView.svelte';
	import TrilloSidebar from '$lib/components/css/trillo/trilloSidebar.svelte';
</script>

<div
	class="bg-trillo-grey-light-2 drop-shadow-trillo-dark z-10 container mx-auto my-20 min-h-[500px] max-w-[75rem]"
>
	<TrilloHeader></TrilloHeader>
	<div class="content flex">
		<TrilloSidebar></TrilloSidebar>
		<TrilloHotelView></TrilloHotelView>
	</div>
</div>

<style>
</style>
