<script>
  import Code from './../components/Code.svelte'
  import PVBase from './../components/PVBase.svelte'
</script>

<style>
  /*! CSS Used from: https://gzhls.at/gsa/_5a3fb46ba7/ghpak/productpage/productpage.ghp.css */
  .offer_bt,
  .offer_bt:visited {
    background: #f9e061;
    background: linear-gradient(#f7e852, #fad86e);
    border: 1px solid #d5b13e;
    display: inline-block;
    padding: 0.4em 0.7em;
    border-radius: 0.3em;
    margin: 0.7em 0;
    white-space: nowrap;
    font-size: 12.1px;
    text-decoration: none;
    color: #000;
  }
  .offer_bt:hover {
    background: #f4e878;
    background: linear-gradient(#f4e878, #f7dd8c);
  }
</style>

<PVBase>
  <button class="offer_bt">Zum Angebot</button>
</PVBase>

<Code language="html">{`<button class='offer_bt'>Zum Angebot</button>`}</Code>
