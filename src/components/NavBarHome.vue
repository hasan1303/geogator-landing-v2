<template>
  <nav class="navbar" :class="{ 'navbar--hidden': !visible }">
    <div class="container navbar__inner">

      <router-link to="/" class="navbar__logo">
        <img src="/Logo_GEO_GATOR_web.png" alt="GEO GATOR" />
      </router-link>

      <div class="navbar__links" :class="{ 'navbar__links--open': menuOpen }">
        <a href="#why" class="navbar__link" @click="menuOpen = false">Neuer Standard</a>
        <a href="#how-it-works" class="navbar__link" @click="menuOpen = false">So funktioniert's</a>
        <a href="#report" class="navbar__link" @click="menuOpen = false">Analyse</a>
        <a href="#pricing" class="navbar__link" @click="menuOpen = false">Preise</a>
        <a href="#agencies" class="navbar__link" @click="menuOpen = false">Agenturen</a>
        <a href="#faq" class="navbar__link" @click="menuOpen = false">FAQ</a>
      </div>

      <div class="navbar__actions">
        <a href="#pricing" class="btn btn--primary navbar__cta">
          Jetzt kostenlosen GEO Quick Check starten
        </a>
        <button class="navbar__burger" @click="menuOpen = !menuOpen">
          <span :class="{ open: menuOpen }"></span>
          <span :class="{ open: menuOpen }"></span>
          <span :class="{ open: menuOpen }"></span>
        </button>
      </div>

    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const visible = ref(true)
let lastScroll = 0

const handleScroll = () => {
  const current = window.scrollY
  visible.value = current < lastScroll || current < 80
  lastScroll = current
}

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
  transition: transform 0.3s ease;
  padding: 0.6rem 0;
  background: $color-teal;

  &--hidden {
    transform: translateY(-100%);
  }

  &__inner {
    display: flex;
    align-items: center;
    gap: $space-sm;
  }

  &__logo {
    flex-shrink: 0;
    z-index: 1001;

    img {
      height: 52px;
      width: 52px;
      object-fit: cover;
      border-radius: 50%;
      display: block;

      @media (max-width: $bp-sm) {
        height: 44px;
        width: 44px;
      }
    }
  }

  &__links {
    display: flex;
    align-items: center;
    gap: $space-sm;
    margin: 0 auto;

    @media (max-width: $bp-lg) {
      display: none;
      position: fixed;
      inset: 0;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: $color-teal;
      gap: $space-lg;
      z-index: 9999;
      width: 100vw;
      height: 100vh;

      &--open {
        display: flex;
      }
    }
  }

  &__link {
    color: rgba($color-white, 0.85);
    font-size: 0.85rem;
    font-weight: 500;
    transition: color $transition-fast;
    text-decoration: none;

    &:hover {
      color: $color-white;
    }

    @media (max-width: $bp-lg) {
      font-size: 1.4rem;
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
    font-size: 0.78rem !important;
    padding: 0.6rem 1rem !important;

    @media (max-width: $bp-md) {
      display: none;
    }
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

    @media (max-width: $bp-lg) {
      display: flex;
    }

    span {
      display: block;
      width: 24px;
      height: 2px;
      background: $color-white;
      border-radius: 2px;
      transition: all $transition-base;

      &.open:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }

      &.open:nth-child(2) {
        opacity: 0;
      }

      &.open:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
      }
    }
  }
}
</style>