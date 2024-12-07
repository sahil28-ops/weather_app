// vite.config.js
export default {
  server: {
    proxy: {
      "/api":
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m",
    },
  },
};
