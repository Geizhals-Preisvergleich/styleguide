<script>
  import PVBase from './../components/PVBase.svelte'
</script>

<style>
  /*! CSS Used from: Embedded */
  .gh-statline .gh_statline {
    color: #26a;
  }
  a.gh_statline {
    text-decoration: none;
  }
  a,
  a:visited {
    color: #037;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  .gh-statline {
    position: relative;
    overflow: hidden;
    max-width: 414px;
  }
  .gh-statline {
    flex-basis: 100%;
    flex-shrink: 0;
    padding: 0 1em 0 0;
    font-size: 13.2px;
    background-color: #f2f2f2;
    color: #737373;
  }
  .gh-statline > span {
    display: block;
    width: 100%;
    white-space: nowrap;
    overflow-x: scroll;
    padding: 1em 1.4em 1em 0.6em;
  }
  /*! CSS Used from: https://gzhls.at/gsa/_3f87bff99d/ghpak/css_base_deferred/css_base_deferred.ghp_mobile_linkedJsDefer.css */
  #gh-menu:checked ~ .gh-menu__wrapper {
    display: flex;
    left: 0;
    width: 100%;
    position: absolute;
    z-index: 100000;
    height: calc(100% - 40px - 0.6em);
    top: calc(40px + 0.6em);
  }
  #gh-menu__categories ~ .gh-menu__icon {
    transform: rotate(0);
    transform-origin: 33% 56%;
    transition: transform 0.1s;
  }
  #gh-menu:checked ~ .gh-header .gh-menu__button path.middle {
    transform: rotate(45deg);
  }
  #gh-menu:checked ~ .gh-header .gh-menu__button path.middle2 {
    transform: rotate(-45deg);
  }
  #gh-menu:checked ~ .gh-header .gh-menu__button path.bottom,
  #gh-menu:checked ~ .gh-header .gh-menu__button path.top {
    transition: opacity 50ms 0ms;
    opacity: 0;
  }
  #gh-menu__categories:checked ~ .gh-menu__icon {
    transform: rotate(90deg);
  }
  #gh-menu__categories:checked ~ .gh-menu__categories {
    display: block;
    flex-basis: 100%;
    flex-shrink: 0;
    padding-left: 0;
  }
</style>

<PVBase>
  <div class="gh-statline">
    <div class="gh-statline__gradient--left" />
    <span itemscope="" itemtype="http://schema.org/BreadcrumbList">
      <span itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
        <meta itemprop="position" content="1" />
        <a class="gh_statline" itemprop="item" href="./">
          <span itemprop="name">Geizhals.at</span>
        </a>
      </span>
      »
      <span itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
        <meta itemprop="position" content="2" />
        <meta itemprop="name" content="Games" />
        <a class="gh_statline" itemprop="item" href="./?m=3">Games</a>
      </span>
      »
      <span itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
        <meta itemprop="position" content="3" />
        <meta itemprop="name" content="Nintendo Switch" />
        <a class="gh_statline" itemprop="item" href="./?o=180">Nintendo Switch</a>
      </span>
      »
      <span itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
        <meta itemprop="position" content="4" />
        <meta itemprop="name" content="Konsolen" />
        <a class="gh_statline" itemprop="item" href="./?cat=connsw">Konsolen</a>
      </span>
      » Nintendo Switch schwarz/blau/rot (2019)
    </span>
    <div class="gh-statline__gradient--right" />
  </div>
</PVBase>
