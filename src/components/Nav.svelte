<script>
  import { afterUpdate } from "svelte";
  import { stores } from "@sapper/app";
  import pages from "./../pages.json";

  // get the currentPage from sapper stores
  const { page: currentPage } = stores();

  // get the currently active page's title for html title
  let currentTitle = "";
  currentPage.subscribe(changedCurrentPageEvent => {
    pages.map(s => {
      let exists = s.pages.find(e => changedCurrentPageEvent.path.indexOf(e.path) !== -1);
      if (exists) currentTitle = exists.title;
    });
  });

  // hack for adding location onto anchor links bc of base element, see https://github.com/sveltejs/sapper/issues/904
  let fixAnchors = () => {
    [...document.querySelectorAll('a[href^="#"]')].map(
      x => (x.href = document.location + new URL(x.href).hash)
    );
  };

  // run stuff after every update
  afterUpdate(async () => {
    fixAnchors();
    setTimeout(() => {
      if (Prism) Prism.highlightAll();
    }, 0);
  });

</script>

<style>
  nav {
    position: sticky;
    width: 200px;
    top: 0;
    height: 100%;
    font-size: 1rem;
    padding-top: 1rem;
    flex-shrink: 0;
    max-height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
  }

  nav::after {
    content: "";
    display: block;
    height: 5rem;
  }

  @media screen and (max-width: 550px) {
    nav {
      width: 160px;
    }
  }

  .section {
    text-transform: uppercase;
    font-weight: 600;
    margin: 2rem 0 0.3rem 0;
    padding-left: 1rem;
    letter-spacing: 0.04em;
  }

  .section:first-child {
    margin-top: 1rem;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  ul li {
    display: block;
  }
  a {
    color: inherit;
  }

  [aria-current] {
    position: relative;
    font-weight: 700;
    color: var(--gh-blue-base);
  }

  [aria-current]::after {
    position: absolute;
    right: 0;
    top: 50%;
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    transform: translate(50%, -50%) rotate(45deg);
    background-color: var(--grey-lighter-40);
  }

  a {
    text-decoration: none;
    padding: 0.35rem;
    padding-left: 1.5rem;
    display: block;
  }

  a:hover {
    color: var(--gh-blue-base);
  }

  .title-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
  .gh-logo {
    width: 75%;
  }

  .title {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.27em;
    padding-left: 0.13em;
    margin-top: 0.3rem;
    font-weight: 500;
  }
</style>

<svelte:head>
  <title>{currentTitle} | Geizhals Preisvergleich Styleguide</title>
</svelte:head>

<nav>
  <a href="./" class="title-wrapper">
    <img
      class="gh-logo"
      src="styleguide/geizhals_logo_without_margin.svg"
      alt="Geizhals Preisvergleich Logo" />
    <div class="title">Styleguide</div>
  </a>
  {#each pages as section}
    <div class="section">{section.section}</div>
    <ul>
      {#each section.pages as page}
        <li>
          <a
            aria-current={$currentPage.path === "/" + page.path || (page.path === '.' && $currentPage.path === undefined) ? 'page' : undefined}
            href={page.path}
            rel="prefetch">
            {page.title}
          </a>
        </li>
      {/each}
    </ul>
  {/each}
</nav>
