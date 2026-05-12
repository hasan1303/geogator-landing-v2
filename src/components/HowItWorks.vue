<template>
  <section id="how-it-works" class="how">
    <div class="container">
      <div class="how__header">
        <span class="section-tag">So funktioniert's</span>
        <h2 class="how__title">Schritt für Schritt zu <span>mehr Sichtbarkeit</span></h2>
      </div>

      <div class="how__steps">
        <div class="how__step" v-for="(step, i) in steps" :key="i">
          <div class="how__step-num">{{ String(i + 1).padStart(2, '0') }}</div>
          <div class="how__step-icon">{{ step.icon }}</div>
          <h3>{{ step.title }}</h3>
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
  { icon: '🔍', title: 'Analyse durchführen', desc: 'Geben Sie Ihre Domain ein. GEOGATOR analysiert öffentlich zugängliche Daten über Ihr Unternehmen.' },
  { icon: '📋', title: 'Ergebnisse verstehen', desc: 'Sie erhalten Ihren GEO Score und eine strukturierte Bewertung in drei Analyse-Ebenen.' },
  { icon: '🎯', title: 'Maßnahmen umsetzen', desc: 'Klare, priorisierte Handlungsempfehlungen zeigen Ihnen genau, was zu tun ist – statt zu raten.' },
  { icon: '📈', title: 'Fortschritt überprüfen', desc: 'Mit regelmäßigen Re-Scans verfolgen Sie Ihre Entwicklung und erkennen neue Handlungsbedarfe.' },
]
</script>
<style lang="scss" scoped>
@use '../assets/styles/variables' as *;

.how {
  padding: $space-3xl 0;
  background: $color-white;

  &__header {
    text-align: center;
    margin-bottom: $space-2xl;
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
    margin-bottom: $space-2xl;

    @media (max-width: $bp-lg) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: $bp-sm) { grid-template-columns: 1fr; }
  }

  &__step {
    padding: $space-lg;
    background: $color-mint; // mint i lehtë
    border: 1px solid $color-border;
    border-radius: 20px;
    position: relative;
    transition: transform $transition-base, box-shadow $transition-base;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 16px 40px rgba($color-teal, 0.12);
      border-color: $color-teal;
    }

    &-num {
      font-size: 0.7rem;
      color: $color-teal;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    &-icon { font-size: 2rem; margin-bottom: $space-sm; }

    h3 { font-size: 1rem; font-weight: 700; color: $color-dark; margin-bottom: 0.5rem; }

    p { font-size: 0.875rem; color: $color-gray; line-height: 1.6; }

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
  }

  &__cta-content {
    h3 {
      font-size: 1.6rem;
      color: $color-white;
      margin-bottom: 0.3rem;
    }

    p { color: rgba($color-white, 0.8); }
  }
}
</style>