module.exports = {
  "bundles": {
    "dist/app-build": {
      "includes": [
        "[dist/**/*.js]",
        "dist/**/*.html!text",
        "dist/**/*.css!text",
        "bootstrap",
        "chartjs/Chart.js",
        "core-js",
        "css",
        "fastclick",
        "font-awesome",
        "jquery"
      ],
      // excludes: [
      //   "config.js" // So our wildcard globbing doesn't include this config file
      // ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": true,
        "rev": false
      }
    },
    "dist/aurelia": {
      "includes": [
        "aurelia-framework",
        "aurelia-bootstrapper",
        "aurelia-dependency-injection",
        "aurelia-pal-browser",
        "fetch"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": false,
        "rev": false
      }
    }
  }
};