<script>
  import { onMount } from 'svelte'

  export let language = ''

  let isCodeVisible = false
  let element
  let codeContent

  onMount(() => {
    codeContent = element.textContent
    setTimeout(() => {
      if (Prism) Prism.highlightAll()
    }, 0)
  })

  const toggleVisibility = () => {
    isCodeVisible = !isCodeVisible
  }
</script>

<style>
  :global(.pv-base + .wrapper) {
    border-left: 2px solid var(--gh-blue-base);
    padding-left: 3rem;
  }

  .toggle-visibility {
    border: none;
    appearance: none;
    background-color: transparent;
    color: var(--grey-darker-5);
  }
  .toggle-visibility span {
    transform: rotate(90deg);
    display: inline-block;
    font-size: 1.1rem;
  }
  .toggle-visibility.open span {
    transform: rotate(-90deg);
  }

  .code-wrapper {
    display: none;
  }

  .code-wrapper.visible {
    display: block;
  }
</style>

<div class="wrapper">
  <button class="toggle-visibility {isCodeVisible ? 'open' : ''}" on:click={toggleVisibility}>
    <span>⧁</span>
    {#if isCodeVisible}Hide{:else}Show{/if}
    Code
  </button>

  <!-- This is for pipeing in the slot data only -->
  <code bind:this={element} style="display:none">
    <slot />
  </code>

  <div class="code-wrapper {isCodeVisible ? 'visible' : ''}">
    <pre>
      <code class="language-{language}">{codeContent}</code>
    </pre>
  </div>
</div>
