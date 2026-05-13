<template>
  <div class="legal">
    <div class="container">
      <div class="legal__header">
        <h1>Impressum</h1>
        <p class="legal__sub">Angaben gemäß § 5 TMG</p>
      </div>

      <div class="legal__content">
        <div class="legal__block">
          <strong>MIM Marken Institut München GmbH</strong><br>
          Ridlerstraße 35a<br>
          80339 München<br>
          Deutschland
        </div>

        <div class="legal__block">
          <h3>Vertreten durch</h3>
          <p>Geschäftsführer: Friedrich M. Kirn</p>
        </div>

        <div class="legal__block">
          <h3>Kontakt</h3>
          <p>Telefon: <a href="tel:+4989729 59915">+49 89 729 59 915</a></p>
          <p>E-Mail: <a href="mailto:kirn@marke41.de">kirn@marke41.de</a></p>
          <p>Website: <a href="https://www.marken-institut-muenchen.de" target="_blank">www.marken-institut-muenchen.de</a></p>
        </div>

        <div class="legal__block">
          <h3>Registereintrag</h3>
          <p>Eintragung im Handelsregister</p>
          <p>Registergericht: Amtsgericht München</p>
          <p>Registernummer: HRB 1722589</p>
        </div>

        <div class="legal__block">
          <h3>Umsatzsteuer-ID</h3>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG:</p>
          <p>DE 258 703 482</p>
        </div>

        <div class="legal__block">
          <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
          <p>Friedrich M. Kirn<br>Ridlerstraße 35a<br>80339 München</p>
        </div>

        <div class="legal__block">
          <h3>Haftung für Inhalte</h3>
          <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
        </div>

        <div class="legal__block">
          <h3>Haftung für Links</h3>
          <p>Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir keine Gewähr.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/variables' as *;

.legal {
  padding: 7rem 0 $space-3xl;
  background: $color-mint;
  background-image:
    linear-gradient(rgba($color-teal, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba($color-teal, 0.05) 1px, transparent 1px);
  background-size: 48px 48px;
  min-height: 100vh;

  @media (max-width: $bp-sm) { padding: 6rem 0 3rem; }

  &__header {
    background: $color-white;
    border: 1px solid $color-border;
    border-radius: 20px;
    padding: $space-lg;
    margin-bottom: $space-xl;
    box-shadow: 0 2px 16px rgba($color-teal, 0.06);

    @media (max-width: $bp-sm) { padding: $space-md; margin-bottom: $space-lg; }

    h1 {
      font-size: clamp(1.6rem, 4vw, 2.2rem);
      color: $color-dark;
      margin-bottom: 0.3rem;
    }
  }

  &__sub {
    color: $color-gray;
    font-size: 0.9rem;
  }

  &__content {
    background: $color-white;
    border: 1px solid $color-border;
    border-radius: 20px;
    padding: $space-lg;
    box-shadow: 0 2px 16px rgba($color-teal, 0.06);

    @media (max-width: $bp-sm) { padding: $space-md; }
  }

  &__block {
    padding: $space-md 0;
    border-bottom: 1px solid $color-border;

    &:first-child { padding-top: 0; }
    &:last-child { border-bottom: none; padding-bottom: 0; }

    h3 {
      font-size: 1rem;
      font-weight: 700;
      color: $color-teal;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.9rem;
      color: $color-gray;
      line-height: 1.7;
      margin-bottom: 0.2rem;
    }

    strong {
      font-size: 0.95rem;
      color: $color-dark;
      font-weight: 600;
      line-height: 1.7;
    }

    a {
      color: $color-teal;
      text-decoration: none;
      &:hover { text-decoration: underline; }
    }
  }
}
</style>