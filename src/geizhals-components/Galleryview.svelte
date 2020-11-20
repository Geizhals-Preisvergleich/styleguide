<script>
  import PVBase from './../components/PVBase.svelte';
  import DotsMenu from './../geizhals-components/DotsMenu.svelte';
</script>

<style>
  /*! CSS Used from: https://gzhls.at/gsa/_f2fa3f52b5/ghpak/galleryview/galleryview.ghp.css */
  .galleryview__item {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 1rem;
    border: 1px solid #d9d9d9;
    flex-grow: 1;
    flex-shrink: 1;
    margin: -1px 0 0 -1px;
    width: 370px;
  }
  .galleryview__item:hover .shorten {
    background: linear-gradient(
      90deg,
      rgba(244, 246, 251, 0),
      #f4f6fb 50%,
      #f4f6fb
    );
  }
  .galleryview__image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0 0 0.5rem;
    min-height: 210px;
  }
  .galleryview__bottom-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin-top: auto;
    min-height: 35px;
  }
  .galleryview__image {
    width: auto;
    height: auto;
    max-height: 200px;
    max-width: 100%;
    mix-blend-mode: multiply;
    border: none;
  }
  .galleryview__image-link {
    display: inline-block;
    width: 100%;
    text-align: center;
  }
  .galleryview__name {
    font-size: 0.9rem;
    font-weight: 700;
    margin: 0 0 0.25rem;
    text-overflow: ellipsis;
    overflow: hidden;
    max-height: 70px;
    line-height: 1.2;
  }
  a.galleryview__name-link {
    position: relative;
    display: block;
    text-decoration: none;
  }
  a.galleryview__name-link .shorten {
    position: absolute;
    top: 3.25rem;
    right: 0;
    width: 40px;
    height: 20px;
    background: linear-gradient(
      90deg,
      hsla(0, 0%, 99.2%, 0),
      #fdfdfd 50%,
      #fdfdfd
    );
  }
  a.galleryview__name-link:focus,
  a.galleryview__name-link:hover {
    text-decoration: underline;
  }
  .galleryview__rating-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-right: auto;
  }
  .galleryview__rating {
    margin: 0 auto 1rem 0;
  }
  a.galleryview__rating-link {
    text-decoration: none;
    color: #737373;
    font-size: 0.7rem;
    display: flex;
    flex-direction: column;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
  }
  a.galleryview__rating-link:hover {
    color: #404040;
  }
  .galleryview__rating-stars-wrapper {
    display: flex;
    align-items: center;
    line-height: 1;
    margin: 0 0 0.15rem;
  }
  .galleryview__rating-stars-wrapper .stars-value {
    display: inline-block;
    margin-left: 0.25rem;
  }
  .galleryview__offer-wrapper {
    position: relative;
    display: flex;
    align-items: flex-end;
  }
  .galleryview__offer {
    flex-shrink: 0;
    text-align: right;
  }
  .galleryview__price {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    color: #737373;
    font-size: 0.9rem;
    line-height: 1;
  }
  .galleryview__price-before {
    display: inline-block;
    margin-right: 0.25rem;
  }
  .galleryview__price-link {
    display: flex;
    align-items: center;
    position: relative;
    font-weight: 700;
    font-size: 1.2rem;
    text-decoration: none;
  }
  .galleryview__price-link:hover .price {
    text-decoration: underline;
  }
  .galleryview__offercount {
    height: 13px;
    color: #737373;
    margin-bottom: 1px;
  }
  a.galleryview__offercount-link {
    text-decoration: none;
    color: #737373;
  }
  a.galleryview__offercount-link:hover {
    color: #404040;
  }
  .galleryview__availability {
    display: flex;
    align-items: center;
    align-self: center;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: transparent;
    margin: 1px 0 0 0.25rem;
    outline: 0;
  }
  .galleryview__availability.available {
    background-color: #38ad3e;
  }
  .galleryview__options {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    z-index: 2;
  }

  /*! CSS Used from: https://gzhls.at/gsa/_f2fa3f52b5/ghpak/css_stars/css_stars.ghp_linkedJsDefer.css */
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
</style>

<PVBase>
  <div class="galleryview__item" data-index="3">
    <div class="galleryview__image-wrapper">
        <a href="#"
            class="galleryview__image-link"
            aria-hidden="true" tabindex="-1">
            <img src="https://gzhls.at/i/22/20/2132220-m0.jpg"
                data-src="https://gzhls.at/i/22/20/2132220-m0.jpg"
                alt="Apple iPhone 11 64GB schwarz" class="galleryview__image ">
        </a>
    </div>
    <h3 class="galleryview__name">
        <a href="#"
            class="galleryview__name-link" title="Apple iPhone 11 64GB schwarz">
            Apple iPhone 11 64GB schwarz
            <div class="shorten"></div>
        </a>
    </h3>
    <div class="galleryview__bottom-wrapper ">
        <div class="galleryview__rating-wrapper">
            <div class="galleryview__rating">
                <a rel="noopener" href="./?sr=2132220,-1"
                    class="galleryview__rating-link" target="_blank">
                    <div class="galleryview__rating-stars-wrapper">
                        <span class="gh_stars" title="3.0 von 5"><span
                                class="gh_stars1"
                                style="width:60%"></span></span>
                        <span class="stars-value">
                            3.0
                        </span>
                    </div>
                    <span class="galleryview__rating-text">
                        2 Bewertungen
                    </span>
                </a>
            </div>
            <div class="galleryview__offercount">
                <a href="#"
                    class="galleryview__offercount-link">
                    60 Angebote
                </a>
            </div>
        </div>
        <div class="galleryview__offer-wrapper">
            <div class="galleryview__offer">
                <span itemprop="offers" itemscope=""
                    itemtype="https://schema.org/Offer">
                    <div class="galleryview__price">
                        <span class="galleryview__price-before">
                            ab
                        </span>
                        <a rel="noopener"
                            href="#"
                            class="galleryview__price-link">
                            <span class="price">€ 713,08</span>
                        </a>
                        <span class="galleryview__availability available" aria-label="verfügbar" data-tooltip-pos="up-right" tabindex="0"></span>
                    </div>
                </span>
            </div>
        </div>
    </div>
    <div class="galleryview__options">
      <DotsMenu enableStyles={false} />
    </div>
  </div>
</PVBase>
