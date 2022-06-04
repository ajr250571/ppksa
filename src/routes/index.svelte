<script lang="ts">
	import { numero, hora } from '../stores/config';

	/*	
	const incNumero = () => {
		$numero += 1;
	};
	*/

</script>

<svelte:head>
	<title>Inicio</title>
</svelte:head>

<div class="row pt-12">
	<a
		href="/"
		class="group block max-w-xs mx-auto rounded-lg p-6 bg-primary ring-1 ring-slate-900/5 shadow-lg space-y-3"
	>
		<div class="flex items-center space-x-3">
			<img class="w-16 h-16 rounded-full border-2 border-black" src="panda.png" alt="" />
			<h3 class="text-slate-900 group-hover:text-white text-sm font-bold px-4">App Svelte</h3>
		</div>
		<p class="text-slate-900 group-hover:text-white text-sm font-semibold">
			Aplicacion SvelteKit + Tailwind + DaisyUi
		</p>
	</a>
</div>
<blockquote class="text-2xl font-semibold italic text-center text-slate-900 mt-12">
	El mejor frontend es
	<span
		class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block"
	>
		<span class="relative text-white">Sveltekit</span>
	</span>
	todo el tiempo pienso en el.
</blockquote>

<div class="row mt-12 text-center">
	<button class="btn">Standar</button>
	<button class="btn btn-primary">Primary</button>
	<button class="btn btn-secondary">Secondary</button>
	<button class="btn btn-accent">Accent</button>
	<button class="btn btn-ghost">Shost</button>
	<button class="btn btn-link">Link</button>
	<button class="btn btn-success">Success</button>
	<button class="btn btn-warning">Warning</button>
	<button on:click={numero.resetNumero} class="btn btn-error">Reset</button>
	<button on:click={numero.addNumero} class="btn btn-info">Add</button>
</div>
<p class="row mt-12 text-center text-emerald-700 text-2xl font-bold">{$numero}</p>
<p class="row mt-12 text-center">{$hora}</p>
