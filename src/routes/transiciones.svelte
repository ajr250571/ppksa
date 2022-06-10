<script>
	// https://www.youtube.com/watch?v=AjxFKYI7qrU&list=PLtEoLIi1AQhWzcCE76KQi4OLHqlDu_XUh&index=20

	import { slide } from 'svelte/transition';

	let checked = true;
</script>

<h1 class="my-4 text-5xl text-accent font-extrabold">Transiciones</h1>

<label>
	<input type="checkbox" bind:checked />
	Visible
</label>

{#if checked}
	<h1
		transition:slide={{ duration: 500 }}
		class="text-6xl font-semibold text-green-800 my-4 text-center"
	>
		Transition con Svelte
	</h1>
{/if}
