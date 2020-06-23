<script>
  import Code from './../components/Code.svelte'
  import PVBase from './../components/PVBase.svelte'
  export let disabled = false

  let buttonString = `<button class="button button--outlined"${
    disabled ? ' disabled' : ''
  }>Secondary button</button>`
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
  .button--outlined {
    background: #fdfdfd;
    color: #404040;
    border: 1px solid #a6a6a6;
  }
  .button--outlined:focus,
  .button--outlined:hover {
    background-color: #f0f2f5;
  }
</style>

<PVBase>
  <button class="button button--outlined" {disabled}>
    Secondary button
    {#if disabled}disabled{/if}
  </button>
</PVBase>
<Code language="html">{buttonString}</Code>
