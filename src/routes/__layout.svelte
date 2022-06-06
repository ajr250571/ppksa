<script lang="ts">
	import '../app.scss';

	import Menu from './menu.svelte';
	import tema from '../stores/tema';
	import Footer from './footer.svelte';

	let temaId: string = $tema;
	$: $tema = temaId;
</script>

<section class="container mx-auto px-4 bg-base-200 min-h-screen" data-theme={temaId}>
	<Menu bind:temaId />
	<slot />
	<Footer />
</section>
