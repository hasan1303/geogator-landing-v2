<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': scrolled, 'navbar--open': menuOpen }">
    <div class="container navbar__inner">
      <a href="#" class="navbar__logo">
        <img src="/Logo_GEO_GATOR_web.png" alt="GEO GATOR" class="navbar__logo-img" />
      </a>

      <div class="navbar__links" :class="{ 'navbar__links--open': menuOpen }">
        <a v-for="item in navItems" :key="item.id" :href="`#${item.id}`" class="navbar__link" @click="menuOpen = false">
          {{ item.label }}
        </a>
      </div>

      <div class="navbar__actions">
        <a href="#pricing" class="btn btn--ghost navbar__cta">Quick Check – kostenlos</a>
        <button class="navbar__burger" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen">
          <span :class="{ 'open': menuOpen }"></span>
          <span :class="{ 'open': menuOpen }"></span>
          <span :class="{ 'open': menuOpen }"></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

const navItems = [
  { id: 'why', label: 'Warum GEOGATOR' },
  { id: 'how-it-works', label: "So funktioniert's" },
  { id: 'report', label: 'Analyse' },
  { id: 'pricing', label: 'Preise' },
  { id: 'agencies', label: 'Agenturen' },
  { id: 'faq', label: 'FAQ' },
]

const handleScroll = () => { scrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style lang="scss" scoped>
@use '../assets/styles/variables' as *;

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all $transition-base;
  padding: 0.8rem 0;
  background: rgba($color-dark-green, 0.85);
  backdrop-filter: blur(16px);

  &--scrolled {
    background: rgba($color-dark-green, 0.98);
    box-shadow: 0 4px 32px rgba(0, 0, 0, 0.25);
    padding: 0.5rem 0;
  }

  &__inner {
    display: flex;
    align-items: center;
    gap: $space-md;
  }

 &__logo {
  flex-shrink: 0;

  img {
    height: 80px;
    width: 80px;
    object-fit: contain;
    border-radius: 50%;
    background: $color-white;
    box-shadow: 0 2px 12px rgba(0,0,0,0.12);
    ilter: drop-shadow(0 2px 6px rgba(0,0,0,0.3));
    transition: transform 0.2s ease;

    &:hover { transform: scale(1.05); }

    @media (max-width: $bp-sm) { height: 40px; }
  }
}

  

&__links {
  display: flex;
  align-items: center;
  gap: $space-md;
  margin: 0 auto;

  @media (max-width: $bp-lg) {
    display: none;
    position: fixed;
    inset: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: $color-dark-green;
    gap: $space-lg;
    z-index: 9999;        
    top: 0;              
    left: 0;              
    width: 100vw;        
    height: 100vh;        

    &--open { display: flex; }
  }
}

  &__link {
    color: rgba($color-white, 0.75);
    font-size: 0.88rem;
    font-weight: 500;
    transition: color $transition-fast;

    &:hover { color: $color-bright-green; }

    @media (max-width: $bp-lg) {
      font-size: 1.6rem;
      font-family: $font-display;
      font-weight: 700;
      color: $color-white;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: $space-sm;
    margin-left: auto;
  }

  &__cta {
    @media (max-width: $bp-md) { display: none; }
  }

&__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 99999; 

    @media (max-width: $bp-lg) { display: flex; }

    span {
      display: block;
      width: 24px;
      height: 2px;
      background: $color-white;
      border-radius: 2px;
      transition: all $transition-base;

      &.open:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
      &.open:nth-child(2) { opacity: 0; }
      &.open:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
    }
  }
}
</style>