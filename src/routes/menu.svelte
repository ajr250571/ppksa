<script lang="ts">
	import tema from '../stores/tema';
	import { user, isLoggedIn } from '../stores/config';
	import { signOut, onAuthStateChanged } from 'firebase/auth';
	import { auth } from '../firebase';
	import type { User } from '../interfaces/interfaces';

	export let temaId: string;

	const logout = () => {
		try {
			signOut(auth);
			$isLoggedIn = false;
			$user = {} as User;
		} catch (error) {
			console.error(error);
		}
	};
	onAuthStateChanged(auth, (authUser) => {
		$user = authUser ? authUser : ({} as User);
		$isLoggedIn = !!authUser;
	});

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
		{ link: '/tipoobjetos', text: 'Tipo Objetos' },
		{ link: '/async-await', text: 'Async / Await' },
		{ link: '/eventos', text: 'Eventos' },
		{ link: '/contexto', text: 'Get/Set Context' },
		{ link: '/transiciones', text: 'Transiciones' }
	];

	const cambiarTema = (nuevoTemaId: string) => {
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
			{#if $isLoggedIn}
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
			{/if}

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
						<li on:click={() => cambiarTema(tema.id)}>
							<a href={null}>{tema.id}</a>
						</li>
					{/each}
				</ul>
			</li>
		</ul>
		<div class="dropdown dropdown-end">
			<label for="" tabindex="0" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					{#if $isLoggedIn}
						<img src={$user.photoURL} alt="" />
					{:else}
						<img src={'user.png'} alt="User" />
					{/if}
				</div>
			</label>
			<ul
				tabindex="0"
				class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
			>
				{#if !$isLoggedIn}
					<li><a href="/login">Login</a></li>
				{:else}
					<p class="font-bold text-center text-secondary">{$user.displayName}</p>
					<li><a href="/" on:click={logout}>Logout</a></li>
					<li><a href="/profile">Profile</a></li>
				{/if}
			</ul>
		</div>
	</div>
</div>
