<template>
  <section class="hero">
    <div class="hero__bg">
      <div class="hero__grid"></div>
      <div class="hero__orb hero__orb--1"></div>
      <div class="hero__orb hero__orb--2"></div>
    </div>

    <div class="container hero__inner">
      <div class="hero__content">
        <div class="hero__tag">
          <span class="section-tag">Ein neuer Standard für AI Visibility</span>
        </div>

        <h1 class="hero__title">
          Sichtbarkeit in<br>
          KI-Systemen ist<br>
          <span class="hero__title-accent">kein Zufall.</span>
        </h1>

        <p class="hero__subtitle">
          Sie ist messbar – und steuerbar.<br>
          GEOGATOR zeigt Ihnen, wie KI-Systeme Ihr Unternehmen<br class="hero__br"> wirklich verstehen und empfehlen.
        </p>

        <div class="hero__metrics">
          <div class="hero__metric">
            <span class="hero__metric-num">GEO</span>
            <span class="hero__metric-label">Score</span>
          </div>
          <div class="hero__metric-divider"></div>
          <div class="hero__metric">
            <span class="hero__metric-num">3</span>
            <span class="hero__metric-label">Ebenen Analyse</span>
          </div>
          <div class="hero__metric-divider"></div>
          <div class="hero__metric">
            <span class="hero__metric-num">0–100</span>
            <span class="hero__metric-label">Bewertungsskala</span>
          </div>
        </div>

        <div class="hero__actions">
          <a href="#pricing" class="btn btn--primary btn--lg">
            Kostenlosen Quick Check starten
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
          <a href="#report" class="btn btn--ghost btn--lg">Analyse ansehen</a>
        </div>
      </div>

      <div class="hero__visual">
        <div class="hero__score-card">
          <div class="hero__score-header">
            <span class="hero__score-label">GEO Score</span>
            <span class="hero__score-status competitive">Competitive</span>
          </div>
          <div class="hero__score-main">
            <div class="hero__score-ring">
              <svg viewBox="0 0 120 120" class="hero__ring-svg">
                <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="8"/>
                <circle cx="60" cy="60" r="52" fill="none" stroke="#7AB648" stroke-width="8"
                  stroke-dasharray="327" stroke-dashoffset="98" stroke-linecap="round"
                  transform="rotate(-90 60 60)" class="hero__ring-progress"/>
              </svg>
              <div class="hero__score-value">
                <span class="hero__score-num">64</span>
                <span class="hero__score-max">/100</span>
              </div>
            </div>
          </div>
          <div class="hero__score-breakdown">
            <div class="hero__breakdown-item" v-for="item in breakdown" :key="item.label">
              <span class="hero__breakdown-label">{{ item.label }}</span>
              <div class="hero__breakdown-bar">
                <div class="hero__breakdown-fill" :style="{ width: item.pct + '%', background: item.color }"></div>
              </div>
              <span class="hero__breakdown-val">{{ item.val }}</span>
            </div>
          </div>
        </div>

        <div class="hero__float-badge hero__float-badge--1">
          <span>🎯</span>
          <span>Klare Handlungsempfehlungen</span>
        </div>
        <div class="hero__float-badge hero__float-badge--2">
          <span>📊</span>
          <span>Wettbewerbsvergleich</span>
        </div>
      </div>
    </div>

    <div class="hero__scroll">
      <div class="hero__scroll-line"></div>
    </div>
  </section>
</template>

<script setup>
const breakdown = [
  { label: 'Topics', val: '22/30', pct: 73, color: '#7AB648' },
  { label: 'Content', val: '28/40', pct: 70, color: '#F47B20' },
  { label: 'Trust', val: '14/30', pct: 47, color: '#A8CC78' },
]
</script>
<style lang="scss" scoped>
@use '../assets/styles/variables' as *;

.hero {
  min-height: 100vh;
  background: $color-mint;
  background-image:
    linear-gradient(rgba($color-teal, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba($color-teal, 0.06) 1px, transparent 1px);
  background-size: 48px 48px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  &__bg { position: absolute; inset: 0; pointer-events: none; }

  &__orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);

    &--1 {
      width: 600px; height: 600px;
      background: rgba($color-teal, 0.08);
      top: -200px; right: -100px;
      @media (max-width: $bp-sm) { width: 250px; height: 250px; }
    }

    &--2 {
      width: 400px; height: 400px;
      background: rgba($color-orange, 0.05);
      bottom: -100px; left: 10%;
    }
  }

  &__inner {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $space-lg;
    align-items: center;
    padding-top: 120px;
    padding-bottom: $space-2xl;

    @media (max-width: $bp-lg) {
      grid-template-columns: 1fr;
      padding-top: 100px;
      padding-bottom: $space-xl;
    }

    @media (max-width: $bp-sm) {
      padding-top: 90px;
      padding-bottom: $space-lg;
      gap: $space-md;
    }
  }

  &__content {
    position: relative;
    z-index: 1;

    @media (max-width: $bp-lg) { text-align: center; }
    @media (max-width: $bp-sm) { text-align: left; }
  }

  &__tag {
    margin-bottom: $space-md;
    @media (max-width: $bp-lg) { display: flex; justify-content: center; }
    @media (max-width: $bp-sm) { justify-content: flex-start; }
  }

  &__title {
    font-size: clamp(2rem, 4vw, 3.2rem);
    color: $color-dark;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: $space-md;
    letter-spacing: -0.03em;

    @media (max-width: $bp-sm) { font-size: clamp(1.9rem, 7vw, 2.6rem); }

    &-accent { color: $color-teal; display: block; }
  }

  &__subtitle {
    color: $color-gray;
    font-size: 1.05rem;
    line-height: 1.7;
    margin-bottom: $space-lg;
    max-width: 520px;

    @media (max-width: $bp-lg) { margin: 0 auto $space-lg; }
    @media (max-width: $bp-sm) { margin: 0 0 $space-lg; }
  }

  &__metrics {
    display: flex;
    align-items: center;
    gap: $space-md;
    margin-bottom: $space-lg;
    padding: $space-sm $space-md;
    background: $color-white;
    border: 1px solid $color-border;
    border-radius: 16px;
    width: fit-content;
    box-shadow: 0 2px 12px rgba($color-teal, 0.08);

    @media (max-width: $bp-lg) { margin: 0 auto $space-lg; }
    @media (max-width: $bp-sm) {
      width: 100%;
      justify-content: space-around;
      margin: 0 0 $space-lg;
    }
  }

  &__metric {
    text-align: center;
    display: flex;
    flex-direction: column;

    &-num {
      font-weight: 800;
      font-size: 1.3rem;
      color: $color-teal;
    }

    &-label {
      font-size: 0.68rem;
      color: $color-gray;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    &-divider {
      width: 1px;
      height: 36px;
      background: $color-border;
    }
  }

  &__actions {
    display: flex;
    gap: $space-sm;
    flex-wrap: wrap;

    @media (max-width: $bp-lg) { justify-content: center; }
    @media (max-width: $bp-sm) {
      flex-direction: column;
      .btn { width: 100%; justify-content: center; }
    }
  }

  &__visual {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 40px 50px;
    overflow: visible;

    @media (max-width: $bp-lg) { display: none; }
  }

  &__score-card {
    background: $color-teal;
    border: 1px solid rgba($color-white, 0.15);
    border-radius: 24px;
    padding: $space-md;
    width: 300px;
    position: relative;
    z-index: 1;
    box-shadow: 0 24px 64px rgba($color-teal, 0.25);
  }

  &__score-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: $space-md;
  }

  &__score-label {
    font-size: 0.75rem;
    color: rgba($color-white, 0.7);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  &__score-status {
    padding: 0.2rem 0.75rem;
    border-radius: 50px;
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;

    &.competitive {
      background: rgba($color-white, 0.2);
      color: $color-white;
    }
  }

  &__score-main {
    display: flex;
    justify-content: center;
    margin-bottom: $space-md;
  }

  &__score-ring {
    position: relative;
    width: 120px;
    height: 120px;
  }

  &__ring-svg { width: 100%; height: 100%; }
  &__ring-progress { animation: ringFill 1.5s ease-out 0.5s both; }

  @keyframes ringFill {
    from { stroke-dashoffset: 327; }
    to { stroke-dashoffset: 98; }
  }

  &__score-value {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  &__score-num {
    font-weight: 800;
    font-size: 2.2rem;
    color: $color-white;
    line-height: 1;
  }

  &__score-max { font-size: 0.75rem; color: rgba($color-white, 0.6); }
  &__score-breakdown { display: flex; flex-direction: column; gap: 0.75rem; }

  &__breakdown-item {
    display: grid;
    grid-template-columns: 60px 1fr 48px;
    align-items: center;
    gap: 0.5rem;
  }

  &__breakdown-label { font-size: 0.78rem; color: rgba($color-white, 0.7); }

  &__breakdown-bar {
    height: 6px;
    background: rgba($color-white, 0.2);
    border-radius: 3px;
    overflow: hidden;
  }

  &__breakdown-fill {
    height: 100%;
    border-radius: 3px;
    animation: barFill 1.2s ease-out 0.8s both;
  }

  @keyframes barFill { from { width: 0 !important; } }

  &__breakdown-val { font-size: 0.72rem; color: rgba($color-white, 0.7); text-align: right; }

  &__float-badge {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1rem;
    background: $color-white;
    border-radius: 50px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    font-size: 0.8rem;
    font-weight: 500;
    color: $color-dark;
    white-space: nowrap;
    z-index: 2;

    &--1 { top: -20px; right: -10px; animation: floatBadge 3s ease-in-out infinite; }
    &--2 { bottom: -20px; left: -10px; animation: floatBadge 3s ease-in-out infinite; animation-delay: 1.5s; }
  }

  @keyframes floatBadge {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }

  &__scroll {
    display: flex;
    justify-content: center;
    padding-bottom: $space-lg;
    position: relative;
    z-index: 1;
    @media (max-width: $bp-sm) { display: none; }
  }

  &__scroll-line {
    width: 1px;
    height: 60px;
    background: linear-gradient(to bottom, rgba($color-teal, 0.4), transparent);
    animation: scrollPulse 2s ease-in-out infinite;
  }

  @keyframes scrollPulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }
}
</style>