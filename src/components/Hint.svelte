<style>
  .hint {
    display: inline-block;
    border-radius: 5px;
    padding: 1rem 1.5rem 1rem 1rem;
    background-color: #f6fbff;
    color: var(--gh-blue-base);
    border: 1px solid currentColor;
    margin: 1rem 0;
    hyphens: auto;
  }

  .hint::before {
    content: "👉";
    display: inline-block;
    font-size: 1.3rem;
    line-height: 1em;
    margin-right: 0.5rem;
    position: relative;
    top: 1px;
  }

  .hint :global(pre) {
    display: inline-block;
    margin: 0;
  }
  :global(.hint code) {
    background-color: transparent;
    color: currentColor;
    padding: 0;
  }
</style>

<div>
  <div class="hint">
    <slot />
  </div>
</div>
