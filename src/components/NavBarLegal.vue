<template>
  <nav class="navbar-legal">
    <div class="container navbar-legal__inner">
      <router-link to="/" class="navbar-legal__logo">
        <img src="/Logo_GEO_GATOR_web.png" alt="GEO GATOR" />
      </router-link>

      <div class="navbar-legal__links" :class="{ 'navbar-legal__links--open': menuOpen }">
        <router-link to="/" class="navbar-legal__link" @click="menuOpen = false">Home</router-link>
        <router-link to="/impressum" class="navbar-legal__link" @click="menuOpen = false">Impressum</router-link>
        <router-link to="/agb" class="navbar-legal__link" @click="menuOpen = false">AGB</router-link>
        <router-link to="/datenschutz" class="navbar-legal__link" @click="menuOpen = false">Datenschutz</router-link>
      </div>

      <button class="navbar-legal__burger" @click="menuOpen = !menuOpen">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
</script>

<style lang="scss" scoped>
@use '../assets/styles/variables' as *;

.navbar-legal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: $color-teal;
  padding: 0.6rem 0;

  &__inner {
    display: flex;
    align-items: center;
    gap: $space-md;
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

      @media (max-width: $bp-sm) { height: 44px; width: 44px; }
    }
  }

  &__links {
    display: flex;
    align-items: center;
    gap: $space-md;
    margin-left: auto;

    @media (max-width: $bp-md) {
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

      &--open { display: flex; }
    }
  }

  &__link {
    color: rgba($color-white, 0.85);
    font-size: 0.9rem;
    font-weight: 500;
    text-decoration: none;
    transition: color $transition-fast;

    &:hover { color: $color-white; }

    &.router-link-active {
      color: $color-white;
      font-weight: 700;
      border-bottom: 2px solid $color-white;
      padding-bottom: 2px;
    }

    @media (max-width: $bp-md) {
      font-size: 1.4rem;
      font-weight: 700;
      color: $color-white;
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
    margin-left: auto;

    @media (max-width: $bp-md) { display: flex; }

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