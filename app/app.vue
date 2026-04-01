<template>
  <div>
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import "~/styles/index.scss";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

onMounted(() => {
  const lenis = new Lenis({
    lerp: 0.1,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
});

const projName = ref(`Rose Foundation`);
const projDesc = ref(
  `Rose Foundation provides free legal services and advocacy support to protect the rights of women and children facing abuse, injustice, and discrimination.`,
);
const projImg = ref(`https://res.cloudinary.com/du2uqkpsq/image/upload/v1775022741/photo_5935872045956664486_y_oqcyl1.jpg`);

const computedPageMeta = computed(() => {
  return {
    title: projName.value,
    meta: [
      { hid: "description", property: "description", content: projDesc.value },
      { hid: "og-type", property: "og:type", content: "website" },
      { hid: "og-title", property: "og:title", content: projName.value },
      { hid: "og-description", property: "og:description", content: projDesc.value },
      {
        hid: "og-image",
        property: "og:image",
        content: projImg,
      },
      { hid: "twitter-card", property: "twitter:card", content: "summary_large_image" },
      { hid: "twitter-title", property: "twitter:title", content: projName.value },
      { hid: "twitter-description", property: "twitter:description", content: projDesc.value },
      {
        hid: "twitter-image",
        property: "twitter:image",
        content: projImg,
      },
    ],
  };
});

useHead(computedPageMeta);
</script>
