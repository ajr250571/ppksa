<script lang="ts">
	// define our tuple
	let ourTuple: [number, boolean, string];

	// initialize correctly
	ourTuple = [5, false, 'Coding God was here'];

	console.log(ourTuple);

	// define our readonly tuple
	const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
	console.log(ourReadonlyTuple);

	// throws error as it is readonly.
	// ourReadonlyTuple.push('Coding God took a day off');

	//Tuplas con nombre
	// const graph: [x: number, y: number] = [55.2, 41.3];
	const graph: [number, number] = [55.2, 41.3];
	const [x, y] = graph;
	console.log([x, y]);
</script>

<h1 class="text-3xl font-bold text-accent">Matrices tipadas</h1>

<p class="mt-4">
	Una tupla es una matriz tipada con una longitud y tipos predefinidos para cada índice. Las tuplas
	son excelentes porque permiten que cada elemento de la matriz sea un tipo de valor conocido.
</p>
