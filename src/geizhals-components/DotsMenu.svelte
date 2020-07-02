<script>
  import PVBase from "./../components/PVBase.svelte";
</script>

<style>
  .dots-dropdown {
    display: inline-flex;
    position: relative;
  }
  .dots-dropdown.opened .dots-dropdown__button,
  .dots-dropdown:hover:not(.dots-dropdown--mobile) .dots-dropdown__button {
    box-shadow: 0 0 0.5rem 0 rgba(2, 2, 2, 0.25);
    z-index: 3;
  }
  .dots-dropdown.opened .dots-dropdown__button__dots,
  .dots-dropdown.opened .dots-dropdown__button__dots:after,
  .dots-dropdown.opened .dots-dropdown__button__dots:before,
  .dots-dropdown:hover:not(.dots-dropdown--mobile) .dots-dropdown__button__dots,
  .dots-dropdown:hover:not(.dots-dropdown--mobile)
    .dots-dropdown__button__dots:after,
  .dots-dropdown:hover:not(.dots-dropdown--mobile)
    .dots-dropdown__button__dots:before {
    background: #059;
  }
  .dots-dropdown.opened .dots-dropdown__list-wrapper,
  .dots-dropdown:hover:not(.dots-dropdown--mobile) .dots-dropdown__list-wrapper {
    display: block;
    z-index: 2;
  }
  .dots-dropdown__button {
    display: inline-block;
    position: relative;
    background: #fdfdfd;
    border-radius: 50%;
    height: 2.25rem;
    width: 2.25rem;
  }
  .dots-dropdown__button__dots {
    display: inline-block;
    height: 0.25rem;
    width: 0.25rem;
    background: #737373;
    border-radius: 0.25rem;
    display: flex;
  }
  .dots-dropdown__button__dots:after,
  .dots-dropdown__button__dots:before {
    content: "";
    position: absolute;
    display: inline-block;
    height: 0.25rem;
    width: 0.25rem;
    background: #737373;
    border-radius: 0.25rem;
  }
  .dots-dropdown__button__dots:after {
    bottom: 1px;
  }
  .dots-dropdown__button__dots:before {
    top: 1px;
  }
  .dots-dropdown__button__dots-wrapper {
    display: flex;
    justify-content: center;
    position: relative;
    padding: 0.5rem;
    line-height: 0;
  }
  .dots-dropdown__list {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 240px;
    border: 1px solid #d9d9d9;
    border-radius: 0.25rem;
    box-shadow: 0 0 0.5rem 0 rgba(2, 2, 2, 0.25);
    background: #fdfdfd;
  }
  .dots-dropdown__list-wrapper {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    padding: 36px 0 0;
    z-index: 1;
  }
  .dots-dropdown__list-item {
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #d9d9d9;
  }
  .dots-dropdown__list-item:last-child {
    border-bottom: 0;
  }
  .dots-dropdown__list-item:hover {
    background: #f4f6fb;
  }
  .dots-dropdown__list-item:hover:first-child {
    border-radius: 3px 3px 0 0;
  }
  .dots-dropdown__list-item:hover:last-child {
    border-radius: 0 0 3px 3px;
  }
  .dots-dropdown__list-link {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    text-decoration: none;
    width: 100%;
  }
  .dots-dropdown__list-link,
  .dots-dropdown__list-link:visited {
    color: #020202;
  }
  .dots-dropdown__list-link__image {
    width: 24px;
    height: 24px;
    margin-right: 0.5rem;
    border: none;
  }
  .dots-dropdown.compare-toggle.inList .dots-dropdown__list-text-add,
  .dots-dropdown.compare-toggle.notInList .dots-dropdown__list-text-remove {
    display: none;
  }
  .dots-dropdown--spacer {
    width: 2.25rem;
    flex-shrink: 0;
  }
</style>

<PVBase>
  <div class="dots-dropdown compare-toggle notInList">
    <button
      type="button"
      class="dots-dropdown__button"
      aria-label="Produktoptionen"
    >
      <span class="dots-dropdown__button__dots-wrapper">
          <span class="dots-dropdown__button__dots"></span>
      </span>
    </button>
    <div class="dots-dropdown__list-wrapper">
      <ul class="dots-dropdown__list">
        <li class="dots-dropdown__list-item">
          <a
            href="#"
            class="dots-dropdown__list-link"
          >
            <img
              src="//gzhls.at/b/svgs/pricehistory.svg"
              alt="Preisentwicklung"
              class="dots-dropdown__list-link__image"
              aria-hidden="true"
            >
            Preisentwicklung &ouml;ffnen
          </a>
        </li>
        <li class="dots-dropdown__list-item">
          <a
            href="#"
            class="dots-dropdown__list-link"
          >
            <img
              src="//gzhls.at/b/svgs/pricealarm.svg"
              alt="Preisalarm"
              class="dots-dropdown__list-link__image"
              aria-hidden="true"
            >
            Preisalarm setzen
          </a>
        </li>
        <li class="dots-dropdown__list-item hide-on-nojs">
          <button type="button" class="dots-dropdown__list-link">
              <img
                src="//gzhls.at/b/svgs/wishlist.svg"
                alt="Wunschliste"
                class="dots-dropdown__list-link__image"
                aria-hidden="true"
              >
              Zur Wunschliste hinzuf&uuml;gen
          </button>
        </li>
        <li class="dots-dropdown__list-item">
          <button
            type="button"
            class="dots-dropdown__list-link"
            data-name="Samsung Galaxy S10 Duos G973F/DS 128GB schwarz"
            data-href="samsung-galaxy-s10-duos-g973f-ds-128gb-schwarz-a1992667.html"
            data-id="1992667"
            data-img="https://gzhls.at/i/26/67/1992667-s0.jpg"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="dots-dropdown__list-link__image"
            >
              <path d="m9.01 14h-7.01v2h7.01v3l3.99-4-3.99-4zm5.98-1v-3h7.01v-2h-7.01v-3l-3.99 4z" fill="#059" aria-hidden="true">
            </svg>
            <span class="dots-dropdown__list-text-add">
                Zur Vergleichsliste hinzuf&uuml;gen
            </span>
            <span class="dots-dropdown__list-text-remove">
                Von Vergleichsliste entfernen
            </span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</PVBase>
