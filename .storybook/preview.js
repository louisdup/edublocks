import "../src/assets/css/tailwind.css";
import "@splidejs/vue-splide/css";
import "../src/data/providers/icon-provider";
import { app } from '@storybook/vue3';
import components from "../src/components";

app.use(components);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "white",
    values: [
      {
        name: "white",
        value: "#f3f4f6"
      }
    ]
  }
}