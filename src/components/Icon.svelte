<script>
  export let src = ''
  export let label = ''
  export let showbackground = undefined
  export let showdownloadlink = true;
  export let type = undefined;

  let icon_name = src.substr(src.lastIndexOf('/') + 1)
</script>

<style>
  .icon {
    display: flex;
    align-items: center;
    margin: 2rem 0;
  }
  .icon .img {
    width: 60px;
    height: 60px;
    margin-right: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon.large .img {
    width: 250px;
    justify-content: flex-start;
  }
  .icon img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  .icon .img.showbackground {
    background-color: var(--grey-lighter-20);
  }
  .inner {
    display: flex;
    flex-direction: column;
  }
  .icon_name, .icon_download_link {
    font-size: 0.8rem;
  }
</style>

<div class="icon" class:large={type}>
  <div class="img" class:showbackground>
    <img class="noborder" {src} alt={label} />
  </div>
  <div class="inner">
    <label>{label}</label>
    <span class="icon_name">
    (Filename: {icon_name}, {#if showdownloadlink}<a href="{src}" download class="icon_download_link">Download</a>{/if})
    </span>
  </div>
</div>
