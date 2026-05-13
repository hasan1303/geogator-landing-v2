<template>
  <section id="how-it-works" class="how">
    <div class="container">
      <div class="how__header">
        <span class="section-tag">So funktioniert's</span>
        <h2 class="how__title">Schritt für Schritt zu <span>mehr Sichtbarkeit</span></h2>
      </div>

      <div class="how__steps">
        <div class="how__step" v-for="(step, i) in steps" :key="i">
          
          
          <div class="how__step-header">
            <span class="how__step-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3>{{ step.title }}</h3>
          </div>
          <p>{{ step.desc }}</p>
          <div class="how__step-arrow" v-if="i < steps.length - 1">→</div>
        </div>
      </div>

      <div class="how__cta-box">
        <div class="how__cta-content">
          <h3>Bereit zu starten?</h3>
          <p>In wenigen Minuten verstehen, wo Sie stehen.</p>
        </div>
        <a href="#pricing" class="btn btn--primary btn--lg">Jetzt Quick Check starten</a>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  { title: 'Analyse durchführen', desc: 'Geben Sie Ihre Domain ein. GEOGATOR analysiert öffentlich zugängliche Daten über Ihr Unternehmen.' },
  {  title: 'Ergebnisse verstehen', desc: 'Sie erhalten Ihren GEO Score und eine strukturierte Bewertung in drei Analyse-Ebenen.' },
  {  title: 'Maßnahmen umsetzen', desc: 'Klare, priorisierte Handlungsempfehlungen zeigen Ihnen genau, was zu tun ist – statt zu raten.' },
  {  title: 'Fortschritt überprüfen', desc: 'Mit regelmäßigen Re-Scans verfolgen Sie Ihre Entwicklung und erkennen neue Handlungsbedarfe.' },
]
</script>

<style lang="scss" scoped>
@use '../assets/styles/variables' as *;

.how {
  padding: $space-3xl 0;
  background: $color-white;

  @media (max-width: $bp-sm) { padding: 3rem 0; }

  &__header {
    text-align: center;
    margin-bottom: $space-2xl;

    @media (max-width: $bp-sm) { margin-bottom: 1.5rem; }
  }

  &__title {
    font-size: clamp(2rem, 4vw, 3rem);
    color: $color-dark;

    span { color: $color-teal; }
  }

  &__steps {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: $space-md;
    position: relative;
    margin-bottom: $space-lg;

    @media (max-width: $bp-lg) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: $bp-sm) {
      grid-template-columns: 1fr;
      gap: 0.75rem;
      margin-bottom: $space-md;
    }
  }

  &__step {
    padding: $space-md;
    background: $color-mint;
    border: 1px solid $color-border;
    border-radius: 20px;
    position: relative;
    transition: transform $transition-base, box-shadow $transition-base;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 32px rgba($color-teal, 0.12);
      border-color: $color-teal;
    }

    // Ikona sipër
    &-icon {
      font-size: 1.8rem;
      line-height: 1;
      margin-bottom: 0.75rem;
    }

    // Numri dhe titulli krah për krah
    &-header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.5rem;

      h3 {
        font-size: 0.95rem;
        font-weight: 700;
        color: $color-dark;
        margin: 0;
        line-height: 1.3;
      }
    }

    &-num {
      font-size: 0.7rem;
      color: $color-teal;
      font-weight: 700;
      background: $color-white;
      border: 1px solid $color-border;
      border-radius: 6px;
      padding: 0.15rem 0.4rem;
      flex-shrink: 0;
    }

    p { font-size: 0.85rem; color: $color-gray; line-height: 1.6; }

    &-arrow {
      display: none;
      @media (min-width: $bp-lg) {
        display: block;
        position: absolute;
        right: -20px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.2rem;
        color: $color-teal;
        z-index: 1;
      }
    }
  }

  &__cta-box {
    background: $color-teal;
    border-radius: 24px;
    padding: $space-xl $space-2xl;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: $space-md;
    box-shadow: 0 8px 32px rgba($color-teal, 0.2);

    @media (max-width: $bp-md) {
      flex-direction: column;
      text-align: center;
      padding: $space-lg;
    }

    @media (max-width: $bp-sm) { padding: $space-md; }
  }

  &__cta-content {
    h3 { font-size: 1.6rem; color: $color-white; margin-bottom: 0.3rem; }
    p { color: rgba($color-white, 0.8); }
  }
}
</style>