<template>
  <div class="google-map-card">
    <div ref="mapContainer" class="google-map" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const mapContainer = ref<HTMLElement | null>(null)
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined

const angolaOutline = [
  { lat: -4.5, lng: 12.2 },
  { lat: -5.8, lng: 12.4 },
  { lat: -7.3, lng: 12.8 },
  { lat: -8.8, lng: 13.0 },
  { lat: -9.9, lng: 13.1 },
  { lat: -10.9, lng: 13.7 },
  { lat: -11.3, lng: 14.6 },
  { lat: -12.0, lng: 15.1 },
  { lat: -12.8, lng: 15.9 },
  { lat: -13.6, lng: 16.7 },
  { lat: -14.2, lng: 17.1 },
  { lat: -15.0, lng: 17.6 },
  { lat: -15.9, lng: 17.9 },
  { lat: -16.8, lng: 18.6 },
  { lat: -17.5, lng: 19.4 },
  { lat: -17.8, lng: 20.2 },
  { lat: -17.1, lng: 20.8 },
  { lat: -16.4, lng: 21.4 },
  { lat: -15.3, lng: 21.9 },
  { lat: -14.5, lng: 21.7 },
  { lat: -13.6, lng: 21.1 },
  { lat: -12.5, lng: 20.2 },
  { lat: -11.5, lng: 19.5 },
  { lat: -10.5, lng: 18.6 },
  { lat: -9.6, lng: 17.8 },
  { lat: -8.8, lng: 17.1 },
  { lat: -8.0, lng: 16.2 },
  { lat: -7.2, lng: 15.4 },
  { lat: -6.3, lng: 14.5 },
  { lat: -5.5, lng: 13.5 },
  { lat: -4.9, lng: 12.8 },
  { lat: -4.5, lng: 12.2 }
]

const provinceMarkers = [
  { lat: -8.836, lng: 13.234 },
  { lat: -8.083, lng: 13.114 },
  { lat: -8.609, lng: 14.941 },
  { lat: -10.96, lng: 14.851 },
  { lat: -12.583, lng: 13.417 },
  { lat: -12.194, lng: 15.337 },
  { lat: -17.12, lng: 15.05 },
  { lat: -15.208, lng: 12.154 },
  { lat: -9.553, lng: 16.341 },
  { lat: -11.863, lng: 19.567 },
  { lat: -9.71, lng: 20.99 },
  { lat: -10.787, lng: 21.994 },
  { lat: -14.842, lng: 21.29 },
  { lat: -12.388, lng: 17.0 }
]

const initializeMap = () => {
  if (!mapContainer.value || !(window as any).google?.maps || !apiKey) {
    return
  }

  const googleMaps = (window as any).google.maps

  const map = new googleMaps.Map(mapContainer.value, {
center: { lat: -12.5, lng: 18.5 },
zoom: 5,
    disableDefaultUI: true,
    zoomControl: false,
    draggable: false,
    fullscreenControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    scrollwheel: false,
    gestureHandling: 'none',
    styles: [
      {
        featureType: 'all',
        elementType: 'geometry',
        stylers: [{ color: '#cfe3f4' }]
      },
      {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#d8e8f5' }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#b4d9f3' }]
      },
      {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [{ color: '#e5eef8' }]
      },
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'transit',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
      }
    ]
  })

  new googleMaps.Polygon({
    map,
    paths: angolaOutline,
    strokeColor: '#7aa8d6',
    strokeOpacity: 1,
    strokeWeight: 2.5,
    fillColor: '#a9c9e6',
    fillOpacity: 0.45
  })

  provinceMarkers.forEach(({ lat, lng }) => {
    new googleMaps.Marker({
      position: { lat, lng },
      map,
      icon: {
        path: googleMaps.SymbolPath.CIRCLE,
        scale: 6,
        fillColor: 'red',
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeWeight: 2
      },
      title: 'Província'
    })
  })
}

const loadGoogleMaps = () => {
  if (!apiKey) {
    return
  }

  if ((window as any).google?.maps) {
    initializeMap()
    return
  }

  const scriptId = 'google-maps-script'
  const existingScript = document.getElementById(scriptId)

  if (existingScript) {
    existingScript.addEventListener('load', initializeMap, { once: true })
    return
  }

  const script = document.createElement('script')
  script.id = scriptId
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=googleMapsInitCallback`
  script.async = true
  script.defer = true

  ;(window as any).googleMapsInitCallback = initializeMap
  document.head.appendChild(script)
}

onMounted(() => {
  loadGoogleMaps()
})
</script>

<style scoped>
.google-map-card {
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  width: 100%;
  height: clamp(160px, 18vw, 220px);
  min-height: 160px;
}

.google-map {
  width: 100%;
  height: 100%;
  min-height: 160px;
  border-radius: 5px;
  overflow: hidden;
  border: none;
  box-shadow: none;
  background: transparent;
}

@media (max-width: 960px) {
  .google-map-card,
  .google-map {
    min-height: 180px;
    height: clamp(180px, 30vw, 220px);
  }
}

@media (max-width: 600px) {
  .google-map-card,
  .google-map {
    min-height: 150px;
    height: clamp(150px, 42vw, 190px);
  }
}

</style>
