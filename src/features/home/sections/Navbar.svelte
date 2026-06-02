<script>
  import { onMount } from 'svelte';
  import { event } from '$lib/analytics/gtag.js';
  import Button from "../components/Button.svelte";

  export let onLogin = () => {};
  export let onRegister = () => {};

  let isMenuOpen = false;
  let scrolled = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
  }

  onMount(() => {
    function handleScroll() {
      scrolled = window.scrollY > 10;
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<header class="navbar" class:scrolled>
  <div class="navbar__brand">
    <a href="/" class="logo-link">
      <img src="/img/logos/logomenucom_1.png" alt="Menucom logo" class="logo-img" />
      <span class="logo-text">Menu com</span>
    </a>
  </div>

  <nav class="navbar__nav" class:open={isMenuOpen} aria-label="Principal">
    <button class="nav__item nav__item--ghost" on:click={() => { event('cta_click', { type: 'login' }); onLogin(); }}>Login</button>
    <div class="nav__cta">
      <Button variant="secondary" label="Registrate" onClick={() => { event('cta_click', { type: 'register' }); onRegister(); }} />
    </div>
  </nav>

  {#if isMenuOpen}
    <button
      class="navbar__backdrop"
      on:click={closeMenu}
      aria-label="Cerrar menú"
    ></button>
  {/if}

  <button
    class="navbar__toggle"
    aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
    aria-expanded={isMenuOpen}
    on:click={toggleMenu}
  >
    <span class="hamburger" class:open={isMenuOpen}></span>
  </button>
</header>

<style>
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-md) var(--space-lg);
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: var(--color-bg);
    transition: background-color 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease;
  }

  .navbar.scrolled {
    background-color: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.06);
  }

  .navbar__brand {
    display: flex;
    align-items: center;
  }

  .logo-link {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    text-decoration: none;
    color: inherit;
  }

  .logo-img {
    height: 40px;
    width: auto;
  }

  .logo-text {
    font-family: var(--font-bold);
    font-size: 19px;
  }

  .navbar__nav {
    display: flex;
    align-items: center;
    gap: var(--space-md);
  }

  .nav__item {
    font-family: var(--font-bold);
    font-size: 15px;
    color: var(--color-primary);
    background: none;
    border: none;
    padding: var(--space-xs) var(--space-sm);
    border-radius: var(--radius-md);
    transition: background-color 0.2s ease;
  }

  .nav__item:hover {
    background-color: var(--color-secondary-alpha);
  }

  .navbar__toggle {
    display: none;
    background: none;
    border: none;
    padding: var(--space-xs);
    cursor: pointer;
  }

  .hamburger {
    display: block;
    width: 24px;
    height: 2px;
    background-color: var(--color-text);
    position: relative;
    transition: background-color 0.2s ease;
  }

  .hamburger::before,
  .hamburger::after {
    content: '';
    position: absolute;
    left: 0;
    width: 24px;
    height: 2px;
    background-color: var(--color-text);
    transition: transform 0.2s ease;
  }

  .hamburger::before {
    top: -7px;
  }

  .hamburger::after {
    top: 7px;
  }

  .hamburger.open {
    background-color: transparent;
  }

  .hamburger.open::before {
    transform: translateY(7px) rotate(45deg);
  }

  .hamburger.open::after {
    transform: translateY(-7px) rotate(-45deg);
  }

  .navbar__backdrop {
    display: none;
  }

  /* Mobile */
  @media (max-width: 768px) {
    .navbar__toggle {
      display: block;
    }

    .navbar__backdrop {
      display: block;
      position: fixed;
      inset: 0;
      top: 72px;
      background: rgba(0, 0, 0, 0.3);
      z-index: 98;
      border: none;
      cursor: pointer;
      animation: fadeIn 0.2s ease;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .navbar__nav {
      position: fixed;
      inset: 0;
      top: 72px;
      flex-direction: column;
      align-items: stretch;
      background-color: var(--color-bg);
      padding: var(--space-lg);
      gap: var(--space-lg);
      transform: translateX(100%);
      transition: transform 0.25s ease;
      display: flex;
      z-index: 99;
    }

    .navbar__nav.open {
      transform: translateX(0);
    }

    .nav__item {
      font-size: 18px;
      text-align: left;
      padding: var(--space-md);
    }

    .nav__cta {
      display: flex;
      justify-content: center;
    }
  }
</style>
