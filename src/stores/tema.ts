import { browser } from '$app/env';
import { writable } from 'svelte/store';

const defaultValue = 'dark';
const initialValue = browser ? window.localStorage.getItem('tema') ?? defaultValue : defaultValue;

const tema = writable<string>(initialValue);

tema.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('tema', value);
	}
});

export { tema as default };