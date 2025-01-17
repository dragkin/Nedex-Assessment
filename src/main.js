import { createApp } from 'vue'
import App from './App.vue'
import IngredientsList from './components/IngredientList.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)
app.component('ingredients-list',IngredientsList)
app.mount('#app')
