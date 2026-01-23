<template>
  <header class="header">
    <div class="header-logo">
      <SvgoLogo filled />
    </div>
    <nav class="header-nav" :class="{ isOpen }">
      <NuxtLink href="/">Home</NuxtLink>
      <NuxtLink href="/about">About</NuxtLink>
      <NuxtLink href="/stories">Stories</NuxtLink>
    </nav>
    <button class="header-cta">Donate Today</button>
    <div class="header-hamburger first" data-mobile @click="isOpen = !isOpen">
      <div class="line-one" />
      <div class="line-two" />
      <div class="line-three" />
    </div>
  </header>
</template>

<script setup lang="ts">
const isOpen = ref(false);
const route = useRoute();
onMounted(() => {
  const burger = document.querySelector(".header-hamburger")!;
  let first = true;
  watch(isOpen, () => {
    if (first) {
      burger.classList.remove("first");
      first = false;
    }
    burger.classList.toggle("animate");
  });
  watch(route, () => (isOpen.value = false));
});
</script>
