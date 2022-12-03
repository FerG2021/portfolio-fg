import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from 'primevue/config';

// 
// PRIME VUE
// 

// PrimeVue Components
// import 'primevue/resources/themes/saga-blue/theme.css'        //theme
import 'primevue/resources/themes/lara-dark-blue/theme.css'        //theme
import 'primevue/resources/primevue.min.css'                  //core css
import 'primeicons/primeicons.css'  

// prime flex
import 'primeflex/primeflex.css';

// InputText
import InputText from 'primevue/inputtext'

// MenuBar
import Menubar from 'primevue/menubar';

// Divider
import Divider from 'primevue/divider';

// Dropdown
import Dropdown from 'primevue/dropdown';

// Card
import Card from 'primevue/card';

// Button
import Button from 'primevue/button';

// Accordion
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

// Carousel
import Carousel from 'primevue/carousel';

// Timeline
import Timeline from 'primevue/timeline';

// ProgressBar
import ProgressBar from 'primevue/progressbar';


// importamos las rutas
import router from "./router/index.js";

// vuex
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state: { 
    idioma: null,
  },
  mutations: { 
  },
  actions:{
  },
  modules:{}
})

createApp(App)
  .component('InputText', InputText)  
  .component('Menubar', Menubar)  
  .component('Divider', Divider)  
  .component('Dropdown', Dropdown)  
  .component('Card', Card)  
  .component('Button', Button)  
  .component('Accordion', Accordion)  
  .component('AccordionTab', AccordionTab)  
  .component('Carousel', Carousel)  
  .component('Timeline', Timeline)  
  .component('ProgressBar', ProgressBar)  
  .use(router)
  .use(PrimeVue)
  .use(store)
  .mount("#app");
