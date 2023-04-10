<template>
    <article class="main">
        <h1>Sample Page</h1>
        <div class="some-specific-part-for-map">
            <div id="map"></div>
            <div>
                <button v-if="!mapRed" @click="makeRed">Make Red</button>
            </div>
        </div>
    </article>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const mapRed = ref(false);
const simplemapsUsmap = computed(() => window.simplemaps_usmap);

const makeRed = () => {
    mapRed.value = true;
    simplemapsUsmap.value.mapdata.main_settings.state_color = 'red';
    simplemapsUsmap.value.refresh();
};

onMounted(() => {
    simplemapsUsmap.value.load();
});
</script>