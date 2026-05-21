<section class="banner" aria-hidden="true">
  <img
    src="/img/assets/renderStore.jpeg"
    alt=""
    class="banner__img"
  />
</section>

<style>
  .banner {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: black;
  }

  .banner__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  /* Mobile: banner becomes a subtle background layer */
  @media (max-width: 767px) {
    .banner {
      position: absolute;
      inset: 0;
      z-index: 0;
      opacity: 0.15;
    }
  }
</style>
