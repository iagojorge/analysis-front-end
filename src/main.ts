import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import Chart from 'chart.js/auto';

import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma/css/bulma.css';
import 'vuetify/styles'

const vuetify = createVuetify({
  components,
  directives,
})

//import axios from 'axios';

//async function fetchData() {
//    try {
//      const response = await axios.get('http://localhost:3000/app/client');

//      console.log(response.data);
//    } catch (error) {
      // Lida com erros de solicitação aqui
 //     console.error('Erro ao buscar dados:', error);
 //   }
 // }
  
  // Chama a função para buscar dados
 // fetchData();*//


createApp(App).use(vuetify).mount('#app')
