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
  .textfield {
    font-size: 12px;
    display: inline-flex;
    flex-direction: column;
    margin: 0.5rem 0;
    width: 100%;
  }
  textarea {
    font-family: Verdana, sans-serif;
  }
  .textfield__label {
    font-weight: 700;
    display: inline-flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .textfield__input {
    min-height: 32px;
    min-width: 0;
    margin: 0.25rem 0 0;
    padding: 0.5rem;
    border: 1px solid #a6a6a6;
    border-bottom: 2px solid #059;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    width: 100%;
    font-size: 0.75rem;
    background-color: #fdfdfd;
  }
  .textfield__input:focus {
    box-shadow: 0 4px 6px 2px rgba(0, 85, 153, 0.22), -3px -3px 6px 0 rgba(0, 85, 153, 0.12);
  }
</style>

<PVBase>
  <div class="textfield">
    <label class="textfield__label" for="feedback-text">
      Produkt: Nintendo Switch schwarz/blau/rot (2019)
    </label>
    <textarea
      id="feedback-text"
      name="error"
      accept-charset="UTF-8"
      wrap="hard"
      cols="80"
      rows="4"
      class="textfield__input"
      placeholder="Bitte trage hier deinen gefundenen Fehler/dein Feedback ein. Vielen Dank!" />
  </div>
</PVBase>

<Code language="html">
  {`<div class="textfield">
    <label class="textfield__label" for="feedback-text">
      Produkt: Nintendo Switch schwarz/blau/rot (2019)
    </label>
    <textarea
      id="feedback-text"
      name="error"
      accept-charset="UTF-8"
      wrap="hard"
      cols="80"
      rows="4"
      class="textfield__input"
      placeholder="Bitte trage hier deinen gefundenen Fehler/dein Feedback ein. Vielen Dank!" />
  </div>`}
</Code>
