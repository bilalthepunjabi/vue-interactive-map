<template>
    <article class="main">
        <h2 style="color:black">
            USA SVG MAP
        </h2>
        <p style="color: black;">
            {{ pointedLocation }}
        </p>
        <div class="map-container">
            <Map :map="USA" :location-class="getLocationClass" :location-color="getLocationColor"
                @mouseout="unpointLocation" @mousemove="moveOnLocation" />
        </div>
    </article>
</template>

<script>
import MAP_SVGS from 'svg-maps';
import Map from './components/Map.vue'
export default {
    name: 'App',
    components: {
        Map,
    },
    data() {
        return {
            USA: MAP_SVGS.USA,
            pointedLocation: null,
        }
    },
    methods: {
        getLocationName(node) {
            return node && node.attributes.name.value
        },
        pointLocation(event) {
            this.pointedLocation = this.getLocationName(event.target)
        },
        unpointLocation(event) {
            this.pointedLocation = null
        },
        getLocationClass(location, index) {
            // Generate heat map
            return `svg-map__location svg-map__location--heat${index % 4}`
        },
        getLocationColor(location, index) {
            return 'blue';
        }
    },
}
</script>