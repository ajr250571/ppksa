<script lang='ts'>
	import { user, isLoggedIn } from '../stores/config';
</script>

<h1 class="my-4 text-5xl text-accent font-extrabold">Profile</h1>

{#if $isLoggedIn}
	<p>Loggen In</p>
	<img src={$user.photoURL} alt="">
  <p>{$user.displayName}</p>
  <p>{$user.email}</p>
{/if}
