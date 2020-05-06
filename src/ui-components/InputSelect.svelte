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
  .select {
    display: inline-flex;
    flex-direction: column;
    margin: 0.5rem 0;
    width: 100%;
  }
  .select__label {
    font-weight: 700;
    cursor: auto;
  }
  .select__input {
    font-size: 12px;
    padding: 0.5rem 2.5rem 0.5rem 0.5rem;
    border: 1px solid #a6a6a6;
    background-color: #fdfdfd;
    margin-top: 0.25rem;
    width: 100%;
    background-image: url(//gzhls.at/b/svgs/dropdown_light.svg);
    background-position: 100%;
    background-size: auto 100%;
    background-repeat: no-repeat;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    border-radius: 0;
    cursor: pointer;
  }
  .select__input::-ms-expand {
    display: none;
  }
  .select__input:focus {
    box-shadow: 0 4px 6px 2px rgba(0, 85, 153, 0.22), -3px -3px 6px 0 rgba(0, 85, 153, 0.12);
  }
</style>

<PVBase>
  <div class="select">
    <label for="feedback-type" class="select__label">Art des Feedbacks:</label>
    <select name="feedback_type" id="feedback-type" class="select__input">
      <option value="other">sonstiger Fehler</option>
      <option value="description">falsche Produktbezeichnung/-beschreibung</option>
      <option value="image">falsches Produktbild</option>
      <option value="offer">falsches Händlerangebot</option>
      <option value="price">falscher Preis/Versandkosten oder Lagerstand</option>
      <option value="test">Testbericht/Herstellerlink vorschlagen</option>
      <option value="general">allgemeines Feedback</option>
    </select>
  </div>
</PVBase>

<Code language="html">
  {`<div class="select">
    <label for="feedback-type" class="select__label">Art des Feedbacks:</label>
    <select name="feedback_type" id="feedback-type" class="select__input">
      <option value="other">sonstiger Fehler</option>
      <option value="description">falsche Produktbezeichnung/-beschreibung</option>
      <option value="image">falsches Produktbild</option>
      <option value="offer">falsches Händlerangebot</option>
      <option value="price">falscher Preis/Versandkosten oder Lagerstand</option>
      <option value="test">Testbericht/Herstellerlink vorschlagen</option>
      <option value="general">allgemeines Feedback</option>
    </select>
  </div>`}
</Code>
