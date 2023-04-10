import { createApp, ref, computed, onMounted } from 'vue';
import App from './App.vue'

import './assets/main.css'

const app = createApp(App);

app.component('map-component', {
    setup() {
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
  
      return {
        mapRed,
        makeRed,
        simplemapsUsmap
      };
    },
  
    template: `
      <div id="map"></div>
      <div>
        <button v-if="!mapRed" @click="makeRed">Make Red</button>
      </div>
    `
  });

app.mount('#app')
