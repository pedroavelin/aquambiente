<template>
  <div class="google-map-card">
    <div ref="mapContainer" class="google-map"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const mapContainer = ref<HTMLElement | null>(null)

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as
  | string
  | undefined


const initializeMap = () => {
  if (
    !mapContainer.value ||
    !(window as any).google?.maps ||
    !apiKey
  ) {
    return
  }

  const googleMaps = (window as any).google.maps

  /*
   * =========================================================
   * GOOGLE MAPS
   * =========================================================
   */

  const map = new googleMaps.Map(mapContainer.value, {
    center: {
      lat: -11.8,
      lng: 17.4
    },

    zoom: 4,

    disableDefaultUI: true,

    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,

    draggable: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,

    gestureHandling: 'none',

    backgroundColor: 'transparent'
  })

  /*
   * =========================================================
   * DIVISÕES DAS PROVÍNCIAS
   * =========================================================
   *
   * O Google Maps Data Layer permite carregar GeoJSON
   * diretamente sobre o mapa.
   */

  const provincesUrl =
    'https://raw.githubusercontent.com/sam190890/AGL-_DPA2025_SM/main/Angola_Provincias.geojson'

  map.data.loadGeoJson(
    provincesUrl,
    null,
    (features: any[]) => {
      console.log(
        `Mapa carregado: ${features.length} províncias`
      )
    }
  )

  /*
   * =========================================================
   * ESTILO DAS PROVÍNCIAS
   * =========================================================
   */

  map.data.setStyle({
    fillColor: 'transparent',
    fillOpacity: 0.48,

    strokeColor: 'transparent',
    strokeOpacity: 0.85,
    strokeWeight: 1
  })

  /*
   * =========================================================
   * MARCADORES
   * =========================================================
   *
   * Coordenadas aproximadas das principais zonas provinciais.
   */

  const provinceMarkers = [
    {
      name: 'Luanda',
      lat: -8.8383,
      lng: 13.2344
    },

    {
      name: 'Bengo',
      lat: -8.0833,
      lng: 13.1167
    },

    {
      name: 'Cuanza Norte',
      lat: -9.0833,
      lng: 14.9167
    },

    {
      name: 'Cuanza Sul',
      lat: -10.9667,
      lng: 14.9167
    },

    {
      name: 'Benguela',
      lat: -12.5763,
      lng: 13.4055
    },

    {
      name: 'Huambo',
      lat: -12.7761,
      lng: 15.7392
    },

    {
      name: 'Huíla',
      lat: -14.9167,
      lng: 13.5
    },

    {
      name: 'Namibe',
      lat: -15.1961,
      lng: 12.1522
    },

    {
      name: 'Cunene',
      lat: -17.0667,
      lng: 15.7333
    },

    {
      name: 'Bié',
      lat: -12.3833,
      lng: 16.9333
    },

    {
      name: 'Malanje',
      lat: -9.5402,
      lng: 16.341
    },

    {
      name: 'Lunda Norte',
      lat: -8.6,
      lng: 20.4
    },

    {
      name: 'Lunda Sul',
      lat: -11.7833,
      lng: 20.9167
    },

    {
      name: 'Moxico',
      lat: -11.7833,
      lng: 19.9167
    },

    {
      name: 'Cuando Cubango',
      lat: -15.7833,
      lng: 19.1167
    },

    {
      name: 'Zaire',
      lat: -6.2667,
      lng: 14.2333
    }
  ]

  /*
   * =========================================================
   * PIN VERDE
   * =========================================================
   */

  const greenPin = {
    path:
      'M12 2C7.03 2 3 5.95 3 10.8C3 17.2 12 23 12 23C12 23 21 17.2 21 10.8C21 5.95 16.97 2 12 2Z',

    fillColor: '#7ed957',
    fillOpacity: 1,

    strokeColor: '#ffffff',
    strokeWeight: 2,

    scale: 1,

    anchor: new googleMaps.Point(12, 23)
  }

  /*
   * =========================================================
   * CRIAÇÃO DOS MARCADORES
   * =========================================================
   */

  provinceMarkers.forEach(
    ({ name, lat, lng }) => {
      new googleMaps.Marker({
        map,

        position: {
          lat,
          lng
        },

        title: name,

        icon: greenPin,

        optimized: true
      })
    }
  )

  /*
   * =========================================================
   * DESTACAR LUANDA
   * =========================================================
   */

  new googleMaps.Marker({
    map,

    position: {
      lat: -8.8383,
      lng: 13.2344
    },

    title: 'Aquambiente - Luanda',

    icon: {
      path: googleMaps.SymbolPath.CIRCLE,

      scale: 4,

      fillColor: '#ffffff',
      fillOpacity: 1,

      strokeColor: '#62d68b',
      strokeWeight: 3
    }
  })
}

/*
 * =========================================================
 * CARREGAR GOOGLE MAPS
 * =========================================================
 */

const loadGoogleMaps = () => {
  if (!apiKey) {
    console.error(
      'VITE_GOOGLE_MAPS_API_KEY não está configurada.'
    )

    return
  }

  if ((window as any).google?.maps) {
    initializeMap()

    return
  }

  const scriptId = 'google-maps-script'

  const existingScript =
    document.getElementById(scriptId)

  if (existingScript) {
    existingScript.addEventListener(
      'load',
      initializeMap,
      { once: true }
    )

    return
  }

  const script =
    document.createElement('script')

  script.id = scriptId

  script.src =
    `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=googleMapsInitCallback`

  script.async = true
  script.defer = true

  ;(window as any).googleMapsInitCallback =
    initializeMap

  document.head.appendChild(script)
}

onMounted(() => {
  loadGoogleMaps()
})
</script>

<style scoped>

.google-map-card {
  width: 100%;
  height: 400px;

  display: flex;
  align-items: stretch;
  justify-content: stretch;

  overflow: hidden;
  border-radius: 0px;

  background: transparent;
}

.google-map {
  width: 100%;
  height: 100%;

  overflow: hidden;
  border-radius: 0px;

  background: transparent;
}
/* =========================================================
   DESKTOP
========================================================= */

@media (min-width: 961px) {

  .google-map-card {
    height: 150px;
  }

}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 960px) {

  .google-map-card {
    height: 180px;
  }

  .google-map {
    min-height: 180px;
  }

}

/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 600px) {

  .google-map-card {
    height: 170px;
  }

  .google-map {
    min-height: 170px;
  }

}

</style>