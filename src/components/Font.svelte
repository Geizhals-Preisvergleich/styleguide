<script>
  export let fontFamily = "Verdana, sans-serif";
  export let fontSize = "11px";
  export let fontWeight = "normal";
  export let lineHeight = "1.2";
  export let textTransform = "";
  let specimen = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`;

  let styleString = `font-family: ${fontFamily}; font-size: ${fontSize}; font-weight: ${fontWeight}; line-height: ${lineHeight}; ${textTransform ? `text-transform: ${textTransform}` : `` }`;
</script>

<style>
  .font-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 2rem 0;
    border: 1px solid var(--grey-lighter-40);
    padding: 1rem;
  }

  .font-specimen {
    flex: 2;
    display: flex;
    flex-direction: column;
  }

  .specimen-text {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .font-style {
    flex: 1;
    font-weight: 600;
    margin-left: 1rem;
    padding-left: 1rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    border-left: 1px solid var(--grey-lighter-40);
  }

  .font-style-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .font-style-row:last-child {
    margin-bottom: 0;
  }

  label {
    font-size: 75%;
    display: block;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--grey-base);
  }
</style>

<div class="font-wrapper">
  <div class="font-specimen">
    <label>Specimen</label>
    <div class="specimen-text" style={styleString}>{specimen}</div>
  </div>
  <div class="font-style">
    <div class="font-style-row">
      <div>
        <label>Font (Family)</label>
        {fontFamily}
      </div>
    </div>
    {#if textTransform}
      <div class="font-style-row">
        <div>
          <label>Transform</label>
          {textTransform}
        </div>
      </div>
    {/if}
    <div class="font-style-row">
      <div>
        <label>Size</label>
        {fontSize}
      </div>
      <div>
        <label>Weight</label>
        {fontWeight}
      </div>
      <div>
        <label>Line Height</label>
        {lineHeight}
      </div>
    </div>
  </div>
</div>
