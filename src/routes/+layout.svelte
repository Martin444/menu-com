<script>
  import '../styles/global.css';
  import { fade } from 'svelte/transition';
  import { page } from '$app/stores';
  import { browser } from '$app/environment';
  import { afterNavigate } from '$app/navigation';
  import { pageview, event } from '$lib/analytics/firebase.js';
  import { scrollAnalytics } from '$lib/actions/scrollAnalytics.js';
  import Navbar from '../features/home/sections/Navbar.svelte';
  import Footer from '../features/home/sections/Footer.svelte';

  function gotoLogin() {
    event('cta_click', { type: 'login' });
    window.location.href = "https://menucom-dashboard.netlify.app/#/login";
  }

  function gotoRegister() {
    event('cta_click', { type: 'register' });
    window.location.href = "https://menucom-dashboard.netlify.app/#/registrate";
  }

  afterNavigate((nav) => {
    if (browser && nav.to?.url) {
      pageview(nav.to.url.pathname + nav.to.url.search);
    }
  });
</script>

<svelte:head>
  <meta name="author" content="Menucom" />
  <meta property="og:site_name" content="Menucom" />
  <meta property="og:locale" content="es_ES" />
</svelte:head>

<div class="app" use:scrollAnalytics>
  <Navbar onLogin={gotoLogin} onRegister={gotoRegister} />

  <main class="main">
    {#key $page.url.pathname}
      <div in:fade={{ duration: 250, delay: 150 }} out:fade={{ duration: 150 }}>
        <slot />
      </div>
    {/key}
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
