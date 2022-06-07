<script>
	import { setContext } from 'svelte/internal';
	import Contexto2 from './contexto2.svelte';

	setContext('ciudad', 'San Miguel de Tucuman');
</script>

<h1 class="text-3xl font-bold text-accent my-4">Get/Set context</h1>

<Contexto2 />
