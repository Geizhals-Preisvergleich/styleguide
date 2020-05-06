<script>
  import PVBase from './../components/PVBase.svelte'
  export let message
  export let type
</script>

<style>
  /*! CSS Used from: Embedded */
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    background-color: transparent;
    font-size: inherit;
    font-family: inherit;
    margin: initial;
    padding: initial;
    cursor: pointer;
    color: initial;
  }
  /*! CSS Used from: https://gzhls.at/gsa/_3f87bff99d/ghpak/notifications/notifications.ghp_linkedJsDefer.css */
  .gh-notification {
    position: relative;
    max-width: 340px;
    min-width: 240px;
    min-height: 4rem;
    font-size: 14.4px;
    padding: 0;
    display: flex;
    align-items: center;
    line-height: 142%;
    background-color: #fff;
    color: #1a1a1a;
    margin-bottom: 1rem;
    box-shadow: 0 4px 24px -10px rgba(0, 0, 0, 0.7);
    opacity: 0;
    border-radius: 0.25rem;
    transform: translate3d(340px, 0, 0);
    transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    overflow: hidden;
  }
  @media screen and (max-width: 400px) {
    .gh-notification {
      max-width: 100%;
      margin-left: 1rem;
    }
  }
  .gh-notification--show {
    opacity: 1;
    transform: translateZ(0);
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .gh-notification--type-success {
    background-color: #2c8730;
    color: #fff;
  }
  .gh-notification--type-error {
    background-color: #e60000;
    color: #fff;
  }
  .gh-notification__message {
    flex-grow: 1;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .gh-notification__icon {
    flex: 0 0 auto;
    width: 20px;
    height: 100%;
    margin: 0.7rem;
    display: flex;
    align-items: center;
  }
  .gh-notification__icon svg {
    width: 20px;
    height: 20px;
  }
  .gh-notification--type-success .gh-notification__icon svg path:nth-child(2) {
    fill: currentColor;
  }
  .gh-notification--type-error .gh-notification__icon svg path:nth-child(2) {
    fill: currentColor;
  }
  .gh-notification__close {
    color: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    line-height: 100%;
    background-color: transparent;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
    padding: 0;
    flex: 0 0 auto;
    margin: 0 0.4rem;
  }
  .gh-notification__close:hover {
    opacity: 1;
  }
  .gh-notification__close svg {
    width: 14px;
    height: auto;
    stroke: currentColor;
  }
  .gh-notification__close svg path {
    stroke: currentColor;
  }
  .gh-notification__duration-indicator {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    overflow: hidden;
    background-color: currentColor;
    opacity: 0.65;
    -webkit-animation: notification-duration-indicator-animation 3.8s linear 0s paused;
    animation: notification-duration-indicator-animation 3.8s linear 0s paused;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
  }
  .gh-notification--show .gh-notification__duration-indicator {
    -webkit-animation-play-state: running;
    animation-play-state: running;
  }
  .gh-notification--show:hover .gh-notification__duration-indicator {
    -webkit-animation-play-state: paused;
    animation-play-state: paused;
  }
  /*! CSS Used keyframes */
  @-webkit-keyframes notification-duration-indicator-animation {
    0% {
      transform: translateZ(0);
    }
    to {
      transform: translate3d(100%, 0, 0);
    }
  }
  @keyframes notification-duration-indicator-animation {
    0% {
      transform: translateZ(0);
    }
    to {
      transform: translate3d(100%, 0, 0);
    }
  }
</style>

<PVBase>
  <div
    class="gh-notification--type-{type} gh-notification gh-notification--show"
    aria-live="off"
    tabindex="-1"
    role="status">
    <div class="gh-notification__icon">
      {#if type == 'info'}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1
            15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
      {/if}
      {#if type == 'success'}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5
            1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      {/if}
      {#if type == 'error'}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1
            15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </svg>
      {/if}
    </div>
    <div class="gh-notification__message">
      {@html message}
    </div>
    <button class="gh-notification__close">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
        <path
          fill="none"
          stroke="#828282"
          stroke-miterlimit="10"
          stroke-width="4"
          d="M35.47 4.71L4.19 35.99m0-31.28l31.28 31.28" />
      </svg>
    </button>
    <div class="gh-notification__duration-indicator" />
  </div>
</PVBase>
