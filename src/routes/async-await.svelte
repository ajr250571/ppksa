<script>
	let promesa = getPost();
	async function getPost() {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		if (response.status === 200) {
			const resultado = await response.json();
			return resultado;
		} else {
			throw new Error('Error en el request');
		}
	}
</script>

<h1 class="text-3xl font-bold text-accent my-4">Async / Await</h1>

{#await promesa}
	<p>... Cargando</p>
{:then value}
	{#each value as item}
		<p>{item.title}</p>
	{/each}
{:catch error}
	<p>{error.message}</p>
{/await}
