<script lang="ts">
	import tema from '../stores/tema';
	export let temaId: string;
	

	let temas = [
		{ id: 'light', name: 'Claro' },
		{ id: 'dark', name: 'Oscuro' },
		{ id: 'cupcake', name: 'Magdalena' },
		{ id: 'bumblebee', name: 'Abejorro' },
		{ id: 'emerald', name: 'Esmeralda' },
		{ id: 'corporate', name: 'Corporativo' },
		{ id: 'retro', name: 'Retro' }
	];

	const menus = [
		{ link: '/clases', text: 'Clases' },
		{ link: '/matrices', text: 'Matrices' },
		{ link: '/tuplas', text: 'Tuplas' },
		{ link: '/tipoobjetos', text: 'Tipo Objetos' }
	];

	const cambiarTema = (nuevoTemaId: string, nuevoTemaName: string) => {
		temaId = nuevoTemaId;
		$tema = temaId;
		
	};
</script>

<div class="navbar bg-base-200">
	<div class="flex-none">
		<button class="btn btn-square btn-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-5 h-5 stroke-current"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/></svg
			>
		</button>
	</div>
	<div class="flex-1">
		<a href="/" class="btn btn-ghost normal-case text-xl">Panpack SA</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal p-0">
			<li tabindex="0">
				<a href={null}>
					Modulos
					<svg
						class="fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
					>
				</a>
				<ul class="p-2 bg-base-100">
					{#each menus as menu}
						<li><a class="hover:bg-base-200" href={menu.link}>{menu.text}</a></li>
					{/each}
				</ul>
			</li>

			<li tabindex="0">
				<a href={null}>
					Tema
					<svg
						class="fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
					>
				</a>
				<ul class="p-2 bg-base-100">
					{#each temas as tema}
						<li on:click={() => cambiarTema(tema.id, tema.name)}>
							<a href={null}>{tema.name}</a>
						</li>
					{/each}
				</ul>
			</li>
		</ul>
		<button class="btn btn-square btn-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-5 h-5 stroke-current"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
				/></svg
			>
		</button>
	</div>
</div>
