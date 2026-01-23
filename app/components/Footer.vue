<template>
  <footer class="footer">
    <div class="footer-top">
      <h6>
        Justice should never depend on money, power, or influence. Whether you’re seeking help or supporting our work, your action
        makes protection possible.
      </h6>
      <div class="footer-top-ctas">
        <button data-secondary>Get Help</button>
        <button data-primary>Make a Donation</button>
      </div>
    </div>
    <figure class="footer-media">
      <Donate />
      <img src="/images/footer.webp" alt="" data-desktop />
      <img src="/images/footer-mobile.webp" alt="" data-mobile />
    </figure>
    <div class="footer-bottom">
      <div class="footer-bottom-left">
        <h5>Navigation</h5>
        <div>
          <nav>
            <h6>Website</h6>
            <NuxtLink href="/">Home</NuxtLink>
            <NuxtLink href="/about">About</NuxtLink>
            <NuxtLink href="/stories">Our Stories</NuxtLink>
            <NuxtLink href="/donate">Donations</NuxtLink>
          </nav>
          <nav>
            <h6>Socials</h6>
            <NuxtLink href="https://x.com/rose.foundation_">Twitter</NuxtLink>
            <NuxtLink href="https://instagram.com/rose.foundation_">Instagram</NuxtLink>
            <NuxtLink href="https://linkedin.com/rose.foundation_">LinkedIn</NuxtLink>
          </nav>
        </div>
        <p data-desktop="">© 2026 Rose Foundation. All rights reserved.</p>
      </div>
      <div class="footer-bottom-right">
        <h5>Address</h5>
        <div>
          <nav>
            <h6>M.A. AjaNwachuku & Associates</h6>
            <address>
              No. 1 Nwodo Street,<br />
              Abakaliki, Ebonyi State,<br />
              Nigeria.
            </address>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>
