import "./assets/main.css";

import { createApp } from "vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";

// Components
import App from "./App.vue";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: "biteTheme",
    themes: {
      biteTheme: {
        dark: false,
        colors: {
          primary: "#004A7C",
          secondary: "#00B7E3",
          accent: "#C0C0C0",
          background: "#F5F5F5",
        },
      },
    },
  },
});

const app = createApp(App);

app.use(vuetify);
app.mount("#app");
