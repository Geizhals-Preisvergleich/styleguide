<script>
  import PVBase from './../components/PVBase.svelte'
  import Code from './../components/Code.svelte'

  export let error = false
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
    font-size: 12px;
    background-color: #fdfdfd;
  }
  .textfield__input:focus {
    box-shadow: 0 4px 6px 2px rgba(0, 85, 153, 0.22), -3px -3px 6px 0 rgba(0, 85, 153, 0.12);
  }
  .textfield__input--error {
    border-color: #e64a19;
  }
</style>

<PVBase>
  <div class="textfield">
    <label for="pa_edit_mail" class="textfield__label">Email-Adresse:</label>
    <input
      id="pa_edit_mail"
      type="text"
      name="mail"
      inputmode="email"
      class="textfield__input {error ? 'textfield__input--error' : ''}"
      value=""
      placeholder="email@doma.in" />
  </div>
</PVBase>

<Code language="html">
  {`<div class="textfield">
    <label for="pa_edit_mail" class="textfield__label">Email-Adresse:</label>
    <input
      id="pa_edit_mail"
      type="text"
      name="mail"
      inputmode="email"
      class="textfield__input ${error ? 'textfield__input--error' : ''}"
      value=""
      placeholder="email@doma.in" />
  </div>`}
</Code>
