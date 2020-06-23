<script>
  import PVBase from './../components/PVBase.svelte'

  export let noUnderline = false
  export let grey = false
</script>

<style>
  .noUnderline {
    text-decoration: none;
  }
  .noUnderline:hover {
    text-decoration: underline;
  }
  .grey {
    color: var(--grey-base) !important;
    text-decoration: none;
  }
  .grey:hover {
    color: var(--grey-darker-20) !important;
    text-decoration: underline;
  }
</style>

<PVBase>
  <a href="#" class:noUnderline class:grey>
    <slot />
  </a>
</PVBase>
