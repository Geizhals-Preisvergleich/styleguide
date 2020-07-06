<script>
  import PVBase from './../components/PVBase.svelte';
</script>

<style>
  /*! CSS Used from: https://gzhls.at/gsa/_4d10a8c4ec/ghpak/switchview/switchview.ghp.css */
  .switchview {
    display: flex;
    align-items: center;
    margin: 1rem;
  }
  .switchview-text {
    display: inline-block;
    margin-right: 0.4rem;
  }
  .switchview-list {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .switchview-list-item {
    display: inline-block;
    margin: 0;
    padding: 0;
  }
  .switchview-list-item:first-child {
    margin-right: 0.25rem;
  }
  .switchview-list-link {
    display: flex;
  }
  .switchview-list-icon {
    height: 18px;
    fill: #a6a6a6;
  }
  .switchview-list-icon:hover {
    fill: #737373;
  }
  .switchview-list-icon--list {
    width: 22px;
  }
  .switchview-list-icon--gallery {
    width: 24px;
  }
  .switchview-list-icon.active {
    fill: #059;
  }
</style>

<PVBase>
  <div class="switchview">
    <span class="switchview-text">Ansicht:</span>
    <ul class="switchview-list">
      <li class="switchview-list-item">
        <a href="#" class="switchview-list-link" aria-label="Wechsle zur Listenansicht" data-tooltip-pos="up-left">
          <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg" class="switchview-list-icon switchview-list-icon--list ">
          <path d="m-3-5h24v24h-24z" fill="none"></path><path d="m1 9h2c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1zm0 5h2c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1zm0-10h2c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1zm5 5h10c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1h-10c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1zm0 5h10c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1h-10c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1zm-1-13v2c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1h-10c-.55 0-1 .45-1 1z" fill-rule="nonzero"></path>
          </svg>
        </a>
      </li>
      <li class="switchview-list-item">
        <a href="#" class="switchview-list-link" aria-label="Wechsle zur Galerieansicht" data-tooltip-pos="up-left" data-tooltip-show-on-mobile="">
          <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg" class="switchview-list-icon switchview-list-icon--gallery active"><path d="m-4-5h24v24h-24z" fill="none"></path><path d="m1 6h3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm0 7h3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm6 0h3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm6 0h3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm-6-7h3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm5-5v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1z" fill-rule="nonzero"></path></svg>
        </a>
      </li>
    </ul>
  </div>
</PVBase>
