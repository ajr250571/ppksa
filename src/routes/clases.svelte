<script lang="ts">
	import { Persona } from '../clases/clases';

	let persona = new Persona('Armando Rodriguez', '1971-05-25');
</script>

<h1 class="text-3xl font-bold text-accent">Clases</h1>
<div class="form-control w-full max-w-xs">
	<span class="label-text mt-4">Nombre: </span>
	<input
		type="text"
		placeholder="Nombre Persona"
		class="input input-bordered input-secondary w-full max-w-xs input-sm"
		bind:value={persona.nombre}
	/>

	<span class="label-text mt-4">Fecha Nacimiento: </span>
	<input
		type="date"
		placeholder="Fecha Nacimiento Persona"
		class="input input-bordered input-secondary w-full max-w-xs input-sm"
		bind:value={persona.fechaNac}
	/>
</div>

<p class="text-xl text-primary font-bold mt-4">Edad: {persona.edad} años.</p>
