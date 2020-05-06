<script>
  import colorParse from 'color'
  export let name = ''
  export let color = ''
  export let description = undefined

  // parse the color and convert it
  let colorobject = colorParse(color)
  let colorvalues = [
    colorobject.hex(),
    colorobject
      .hsl()
      .round()
      .string(),
    colorobject.rgb().string()
  ]
  let showborder = colorobject.hsl().color[2] > 60
</script>

<style>
  .color-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
  }

  .color {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border: 1px solid transparent;
  }
  .color.showborder {
    border-color: var(--grey-lighter-40);
  }

  label {
    font-weight: 600;
    margin: 0.3rem 0;
  }

  .color-value {
    font-size: 0.8rem;
    color: var(--grey-darker-5);
  }
  .description {
    max-width: 200px;
    text-align: center;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
  }
</style>

<div class="color-wrapper">
  <div class="color" class:showborder style="background-color: {color}" />
  <label>{name}</label>
  {#if description}
    <div class="description">{description}</div>
  {/if}
  {#each colorvalues as colorvalue}
    <div class="color-value">{colorvalue}</div>
  {/each}
</div>
