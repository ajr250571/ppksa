<script lang="ts">
	// https://www.youtube.com/watch?v=B6quDView8Y&t=2203s
	import { auth } from '../firebase';
	import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
	import { user, isLoggedIn } from '../stores/config';
	import { goto } from '$app/navigation';

	const login = async () => {
		try {
			const provider = new GoogleAuthProvider();
			const res = await signInWithPopup(auth, provider);
			$user = res.user;
			$isLoggedIn = true;
			goto('/profile');
		} catch (error) {
			console.error(error);
		}
	};
</script>

<h1 class="my-4 text-5xl text-accent font-extrabold">Login</h1>

<button class="btn btn-secondary" on:click={login}> Login con Google </button>
