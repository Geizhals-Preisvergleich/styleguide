<script>
  import Code from './../components/Code.svelte'
  import PVBase from './../components/PVBase.svelte'
  export let disabled = false
</script>

<style>
  /*! CSS Used from: https://gzhls.at/gsa/_5a3fb46ba7/ghpak/css_inputelements/css_inputelements.ghp.css */
  .button {
    align-items: center;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #059;
    border-radius: 0.25rem;
    border: none;
    color: #fdfdfd;
    cursor: pointer;
    display: inline-flex;
    font-size: 0.8rem;
    height: 35px;
    justify-content: center;
    line-height: inherit;
    min-width: 96px;
    opacity: 1;
    outline: none;
    overflow: auto;
    padding: 0 1rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin: 0.5rem 0;
  }
  .button:focus,
  .button:hover {
    background-color: #0071cc;
  }
  .button:disabled {
    opacity: 0.7;
    pointer-events: none;
  }
</style>

<PVBase>
  <button class="button" {disabled}>
    Primary button
    {#if disabled}disabled{/if}
  </button>
</PVBase>
<Code language="html">
  {`<button class="button"${disabled ? ' disabled' : ''}>Primary button</button>`}
</Code>
