<script setup>
import { RouterLink, RouterView } from 'vue-router'
import '@/assets/style.css'
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView class="router-view" />
</template>
