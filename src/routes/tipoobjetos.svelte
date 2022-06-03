<script lang="ts">
	const car: { type: string; model: string; year: number } = {
		type: 'Toyota',
		model: 'Corolla',
		year: 2009
	};
	console.log(car);

	const cars = {
		type: 'Toyota'
	};
	cars.type = 'Ford'; // no error
	// cars.type = 2; // Error: Type 'number' is not assignable to type 'string'.

	const auto: { type: string; mileage?: number } = {
		// no error
		type: 'Toyota'
	};
	auto.mileage = 2000;
</script>

<h1 class="text-3xl font-bold text-accent">Tipo Objetos</h1>
