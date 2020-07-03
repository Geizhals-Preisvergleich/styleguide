<script>
  import { onMount } from 'svelte';

  import PVBase from "./../components/PVBase.svelte";
  import noUiSlider from 'nouislider';

  let rangeSlider;
  let inputMin;
  let inputMax;
  let showUpdateButton = false;

	onMount(() => {
    const minRange = Number(inputMin.dataset.rangeValue);
    const maxRange = Number(inputMax.dataset.rangeValue);

    let rangeObj = {
      'min': minRange,
      'max': maxRange
    };

		noUiSlider.create(rangeSlider, {
      start: [
        Number(inputMin.value),
        Number(inputMax.value)
      ],
      range: rangeObj,
      step: 1,
      connect: [false, true, false],
    });

    rangeSlider.noUiSlider.on('update', (values, handle) => {
      if (handle === 0) {
        inputMin.value = Number(values[0]);
      }

      if (handle === 1) {
        inputMax.value = Number(values[1]);
      }
    });

    rangeSlider.noUiSlider.on('set', () => {
      showUpdateButton = true;
    });
	});
</script>

<style>
  :global(.noUi-target),
  :global(.noUi-target *) {
      -webkit-touch-callout: none;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      -webkit-user-select: none;
      touch-action: none;
      -ms-user-select: none;
      -moz-user-select: none;
      user-select: none;
      box-sizing: border-box
  }

  :global(.noUi-target) {
      position: relative;
      direction: ltr
  }

  :global(.noUi-base),
  :global(.noUi-connects) {
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 1
  }

  :global(.noUi-base) {
      width: calc(100% - 20px)
  }

  :global(.noUi-connects) {
      overflow: hidden;
      z-index: 0
  }

  :global(.noUi-connect),
  :global(.noUi-origin) {
      will-change: transform;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      -ms-transform-origin: 0 0;
      -webkit-transform-origin: 0 0;
      -webkit-transform-style: preserve-3d;
      transform-origin: 0 0;
      transform-style: flat
  }

  :global(.noUi-connect) {
      height: 100%;
      width: 100%
  }

  :global(.noUi-origin) {
      height: 10%;
      width: 10%
  }

  :global(html:not([dir=rtl]) .noUi-horizontal .noUi-origin) {
      left: auto;
      right: 0
  }

  :global(.noUi-vertical .noUi-origin) {
      width: 0
  }

  :global(.noUi-horizontal .noUi-origin) {
      height: 0
  }

  :global(.noUi-handle) {
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      position: absolute
  }

  :global(.noUi-touch-area) {
      height: 100%;
      width: 100%
  }

  :global(.noUi-state-tap .noUi-connect),
  :global(.noUi-state-tap .noUi-origin) {
      transition: transform .3s
  }

  :global(.noUi-state-drag *) {
      cursor: inherit!important
  }

  :global(.noUi-horizontal) {
      height: 6px
  }

  :global(.noUi-horizontal .noUi-handle) {
      width: 22px;
      height: 22px;
      left: -17px;
      top: -8px
  }

  :global(.noUi-vertical) {
      width: 18px
  }

  :global(.noUi-vertical .noUi-handle) {
      width: 28px;
      height: 34px;
      left: -6px;
      top: -17px
  }

  :global(html:not([dir=rtl]) .noUi-horizontal .noUi-handle) {
      right: -21px;
      left: auto
  }

  :global(.noUi-target) {
      background: #a6a6a6
  }

  :global(.noUi-connects) {
      border-radius: 0
  }

  :global(.noUi-connect) {
      background: #059
  }

  :global(.noUi-draggable) {
      cursor: ew-resize
  }

  :global(.noUi-vertical .noUi-draggable) {
      cursor: ns-resize
  }

  :global(.noUi-handle) {
      border-radius: 50%;
      background: #059;
      cursor: default
  }

  :global(.noUi-active) {
      background: #0071cc
  }

  :global(.noUi-vertical .noUi-handle:after),
  :global(.noUi-vertical .noUi-handle:before) {
      width: 14px;
      height: 1px;
      left: 6px;
      top: 14px
  }

  :global(.noUi-vertical .noUi-handle:after) {
      top: 17px
  }

  :global([disabled] .noUi-connect) {
      background: #b8b8b8
  }

  :global([disabled].noUi-handle),
  :global([disabled] .noUi-handle),
  :global([disabled].noUi-target) {
      cursor: not-allowed
  }

  .filter {
    position: relative;
    max-width: 270px;
  }

  .filter__slider {
    margin: 1.25rem 0 0;
  }

  .filter__title {
    font-size: .9rem;
    margin: 0 0 .75rem;
    font-weight: 700;
  }

  .filter__slider-input {
    border: 1px solid #d9d9d9;
    background: #fdfdfd;
    text-align: center;
    padding: .15rem;
    margin-top: .15rem;
    height: 24px;
    width: 80px;
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }

  .filter__slider-input-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .filter__slider-input-label {
    width: 80px;
  }

  .filter__slider-update-wrapper .arrow {
    display: inline-block;
    width: 6px;
    height: 6px;
    border: solid #037;
    border-width: 0 1px 1px 0;
    padding: 0;
    transform: rotate(45deg);
    margin: -2px 0 0;
    vertical-align: top;
    transition: none;
  }

  .filter__slider-update-wrapper {
    position: absolute;
    pointer-events: none;
    top: -2px;
    right: 0;
    opacity: 0;
    transition: opacity 0.2s ease-in;
  }

  .filter__slider-update-wrapper.show {
    pointer-events: auto;
    opacity: 1;
  }

  .filter__slider-update-link {
    position: relative;
    display: inline-block;
    text-decoration: none;
    background: #059;
    color: #fdfdfd;
    padding: 0.3rem 0.5rem 0.3rem 1.25rem;
    border-radius: 1rem;
    box-shadow: 0 -10px 10px 14px #fff;
  }

  .filter__slider-update-link:hover {
    background: #0071cc;
  }

  .filter__slider-update-link .arrow {
    position: absolute;
    border-color: #fdfdfd;
    transform: rotate(-45deg);
    margin: 0.16rem 0.25rem 0 0;
    left: 8px;
    top: 6px;
  }
</style>

<PVBase>
  <div class="filter">
    <div class="filter__title">
      Preis
    </div>
    <div class="filter__slider-update-wrapper" class:show={showUpdateButton}>
      <a href="#" class="filter__slider-update-link">
        <span class="arrow"></span> Aktualisieren
      </a>
    </div>
    <div class="filter__slider-input-wrapper">
      <label class="filter__slider-input-label">
        Min:
        <input
          type="number"
          inputmode="numeric"
          autocomplete="off"
          value="0"
          data-changed-value="0"
          data-range-value="0"
          class="filter__slider-input min"
          data-ga-category="SERP.Filter"
          data-name="bpmin"
          bind:this={inputMin}
        >
      </label>
      <label class="filter__slider-input-label">
        Max:
        <input
          type="number"
          inputmode="numeric"
          autocomplete="off"
          value="100"
          data-changed-value="0"
          data-range-value="100"
          class="filter__slider-input max"
          data-ga-category="SERP.Filter"
          data-name="bpmax"
          bind:this={inputMax}
        >
      </label>
    </div>
    <div class="filter__slider" bind:this={rangeSlider}></div>
  </div>
</PVBase>
