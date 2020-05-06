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
  label {
    cursor: pointer;
  }
  /*! CSS Used from: https://gzhls.at/gsa/_535bf8f0c5/ghpak/css_inputelements/css_inputelements.ghp.css */
  .checkbox {
    display: flex;
    margin: 0.5rem 0;
    align-items: center;
    position: relative;
  }
  .checkbox__native {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin: 0;
    z-index: 1;
    cursor: pointer;
  }
  .checkbox__native:focus ~ .checkbox--tick {
    box-shadow: 0 4px 6px 2px rgba(0, 85, 153, 0.22), -3px -3px 6px 0 rgba(0, 85, 153, 0.12);
  }
  .checkbox__native:checked ~ .checkbox--tick {
    border-color: #059;
    background-color: #059;
  }
  .checkbox__native:checked ~ .checkbox--tick svg path {
    stroke: #fdfdfd;
  }
  .checkbox--tick {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 0.125rem;
    margin: 0 0.75rem 0 0;
    height: 1.2rem;
    width: 1.2rem;
    background-color: #fdfdfd;
    border: 1px solid #a6a6a6;
    cursor: pointer;
    z-index: 1;
  }
  .checkbox--tick svg path {
    stroke: transparent;
    stroke-width: 6px;
    stroke-miterlimit: 10;
    fill: none;
  }
  .checkbox__label {
    font-size: 0.75rem;
  }
  .checkbox input {
    z-index: 2;
  }
</style>

<PVBase>
  <div class="checkbox">
    <input
      type="checkbox"
      class="checkbox__native"
      name="marketplace_exclude"
      value="11"
      id="pa_edit_marketplace_exclude" />
    <span class="checkbox--tick">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 29">
        <path d="M27 5.4L10.7 24 3 15.3" />
      </svg>
    </span>
    <label class="checkbox__label" for="pa_edit_marketplace_exclude">
      <strong>Marketplaces ausschließen</strong>
    </label>
  </div>
</PVBase>

<Code language="html">
  {`<div class="checkbox">
  <input
    type="checkbox"
    class="checkbox__native"
    name="marketplace_exclude"
    value="11"
    id="pa_edit_marketplace_exclude" />
  <span class="checkbox--tick">[% INCLUDE 'b/svgs/tick.svg' %]</span>
  <label class="checkbox__label" for="pa_edit_marketplace_exclude">
    <strong>Marketplaces ausschließen</strong>
  </label>
</div>`}
</Code>
