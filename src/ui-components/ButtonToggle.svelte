<script>
  import PVBase from "./../components/PVBase.svelte";

  export let type = "small";
  let opened = false;
</script>

<style>
  /*! CSS Used from: Embedded */
  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    background-color: transparent;
    font-size: inherit;
    font-family: inherit;
    margin: initial;
    padding: initial;
    cursor: pointer;
    color: initial;
  }
  /*! CSS Used from: https://gzhls.at/gsa/_40726661b7/ghpak/variant/variant.ghp.css */
  .variant__header__expand-button {
    display: flex;
    align-items: center;
    margin: 0.5rem 0 0;
    color: #000;
    border: 1px solid #d9d9d9;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    cursor: pointer;
    background: transparent;
  }
  .variant__header__expand-button:hover {
    background: #f2f2f2;
  }
  .variant__header__expand-button:focus {
    outline: 0;
    border-color: #737373;
  }
  .variant__header__expand-button .less {
    display: none;
  }
  .variant__header__expand-button .arrow {
    display: inline-block;
    width: 0.375rem;
    height: 0.375rem;
    border: solid #737373;
    border-width: 0 1px 1px 0;
    padding: 0;
    transform: rotate(45deg);
    margin: 0 0.5rem 0.1rem 0;
    vertical-align: top;
    transition: none;
  }

  /* opened state */
  .variant__header__expand-button.opened .arrow {
    transform: rotate(-135deg);
    margin: 0.35rem 0.5rem 0 0;
  }
  .variant__header__expand-button.opened .less {
    display: inline;
  }
  .variant__header__expand-button.opened .more {
    display: none;
  }

  /*! CSS Used from: https://gzhls.at/gsa/_40726661b7/ghpak/galleryview/galleryview.ghp.css */
  .galleryview__toggle-details-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fdfdfd;
    cursor: pointer;
    height: 34px;
    margin: 1rem 0 0;
    border: 1px solid #d9d9d9;
    border-radius: 1rem;
    color: #000;
    font-size: 0.8rem;
    text-decoration: none;
  }
  .galleryview__toggle-details-button:visited {
    color: #000;
  }
  .galleryview__toggle-details-button:hover {
    background: #f4f6fb;
    border-color: #059;
  }
  .galleryview__toggle-details-button:hover .arrow {
    border-color: #059;
  }
  .galleryview__toggle-details-button .arrow {
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    border: solid #737373;
    border-width: 0 2px 2px 0;
    padding: 0;
    transform: rotate(45deg);
    margin: 0 0.5rem 0.2rem 0;
    vertical-align: top;
    transition: none;
  }
  .galleryview__toggle-details-button .close {
    display: none;
  }
  /*! CSS Used from: https://gzhls.at/gsa/_40726661b7/ghpak/variant/variant.ghp.css */
  .variant a,
  .variant a:visited {
    text-decoration: none;
  }

  .galleryview__toggle-details-button.opened {
    border-color: #059;
    background: #f4f6fb;
  }
  .galleryview__toggle-details-button.opened .arrow {
    border-color: #059;
    transform: rotate(-135deg);
    margin: 0.25rem 0.5rem 0 0;
  }
  .galleryview__toggle-details-button.opened .open {
    display: none;
  }
  .galleryview__toggle-details-button.opened .close {
    display: inline-block;
  }
</style>

<PVBase>
  {#if type == 'small'}
    <button
      class="variant__header__expand-button expanded"
      class:opened
      on:click={() => (opened = !opened)}>
      <span class="arrow" aria-hidden="true" />
      <span class="more">Alle Produkteigenschaften anzeigen</span>
      <span class="less">Beliebteste Produkteigenschaften anzeigen</span>
    </button>
  {:else if type=='large'}
    <a
      href="#"
      class="galleryview__toggle-details-button"
      class:opened
      on:click={() => (opened = !opened)}>
      <span class="arrow" aria-label="hidden" />
      <span class="open">Angebote anzeigen</span>
      <span class="close">Angebote ausblenden</span>
    </a>
  {/if}
</PVBase>
