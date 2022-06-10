<script>
	let promesa = getPost();
	async function getPost() {
		const res = await fetch('http://localhost:4000/posts');
		// https://jsonplaceholder.typicode.com/posts
		// 'http://localhost:4000/posts'

		if (res.status === 200) {
			const result = await res.json();
			return result;
		} else {
			throw new Error('Error en el request');
		}
	}
</script>

<h1 class="text-3xl font-bold textarea-succes my-4">Async / Await</h1>

{#await promesa}
	<p>... Cargando</p>
{:then value}
	{#each value as item}
		<h1 class="text-2xl font-bold text-secondary mt-2">{item.title}</h1>
		<p>{item.content}</p>
	{/each}
{:catch error}
	<p>{error.message}</p>
{/await}
