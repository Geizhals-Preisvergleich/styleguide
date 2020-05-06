<script>
  import PVBase from './../components/PVBase.svelte'
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
  img {
    border: 0;
  }
  meta {
    display: none;
  }
  .clr {
    clear: both;
    line-height: 1px;
  }
  div#gh_statline {
    background: #142161;
    color: #fff;
    padding: 2px 5px;
    margin: 0;
    clear: both;
  }
  #gh_flags_search {
    float: left;
    margin-right: 10px;
  }
  .mid {
    vertical-align: middle;
  }
  .flags {
    display: inline-block;
  }
  #gh_flags_search img {
    -webkit-filter: saturate(0.85) brightness(0.95);
    filter: saturate(0.85) brightness(0.95);
  }
  @media (-ms-high-contrast: none) {
    #gh_flags_search img {
      opacity: 0.85;
    }
  }
  #gh_flags_search .flags {
    position: relative;
  }
  #gh_flags_search .flags:after {
    display: block;
    content: '';
    background: linear-gradient(150deg, #000, #000 12%, transparent 85%, transparent);
    position: absolute;
    top: 0;
    left: 0;
    width: 32px;
    height: 22px;
  }
  #gh_flags_search .flags:hover > img {
    -webkit-filter: none;
    filter: none;
  }
  #gh_flags_search .flags:hover:after {
    background: linear-gradient(
      150deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5) 12%,
      transparent 85%,
      transparent
    );
  }
  #gh_brcr {
    display: block;
    padding: 4px 0;
    float: left;
  }
  a.gh_statline {
    color: #fff;
    text-decoration: none;
  }
  a.gh_statline:hover {
    text-decoration: underline;
  }
</style>

<PVBase>
  <div id="gh_statline">
    <span id="gh_flags_search">
      <img
        width="32"
        height="22"
        class="mid"
        src="//gzhls.at/b/svgs/flags/at.svg"
        alt="Österreich (aktiv)"
        title="Angebote verfügbar in Österreich (aktiv)" />
      <a href="//geizhals.eu/nintendo-switch-schwarz-blau-rot-2019-a2135460.html" class="flags">
        <img
          width="32"
          height="22"
          class="mid"
          src="//gzhls.at/b/svgs/flags/eu.svg"
          alt="EU"
          title="Alle Angebote" />
      </a>
      <a href="//geizhals.de/nintendo-switch-schwarz-blau-rot-2019-a2135460.html" class="flags">
        <img
          width="32"
          height="22"
          class="mid"
          src="//gzhls.at/b/svgs/flags/de.svg"
          alt="Deutschland"
          title="Angebote verfügbar in Deutschland" />
      </a>
    </span>
    <span id="gh_brcr">
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
    </span>
    <div class="clr" />
  </div>
</PVBase>
