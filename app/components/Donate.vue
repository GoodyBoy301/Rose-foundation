<template>
  <aside class="donate" :class="{ isActive }">
    <h3 @click="isActive = !isActive">
      Donate to Rose Foundation
      <SvgoChevronDown filled />
    </h3>
    <div class="donate-modes">
      <button :class="{ isActive: type === 0 }" @click="type = 0">One-Time</button>
      <button :class="{ isActive: type === 1 }" @click="type = 1">Monthly</button>
    </div>
    <h4>Select Amount</h4>
    <!-- prettier-ignore -->
    <div class="donate-amounts">
      <p :class="{ isActive: amount === 0 && !_amount }" @click="amount = 0; _amount = null">$10</p>
      <p :class="{ isActive: amount === 1 && !_amount }" @click="amount = 1; _amount = null">$100</p>
      <p :class="{ isActive: amount === 2 && !_amount }" @click="amount = 2; _amount = null">$250</p>
      <p :class="{ isActive: amount === 3 && !_amount }" @click="amount = 3; _amount = null">$500</p>
      <p :class="{ isActive: amount === 4 && !_amount }" @click="amount = 4; _amount = null">$1000</p>
    </div>
    <div class="donate-break">
      <p>or</p>
      <hr />
    </div>
    <div class="donate-input">
      <p>$</p>
      <input type="number" v-model="_amount" placeholder="Enter Amount" />
    </div>
    <button class="donate-cta">
      <SvgoLove filled />
      Donate
    </button>
  </aside>
</template>

<script setup lang="ts">
const isActive = ref(false);
const type = ref(1);
const amount = ref(1);
const _amount = ref<number | null>(null);
</script>
