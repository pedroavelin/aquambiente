<template>
  <section aria-label="Parceiros" class="partners-strip">
    <div class="partners-track">
      <div
        v-for="(group, groupIndex) in partnerGroups"
        :key="groupIndex"
        :aria-hidden="groupIndex === 1 ? 'true' : 'false'"
        class="partners-group"
      >
        <div
          v-for="partner in group"
          :key="`${groupIndex}-${partner.label}`"
          class="partner-item"
        >
          <img :alt="partner.label" class="partner-logo" :src="partner.image">
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import partner1 from '@/assets/parceiros/1.webp'
  import partner2 from '@/assets/parceiros/2.png'
  import partner3 from '@/assets/parceiros/3.jpg'
  import partner4 from '@/assets/parceiros/4.png'
  import partner5 from '@/assets/parceiros/5.webp'
  import partner6 from '@/assets/parceiros/6.png'
  import partner7 from '@/assets/parceiros/7.jpg'
  import partner8 from '@/assets/parceiros/8.png'
  import partner9 from '@/assets/parceiros/9.png'
  import partner10 from '@/assets/parceiros/10.png'
  import partner11 from '@/assets/parceiros/11.jpg'
  import partner12 from '@/assets/parceiros/12.jpg'
  import partner13 from '@/assets/parceiros/13.jpg'
  import partner14 from '@/assets/parceiros/14.png'
  import partner15 from '@/assets/parceiros/15.jpg'

  const partners = [
    { label: 'Parceiro 1', image: partner1 },
    { label: 'Parceiro 2', image: partner2 },
    { label: 'Parceiro 3', image: partner3 },
    { label: 'Parceiro 4', image: partner4 },
    { label: 'Parceiro 5', image: partner5 },
    { label: 'Parceiro 6', image: partner6 },
    { label: 'Parceiro 7', image: partner7 },
    { label: 'Parceiro 8', image: partner8 },
    { label: 'Parceiro 9', image: partner9 },
    { label: 'Parceiro 10', image: partner10 },
    { label: 'Parceiro 11', image: partner11 },
    { label: 'Parceiro 12', image: partner12 },
    { label: 'Parceiro 13', image: partner13 },
    { label: 'Parceiro 14', image: partner14 },
    { label: 'Parceiro 15', image: partner15 },
  ]

  const partnerGroups = [partners, partners]
</script>

<style scoped>
  .partners-strip {
    position: relative;
    overflow: hidden;
    background: #ffffff;
    border-top: 1px solid rgba(11, 43, 63, 0.08);
    padding: 16px 0 18px;
    margin-top: 0;
    margin-bottom: 8px;
    box-shadow: 0 -10px 25px -25px rgba(11, 43, 63, 0.3);
    -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
    mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  }

  .partners-track {
    display: flex;
    width: max-content;
    animation: partners-scroll 38s linear infinite;
  }

  .partners-strip:hover .partners-track {
    animation-play-state: paused;
  }

  .partners-group {
    display: flex;
    align-items: center;
    gap: 56px;
    padding-right: 56px;
    white-space: nowrap;
  }

  .partner-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 120px;
    opacity: 0.8;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .partner-item:hover {
    opacity: 1;
    transform: translateY(-2px);
  }

  .partner-logo {
    display: block;
    max-height: 48px;
    max-width: 120px;
    width: auto;
    height: auto;
    object-fit: contain;
    filter: grayscale(0.2);
  }

  @keyframes partners-scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
</style>
