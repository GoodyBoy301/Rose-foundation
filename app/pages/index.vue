<template>
  <main class="home">
    <section class="hero">
      <h1 class="hero-heading">Rose Foundation for the Protection of Women and Children</h1>
      <p class="hero-subheading">
        Rose Foundation provides free legal services and advocacy support to protect the rights of women and children facing
        abuse, injustice, and discrimination.
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
        For many women and children in Nigeria, justice remains difficult to access. High legal costs, fear of retaliation, and
        institutional barriers prevent survivors from seeking protection. The figures below illustrate the reality we are working
        to change.
      </p>
    </section>

    <ul class="data">
      <li>
        <SvgoData1 filled />
        <div>
          <h3>>30%</h3>
          <p>of women experience some form of gender-based violence in their lifetime</p>
          <a
            href="https://fida.org.ng/2024/#:~:text=FIDA%20Nigeria%20stands%20unwavering%20in,and%20abuse%20in%20the%20society."
            target="_blank"
            rel="noopener noreferrer"
          >
            FIDA, Nigeria
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
          <a
            href="https://www.unicef.org/nigeria/child-protection?utm_source=chatgpt.com"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          <a
            href="https://www.agencedh.org/en/gender-based-violence-in-nigeria-a-major-scourge/?utm_source=chatgpt.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ADH
            <SvgoArrowTopRight filled />
          </a>
        </div>
      </li>
    </ul>
    <p class="data-conclusion">Behind every number is a life and a story of resilience waiting to be heard</p>

    <section class="we">
      <h2 class="we-heading">How do we help?</h2>
      <div class="we-modes">
        <button :class="{ isActive: weType === 0 }" @click="weType = 0">Litigation</button>
        <button :class="{ isActive: weType === 1 }" @click="weType = 1">Advocacy</button>
      </div>
      <p class="we-text">
        <span v-if="weType === 0">
          Rose Foundation provides dedicated legal representation to women and children facing abuse, injustice, or rights
          violations. We handle cases from start to finish, filing complaints, pursuing protection orders, representing clients in
          court, and ensuring justice is served. Our team works tirelessly to hold perpetrators accountable and secure outcomes
          that protect and restore the dignity of survivors.
        </span>
        <span v-if="weType === 1">
          Advocacy at Rose Foundation goes beyond the courtroom. We provide free legal guidance, support education and vocational
          training for survivors, and connect them with resources to rebuild their lives. Through community outreaches, we educate
          families on recognizing abuse, protecting themselves, and speaking up, combining legal support, education, and
          empowerment to create safer, stronger communities.
        </span>
      </p>
      <figure class="we-media">
        <img src="/images/we-media.webp" alt="" data-desktop />
        <img src="/images/we-media-mobile.webp" alt="" data-mobile />
      </figure>
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
