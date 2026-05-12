<template>
  <section id="why" class="why">
    <div class="container">
      <div class="why__header">
        <span class="section-tag">Warum ein Prompt nicht reicht</span>
        <h2 class="why__title">Was GEOGATOR <span>anders macht</span></h2>
        <p class="why__desc">Ein einzelner Prompt zeigt Momentaufnahmen. Er ist zufällig, nicht reproduzierbar und nicht vergleichbar. GEOGATOR schafft Struktur.</p>
      </div>

      <div class="why__grid">
        <div class="why__card why__card--problem">
          <div class="why__card-icon">❌</div>
          <h3>Ohne GEOGATOR</h3>
          <ul class="why__list">
            <li v-for="item in problems" :key="item">
              <span class="why__list-dot why__list-dot--red"></span>
              {{ item }}
            </li>
          </ul>
        </div>

        <div class="why__card why__card--solution">
          <div class="why__card-icon">✅</div>
          <h3>Mit GEOGATOR</h3>
          <ul class="why__list">
            <li v-for="item in solutions" :key="item">
              <span class="why__list-dot why__list-dot--green"></span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <div class="why__features">
        <div class="why__feature" v-for="feat in features" :key="feat.title">
          <div class="why__feature-icon">{{ feat.icon }}</div>
          <div>
            <h4>{{ feat.title }}</h4>
            <p>{{ feat.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const problems = [
  'Zufällige, nicht reproduzierbare Ergebnisse',
  'Keine Vergleichbarkeit über Zeit',
  'Kein Einblick in Wettbewerb',
  'Keine strukturierten Handlungshinweise',
  'Sichtbarkeit bleibt unscharf',
]

const solutions = [
  'Konsistenter GEO Score (0–100)',
  'Klare Vergleichbarkeit und Entwicklung',
  'Einordnung im Wettbewerb',
  'Priorisierte Handlungsempfehlungen',
  'Sichtbarkeit wird greifbar und steuerbar',
]

const features = [
  { icon: '🎯', title: 'Objektive Einordnung', desc: 'Klar definierter Bewertungsmaßstab – nachvollziehbar und vergleichbar.' },
  { icon: '📊', title: 'Strukturierte Entscheidungen', desc: 'Eine belastbare Basis für gezielte Maßnahmen und strategische Planung.' },
  { icon: '🔄', title: 'Entwicklung über Zeit', desc: 'Regelmäßige Überprüfung zeigt Fortschritt und neue Handlungsbedarfe.' },
  { icon: '🏆', title: 'Wettbewerbsvergleich', desc: 'Ihre Position im Markt – klar und kontextbezogen eingeordnet.' },
]
</script>
<style lang="scss" scoped>
@use '../assets/styles/variables' as *;

.why {
  padding: $space-3xl 0;
  background: $color-white; // seksion i bardhë

  &__header {
    text-align: center;
    margin-bottom: $space-2xl;
  }

  &__title {
    font-size: clamp(2rem, 4vw, 3rem);
    color: $color-dark;
    margin-bottom: $space-sm;

    span { color: $color-teal; }
  }

  &__desc {
    max-width: 560px;
    margin: 0 auto;
    color: $color-gray;
    font-size: 1.05rem;
    line-height: 1.7;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $space-md;
    margin-bottom: $space-xl;

    @media (max-width: $bp-md) { grid-template-columns: 1fr; }
  }

  &__card {
    padding: $space-lg;
    border-radius: 20px;
    border: 1px solid $color-border;
    background: $color-white;

    &-icon { font-size: 1.5rem; margin-bottom: $space-sm; }

    h3 { font-size: 1.2rem; margin-bottom: $space-sm; color: $color-dark; }

    // Problem card - warm light background
    &--problem {
      background: #FFF8F5;
      border-color: #FFD0B0;
    }

    // Solution card - mint light background
    &--solution {
      background: $color-mint;
      border-color: $color-border;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    li {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      font-size: 0.95rem;
      color: $color-gray;
      line-height: 1.5;
    }
  }

  &__list-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
    margin-top: 0.4rem;

    &--red { background: #FF6B4A; }
    &--green { background: $color-teal; }
  }

  &__features {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: $space-md;

    @media (max-width: $bp-lg) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: $bp-sm) { grid-template-columns: 1fr; }
  }

  &__feature {
    display: flex;
    gap: $space-sm;
    padding: $space-md;
    background: $color-mint;
    border: 1px solid $color-border;
    border-radius: 16px;
    transition: transform $transition-base, box-shadow $transition-base;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 32px rgba($color-teal, 0.12);
      border-color: $color-teal;
    }

    &-icon { font-size: 1.5rem; flex-shrink: 0; }

    h4 { font-size: 0.95rem; font-weight: 600; margin-bottom: 0.3rem; color: $color-dark; }
    p { font-size: 0.85rem; color: $color-gray; line-height: 1.5; }
  }
}
</style>