import type { User } from 'src/interfaces/interfaces';
import { writable, readable } from 'svelte/store';

export const user = writable({} as User);
export const isLoggedIn = writable(false);

function crearNumero() {
	const { subscribe, update, set } = writable(0);
	return {
		subscribe,
		addNumero: () => update((n) => n + 1),
		resetNumero: () => set(0)
	};
}
export const numero = crearNumero();

export const hora = readable(new Date(), (set) => {
	set(new Date());
	const intervalo = setInterval(() => {
		set(new Date());
	}, 1000);
	return () => {
		clearInterval(intervalo);
	};
});
