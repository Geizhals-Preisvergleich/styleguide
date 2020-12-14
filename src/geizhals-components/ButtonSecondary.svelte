<script>
  import Code from './../components/Code.svelte'
  import PVBase from './../components/PVBase.svelte'
  export let disabled = false
  export let small = false

  let buttonString = `<button class="button button--outlined${small ? ' button--small' : ''}"${
    disabled ? ' disabled' : ''
  }>Secondary button</button>`
</script>

<style>
  /*! CSS Used from: https://gzhls.at/gsa/_5a3fb46ba7/ghpak/css_inputelements/css_inputelements.ghp.css */
  .button {
    align-items: center;
    appearance: none;
    background: #059;
    border-radius: 0.25rem;
    border: none;
    color: #fdfdfd;
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-size: 0.875rem;
    min-height: 35px;
    justify-content: center;
    line-height: inherit;
    min-width: 96px;
    opacity: 1;
    outline: none;
    overflow: auto;
    padding: 0 1rem;
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
  .button--small {
    min-height: 1.5rem;
    font-size: .75rem;
    padding: 0 .75rem;
  }
</style>

<PVBase>
  <button class="button button--outlined" {disabled} class:button--small={small}>
    Secondary button
    {#if disabled}disabled{/if}
    {#if small}small{/if}
  </button>
</PVBase>
<Code language="html">{buttonString}</Code>
