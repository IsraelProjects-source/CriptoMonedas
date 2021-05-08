import { createApp } from "vue";
import App from "./App.vue";
//el @ hace referncia a src y si se mueve de posiscion el @ lo encuebtra pra el import
import "@/assets/css/tailwind.css"

createApp(App).mount("#app");
