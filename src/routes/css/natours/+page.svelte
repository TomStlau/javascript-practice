<script>
	import NatoursAbout from '$lib/components/css/natours/natoursAbout.svelte';
	import NatoursBooking from '$lib/components/css/natours/natoursBooking.svelte';
	import NatoursFeatures from '$lib/components/css/natours/natoursFeatures.svelte';
	import NatoursFooter from '$lib/components/css/natours/natoursFooter.svelte';
	import NatoursHeader from '$lib/components/css/natours/natoursHeader.svelte';
	import NatoursNavigation from '$lib/components/css/natours/natoursNavigation.svelte';
	import NatoursStories from '$lib/components/css/natours/natoursStories.svelte';
	import NatoursTours from '$lib/components/css/natours/natoursTours.svelte';
</script>

<NatoursNavigation></NatoursNavigation>
<NatoursHeader></NatoursHeader>
<main>
	<NatoursAbout></NatoursAbout>
	<NatoursFeatures></NatoursFeatures>
	<NatoursTours></NatoursTours>
	<NatoursStories></NatoursStories>
	<NatoursBooking></NatoursBooking>
</main>
<NatoursFooter></NatoursFooter>
