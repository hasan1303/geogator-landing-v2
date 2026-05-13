<template>
  <div id="app">
    <NavBarHome v-if="!isLegalPage" />
    <NavBarLegal v-if="isLegalPage" />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <FooterSection />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NavBarHome from './components/NavBarHome.vue'
import NavBarLegal from './components/NavBarLegal.vue'
import FooterSection from './components/FooterSection.vue'

const route = useRoute()

const isLegalPage = computed(() => {
  return ['/impressum', '/agb', '/datenschutz'].includes(route.path)
})
</script>

<style lang="scss">
@use './assets/styles/global.scss';

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>