<script>
  import HeroSection from "./sections/HeroSection.svelte";
  import BannerImage from "./sections/BannerImage.svelte";
  import PopularCatalogs from "./sections/PopularCatalogs.svelte";
  import OwnerCatalogs from "./sections/OwnerCatalogs.svelte";
  import FeaturedMerchants from "./sections/FeaturedMerchants.svelte";
  import PlatformStats from "./sections/PlatformStats.svelte";

  function gotoRegister() {
    window.location.href = "https://menucom-dashboard.netlify.app/#/registrate";
  }
</script>

<div class="home">
  <div class="home__content">
    <HeroSection onGetStarted={gotoRegister} />

    <PlatformStats />

    <FeaturedMerchants title="Comerciantes Destacados" limit={6} />

    <PopularCatalogs title="Catálogos Populares" />

    <!--
      Para mostrar catálogos de un propietario específico,
      descomentá la línea de abajo y reemplazá OWNER_ID con el UUID real.
    -->
    <!-- <OwnerCatalogs ownerId="OWNER_ID" title="Más de este creador" /> -->
  </div>

  <div class="home__banner">
    <BannerImage />
  </div>
</div>

<style>
  .home {
    display: grid;
    grid-template-columns: 1fr;
    min-height: 100dvh;
  }

  .home__content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
  }

  .home__banner {
    display: none;
  }

  /* Desktop: two-column layout */
  @media (min-width: 1024px) {
    .home {
      grid-template-columns: 2fr 1fr;
    }

    .home__content {
      grid-column: 1;
    }

    .home__banner {
      display: block;
      grid-column: 2;
      height: 100dvh;
      position: sticky;
      top: 0;
    }
  }
</style>
