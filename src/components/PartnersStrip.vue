<template>
  <section aria-label="Parceiros" class="partners-strip">
    <div class="partners-track">
      <div
        v-for="(group, groupIndex) in [0, 1]"
        :key="groupIndex"
        :aria-hidden="groupIndex === 1 ? 'true' : 'false'"
        class="partners-group"
      >
        <div
          v-for="partner in partners"
          :key="`${groupIndex}-${partner.label}`"
          class="partner-item"
        >
          <v-icon size="22">{{ partner.icon }}</v-icon>
          <span>{{ partner.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  type PartnerItem = {
    label: string
    icon: string
  }

  defineProps<{
    partners: PartnerItem[]
  }>()
</script>

<style scoped>
  .partners-strip {
    position: relative;
    overflow: hidden;
    background: #ffffff;
    border-top: 1px solid rgba(11, 43, 63, 0.08);
    padding: 16px 0 0;
    margin-top: 0;
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
    gap: 10px;
    color: rgba(23, 61, 87, 0.7);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.03em;
    opacity: 0.75;
    transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease;
  }

  .partner-item:hover {
    color: #0f8a5f;
    opacity: 1;
    transform: translateY(-2px);
  }

  @keyframes partners-scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
</style>
