<style>
  .pv-base {
    font-size: 11px !important;
    font-family: Verdana, sans-serif;
    display: block;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 3rem;
    border-left: 2px solid var(--gh-blue-base);
  }
  :global(.pv-base *, .pv-base :after, .pv-base :before) {
    box-sizing: border-box;
  }
  :global(.pv-base a, .pv-base a:visited) {
    color: #037;
  }
  :global(.pv-base h1, .pv-base h2, .pv-base input, .pv-base textarea, .pv-base select) {
    color: inherit;
    margin: inherit;
    padding: inherit;
    font-size: inherit;
    font-family: inherit;
    border: none;
    text-transform: none;
    letter-spacing: 0;
  }

  :global(.pv-base h1::after, .pv-base h2::after) {
    display: none;
  }
</style>

<div class="pv-base">
  <slot />
</div>
