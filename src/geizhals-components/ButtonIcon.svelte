<script>
  import Code from './../components/Code.svelte'
  import PVBase from './../components/PVBase.svelte'

  let buttonHtml = `<button class="galleryview__lead-button">
        Zum Angebot
        <img src="styleguide/external_link_white.svg" alt="Externer Link" class="icon" />
      </button>`
</script>

<style>
  /*! CSS Used from: https://gzhls.at/gsa/_43a7e0e602/ghpak/galleryview/galleryview.ghp.css */
  .galleryview__lead-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    padding: 0.5rem;
    margin: 0.5rem 0 0;
    background-color: #059;
    color: #fdfdfd;
    font-size: 0.8rem;
    text-align: center;
    border: 0;
    border-radius: 0.25rem;
    text-decoration: none;
    width: 100%;
    z-index: 1;
    max-height: 32px;
  }
  .galleryview__lead-button:active,
  .galleryview__lead-button:hover {
    background-color: #0071cc;
  }
  .galleryview__lead-button:visited {
    color: #fdfdfd;
  }
  .galleryview__lead-button .icon {
    width: 16px;
    height: 16px;
    margin-left: 0.5rem;
  }
</style>

<PVBase>
  <button class="galleryview__lead-button">
    Zum Angebot
    <img src="styleguide/external_link_white.svg" alt="Externer Link" class="icon" />
  </button>
</PVBase>
<Code language="html">
  {`<a href="#" class="galleryview__lead-button">
  Zum Angebot
  <img src="external_link_white.svg" alt="Externer Link" class="icon" />
</a>`}
</Code>
