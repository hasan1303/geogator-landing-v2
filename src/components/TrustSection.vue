<template>
  <section id="trust" class="trust">
    <div class="container">
      <div class="trust__inner">
        <div class="trust__content">
          <span class="section-tag">Entwickelt vom MIM Marken Institut München</span>
          <h2 class="trust__title">Unabhängige Bewertungslogik. <span>Verlässliche Methodik.</span></h2>
          <p>GEOGATOR basiert auf einer unabhängigen Bewertungslogik. Das MIM Marken Institut München steht für fundierte Analyse, klare Methodik und nachvollziehbare Einordnung.</p>

          <div class="trust__pillars">
            <div class="trust__pillar" v-for="p in pillars" :key="p.label">
              <span class="trust__pillar-icon">{{ p.icon }}</span>
              <div>
                <strong>{{ p.label }}</strong>
                <p>{{ p.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="trust__privacy">
          <div class="trust__privacy-header">
            <span class="trust__shield">🔒</span>
            <h3>Ihre Daten bleiben unter Ihrer Kontrolle</h3>
          </div>
          <ul class="trust__privacy-list">
            <li v-for="item in privacyItems" :key="item">
              <span class="trust__privacy-check">✓</span>
              {{ item }}
            </li>
          </ul>
          <div class="trust__privacy-footer">
            <strong>Volle Transparenz. Volle Kontrolle.</strong>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const pillars = [
  { icon: '🔬', label: 'Fundierte Analyse', desc: 'Drei-Ebenen-Bewertung auf Basis klarer Kriterien' },
  { icon: '📐', label: 'Klare Methodik', desc: 'Reproduzierbare, vergleichbare Bewertungslogik' },
  { icon: '🧭', label: 'Nachvollziehbare Einordnung', desc: 'Transparente Ergebnisse mit konkreten Maßnahmen' },
]

const privacyItems = [
  'DSGVO-konforme Verarbeitung und Speicherung',
  'Zugriff ausschließlich durch Sie',
  'Vollständige Löschung jederzeit möglich',
  'Freie Entscheidung über die Nutzung Ihrer Ergebnisse',
  'Nur öffentlich zugängliche Daten werden analysiert',
]
</script>
<style lang="scss" scoped>
@use '../assets/styles/variables' as *;

.trust {
  padding: $space-3xl 0;
  background: $color-mint; // mint i lehtë

  &__inner {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: $space-2xl;
    align-items: start;

    @media (max-width: $bp-lg) { grid-template-columns: 1fr; }
  }

  &__title {
    font-size: clamp(1.8rem, 3.5vw, 2.6rem);
    color: $color-dark;
    margin-bottom: $space-sm;

    span { color: $color-teal; }
  }

  &__content > p {
    color: $color-gray;
    line-height: 1.7;
    margin-bottom: $space-lg;
  }

  &__pillars {
    display: flex;
    flex-direction: column;
    gap: $space-md;
  }

  &__pillar {
    display: flex;
    gap: $space-sm;
    align-items: flex-start;

    &-icon { font-size: 1.4rem; flex-shrink: 0; }
    strong { font-size: 0.95rem; color: $color-dark; display: block; margin-bottom: 0.2rem; }
    p { font-size: 0.85rem; color: $color-gray; }
  }

  // Privacy card - white
  &__privacy {
    background: $color-white;
    border: 1px solid $color-border;
    border-radius: 24px;
    padding: $space-lg;
    box-shadow: 0 2px 16px rgba($color-teal, 0.06);
  }

  &__privacy-header {
    display: flex;
    align-items: center;
    gap: $space-sm;
    margin-bottom: $space-md;
    padding-bottom: $space-sm;
    border-bottom: 1px solid $color-border;

    h3 { font-size: 1.05rem; color: $color-dark; }
  }

  &__shield { font-size: 1.5rem; }

  &__privacy-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: $space-md;

    li {
      display: flex;
      gap: 0.75rem;
      font-size: 0.875rem;
      color: $color-gray;
    }
  }

  &__privacy-check {
    color: $color-teal;
    font-weight: 700;
    flex-shrink: 0;
  }

  &__privacy-footer {
    padding-top: $space-sm;
    border-top: 1px solid $color-border;
    font-size: 0.85rem;
    color: $color-teal;
    font-weight: 600;
  }
}
</style>