<template>
  <!-- FAQ section - linked from navbar -->
  <section id="faq" class="faq">
    <div class="container">

      <!-- Section header with tag and title -->
      <div class="faq__header">
        <span class="section-tag">FAQ</span>
        <h2 class="faq__title">Häufige <span>Fragen</span></h2>
      </div>

      <!-- Accordion list -->
      <div class="faq__list">
        <div
          v-for="(item, i) in faqs"
          :key="i"
         
          :class="['faq__item', { 'faq__item--open': openIndex === i }]"
          @click="openIndex = openIndex === i ? null : i"
        >
          <!-- Question row: text + plus/minus icon -->
          <div class="faq__question">
            <span>{{ item.q }}</span>
            <!-- Shows − when open, + when closed -->
            <span class="faq__icon">{{ openIndex === i ? '−' : '+' }}</span>
          </div>

          <!-- Answer - only visible when this item is open -->
          <div class="faq__answer" v-show="openIndex === i">
            <p>{{ item.a }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Tracks which FAQ item is currently open (null = all closed)
const openIndex = ref(null)

// FAQ data array - each item has a question (q) and answer (a)
const faqs = [
  { q: 'Was ist GEOGATOR?', a: 'GEOGATOR ist die Analyseplattform des MIM Marken Institut München, basierend auf einer klar definierten Bewertungslogik – ein neuer Standard für Sichtbarkeit in KI-Systemen. Sie zeigt, wie sichtbar und relevant Ihr Unternehmen ist – und welche konkreten Maßnahmen Ihre Position verbessern.' },
  { q: 'Bringt GEOGATOR mehr als eine KI-Abfrage?', a: 'Ja. Eine KI liefert Antworten. GEOGATOR zeigt, ob und warum Ihr Unternehmen überhaupt Teil dieser Antworten ist – und wie Sie das gezielt beeinflussen können.' },
  { q: 'Was misst der GEO Score?', a: 'Der GEO Score bewertet, wie gut Ihr Unternehmen von KI-Systemen verstanden und eingeordnet wird – inklusive Relevanz, Kontext und Wahrscheinlichkeit, empfohlen zu werden.' },
  { q: 'Welche Daten werden analysiert?', a: 'GEOGATOR nutzt ausschließlich öffentlich zugängliche Daten sowie Informationen, die Sie freiwillig bereitstellen. DSGVO-konforme Verarbeitung und volle Kontrolle über Ihre Daten.' },
  { q: 'Warum reicht ein einmaliger Check nicht aus?', a: 'Die Sichtbarkeit in KI-Systemen verändert sich kontinuierlich. Ein einmaliger Check zeigt den Status – nachhaltige Optimierung erfordert regelmäßige Überprüfung und Anpassung.' },
  { q: 'Worin unterscheidet sich GEOGATOR von SEO-Tools?', a: 'SEO misst Auffindbarkeit in Suchmaschinen. GEOGATOR misst, ob Ihr Unternehmen von KI-Systemen verstanden und tatsächlich empfohlen wird – ein fundamental anderer Ansatz.' },
  { q: 'Wie schnell sehe ich Ergebnisse?', a: 'Unmittelbar nach der Analyse erhalten Sie Ihren GEO Score sowie erste konkrete Handlungsempfehlungen.' },
]
</script>

<style lang="scss" scoped>
@use '../assets/styles/variables' as *;

.faq {
  padding: $space-3xl 0;
  background: $color-gray-light; // gri i lehtë

  &__header {
    text-align: center;
    margin-bottom: $space-2xl;
  }

  &__title {
    font-size: clamp(2rem, 4vw, 3rem);
    color: $color-dark;

    span { color: $color-teal; }
  }

  &__list {
    max-width: 760px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: $space-xs;
  }

  // White cards 
  &__item {
    background: $color-white;
    border: 1px solid $color-border;
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    transition: border-color $transition-fast, box-shadow $transition-fast;

    &--open {
      border-color: $color-teal;
      box-shadow: 0 4px 16px rgba($color-teal, 0.1);
    }

    &:hover {
      border-color: $color-teal;
    }
  }

  &__question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $space-md;
    gap: $space-sm;
    font-weight: 600;
    font-size: 0.95rem;
    color: $color-dark;
    user-select: none;
  }

  &__icon {
    font-size: 1.4rem;
    font-weight: 300;
    color: $color-teal;
    flex-shrink: 0;
    line-height: 1;
  }

  &__answer {
    padding: 0 $space-md $space-md;

    p {
      font-size: 0.9rem;
      color: $color-gray;
      line-height: 1.7;
    }
  }
}
</style>