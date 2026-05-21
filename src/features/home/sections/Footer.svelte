<footer class="footer">
  <div class="footer__container">
    <div class="footer__brand">
      <a href="/" class="footer__logo-link">
        <img src="/img/logos/logomenucom_1.png" alt="Menucom" class="footer__logo" />
        <span>Menu com</span>
      </a>
      <p class="footer__tagline">Tu negocio, online.</p>
    </div>

    <nav class="footer__nav" aria-label="Footer">
      <div class="footer__column">
        <h3 class="footer__heading">Producto</h3>
        <ul class="footer__list">
          <li><a href="/about-service">Sobre el Servicio</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </div>

      <div class="footer__column">
        <h3 class="footer__heading">Legal</h3>
        <ul class="footer__list">
          <li><a href="/tyc">Términos y Condiciones</a></li>
          <li><a href="/dev-contact">Contacta al desarrollador</a></li>
        </ul>
      </div>
    </nav>
  </div>

  <div class="footer__bottom">
    <p>&copy; {new Date().getFullYear()} Menucom. Todos los derechos reservados.</p>
  </div>
</footer>

<style>
  .footer {
    background-color: #000;
    color: var(--color-text-inverse);
    font-family: var(--font-body);
    padding: var(--space-xl) var(--space-lg) var(--space-md);
  }

  .footer__container {
    max-width: var(--container-max);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-xl);
    align-items: start;
  }

  .footer__brand {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }

  .footer__logo-link {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    text-decoration: none;
    color: inherit;
    font-family: var(--font-bold);
    font-size: 1.1rem;
  }

  .footer__logo {
    height: 32px;
    width: auto;
  }

  .footer__tagline {
    font-family: var(--font-light);
    font-size: 0.95rem;
    opacity: 0.8;
    margin: 0;
  }

  .footer__nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-lg);
  }

  .footer__heading {
    font-family: var(--font-bold);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--space-sm);
    opacity: 0.7;
  }

  .footer__list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }

  .footer__list a {
    color: var(--color-text-inverse);
    text-decoration: none;
    font-size: 0.95rem;
    transition: opacity 0.2s ease;
  }

  .footer__list a:hover {
    text-decoration: underline;
    opacity: 1;
  }

  .footer__bottom {
    max-width: var(--container-max);
    margin: var(--space-xl) auto 0;
    padding-top: var(--space-md);
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    font-size: 0.85rem;
    opacity: 0.6;
    text-align: center;
  }

  /* Tablet and up */
  @media (min-width: 640px) {
    .footer__container {
      grid-template-columns: auto 1fr;
      gap: var(--space-xl);
    }

    .footer__nav {
      justify-content: end;
    }
  }
</style>
