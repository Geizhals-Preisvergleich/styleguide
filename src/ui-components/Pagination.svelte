<script>
  import PVBase from './../components/PVBase.svelte'
  import Code from './../components/Code.svelte'
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
  .blaettern {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
  }
  a.gh_pag_i {
    border-color: #d9d9d9;
  }
  a.gh_pag_i:hover {
    background: #f4f6fb;
  }
  .gh_pag_act {
    color: #fff;
    background: #059;
    text-decoration: none;
    border-color: #059;
  }

  .gh_pag_wrp {
    display: flex;
    white-space: nowrap;
    list-style: none;
    padding: 0;
  }
  .gh_pag_wrp span:not(.gh_pag_act) {
    border-color: #d7dce4;
  }
  .gh_pag_wrp li {
    margin: 0 2px;
  }
  .gh_pag_wrp li:first-child {
    margin: 0 2px 0 0;
  }
  .gh_pag_wrp li:last-child {
    margin: 0 0 0 2px;
  }
  .gh_pag_i {
    border: 1px solid #059;
    padding: 5px 0.5rem;
    display: inline-block;
    min-width: 0.5rem;
    text-align: center;
    text-decoration: none;
    line-height: 1;
  }
  .blaettern ul li {
    padding-left: 0;
  }
</style>

<PVBase>
  <nav class="blaettern" role="navigation" aria-label="Pagination Navigation">
    <ul class="gh_pag_wrp paginator__first-page" data-id="paginator-top">
      <li>
        <span
          class="gh_pag_i only--desktop gh_pag_i_first gh_pag_act"
          aria-label="Du befindest dich auf Seite 1">
          1
        </span>
      </li>
      <li>
        <a href="#" class="gh_pag_i only--desktop" rel="nofollow" aria-label="Gehe zu Seite 2">2</a>
      </li>
      <li>
        <a href="#" class="gh_pag_i only--desktop" rel="nofollow" aria-label="Gehe zu Seite 3">3</a>
      </li>
      <li>
        <a href="#" class="gh_pag_i only--desktop" rel="nofollow" aria-label="Gehe zu Seite 4">4</a>
      </li>
      <li>
        <span class="gh_pag_i only--desktop">…</span>
      </li>
      <li>
        <a href="#" class="gh_pag_i only--desktop" rel="nofollow" aria-label="Gehe zu Seite 34">
          34
        </a>
      </li>
      <li>
        <a
          href="#"
          class="gh_pag_i only--desktop gh_pag_i_last gh_pag_next_active"
          rel="nofollow"
          aria-label="Gehe eine Seite vor">
          vor »
        </a>
      </li>
    </ul>
  </nav>
</PVBase>
