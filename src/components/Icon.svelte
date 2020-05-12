<script>
  export let src = ''
  export let label = ''
  export let showbackground = undefined

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
  .icon_name {
    font-size: 0.8rem;
  }
</style>

<div class="icon">
  <div class="img" class:showbackground>
    <img class="noborder" {src} alt={label} />
  </div>
  <div class="inner">
    <label>{label}</label>
    <span class="icon_name">(Filename: {icon_name})</span>
  </div>
</div>
