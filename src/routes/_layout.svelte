<script>
  import Nav from '../components/Nav.svelte'
  import PageLoadingBar from '../components/PageLoadingBar.svelte'
  import { stores } from '@sapper/app'
  export const segment = null
  const { preloading } = stores()
</script>

<style>
  main {
    flex: 1;
    background-color: #fff;
    min-height: 100vh;
    padding: 2rem;
  }

  main :global(p img) {
    max-width: 100%;
  }
  main :global(li img) {
    max-width: 100%;
  }

  main :global(ul) {
    padding-left: 0;
  }
  main :global(ul li) {
    position: relative;
    list-style-type: none;
    padding-left: 1.5em;
    margin-left: 0;
    margin-bottom: 0.5em;
  }
  main :global(ul ul) {
    margin-top: 0.5em;
  }
  main :global(.content > ul li::before) {
    position: absolute;
    left: 0;
    top: 0;
    content: '\2015';
    margin-right: 0.5em;
    opacity: 0.7;
  }

  .content {
    max-width: 800px;
    padding-bottom: 100px;
  }
</style>

<svelte:head>
  <link rel="stylesheet" href="prism.css" />
  <script src="prism.js" data-manual>

  </script>
  <meta name="robots" content="noindex" />
</svelte:head>

<PageLoadingBar {preloading} />

<Nav />

<main>
  <div class="content">
    <slot />
  </div>
</main>
