<script>
  import { getContext } from "svelte/internal";

  let ciudad = getContext('ciudad');
</script>

<p>{ciudad}</p>