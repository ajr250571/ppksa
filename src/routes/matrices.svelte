<script lang="ts">
	let names: string[] = [];
	names.push('Dylan'); // no error
	names = [...names, 'Armando'];
	names = [...names, 'Javier'];
	console.log(names);

	const nombre: readonly string[] = ['Dylan'];
	//nombre.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
	console.log(nombre);

	const numbers = [1, 2, 3]; // inferred to type number[]
	numbers.push(4); // no error
	//numbers.push('2'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
	let head: number = numbers[0]; // no error
	console.log(head);
</script>

<h1 class="text-3xl font-bold text-accent">Matrices</h1>
