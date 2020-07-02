<script>
  import PVBase from './../components/PVBase.svelte'
  import Code from './../components/Code.svelte'
  import DotsMenu from './DotsMenu.svelte'
  let opened = false

  const toggleOpen = () => {
    opened = !opened
  }
</script>

<style>
  /*! CSS Used from: Embedded */
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  a,
  a:visited {
    color: #037;
  }
  .visually-hidden {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;
  }
  img {
    border: 0;
  }
  ul {
    display: block;
  }
  ul {
    list-style-type: disc;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    -webkit-padding-start: 40px;
  }
  li {
    margin: 2px 0 0;
  }
  /*! CSS Used from: https://gzhls.at/gsa/_4961d3ab2e/ghpak/css_inputelements/css_inputelements.ghp.css */
  a.button,
  a.button:hover,
  a.button:visited {
    color: #fdfdfd;
    text-decoration: none;
  }
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
    font-size: 0.875rem;
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
  .button--full {
    width: 100%;
  }

  /*! CSS Used from: https://gzhls.at/gsa/_4961d3ab2e/ghpak/listview/listview.ghp.css */
  .listview__item {
    position: relative;
    border: 1px solid #d9d9d9;
    width: 100%;
    margin: -1px 0 0;
  }
  .listview__item.opened-details:not(.listview__item--offers) .listview__content {
    box-shadow: 0 1rem 0.5rem -1rem rgba(0, 0, 0, 0.25);
  }
  .listview__item.opened-details:not(.listview__item--offers) .listview__details {
    display: flex;
  }
  .listview__item.opened-details:not(.listview__item--offers) .listview__toggle-details-button {
    border-color: #059;
  }
  .listview__item.opened-details:not(.listview__item--offers)
    .listview__toggle-details-button
    .arrow {
    border-color: #059;
    transform: rotate(-135deg);
    margin: 9px 4px 4px;
  }
  .listview__content {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    box-shadow: none;
    min-height: 64px;
  }
  .listview__image {
    width: auto;
    height: auto;
    max-height: 50px;
    max-width: 100%;
    mix-blend-mode: multiply;
  }
  .listview__image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem 0 0;
    height: 100%;
    flex: 0 0 70px;
    max-height: 50px;
  }
  .listview__image-link {
    display: flex;
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .listview__content-left {
    display: flex;
    flex-direction: column;
    flex: 1 1 60%;
    margin-right: 1.5rem;
  }
  .listview__name {
    font-size: 0.9rem;
    font-weight: 700;
    margin: 0;
  }
  @media screen and (max-width: 1130px) {
    .listview__name {
      max-width: 360px;
    }
  }
  .listview__name-link {
    text-decoration: none;
  }
  .listview__name-link:hover {
    text-decoration: underline;
  }
  .listview__name-wrapper,
  .listview__ppu-offercount-wrapper,
  .listview__rating-mpn-wrapper {
    display: flex;
    align-items: center;
  }
  .listview__rating-mpn-wrapper {
    margin-top: 0.25rem;
  }
  a.listview__rating {
    display: inline-flex;
    text-decoration: none;
    color: #737373;
    margin-right: 1rem;
  }
  a.listview__rating:hover {
    color: #404040;
  }
  .listview__rating-stars-wrapper {
    display: flex;
    align-items: center;
    line-height: 1;
    margin: 0;
  }
  .listview__rating-stars-wrapper .stars-value {
    display: inline-block;
    margin-left: 0.25rem;
  }
  .listview__content-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: auto;
    flex: 1 1 40%;
  }
  .listview__toggle-details-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background-color: #fdfdfd;
    cursor: pointer;
    margin-right: 0.5rem;
    min-width: 34px;
  }
  .listview__toggle-details-button:hover .arrow {
    border-color: #059;
  }
  .listview__toggle-details-button .arrow {
    display: inline-block;
    width: 10px;
    height: 10px;
    border: solid #737373;
    border-width: 0 1px 1px 0;
    padding: 0;
    transform: rotate(45deg);
    margin: 0.25rem 0.25rem 0.5rem;
    vertical-align: top;
    transition: none;
  }
  .listview__offer {
    position: relative;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    flex: 0 0 170px;
    margin: 0 1rem 0 0;
  }
  .listview__offercount {
    display: flex;
    align-items: center;
  }
  .listview__offercount {
    justify-content: flex-end;
    flex-shrink: 0;
  }
  a.listview__offercount-link {
    text-decoration: none;
    color: #737373;
  }
  a.listview__offercount-link:hover {
    color: #404040;
  }
  .listview__price {
    display: flex;
    align-items: flex-end;
    flex-shrink: 0;
    color: #737373;
    line-height: 1.1;
    font-size: 0.8rem;
    margin: 0 0 0.25rem;
  }
  .listview__price-link {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 1rem;
    text-decoration: none;
    margin: 0 0 -1px 0.25rem;
  }
  .listview__price-link:hover .price {
    text-decoration: underline;
  }
  .listview__details {
    display: none;
    padding: 1rem 0.5rem 1rem 0.75rem;
    background-color: #f7f7f7;
    line-height: 1.4;
  }
  .listview__details__specs-grid {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
    -webkit-column-gap: 0.5rem;
    -moz-column-gap: 0.5rem;
    column-gap: 0.5rem;
    width: 100%;
  }
  .listview__details__specs-grid__item {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 160px calc(100% - 160px);
    grid-template-columns: 160px calc(100% - 160px);
    -ms-grid-rows: 1fr;
    grid-template-rows: 1fr;
    -webkit-column-break-inside: avoid;
    -moz-column-break-inside: avoid;
    break-inside: avoid;
  }
  .listview__details__specs-grid__item > :first-child {
    -ms-grid-row: 1;
    -ms-grid-column: 1;
  }
  .listview__details__specs-grid__item > :nth-child(2) {
    -ms-grid-row: 1;
    -ms-grid-column: 2;
  }
  .listview__details__specs-grid__item > span {
    display: inline-block;
    padding: 0.25rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .listview__details__specs-grid__item > span:first-child {
    font-weight: 700;
    -ms-grid-column: 1;
    grid-column: 1;
    -ms-grid-row: 1;
    grid-row: 1;
  }
  .listview__details__specs-grid__item > span:last-child {
    -ms-grid-column: 2;
    grid-column: 2;
    -ms-grid-row: 1;
    grid-row: 1;
  }
  .listview__details__specs-grid__item:nth-child(odd) {
    background: #fdfdfd;
  }
  .listview__details__specs-grid__item:last-child {
    background: transparent;
  }
  .listview__details__specs-grid__item .button {
    margin: 0.5rem 0 0;
  }
  .listview__details__compare {
    display: flex;
    align-items: center;
    margin: 0 1rem 0 1px;
  }
  .listview__details__compare-link__text-add,
  .listview__details__compare-link__text-remove {
    display: none;
  }
  .listview__availability {
    position: relative;
    right: auto;
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
  .listview__availability.available {
    background-color: var(--green-lighter-10);
  }
  /*! CSS Used from: https://gzhls.at/gsa/_4961d3ab2e/ghpak/productcompare_new/productcompare_new.ghp_linkedJsDefer.css */
  .compare-toggle {
    cursor: pointer;
  }
  .compare-toggle.notInList svg path {
    fill: #059;
  }
  /*! CSS Used from: https://gzhls.at/gsa/_4961d3ab2e/ghpak/css_stars/css_stars.ghp_linkedJsDefer.css */
  .gh_stars {
    background: url(//gzhls.at/b/svgs/stars_flat.svg) repeat-x;
    background-size: 13px 29px;
    text-align: left;
    width: 65px;
    background-position: 0 -16px;
  }
  .gh_stars,
  .gh_stars1 {
    display: inline-block;
    height: 13px;
    vertical-align: top;
  }
  .gh_stars1 {
    background: url(//gzhls.at/b/svgs/stars_flat.svg) repeat-x;
    background-position: 0 -1px;
    background-size: 13px 29px;
  }
  /*! CSS Used from: https://gzhls.at/gsa/_4961d3ab2e/ghpak/tooltip/tooltip.ghp_linkedJsDefer.css */
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
    content: '';
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
  [aria-label][data-tooltip-pos][data-tooltip-pos='down-right']:after {
    right: 0;
    margin-top: 10px;
    top: 100%;
    transform: translateY(0);
  }
  [aria-label][data-tooltip-pos][data-tooltip-pos='down-right']:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: rgba(0, 0, 0, 0.95);
    right: 5px;
    top: 100%;
    transform: translateY(0);
  }
  [aria-label][data-tooltip-pos][data-tooltip-pos='down-right']:hover:after,
  [aria-label][data-tooltip-pos][data-tooltip-pos='down-right']:hover:before {
    transform: translate(0);
  }
</style>

<PVBase>
  <div class="listview__item" data-index="0" class:opened-details={opened}>
    <div class="listview__content">
      <a href="#" class="listview__toggle-details-button " on:click={toggleOpen}>
        <span class="visually-hidden">Details ein-/ausklappen</span>
        <span class="arrow" aria-label="hidden" />
      </a>
      <div class="listview__image-wrapper">
        <a
          href="#"
          class="listview__image-link"
          onclick="ga('send', 'event', 'SERP.Result', 'Click', 'Product image')">
          <img
            src="https://gzhls.at/i/54/60/2135460-s0.jpg"
            data-src="https://gzhls.at/i/54/60/2135460-s0.jpg"
            alt="Nintendo Switch schwarz/blau/rot (2019)"
            class="listview__image " />
        </a>
      </div>
      <div class="listview__content-left">
        <div class="listview__name-wrapper">
          <h3 class="listview__name">
            <a href="#" class="listview__name-link">Nintendo Switch schwarz/blau/rot (2019)</a>
          </h3>
        </div>
        <div class="listview__rating-mpn-wrapper">
          <a rel="noopener" href="#" class="listview__rating" target="_blank">
            <div class="listview__rating-stars-wrapper">
              <span class="gh_stars" title="4.9 von 5">
                <span class="gh_stars1" style="width:97%" />
              </span>
              <span class="stars-value">4.9</span>
            </div>
            <span class="listview__rating-text">&nbsp;/&nbsp;18 Bewertungen</span>
          </a>
        </div>
      </div>
      <div class="listview__content-right ">
        <div class="listview__offer ">
          <div class="listview__price">
            ab
            <a rel="noopener" href="##offerlist" class="listview__price-link ">
              <span class="price">€ 319,00</span>
            </a>
            <span
              class="listview__availability available"
              aria-label="verfügbar"
              data-tooltip-pos="down-right"
              tabindex="0" />
          </div>
          <div class="listview__ppu-offercount-wrapper">
            <div class="listview__offercount">
              <a href="##offerlist" class="listview__offercount-link">7 Angebote</a>
            </div>
          </div>
        </div>
        <div class="listview__options-wrapper">
          <DotsMenu enableStyles={false} />
        </div>
      </div>
    </div>
    <div class="listview__details">

      <div class="listview__details__compare">
        <a
          href="#"
          class="listview__details__compare-link compare-toggle notInList"
          data-name="Nintendo Switch schwarz/blau/rot (2019)"
          data-href="#"
          data-id="2135460"
          data-img="https://gzhls.at/i/54/60/2135460-s0.jpg"
          onclick="_gh.catPageComplist.addRemove(this, 'Detail');">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            class="listview__details__compare-link__image">
            <path
              d="m9.01 14h-7.01v2h7.01v3l3.99-4-3.99-4zm5.98-1v-3h7.01v-2h-7.01v-3l-3.99 4z"
              fill="#059" />
          </svg>
          <span class="listview__details__compare-link__text-add">
            Zur Vergleichsliste hinzufügen
          </span>
          <span class="listview__details__compare-link__text-remove">
            Von Vergleichsliste entfernen
          </span>
        </a>
      </div>
      <div class="listview__details__specs-grid" onclick="this.classList.add('expanded')">
        <div class="listview__details__specs-grid__item">
          <span>Auflösung</span>
          <span>max. 1920x1080 (im TV-Modus per Dock)</span>
        </div>
        <div class="listview__details__specs-grid__item">
          <span>Display</span>
          <span>6.2", 1280x720, LCD, kapazitiver Touchscreen</span>
        </div>
        <div class="listview__details__specs-grid__item">
          <span>CPU</span>
          <span>NVIDIA Tegra Basis</span>
        </div>
        <div class="listview__details__specs-grid__item">
          <span>GPU</span>
          <span>NVIDIA Tegra Basis</span>
        </div>
        <div class="listview__details__specs-grid__item">
          <span>RAM</span>
          <span>4GB LPDDR4X</span>
        </div>
        <div class="listview__details__specs-grid__item">
          <span>Speicher</span>
          <span>32GB intern, microSDXC-Slot (bis 2TB erweiterbar)</span>
        </div>
        <div class="listview__details__specs-grid__item">
          <span />
        </div>
      </div>
    </div>
  </div>
</PVBase>
