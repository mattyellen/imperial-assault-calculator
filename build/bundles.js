module.exports = {
  "bundles": {
    "dist/calculator": {
      "includes": [
        "[**/*.js]",
        "**/*.html!text",
        "**/*.css!text",
        "bootstrap",
        "chartjs/Chart.js",
        "core-js",
        "css",
        "fastclick",
        "font-awesome",
        "jquery"
      ],
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
        "aurelia-loader-default",
        "aurelia-event-aggregator",
        "aurelia-history-browser",
        "aurelia-templating-router",
        "aurelia-templating-binding",
        "aurelia-templating-resources",
        "aurelia-logging-console",
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