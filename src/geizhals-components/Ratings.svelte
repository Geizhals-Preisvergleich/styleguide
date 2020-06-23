<script>
  import PVBase from "./../components/PVBase.svelte";

  export let type = "small";
</script>

<style>
  /**
    * Small
    */
  /*! CSS Used from: http://gzhls.at/gsa/FALLBACK/ghpak/variant/variant.ghp.css */
  .variant a,
  .variant a:visited {
    text-decoration: none;
  }
  a.variant__header__rating {
    display: flex;
    align-items: center;
    color: #737373;
  }
  a.variant__header__rating:hover {
    color: #404040;
  }
  .variant__header__rating-text {
    margin-left: 0.25rem;
  }
  /*! CSS Used from: http://gzhls.at/gsa/FALLBACK/ghpak/css_stars/css_stars.ghp_linkedJsDefer.css */
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

  /**
 * Large
 */

  /*! CSS Used from: http://gzhls.gepor-2839.ghwb/gsa/FALLBACK/ghpak/productratings/productratings.ghp.css */
  .productratings__header__total__stars .gh_starsbig {
    text-align: left;
  }
  /*! CSS Used from: http://gzhls.gepor-2839.ghwb/gsa/FALLBACK/ghpak/css_stars/css_stars.ghp_linkedJsDefer.css */
  .gh_starsbig {
    background: url(//gzhls.gepor-2839.ghwb/b/stars_big.gif) repeat-x;
    width: 100px;
    background-position: 0 -23px;
    vertical-align: middle;
  }
  .gh_starsbig,
  .gh_starsbig1 {
    height: 20px;
    display: inline-block;
  }
  .gh_starsbig1 {
    background: url(//gzhls.gepor-2839.ghwb/b/stars_big.gif) repeat-x;
    width: 0;
    vertical-align: top;
  }
</style>

<PVBase>
  {#if type == 'small'}
    <div class="variant">
      <a
        href="#"
        class="variant__header__rating"
        rel="noopener"
        itemprop="aggregateRating"
        itemscope=""
        itemtype="https://schema.org/AggregateRating">
        <span class="variant__header__rating-stars-wrapper">
          <span class="gh_stars" title="4.6 von 5">
            <span class="gh_stars1" style="width: 91%" />
          </span>
          <span class="stars-value">
            <span itemprop="ratingValue">4.6</span>
          </span>
        </span>
        <span class="variant__header__rating-text">
          <meta itemprop="reviewCount" content="18" />
          /&nbsp;18 Bewertungen
        </span>
      </a>
    </div>
  {/if}
  {#if type == 'large'}
    <div class="productratings__header__total__stars">
      <span class="gh_starsbig" title="4.6 von 5">
        <span class="gh_starsbig1" style="width:91%" />
      </span>
      <span itemprop="ratingValue" itemtype="https://schema.org/Rating">
        4.6
      </span>
      von 5 Sternen
    </div>
  {/if}
</PVBase>
