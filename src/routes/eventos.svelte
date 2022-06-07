<script>
  // https://www.youtube.com/watch?v=f6WhUbPD69A&list=PLtEoLIi1AQhWzcCE76KQi4OLHqlDu_XUh&index=9
  
	import Intermedio from '../componentes/Intermedio.svelte';

  function handleClick() {
    console.log('handleClick');
  }
</script>

<h1 class="text-3xl font-bold text-accent my-4">Eventos</h1>

<Intermedio on:click={handleClick} />
