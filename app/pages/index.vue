<template>
  <main class="home">
    <section class="hero">
      <h1 class="hero-heading">Help Protect Women and Children</h1>
      <p class="hero-subheading">
        Rose Foundation provides compassionate protection and pro bono legal support to survivors of abuse, injustice, and human
        rights violations.
      </p>
      <div class="hero-ctas">
        <button data-primary>Get Help</button>
        <button data-secondary>Make a Donation</button>
      </div>
      <figure class="hero-media">
        <Donate />
        <img src="/images/hero-media.webp" alt="" data-desktop />
        <img src="/images/hero-media-mobile.webp" alt="" data-mobile />
      </figure>
      <p class="hero-text">
        In Nigeria, 1 in 3 women experiences physical violence in her lifetime, and 6 out of every 10 children face some form of
        abuse before age 18. Yet for most survivors, justice remains out of reach — blocked by high legal costs, poor access to
        representation, fear of powerful offenders, and a slow justice system. Fewer than 5% of reported child abuse cases receive
        formal support, leaving countless women and children unprotected, unheard, and vulnerable.
      </p>
    </section>

    <ul class="data">
      <li>
        <SvgoData1 filled />
        <div>
          <h3>>30%</h3>
          <p>of women experience some form of gender-based violence in their lifetime</p>
          <a href="http://https://data.unwomen.org/country/nigeria" target="_blank" rel="noopener noreferrer">
            UN Women
            <SvgoArrowTopRight filled />
          </a>
        </div>
      </li>
      <hr />
      <li>
        <SvgoData2 filled />
        <div>
          <h3>{{ "<5%" }}</h3>
          <p>of abused children who report violence receive formal support</p>
          <a href="https://www.unicef.org/nigeria/child-protection" target="_blank" rel="noopener noreferrer">
            UNICEF.org
            <SvgoArrowTopRight filled />
          </a>
        </div>
      </li>
      <hr />
      <li>
        <SvgoData3 filled />
        <div>
          <h3>20m</h3>
          <p>people in Nigeria are survivors of gender-based violence</p>
          <a href="https://endgbv.africa/mapping/nigeria/" target="_blank" rel="noopener noreferrer">
            End GBV Africa
            <SvgoArrowTopRight filled />
          </a>
        </div>
      </li>
    </ul>

    <section class="we">
      <h2 class="we-heading">And here’s how we help</h2>
      <div class="we-modes">
        <button :class="{ isActive: weType === 0 }" @click="weType = 0">Litigation</button>
        <button :class="{ isActive: weType === 1 }" @click="weType = 1">Advocacy</button>
      </div>
      <figure class="we-media">
        <img src="/images/we-media.webp" alt="" data-desktop />
        <img src="/images/we-media-mobile.webp" alt="" data-mobile />
      </figure>
      <p class="we-text">
        Rose Foundation provides compassionate protection and pro bono legal support to survivors of abuse, injustice, and human
        rights violations.
      </p>
    </section>

    <section class="gallery">
      <h2 class="gallery-heading">Gallery</h2>
      <p class="gallery-text" data-mobile>
        Through legal support, advocacy, and community action, we help create safer futures for women and children — one case at a
        time.
      </p>
      <ul class="gallery-media" data-slider>
        <li>
          <img src="/images/gallery-01.webp" alt="" />
        </li>
        <li>
          <img src="/images/gallery-01.webp" alt="" />
        </li>
        <li>
          <img src="/images/gallery-01.webp" alt="" />
        </li>
        <li>
          <img src="/images/gallery-01.webp" alt="" />
        </li>
        <li>
          <img src="/images/gallery-01.webp" alt="" />
        </li>
        <li>
          <img src="/images/gallery-01.webp" alt="" />
        </li>
      </ul>
      <p class="gallery-text" data-desktop>
        Through legal support, advocacy, and community action, we help create safer futures for women and children — one case at a
        time.
      </p>
    </section>
  </main>
</template>

<script setup lang="ts">
const weType = ref(1);

import { ControlsSlider } from "~/interactions/carousel";

onMounted(() => {
  new ControlsSlider(document.querySelector(".gallery") as HTMLElement, { sensisitivity: 0.875 });
});
</script>
