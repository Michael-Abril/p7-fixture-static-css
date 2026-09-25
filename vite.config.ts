// base "./": Varity serves a static app under varity.app/<app>/, so every
// built asset URL must be relative to the page, never the domain root.
export default {
  base: "./",
  build: {
    outDir: "server/public"
  }
}
