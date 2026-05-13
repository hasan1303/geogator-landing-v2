<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="footer__brand">
          <div class="footer__logo">
            <img src="/Logo_GEO_GATOR_web.png" alt="GEO GATOR" class="footer__logo-img" />
          </div>
          <p>Ein Angebot des MIM Marken Institut München.<br>Ein neuer Standard für AI Visibility.</p>
          <div class="footer__contact">
            <a href="mailto:kirn@marke41.de">kirn@marke41.de</a>
            <a href="tel:+4989729 59915">+49 89 729 59 915</a>
          </div>
        </div>

        <div class="footer__links-col" v-for="col in linkCols" :key="col.title">
          <h4>{{ col.title }}</h4>
          <ul>
            <li v-for="link in col.links" :key="link.label">
              <a :href="link.href">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <p>© 2025 MIM Marken Institut München GmbH · Ridlerstraße 35a, 80339 München</p>
       <div class="footer__legal">
  <router-link to="/impressum">Impressum</router-link>
  <router-link to="/agb">AGB</router-link>
  <router-link to="/datenschutz">Datenschutz</router-link>
</div>

      </div>
    </div>
  </footer>
</template>

<script setup>
const linkCols = [
  {
    title: 'Produkt',
    links: [
      { label: 'GEO Quick Check', href: '#pricing' },
      { label: 'GEO Deep Scan', href: '#pricing' },
      { label: 'GEO Pulse', href: '#pricing' },
      { label: 'Für Agenturen', href: '#agencies' },
    ],
  },
  {
    title: 'Informationen',
    links: [
      { label: 'Warum GEOGATOR', href: '#why' },
      { label: "So funktioniert's", href: '#how-it-works' },
      { label: 'Beispiel-Analyse', href: '#report' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Unternehmen',
    links: [
      { label: 'MIM Marken Institut', href: 'https://www.marken-institut-muenchen.de' },
      { label: 'Partnerprogramm', href: '#agencies' },
      { label: 'Kontakt', href: 'mailto:kirn@marke41.de' },
    ],
  },
]
</script>

<style lang="scss" scoped>
@use '../assets/styles/variables' as *;

.footer {
  background: $color-mint;
  color: $color-dark;
  border-top: 1px solid $color-border;
  width: 100%;
  margin: 0;
  padding: 0;


  &__top {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: $space-xl;
    padding: $space-2xl 0;
    border-bottom: 1px solid $color-border;

    @media (max-width: $bp-lg) { grid-template-columns: 1fr 1fr; }
    @media (max-width: $bp-sm) { grid-template-columns: 1fr; gap: $space-lg; padding: $space-xl 0; }
  }

  &__brand {
    p {
      font-size: 0.875rem;
      line-height: 1.7;
      margin-bottom: $space-sm;
      max-width: 280px;
      color: $color-gray;
    }
  }

  &__logo { margin-bottom: $space-sm; }

  &__logo-img {
    height: 80px;
    width: auto;
    object-fit: contain;
    @media (max-width: $bp-sm) { height: 60px; }
  }

  &__contact {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    a {
      font-size: 0.85rem;
      color: $color-gray;
      transition: color $transition-fast;
      &:hover { color: $color-teal; }
    }
  }

  &__links-col {
    h4 {
      font-size: 0.8rem;
      font-weight: 700;
      color: $color-teal;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: $space-sm;
    }

    ul { display: flex; flex-direction: column; gap: 0.7rem; }

    a {
      font-size: 0.875rem;
      color: $color-gray;
      transition: color $transition-fast;
      &:hover { color: $color-teal; }
    }
  }

  // Bottom bar - teal background
  &__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: $space-md;
  flex-wrap: wrap;
  background: $color-teal;
  padding: $space-sm $space-md;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  padding-left: calc(50vw - 50% + #{$space-md});
  padding-right: calc(50vw - 50% + #{$space-md});

  @media (max-width: $bp-sm) { flex-direction: column; text-align: center; }

  p { font-size: 0.78rem; color: rgba($color-white, 0.8); }
}

  &__legal {
    display: flex;
    gap: $space-md;

    a {
      font-size: 0.78rem;
      color: rgba($color-white, 0.8);
      transition: color $transition-fast;
      &:hover { color: $color-white; }
    }
  }
}
</style>