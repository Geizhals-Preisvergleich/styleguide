<script>
  import PVBase from "./../components/PVBase.svelte";
  export let availability = "available";

  let dict = {
    available: "verfügbar",
    shortly: "kurzfristig verfügbar",
    any: "nicht verfügbar"
  };
</script>

<style>
  /*! CSS Used from: https://gzhls.at/gsa/_b3c1b87bae/ghpak/galleryview/galleryview.ghp.css */
  .galleryview__availability {
    display: flex;
    align-items: center;
    align-self: center;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: transparent;
    margin-left: 0.25rem;
    outline: 0;
  }
  .galleryview__availability.available {
    background-color: #38ad3e;
  }
  .galleryview__availability.shortly {
    background-color: #ffb61a;
  }
  .galleryview__availability.any {
    background-color: #b3b3b3;
  }
  /*! CSS Used from: https://gzhls.at/gsa/_b3c1b87bae/ghpak/tooltip/tooltip.ghp_linkedJsDefer.css */
  [aria-label][data-tooltip-pos] {
    position: relative;
    cursor: pointer;
  }
  [aria-label][data-tooltip-pos]:after {
    opacity: 0;
    pointer-events: none;
    font-size: 0.75rem;
    background: rgba(0, 0, 0, 0.95);
    border-radius: 0.125rem;
    color: #fdfdfd;
    content: attr(aria-label);
    padding: 0.375rem 0.75rem;
    position: absolute;
    white-space: nowrap;
    z-index: 10;
  }
  [aria-label][data-tooltip-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.95);
    opacity: 0;
    pointer-events: none;
    content: "";
    position: absolute;
    z-index: 10;
  }
  [aria-label][data-tooltip-pos]:hover:after,
  [aria-label][data-tooltip-pos]:hover:before,
  [aria-label][data-tooltip-pos]:not([data-tooltip-nofocus]):focus:after,
  [aria-label][data-tooltip-pos]:not([data-tooltip-nofocus]):focus:before {
    opacity: 1;
    pointer-events: none;
  }
  [aria-label][data-tooltip-pos][data-tooltip-pos="up-left"]:after {
    bottom: 100%;
    left: 0;
    margin-bottom: 10px;
    transform: translate(0);
    transform-origin: top;
  }
  [aria-label][data-tooltip-pos][data-tooltip-pos="up-left"]:before {
    bottom: 100%;
    left: 5px;
    transform: translate(0);
    transform-origin: top;
  }
  [aria-label][data-tooltip-pos][data-tooltip-pos="up-left"]:hover:after,
  [aria-label][data-tooltip-pos][data-tooltip-pos="up-left"]:hover:before {
    transform: translate(0);
  }
</style>

<PVBase>
  <span
    class="galleryview__availability"
    class:available={availability == 'available'}
    class:shortly={availability == 'shortly'}
    class:any={availability == 'any'}
    aria-label="{dict[availability]}"
    data-tooltip-pos="up-left"
    tabindex="0" />
</PVBase>
