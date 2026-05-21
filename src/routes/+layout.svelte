<script>
  import '../styles/global.css';
  import Navbar from '../features/home/sections/Navbar.svelte';
  import Footer from '../features/home/sections/Footer.svelte';

  function gotoLogin() {
    window.location.href = "https://menucom-dashboard.netlify.app/#/login";
  }

  function gotoRegister() {
    window.location.href = "https://menucom-dashboard.netlify.app/#/registrate";
  }
</script>

<svelte:head>
  <meta name="author" content="Menucom" />
  <meta property="og:site_name" content="Menucom" />
  <meta property="og:locale" content="es_ES" />
</svelte:head>

<div class="app">
  <Navbar onLogin={gotoLogin} onRegister={gotoRegister} />

  <main class="main">
    <slot />
  </main>

  <Footer />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
  }

  .main {
    flex: 1 0 auto;
  }
</style>
