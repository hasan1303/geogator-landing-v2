<template>
  <section id="report" class="report">
    <div class="report__bg"></div>
    <div class="container">
      <div class="report__header">
        <span class="section-tag">So sieht Ihre Analyse aus</span>
        <h2 class="report__title">Ein erster <span>Einblick</span></h2>
        <p class="report__desc">Der GEO Score verbindet Inhalte und Kontext zu einer nachvollziehbaren Bewertung – und macht sichtbar, wie Unternehmen von KI-Systemen tatsächlich verstanden und empfohlen werden.</p>
      </div>

      <div class="report__content">
        <div class="report__card">
          <div class="report__card-header">
            <div class="report__logo-mini">🐊 GEOGATOR</div>
            <span class="report__card-label">Report: Ihr Unternehmen</span>
          </div>

          <div class="report__scores">
            <div class="report__main-score">
              <div class="report__score-circle">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="44" fill="none" stroke="#EBF2DC" stroke-width="7"/>
                  <circle cx="50" cy="50" r="44" fill="none" stroke="#7AB648" stroke-width="7"
                    stroke-dasharray="276" stroke-dashoffset="83" stroke-linecap="round"
                    transform="rotate(-90 50 50)"/>
                </svg>
                <div class="report__score-inner">
                  <span class="report__score-n">64</span>
                  <span class="report__score-s">Overall</span>
                </div>
              </div>
              <div class="report__score-status">
                <span class="report__badge report__badge--competitive">Competitive</span>
                <p>Solide Grundlage mit Potenzial für gezielte Optimierung</p>
              </div>
            </div>

            <div class="report__sub-scores">
              <div class="report__sub" v-for="s in subScores" :key="s.label">
                <div class="report__sub-top">
                  <span class="report__sub-label">{{ s.label }}</span>
                  <span class="report__sub-val">{{ s.val }}</span>
                </div>
                <div class="report__sub-bar">
                  <div class="report__sub-fill" :style="{ width: s.pct + '%', background: s.color }"></div>
                </div>
                <span class="report__sub-status" :class="s.cls">{{ s.status }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="report__layers">
          <h3>Drei Analyse-Ebenen</h3>
          <div class="report__layer" v-for="layer in layers" :key="layer.num">
            <div class="report__layer-num">{{ layer.num }}</div>
            <div class="report__layer-info">
              <h4>{{ layer.title }}</h4>
              <p>{{ layer.desc }}</p>
            </div>
          </div>

          <div class="report__insight">
            <div class="report__insight-icon">💡</div>
            <div>
              <strong>Im Report sichtbar:</strong>
              <ul>
                <li v-for="item in insights" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const subScores = [
  { label: 'Topics', val: '22/30', pct: 73, color: '#7AB648', status: 'Strong', cls: 'strong' },
  { label: 'Content', val: '28/40', pct: 70, color: '#F47B20', status: 'Strong', cls: 'strong' },
  { label: 'Trust', val: '14/30', pct: 47, color: '#A8CC78', status: 'Emerging', cls: 'emerging' },
]

const layers = [
  { num: '01', title: 'Layer 1 — Primary Content', desc: 'Bewertung der expliziten Inhalte: Was sagt Ihr Unternehmen über sich selbst?' },
  { num: '02', title: 'Layer 2 — Industry & Web Context', desc: 'Einordnung im Branchenkontext: Wie gut passt Ihr Content zu den Erwartungen?' },
  { num: '03', title: 'Layer 3 — Generative AI Perspective', desc: 'Simulation: Wie würde eine KI Ihr Unternehmen verstehen und empfehlen?' },
]

const insights = [
  'Ihr GEO Score auf einen Blick',
  'Zentrale Stärken Ihrer Positionierung',
  'Konkrete Schwächen mit Handlungsbedarf',
  'Erste Maßnahmen zur Optimierung',
]
</script>
<style lang="scss" scoped>
@use '../assets/styles/variables' as *;

.report {
  padding: $space-3xl 0;
  background: $color-mint; // mint i lehtë
  position: relative;
  overflow: hidden;

  &__bg {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 80% 50%, rgba($color-teal, 0.06) 0%, transparent 60%);
  }

  &__header {
    text-align: center;
    margin-bottom: $space-2xl;
    position: relative;
  }

  &__title {
    font-size: clamp(2rem, 4vw, 3rem);
    color: $color-dark;
    margin-bottom: $space-sm;

    span { color: $color-teal; }
  }

  &__desc {
    max-width: 600px;
    margin: 0 auto;
    color: $color-gray;
    font-size: 1.05rem;
    line-height: 1.7;
  }

  &__content {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: $space-xl;
    align-items: start;
    position: relative;

    @media (max-width: $bp-lg) { grid-template-columns: 1fr; }
  }

  // White card - light background
  &__card {
    background: $color-white;
    border-radius: 24px;
    padding: $space-lg;
    box-shadow: 0 8px 32px rgba($color-teal, 0.08);
    border: 1px solid $color-border;
  }

  &__card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: $space-lg;
    padding-bottom: $space-sm;
    border-bottom: 1px solid $color-border;
  }

  &__logo-mini {
    font-weight: 800;
    font-size: 0.9rem;
    color: $color-teal;
  }

  &__card-label {
    font-size: 0.72rem;
    color: $color-gray;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  &__scores {
    display: flex;
    flex-direction: column;
    gap: $space-lg;
  }

  &__main-score {
    display: flex;
    gap: $space-md;
    align-items: center;
  }

  &__score-circle {
    width: 100px;
    height: 100px;
    position: relative;
    flex-shrink: 0;

    svg { width: 100%; height: 100%; }
  }

  &__score-inner {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__score-n {
    font-weight: 800;
    font-size: 1.8rem;
    color: $color-dark;
    line-height: 1;
  }

  &__score-s {
    font-size: 0.65rem;
    color: $color-gray;
  }

  &__score-status {
    flex: 1;

    p {
      font-size: 0.85rem;
      color: $color-gray;
      margin-top: 0.5rem;
      line-height: 1.5;
    }
  }

  &__badge {
    display: inline-flex;
    padding: 0.25rem 0.8rem;
    border-radius: 50px;
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;

    &--competitive {
      background: rgba($color-teal, 0.12);
      color: $color-teal;
    }
  }

  &__sub-scores {
    display: flex;
    flex-direction: column;
    gap: $space-sm;
  }

  &__sub {
    &-top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.3rem;
    }

    &-label { font-size: 0.75rem; color: $color-gray; }
    &-val { font-size: 0.75rem; font-weight: 500; color: $color-dark; }

    &-bar {
      height: 8px;
      background: $color-mint;
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 0.3rem;
    }

    &-fill { height: 100%; border-radius: 4px; transition: width 1.5s ease-out; }

    &-status {
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;

      &.strong { color: $color-teal; }
      &.emerging { color: $color-orange; }
    }
  }

  // Right column
  &__layers {
    h3 { font-size: 1.3rem; color: $color-dark; margin-bottom: $space-md; }
  }

  &__layer {
    display: flex;
    gap: $space-sm;
    margin-bottom: $space-md;

    &-num {
      font-size: 0.75rem;
      color: $color-teal;
      background: $color-white;
      border: 1px solid $color-border;
      border-radius: 8px;
      padding: 0.3rem 0.6rem;
      height: fit-content;
      flex-shrink: 0;
      font-weight: 600;
    }

    &-info {
      h4 { font-size: 0.95rem; font-weight: 600; color: $color-dark; margin-bottom: 0.3rem; }
      p { font-size: 0.85rem; color: $color-gray; line-height: 1.5; }
    }
  }

  
  &__insight {
    display: flex;
    gap: $space-sm;
    padding: $space-md;
    background: $color-teal; 
    border-radius: 16px;
    color: $color-white;
    margin-top: $space-md;

    &-icon { font-size: 1.2rem; flex-shrink: 0; }

    strong { font-size: 0.9rem; display: block; margin-bottom: 0.5rem; }

    ul {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;

      li {
        font-size: 0.82rem;
        color: rgba($color-white, 0.85);

        &::before { content: '→ '; color: rgba($color-white, 0.6); }
      }
    }
  }
}
</style>