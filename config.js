System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@2.1.1",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
    "aurelia-framework": "npm:aurelia-framework@1.1.2",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.2.1",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "bootstrap": "github:twbs/bootstrap@3.3.7",
    "chartjs": "github:chartjs/Chart.js@1.0.2",
    "chartjs/Chart.js": "github:chartjs/Chart.js@1.0.2",
    "core-js": "npm:core-js@1.2.7",
    "css": "github:systemjs/plugin-css@0.1.33",
    "fastclick": "npm:fastclick@1.0.6",
    "fetch": "github:github/fetch@2.0.3",
    "font-awesome": "npm:font-awesome@4.7.0",
    "jquery": "github:components/jquery@2.2.4",
    "text": "github:systemjs/plugin-text@0.0.9",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.0.6"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:twbs/bootstrap@3.3.7": {
      "jquery": "npm:jquery@3.2.1"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-binding@1.2.1": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0"
    },
    "npm:aurelia-bootstrapper@2.1.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-framework": "npm:aurelia-framework@1.1.2",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.2",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.2.1",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.2.1",
      "aurelia-router": "npm:aurelia-router@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.3.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.4.0",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.1.0"
    },
    "npm:aurelia-dependency-injection@1.3.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-event-aggregator@1.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1"
    },
    "npm:aurelia-framework@1.1.2": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-history-browser@1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-loader-default@1.0.2": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1"
    },
    "npm:aurelia-metadata@1.0.3": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-pal-browser@1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-polyfills@1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-route-recognizer@1.1.0": {
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-router@1.3.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0"
    },
    "npm:aurelia-task-queue@1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-templating-binding@1.3.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-templating-resources@1.4.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-templating-router@1.1.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-templating@1.4.2": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@5.0.6": {
      "base64-js": "npm:base64-js@1.2.0",
      "ieee754": "npm:ieee754@1.1.8"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:font-awesome@4.7.0": {
      "css": "github:systemjs/plugin-css@0.1.33"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  },
  bundles: {
    "app-build.js": [
      "app.html!github:systemjs/plugin-text@0.0.9.js",
      "app.js",
      "components/probability-chart.html!github:systemjs/plugin-text@0.0.9.js",
      "components/probability-chart.js",
      "github:chartjs/Chart.js@1.0.2.js",
      "github:chartjs/Chart.js@1.0.2/Chart.js",
      "github:components/jquery@2.2.4.js",
      "github:components/jquery@2.2.4/jquery.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "github:systemjs/plugin-css@0.1.33.js",
      "github:systemjs/plugin-css@0.1.33/css.js",
      "github:twbs/bootstrap@3.3.7.js",
      "github:twbs/bootstrap@3.3.7/js/bootstrap.js",
      "npm:core-js@1.2.7.js",
      "npm:core-js@1.2.7/index.js",
      "npm:core-js@1.2.7/modules/$.a-function.js",
      "npm:core-js@1.2.7/modules/$.add-to-unscopables.js",
      "npm:core-js@1.2.7/modules/$.an-object.js",
      "npm:core-js@1.2.7/modules/$.array-copy-within.js",
      "npm:core-js@1.2.7/modules/$.array-fill.js",
      "npm:core-js@1.2.7/modules/$.array-includes.js",
      "npm:core-js@1.2.7/modules/$.array-methods.js",
      "npm:core-js@1.2.7/modules/$.array-species-create.js",
      "npm:core-js@1.2.7/modules/$.classof.js",
      "npm:core-js@1.2.7/modules/$.cof.js",
      "npm:core-js@1.2.7/modules/$.collection-strong.js",
      "npm:core-js@1.2.7/modules/$.collection-to-json.js",
      "npm:core-js@1.2.7/modules/$.collection-weak.js",
      "npm:core-js@1.2.7/modules/$.collection.js",
      "npm:core-js@1.2.7/modules/$.core.js",
      "npm:core-js@1.2.7/modules/$.ctx.js",
      "npm:core-js@1.2.7/modules/$.defined.js",
      "npm:core-js@1.2.7/modules/$.descriptors.js",
      "npm:core-js@1.2.7/modules/$.dom-create.js",
      "npm:core-js@1.2.7/modules/$.enum-keys.js",
      "npm:core-js@1.2.7/modules/$.export.js",
      "npm:core-js@1.2.7/modules/$.fails-is-regexp.js",
      "npm:core-js@1.2.7/modules/$.fails.js",
      "npm:core-js@1.2.7/modules/$.fix-re-wks.js",
      "npm:core-js@1.2.7/modules/$.flags.js",
      "npm:core-js@1.2.7/modules/$.for-of.js",
      "npm:core-js@1.2.7/modules/$.get-names.js",
      "npm:core-js@1.2.7/modules/$.global.js",
      "npm:core-js@1.2.7/modules/$.has.js",
      "npm:core-js@1.2.7/modules/$.hide.js",
      "npm:core-js@1.2.7/modules/$.html.js",
      "npm:core-js@1.2.7/modules/$.invoke.js",
      "npm:core-js@1.2.7/modules/$.iobject.js",
      "npm:core-js@1.2.7/modules/$.is-array-iter.js",
      "npm:core-js@1.2.7/modules/$.is-array.js",
      "npm:core-js@1.2.7/modules/$.is-integer.js",
      "npm:core-js@1.2.7/modules/$.is-object.js",
      "npm:core-js@1.2.7/modules/$.is-regexp.js",
      "npm:core-js@1.2.7/modules/$.iter-call.js",
      "npm:core-js@1.2.7/modules/$.iter-create.js",
      "npm:core-js@1.2.7/modules/$.iter-define.js",
      "npm:core-js@1.2.7/modules/$.iter-detect.js",
      "npm:core-js@1.2.7/modules/$.iter-step.js",
      "npm:core-js@1.2.7/modules/$.iterators.js",
      "npm:core-js@1.2.7/modules/$.js",
      "npm:core-js@1.2.7/modules/$.keyof.js",
      "npm:core-js@1.2.7/modules/$.library.js",
      "npm:core-js@1.2.7/modules/$.math-expm1.js",
      "npm:core-js@1.2.7/modules/$.math-log1p.js",
      "npm:core-js@1.2.7/modules/$.math-sign.js",
      "npm:core-js@1.2.7/modules/$.microtask.js",
      "npm:core-js@1.2.7/modules/$.object-assign.js",
      "npm:core-js@1.2.7/modules/$.object-define.js",
      "npm:core-js@1.2.7/modules/$.object-sap.js",
      "npm:core-js@1.2.7/modules/$.object-to-array.js",
      "npm:core-js@1.2.7/modules/$.own-keys.js",
      "npm:core-js@1.2.7/modules/$.partial.js",
      "npm:core-js@1.2.7/modules/$.path.js",
      "npm:core-js@1.2.7/modules/$.property-desc.js",
      "npm:core-js@1.2.7/modules/$.redefine-all.js",
      "npm:core-js@1.2.7/modules/$.redefine.js",
      "npm:core-js@1.2.7/modules/$.replacer.js",
      "npm:core-js@1.2.7/modules/$.same-value.js",
      "npm:core-js@1.2.7/modules/$.set-proto.js",
      "npm:core-js@1.2.7/modules/$.set-species.js",
      "npm:core-js@1.2.7/modules/$.set-to-string-tag.js",
      "npm:core-js@1.2.7/modules/$.shared.js",
      "npm:core-js@1.2.7/modules/$.species-constructor.js",
      "npm:core-js@1.2.7/modules/$.strict-new.js",
      "npm:core-js@1.2.7/modules/$.string-at.js",
      "npm:core-js@1.2.7/modules/$.string-context.js",
      "npm:core-js@1.2.7/modules/$.string-pad.js",
      "npm:core-js@1.2.7/modules/$.string-repeat.js",
      "npm:core-js@1.2.7/modules/$.string-trim.js",
      "npm:core-js@1.2.7/modules/$.task.js",
      "npm:core-js@1.2.7/modules/$.to-index.js",
      "npm:core-js@1.2.7/modules/$.to-integer.js",
      "npm:core-js@1.2.7/modules/$.to-iobject.js",
      "npm:core-js@1.2.7/modules/$.to-length.js",
      "npm:core-js@1.2.7/modules/$.to-object.js",
      "npm:core-js@1.2.7/modules/$.to-primitive.js",
      "npm:core-js@1.2.7/modules/$.uid.js",
      "npm:core-js@1.2.7/modules/$.wks.js",
      "npm:core-js@1.2.7/modules/core.delay.js",
      "npm:core-js@1.2.7/modules/core.dict.js",
      "npm:core-js@1.2.7/modules/core.function.part.js",
      "npm:core-js@1.2.7/modules/core.get-iterator-method.js",
      "npm:core-js@1.2.7/modules/core.get-iterator.js",
      "npm:core-js@1.2.7/modules/core.is-iterable.js",
      "npm:core-js@1.2.7/modules/core.log.js",
      "npm:core-js@1.2.7/modules/core.number.iterator.js",
      "npm:core-js@1.2.7/modules/core.object.classof.js",
      "npm:core-js@1.2.7/modules/core.object.define.js",
      "npm:core-js@1.2.7/modules/core.object.is-object.js",
      "npm:core-js@1.2.7/modules/core.object.make.js",
      "npm:core-js@1.2.7/modules/core.string.escape-html.js",
      "npm:core-js@1.2.7/modules/core.string.unescape-html.js",
      "npm:core-js@1.2.7/modules/es5.js",
      "npm:core-js@1.2.7/modules/es6.array.copy-within.js",
      "npm:core-js@1.2.7/modules/es6.array.fill.js",
      "npm:core-js@1.2.7/modules/es6.array.find-index.js",
      "npm:core-js@1.2.7/modules/es6.array.find.js",
      "npm:core-js@1.2.7/modules/es6.array.from.js",
      "npm:core-js@1.2.7/modules/es6.array.iterator.js",
      "npm:core-js@1.2.7/modules/es6.array.of.js",
      "npm:core-js@1.2.7/modules/es6.array.species.js",
      "npm:core-js@1.2.7/modules/es6.function.has-instance.js",
      "npm:core-js@1.2.7/modules/es6.function.name.js",
      "npm:core-js@1.2.7/modules/es6.map.js",
      "npm:core-js@1.2.7/modules/es6.math.acosh.js",
      "npm:core-js@1.2.7/modules/es6.math.asinh.js",
      "npm:core-js@1.2.7/modules/es6.math.atanh.js",
      "npm:core-js@1.2.7/modules/es6.math.cbrt.js",
      "npm:core-js@1.2.7/modules/es6.math.clz32.js",
      "npm:core-js@1.2.7/modules/es6.math.cosh.js",
      "npm:core-js@1.2.7/modules/es6.math.expm1.js",
      "npm:core-js@1.2.7/modules/es6.math.fround.js",
      "npm:core-js@1.2.7/modules/es6.math.hypot.js",
      "npm:core-js@1.2.7/modules/es6.math.imul.js",
      "npm:core-js@1.2.7/modules/es6.math.log10.js",
      "npm:core-js@1.2.7/modules/es6.math.log1p.js",
      "npm:core-js@1.2.7/modules/es6.math.log2.js",
      "npm:core-js@1.2.7/modules/es6.math.sign.js",
      "npm:core-js@1.2.7/modules/es6.math.sinh.js",
      "npm:core-js@1.2.7/modules/es6.math.tanh.js",
      "npm:core-js@1.2.7/modules/es6.math.trunc.js",
      "npm:core-js@1.2.7/modules/es6.number.constructor.js",
      "npm:core-js@1.2.7/modules/es6.number.epsilon.js",
      "npm:core-js@1.2.7/modules/es6.number.is-finite.js",
      "npm:core-js@1.2.7/modules/es6.number.is-integer.js",
      "npm:core-js@1.2.7/modules/es6.number.is-nan.js",
      "npm:core-js@1.2.7/modules/es6.number.is-safe-integer.js",
      "npm:core-js@1.2.7/modules/es6.number.max-safe-integer.js",
      "npm:core-js@1.2.7/modules/es6.number.min-safe-integer.js",
      "npm:core-js@1.2.7/modules/es6.number.parse-float.js",
      "npm:core-js@1.2.7/modules/es6.number.parse-int.js",
      "npm:core-js@1.2.7/modules/es6.object.assign.js",
      "npm:core-js@1.2.7/modules/es6.object.freeze.js",
      "npm:core-js@1.2.7/modules/es6.object.get-own-property-descriptor.js",
      "npm:core-js@1.2.7/modules/es6.object.get-own-property-names.js",
      "npm:core-js@1.2.7/modules/es6.object.get-prototype-of.js",
      "npm:core-js@1.2.7/modules/es6.object.is-extensible.js",
      "npm:core-js@1.2.7/modules/es6.object.is-frozen.js",
      "npm:core-js@1.2.7/modules/es6.object.is-sealed.js",
      "npm:core-js@1.2.7/modules/es6.object.is.js",
      "npm:core-js@1.2.7/modules/es6.object.keys.js",
      "npm:core-js@1.2.7/modules/es6.object.prevent-extensions.js",
      "npm:core-js@1.2.7/modules/es6.object.seal.js",
      "npm:core-js@1.2.7/modules/es6.object.set-prototype-of.js",
      "npm:core-js@1.2.7/modules/es6.object.to-string.js",
      "npm:core-js@1.2.7/modules/es6.promise.js",
      "npm:core-js@1.2.7/modules/es6.reflect.apply.js",
      "npm:core-js@1.2.7/modules/es6.reflect.construct.js",
      "npm:core-js@1.2.7/modules/es6.reflect.define-property.js",
      "npm:core-js@1.2.7/modules/es6.reflect.delete-property.js",
      "npm:core-js@1.2.7/modules/es6.reflect.enumerate.js",
      "npm:core-js@1.2.7/modules/es6.reflect.get-own-property-descriptor.js",
      "npm:core-js@1.2.7/modules/es6.reflect.get-prototype-of.js",
      "npm:core-js@1.2.7/modules/es6.reflect.get.js",
      "npm:core-js@1.2.7/modules/es6.reflect.has.js",
      "npm:core-js@1.2.7/modules/es6.reflect.is-extensible.js",
      "npm:core-js@1.2.7/modules/es6.reflect.own-keys.js",
      "npm:core-js@1.2.7/modules/es6.reflect.prevent-extensions.js",
      "npm:core-js@1.2.7/modules/es6.reflect.set-prototype-of.js",
      "npm:core-js@1.2.7/modules/es6.reflect.set.js",
      "npm:core-js@1.2.7/modules/es6.regexp.constructor.js",
      "npm:core-js@1.2.7/modules/es6.regexp.flags.js",
      "npm:core-js@1.2.7/modules/es6.regexp.match.js",
      "npm:core-js@1.2.7/modules/es6.regexp.replace.js",
      "npm:core-js@1.2.7/modules/es6.regexp.search.js",
      "npm:core-js@1.2.7/modules/es6.regexp.split.js",
      "npm:core-js@1.2.7/modules/es6.set.js",
      "npm:core-js@1.2.7/modules/es6.string.code-point-at.js",
      "npm:core-js@1.2.7/modules/es6.string.ends-with.js",
      "npm:core-js@1.2.7/modules/es6.string.from-code-point.js",
      "npm:core-js@1.2.7/modules/es6.string.includes.js",
      "npm:core-js@1.2.7/modules/es6.string.iterator.js",
      "npm:core-js@1.2.7/modules/es6.string.raw.js",
      "npm:core-js@1.2.7/modules/es6.string.repeat.js",
      "npm:core-js@1.2.7/modules/es6.string.starts-with.js",
      "npm:core-js@1.2.7/modules/es6.string.trim.js",
      "npm:core-js@1.2.7/modules/es6.symbol.js",
      "npm:core-js@1.2.7/modules/es6.weak-map.js",
      "npm:core-js@1.2.7/modules/es6.weak-set.js",
      "npm:core-js@1.2.7/modules/es7.array.includes.js",
      "npm:core-js@1.2.7/modules/es7.map.to-json.js",
      "npm:core-js@1.2.7/modules/es7.object.entries.js",
      "npm:core-js@1.2.7/modules/es7.object.get-own-property-descriptors.js",
      "npm:core-js@1.2.7/modules/es7.object.values.js",
      "npm:core-js@1.2.7/modules/es7.regexp.escape.js",
      "npm:core-js@1.2.7/modules/es7.set.to-json.js",
      "npm:core-js@1.2.7/modules/es7.string.at.js",
      "npm:core-js@1.2.7/modules/es7.string.pad-left.js",
      "npm:core-js@1.2.7/modules/es7.string.pad-right.js",
      "npm:core-js@1.2.7/modules/es7.string.trim-left.js",
      "npm:core-js@1.2.7/modules/es7.string.trim-right.js",
      "npm:core-js@1.2.7/modules/js.array.statics.js",
      "npm:core-js@1.2.7/modules/web.dom.iterable.js",
      "npm:core-js@1.2.7/modules/web.immediate.js",
      "npm:core-js@1.2.7/modules/web.timers.js",
      "npm:core-js@1.2.7/shim.js",
      "npm:fastclick@1.0.6.js",
      "npm:fastclick@1.0.6/lib/fastclick.js",
      "npm:font-awesome@4.7.0.js",
      "npm:font-awesome@4.7.0/css/font-awesome.css!github:systemjs/plugin-css@0.1.33.js",
      "npm:jquery@3.2.1.js",
      "npm:jquery@3.2.1/dist/jquery.js",
      "npm:process@0.11.9.js",
      "npm:process@0.11.9/browser.js",
      "pages/attack-calc.html!github:systemjs/plugin-text@0.0.9.js",
      "pages/attack-calc.js",
      "pages/attribute-test.html!github:systemjs/plugin-text@0.0.9.js",
      "pages/attribute-test.js",
      "util/AttackProperty.js",
      "util/DefenseProperty.js",
      "util/Dice.js",
      "util/PossibleRolls.js",
      "util/RollResult.js"
    ],
    "aurelia.js": [
      "github:github/fetch@2.0.3.js",
      "github:github/fetch@2.0.3/fetch.js",
      "npm:aurelia-binding@1.2.1.js",
      "npm:aurelia-binding@1.2.1/aurelia-binding.js",
      "npm:aurelia-bootstrapper@2.1.1.js",
      "npm:aurelia-bootstrapper@2.1.1/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.3.1.js",
      "npm:aurelia-dependency-injection@1.3.1/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.1.js",
      "npm:aurelia-event-aggregator@1.0.1/aurelia-event-aggregator.js",
      "npm:aurelia-framework@1.1.2.js",
      "npm:aurelia-framework@1.1.2/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0.js",
      "npm:aurelia-history-browser@1.0.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0.js",
      "npm:aurelia-history@1.0.0/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.2.js",
      "npm:aurelia-loader-default@1.0.2/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0.js",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0.js",
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.3.1.js",
      "npm:aurelia-logging@1.3.1/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.3.js",
      "npm:aurelia-metadata@1.0.3/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.2.1.js",
      "npm:aurelia-pal-browser@1.2.1/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.3.0.js",
      "npm:aurelia-pal@1.3.0/aurelia-pal.js",
      "npm:aurelia-path@1.1.1.js",
      "npm:aurelia-path@1.1.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.2.1.js",
      "npm:aurelia-polyfills@1.2.1/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.1.0.js",
      "npm:aurelia-route-recognizer@1.1.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.3.0.js",
      "npm:aurelia-router@1.3.0/aurelia-router.js",
      "npm:aurelia-task-queue@1.2.0.js",
      "npm:aurelia-task-queue@1.2.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.3.0.js",
      "npm:aurelia-templating-binding@1.3.0/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.4.0.js",
      "npm:aurelia-templating-resources@1.4.0/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.4.0/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.4.0/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/attr-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.4.0/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.4.0/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.4.0/binding-signaler.js",
      "npm:aurelia-templating-resources@1.4.0/compose.js",
      "npm:aurelia-templating-resources@1.4.0/css-resource.js",
      "npm:aurelia-templating-resources@1.4.0/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/dynamic-element.js",
      "npm:aurelia-templating-resources@1.4.0/focus.js",
      "npm:aurelia-templating-resources@1.4.0/hide.js",
      "npm:aurelia-templating-resources@1.4.0/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.4.0/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.4.0/if.js",
      "npm:aurelia-templating-resources@1.4.0/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.4.0/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.4.0/repeat.js",
      "npm:aurelia-templating-resources@1.4.0/replaceable.js",
      "npm:aurelia-templating-resources@1.4.0/sanitize-html.js",
      "npm:aurelia-templating-resources@1.4.0/self-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/show.js",
      "npm:aurelia-templating-resources@1.4.0/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/with.js",
      "npm:aurelia-templating-router@1.1.0.js",
      "npm:aurelia-templating-router@1.1.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.1.0/route-href.js",
      "npm:aurelia-templating-router@1.1.0/route-loader.js",
      "npm:aurelia-templating-router@1.1.0/router-view.js",
      "npm:aurelia-templating@1.4.2.js",
      "npm:aurelia-templating@1.4.2/aurelia-templating.js"
    ]
  },
  depCache: {
    "github:components/jquery@2.2.4.js": [
      "github:components/jquery@2.2.4/jquery"
    ],
    "npm:font-awesome@4.7.0.js": [
      "npm:font-awesome@4.7.0/css/font-awesome.css!"
    ],
    "npm:fastclick@1.0.6.js": [
      "npm:fastclick@1.0.6/lib/fastclick.js"
    ],
    "github:systemjs/plugin-css@0.1.33.js": [
      "github:systemjs/plugin-css@0.1.33/css"
    ],
    "npm:core-js@1.2.7.js": [
      "npm:core-js@1.2.7/index.js"
    ],
    "npm:core-js@1.2.7/index.js": [
      "./shim",
      "./modules/core.dict",
      "./modules/core.get-iterator-method",
      "./modules/core.get-iterator",
      "./modules/core.is-iterable",
      "./modules/core.delay",
      "./modules/core.function.part",
      "./modules/core.object.is-object",
      "./modules/core.object.classof",
      "./modules/core.object.define",
      "./modules/core.object.make",
      "./modules/core.number.iterator",
      "./modules/core.string.escape-html",
      "./modules/core.string.unescape-html",
      "./modules/core.log",
      "./modules/$.core"
    ],
    "npm:core-js@1.2.7/modules/core.dict.js": [
      "./$",
      "./$.ctx",
      "./$.export",
      "./$.property-desc",
      "./$.object-assign",
      "./$.keyof",
      "./$.a-function",
      "./$.for-of",
      "./core.is-iterable",
      "./$.iter-create",
      "./$.iter-step",
      "./$.is-object",
      "./$.to-iobject",
      "./$.descriptors",
      "./$.has"
    ],
    "npm:core-js@1.2.7/modules/core.is-iterable.js": [
      "./$.classof",
      "./$.wks",
      "./$.iterators",
      "./$.core"
    ],
    "npm:core-js@1.2.7/modules/core.get-iterator.js": [
      "./$.an-object",
      "./core.get-iterator-method",
      "./$.core"
    ],
    "npm:core-js@1.2.7/shim.js": [
      "./modules/es5",
      "./modules/es6.symbol",
      "./modules/es6.object.assign",
      "./modules/es6.object.is",
      "./modules/es6.object.set-prototype-of",
      "./modules/es6.object.to-string",
      "./modules/es6.object.freeze",
      "./modules/es6.object.seal",
      "./modules/es6.object.prevent-extensions",
      "./modules/es6.object.is-frozen",
      "./modules/es6.object.is-sealed",
      "./modules/es6.object.is-extensible",
      "./modules/es6.object.get-own-property-descriptor",
      "./modules/es6.object.get-prototype-of",
      "./modules/es6.object.keys",
      "./modules/es6.object.get-own-property-names",
      "./modules/es6.function.name",
      "./modules/es6.function.has-instance",
      "./modules/es6.number.constructor",
      "./modules/es6.number.epsilon",
      "./modules/es6.number.is-finite",
      "./modules/es6.number.is-integer",
      "./modules/es6.number.is-nan",
      "./modules/es6.number.is-safe-integer",
      "./modules/es6.number.max-safe-integer",
      "./modules/es6.number.min-safe-integer",
      "./modules/es6.number.parse-float",
      "./modules/es6.number.parse-int",
      "./modules/es6.math.acosh",
      "./modules/es6.math.asinh",
      "./modules/es6.math.atanh",
      "./modules/es6.math.cbrt",
      "./modules/es6.math.clz32",
      "./modules/es6.math.cosh",
      "./modules/es6.math.expm1",
      "./modules/es6.math.fround",
      "./modules/es6.math.hypot",
      "./modules/es6.math.imul",
      "./modules/es6.math.log10",
      "./modules/es6.math.log1p",
      "./modules/es6.math.log2",
      "./modules/es6.math.sign",
      "./modules/es6.math.sinh",
      "./modules/es6.math.tanh",
      "./modules/es6.math.trunc",
      "./modules/es6.string.from-code-point",
      "./modules/es6.string.raw",
      "./modules/es6.string.trim",
      "./modules/es6.string.iterator",
      "./modules/es6.string.code-point-at",
      "./modules/es6.string.ends-with",
      "./modules/es6.string.includes",
      "./modules/es6.string.repeat",
      "./modules/es6.string.starts-with",
      "./modules/es6.array.from",
      "./modules/es6.array.of",
      "./modules/es6.array.iterator",
      "./modules/es6.array.species",
      "./modules/es6.array.copy-within",
      "./modules/es6.array.fill",
      "./modules/es6.array.find",
      "./modules/es6.array.find-index",
      "./modules/es6.regexp.constructor",
      "./modules/es6.regexp.flags",
      "./modules/es6.regexp.match",
      "./modules/es6.regexp.replace",
      "./modules/es6.regexp.search",
      "./modules/es6.regexp.split",
      "./modules/es6.promise",
      "./modules/es6.map",
      "./modules/es6.set",
      "./modules/es6.weak-map",
      "./modules/es6.weak-set",
      "./modules/es6.reflect.apply",
      "./modules/es6.reflect.construct",
      "./modules/es6.reflect.define-property",
      "./modules/es6.reflect.delete-property",
      "./modules/es6.reflect.enumerate",
      "./modules/es6.reflect.get",
      "./modules/es6.reflect.get-own-property-descriptor",
      "./modules/es6.reflect.get-prototype-of",
      "./modules/es6.reflect.has",
      "./modules/es6.reflect.is-extensible",
      "./modules/es6.reflect.own-keys",
      "./modules/es6.reflect.prevent-extensions",
      "./modules/es6.reflect.set",
      "./modules/es6.reflect.set-prototype-of",
      "./modules/es7.array.includes",
      "./modules/es7.string.at",
      "./modules/es7.string.pad-left",
      "./modules/es7.string.pad-right",
      "./modules/es7.string.trim-left",
      "./modules/es7.string.trim-right",
      "./modules/es7.regexp.escape",
      "./modules/es7.object.get-own-property-descriptors",
      "./modules/es7.object.values",
      "./modules/es7.object.entries",
      "./modules/es7.map.to-json",
      "./modules/es7.set.to-json",
      "./modules/js.array.statics",
      "./modules/web.timers",
      "./modules/web.immediate",
      "./modules/web.dom.iterable",
      "./modules/$.core"
    ],
    "npm:core-js@1.2.7/modules/core.delay.js": [
      "./$.global",
      "./$.core",
      "./$.export",
      "./$.partial"
    ],
    "npm:core-js@1.2.7/modules/core.get-iterator-method.js": [
      "./$.classof",
      "./$.wks",
      "./$.iterators",
      "./$.core"
    ],
    "npm:core-js@1.2.7/modules/core.object.is-object.js": [
      "./$.export",
      "./$.is-object"
    ],
    "npm:core-js@1.2.7/modules/core.object.classof.js": [
      "./$.export",
      "./$.classof"
    ],
    "npm:core-js@1.2.7/modules/core.object.make.js": [
      "./$.export",
      "./$.object-define",
      "./$"
    ],
    "npm:core-js@1.2.7/modules/core.function.part.js": [
      "./$.path",
      "./$.export",
      "./$.core",
      "./$.partial"
    ],
    "npm:core-js@1.2.7/modules/core.object.define.js": [
      "./$.export",
      "./$.object-define"
    ],
    "npm:core-js@1.2.7/modules/core.number.iterator.js": [
      "./$.iter-define"
    ],
    "npm:core-js@1.2.7/modules/core.string.escape-html.js": [
      "./$.export",
      "./$.replacer"
    ],
    "npm:core-js@1.2.7/modules/core.string.unescape-html.js": [
      "./$.export",
      "./$.replacer"
    ],
    "npm:core-js@1.2.7/modules/core.log.js": [
      "./$",
      "./$.global",
      "./$.export",
      "./$.object-assign"
    ],
    "npm:core-js@1.2.7/modules/$.ctx.js": [
      "./$.a-function"
    ],
    "npm:core-js@1.2.7/modules/$.export.js": [
      "./$.global",
      "./$.core",
      "./$.hide",
      "./$.redefine",
      "./$.ctx"
    ],
    "npm:core-js@1.2.7/modules/$.object-assign.js": [
      "./$",
      "./$.to-object",
      "./$.iobject",
      "./$.fails"
    ],
    "npm:core-js@1.2.7/modules/$.keyof.js": [
      "./$",
      "./$.to-iobject"
    ],
    "npm:core-js@1.2.7/modules/$.for-of.js": [
      "./$.ctx",
      "./$.iter-call",
      "./$.is-array-iter",
      "./$.an-object",
      "./$.to-length",
      "./core.get-iterator-method"
    ],
    "npm:core-js@1.2.7/modules/$.iter-create.js": [
      "./$",
      "./$.property-desc",
      "./$.set-to-string-tag",
      "./$.hide",
      "./$.wks"
    ],
    "npm:core-js@1.2.7/modules/$.to-iobject.js": [
      "./$.iobject",
      "./$.defined"
    ],
    "npm:core-js@1.2.7/modules/$.descriptors.js": [
      "./$.fails"
    ],
    "npm:core-js@1.2.7/modules/$.wks.js": [
      "./$.shared",
      "./$.uid",
      "./$.global"
    ],
    "npm:core-js@1.2.7/modules/$.classof.js": [
      "./$.cof",
      "./$.wks"
    ],
    "npm:core-js@1.2.7/modules/$.an-object.js": [
      "./$.is-object"
    ],
    "npm:core-js@1.2.7/modules/es5.js": [
      "./$",
      "./$.export",
      "./$.descriptors",
      "./$.property-desc",
      "./$.html",
      "./$.dom-create",
      "./$.has",
      "./$.cof",
      "./$.invoke",
      "./$.fails",
      "./$.an-object",
      "./$.a-function",
      "./$.is-object",
      "./$.to-object",
      "./$.to-iobject",
      "./$.to-integer",
      "./$.to-index",
      "./$.to-length",
      "./$.iobject",
      "./$.uid",
      "./$.array-methods",
      "./$.array-includes",
      "./$.is-array"
    ],
    "npm:core-js@1.2.7/modules/es6.symbol.js": [
      "./$",
      "./$.global",
      "./$.has",
      "./$.descriptors",
      "./$.export",
      "./$.redefine",
      "./$.fails",
      "./$.shared",
      "./$.set-to-string-tag",
      "./$.uid",
      "./$.wks",
      "./$.keyof",
      "./$.get-names",
      "./$.enum-keys",
      "./$.is-array",
      "./$.an-object",
      "./$.to-iobject",
      "./$.property-desc",
      "./$.library"
    ],
    "npm:core-js@1.2.7/modules/es6.object.assign.js": [
      "./$.export",
      "./$.object-assign"
    ],
    "npm:core-js@1.2.7/modules/es6.object.is.js": [
      "./$.export",
      "./$.same-value"
    ],
    "npm:core-js@1.2.7/modules/es6.object.set-prototype-of.js": [
      "./$.export",
      "./$.set-proto"
    ],
    "npm:core-js@1.2.7/modules/es6.object.to-string.js": [
      "./$.classof",
      "./$.wks",
      "./$.redefine"
    ],
    "npm:core-js@1.2.7/modules/es6.object.freeze.js": [
      "./$.is-object",
      "./$.object-sap"
    ],
    "npm:core-js@1.2.7/modules/es6.object.seal.js": [
      "./$.is-object",
      "./$.object-sap"
    ],
    "npm:core-js@1.2.7/modules/es6.object.prevent-extensions.js": [
      "./$.is-object",
      "./$.object-sap"
    ],
    "npm:core-js@1.2.7/modules/es6.object.is-sealed.js": [
      "./$.is-object",
      "./$.object-sap"
    ],
    "npm:core-js@1.2.7/modules/es6.object.is-frozen.js": [
      "./$.is-object",
      "./$.object-sap"
    ],
    "npm:core-js@1.2.7/modules/es6.object.is-extensible.js": [
      "./$.is-object",
      "./$.object-sap"
    ],
    "npm:core-js@1.2.7/modules/es6.object.get-own-property-descriptor.js": [
      "./$.to-iobject",
      "./$.object-sap"
    ],
    "npm:core-js@1.2.7/modules/es6.object.get-prototype-of.js": [
      "./$.to-object",
      "./$.object-sap"
    ],
    "npm:core-js@1.2.7/modules/es6.object.keys.js": [
      "./$.to-object",
      "./$.object-sap"
    ],
    "npm:core-js@1.2.7/modules/es6.object.get-own-property-names.js": [
      "./$.object-sap",
      "./$.get-names"
    ],
    "npm:core-js@1.2.7/modules/es6.function.name.js": [
      "./$",
      "./$.property-desc",
      "./$.has",
      "./$.descriptors"
    ],
    "npm:core-js@1.2.7/modules/es6.function.has-instance.js": [
      "./$",
      "./$.is-object",
      "./$.wks"
    ],
    "npm:core-js@1.2.7/modules/es6.number.constructor.js": [
      "./$",
      "./$.global",
      "./$.has",
      "./$.cof",
      "./$.to-primitive",
      "./$.fails",
      "./$.string-trim",
      "./$.descriptors",
      "./$.redefine"
    ],
    "npm:core-js@1.2.7/modules/es6.number.epsilon.js": [
      "./$.export"
    ],
    "npm:core-js@1.2.7/modules/es6.number.is-finite.js": [
      "./$.export",
      "./$.global"
    ],
    "npm:core-js@1.2.7/modules/es6.number.is-integer.js": [
      "./$.export",
      "./$.is-integer"
    ],
    "npm:core-js@1.2.7/modules/es6.number.is-nan.js": [
      "./$.export"
    ],
    "npm:core-js@1.2.7/modules/es6.number.is-safe-integer.js": [
      "./$.export",
      "./$.is-integer"
    ],
    "npm:core-js@1.2.7/modules/es6.number.max-safe-integer.js": [
      "./$.export"
    ],
    "npm:core-js@1.2.7/modules/es6.number.min-safe-integer.js": [
      "./$.export"
    ],
    "npm:core-js@1.2.7/modules/es6.number.parse-int.js": [
      "./$.export"
    ],
    "npm:core-js@1.2.7/modules/es6.number.parse-float.js": [
      "./$.export"
    ],
    "npm:core-js@1.2.7/modules/es6.math.asinh.js": [
      "./$.export"
    ],
    "npm:core-js@1.2.7/modules/es6.math.acosh.js": [
      "./$.export",
      "./$.math-log1p"
    ],
    "npm:core-js@1.2.7/modules/es6.math.clz32.js": [
      "./$.export"
    ],
    "npm:core-js@1.2.7/modules/es6.math.atanh.js": [
      "./$.export"
    ],
    "npm:core-js@1.2.7/modules/es6.math.cbrt.js": [
      "./$.export",
      "./$.math-sign"
    ],
    "npm:core-js@1.2.7/modules/es6.math.cosh.js": [
      "./$.export"
    ],
    "npm:core-js@1.2.7/modules/es6.math.expm1.js": [
      "./$.export",
      "./$.math-expm1"
    ],
    "npm:core-js@1.2.7/modules/es6.math.fround.js": [
      "./$.export",
      "./$.math-sign"
    ],
    "npm:core-js@1.2.7/modules/es6.math.hypot.js": [
      "./$.export"
    ],
    "npm:core-js@1.2.7/modules/es6.math.imul.js": [
      "./$.export",
      "./$.fails"
    ],
    "npm:core-js@1.2.7/modules/es6.math.log1p.js": [
      "./$.export",
      "./$.math-log1p"
    ],
    "npm:core-js@1.2.7/modules/es6.math.log10.js": [
      "./$.export"
    ],
    "npm:core-js@1.2.7/modules/es6.math.log2.js": [
      "./$.export"
    ],
    "npm:core-js@1.2.7/modules/es6.math.sinh.js": [
      "./$.export",
      "./$.math-expm1",
      "./$.fails"
    ],
    "npm:core-js@1.2.7/modules/es6.math.sign.js": [
      "./$.export",
      "./$.math-sign"
    ],
    "npm:core-js@1.2.7/modules/es6.math.tanh.js": [
      "./$.export",
      "./$.math-expm1"
    ],
    "npm:core-js@1.2.7/modules/es6.math.trunc.js": [
      "./$.export"
    ],
    "npm:core-js@1.2.7/modules/es6.string.from-code-point.js": [
      "./$.export",
      "./$.to-index"
    ],
    "npm:core-js@1.2.7/modules/es6.string.raw.js": [
      "./$.export",
      "./$.to-iobject",
      "./$.to-length"
    ],
    "npm:core-js@1.2.7/modules/es6.string.trim.js": [
      "./$.string-trim"
    ],
    "npm:core-js@1.2.7/modules/es6.string.iterator.js": [
      "./$.string-at",
      "./$.iter-define"
    ],
    "npm:core-js@1.2.7/modules/es6.string.code-point-at.js": [
      "./$.export",
      "./$.string-at"
    ],
    "npm:core-js@1.2.7/modules/es6.string.ends-with.js": [
      "./$.export",
      "./$.to-length",
      "./$.string-context",
      "./$.fails-is-regexp"
    ],
    "npm:core-js@1.2.7/modules/es6.string.includes.js": [
      "./$.export",
      "./$.string-context",
      "./$.fails-is-regexp"
    ],
    "npm:core-js@1.2.7/modules/es6.string.repeat.js": [
      "./$.export",
      "./$.string-repeat"
    ],
    "npm:core-js@1.2.7/modules/es6.string.starts-with.js": [
      "./$.export",
      "./$.to-length",
      "./$.string-context",
      "./$.fails-is-regexp"
    ],
    "npm:core-js@1.2.7/modules/es6.array.from.js": [
      "./$.ctx",
      "./$.export",
      "./$.to-object",
      "./$.iter-call",
      "./$.is-array-iter",
      "./$.to-length",
      "./core.get-iterator-method",
      "./$.iter-detect"
    ],
    "npm:core-js@1.2.7/modules/es6.array.of.js": [
      "./$.export",
      "./$.fails"
    ],
    "npm:core-js@1.2.7/modules/es6.array.iterator.js": [
      "./$.add-to-unscopables",
      "./$.iter-step",
      "./$.iterators",
      "./$.to-iobject",
      "./$.iter-define"
    ],
    "npm:core-js@1.2.7/modules/es6.array.species.js": [
      "./$.set-species"
    ],
    "npm:core-js@1.2.7/modules/es6.array.copy-within.js": [
      "./$.export",
      "./$.array-copy-within",
      "./$.add-to-unscopables"
    ],
    "npm:core-js@1.2.7/modules/es6.array.fill.js": [
      "./$.export",
      "./$.array-fill",
      "./$.add-to-unscopables"
    ],
    "npm:core-js@1.2.7/modules/es6.array.find.js": [
      "./$.export",
      "./$.array-methods",
      "./$.add-to-unscopables"
    ],
    "npm:core-js@1.2.7/modules/es6.array.find-index.js": [
      "./$.export",
      "./$.array-methods",
      "./$.add-to-unscopables"
    ],
    "npm:core-js@1.2.7/modules/es6.regexp.constructor.js": [
      "./$",
      "./$.global",
      "./$.is-regexp",
      "./$.flags",
      "./$.descriptors",
      "./$.fails",
      "./$.wks",
      "./$.redefine",
      "./$.set-species"
    ],
    "npm:core-js@1.2.7/modules/es6.regexp.flags.js": [
      "./$",
      "./$.descriptors",
      "./$.flags"
    ],
    "npm:core-js@1.2.7/modules/es6.regexp.match.js": [
      "./$.fix-re-wks"
    ],
    "npm:core-js@1.2.7/modules/es6.regexp.replace.js": [
      "./$.fix-re-wks"
    ],
    "npm:core-js@1.2.7/modules/es6.regexp.search.js": [
      "./$.fix-re-wks"
    ],
    "npm:core-js@1.2.7/modules/es6.regexp.split.js": [
      "./$.fix-re-wks"
    ],
    "npm:core-js@1.2.7/modules/es6.map.js": [
      "./$.collection-strong",
      "./$.collection"
    ],
    "npm:core-js@1.2.7/modules/es6.set.js": [
      "./$.collection-strong",
      "./$.collection"
    ],
    "npm:core-js@1.2.7/modules/es6.weak-map.js": [
      "./$",
      "./$.redefine",
      "./$.collection-weak",
      "./$.is-object",
      "./$.has",
      "./$.collection"
    ],
    "npm:core-js@1.2.7/modules/es6.weak-set.js": [
      "./$.collection-weak",
      "./$.collection"
    ],
    "npm:core-js@1.2.7/modules/es6.reflect.apply.js": [
      "./$.export",
      "./$.an-object"
    ],
    "npm:core-js@1.2.7/modules/es6.reflect.construct.js": [
      "./$",
      "./$.export",
      "./$.a-function",
      "./$.an-object",
      "./$.is-object",
      "./$.core",
      "./$.fails"
    ],
    "npm:core-js@1.2.7/modules/es6.reflect.define-property.js": [
      "./$",
      "./$.export",
      "./$.an-object",
      "./$.fails"
    ],
    "npm:core-js@1.2.7/modules/es6.reflect.delete-property.js": [
      "./$.export",
      "./$",
      "./$.an-object"
    ],
    "npm:core-js@1.2.7/modules/es6.reflect.enumerate.js": [
      "./$.export",
      "./$.an-object",
      "./$.iter-create"
    ],
    "npm:core-js@1.2.7/modules/es6.reflect.get.js": [
      "./$",
      "./$.has",
      "./$.export",
      "./$.is-object",
      "./$.an-object"
    ],
    "npm:core-js@1.2.7/modules/es6.reflect.get-own-property-descriptor.js": [
      "./$",
      "./$.export",
      "./$.an-object"
    ],
    "npm:core-js@1.2.7/modules/es6.reflect.get-prototype-of.js": [
      "./$.export",
      "./$",
      "./$.an-object"
    ],
    "npm:core-js@1.2.7/modules/es6.reflect.has.js": [
      "./$.export"
    ],
    "npm:core-js@1.2.7/modules/es6.reflect.is-extensible.js": [
      "./$.export",
      "./$.an-object"
    ],
    "npm:core-js@1.2.7/modules/es6.reflect.own-keys.js": [
      "./$.export",
      "./$.own-keys"
    ],
    "npm:core-js@1.2.7/modules/es6.reflect.prevent-extensions.js": [
      "./$.export",
      "./$.an-object"
    ],
    "npm:core-js@1.2.7/modules/es6.reflect.set.js": [
      "./$",
      "./$.has",
      "./$.export",
      "./$.property-desc",
      "./$.an-object",
      "./$.is-object"
    ],
    "npm:core-js@1.2.7/modules/es6.reflect.set-prototype-of.js": [
      "./$.export",
      "./$.set-proto"
    ],
    "npm:core-js@1.2.7/modules/es7.array.includes.js": [
      "./$.export",
      "./$.array-includes",
      "./$.add-to-unscopables"
    ],
    "npm:core-js@1.2.7/modules/es7.string.at.js": [
      "./$.export",
      "./$.string-at"
    ],
    "npm:core-js@1.2.7/modules/es7.string.pad-left.js": [
      "./$.export",
      "./$.string-pad"
    ],
    "npm:core-js@1.2.7/modules/es7.string.pad-right.js": [
      "./$.export",
      "./$.string-pad"
    ],
    "npm:core-js@1.2.7/modules/es7.string.trim-left.js": [
      "./$.string-trim"
    ],
    "npm:core-js@1.2.7/modules/es7.string.trim-right.js": [
      "./$.string-trim"
    ],
    "npm:core-js@1.2.7/modules/es7.regexp.escape.js": [
      "./$.export",
      "./$.replacer"
    ],
    "npm:core-js@1.2.7/modules/es7.object.get-own-property-descriptors.js": [
      "./$",
      "./$.export",
      "./$.own-keys",
      "./$.to-iobject",
      "./$.property-desc"
    ],
    "npm:core-js@1.2.7/modules/es7.object.values.js": [
      "./$.export",
      "./$.object-to-array"
    ],
    "npm:core-js@1.2.7/modules/es7.object.entries.js": [
      "./$.export",
      "./$.object-to-array"
    ],
    "npm:core-js@1.2.7/modules/es7.map.to-json.js": [
      "./$.export",
      "./$.collection-to-json"
    ],
    "npm:core-js@1.2.7/modules/es7.set.to-json.js": [
      "./$.export",
      "./$.collection-to-json"
    ],
    "npm:core-js@1.2.7/modules/js.array.statics.js": [
      "./$",
      "./$.export",
      "./$.ctx",
      "./$.core"
    ],
    "npm:core-js@1.2.7/modules/web.dom.iterable.js": [
      "./es6.array.iterator",
      "./$.global",
      "./$.hide",
      "./$.iterators",
      "./$.wks"
    ],
    "npm:core-js@1.2.7/modules/web.timers.js": [
      "./$.global",
      "./$.export",
      "./$.invoke",
      "./$.partial"
    ],
    "npm:core-js@1.2.7/modules/web.immediate.js": [
      "./$.export",
      "./$.task"
    ],
    "npm:core-js@1.2.7/modules/$.partial.js": [
      "./$.path",
      "./$.invoke",
      "./$.a-function"
    ],
    "npm:core-js@1.2.7/modules/$.object-define.js": [
      "./$",
      "./$.own-keys",
      "./$.to-iobject"
    ],
    "npm:core-js@1.2.7/modules/$.path.js": [
      "./$.global"
    ],
    "npm:core-js@1.2.7/modules/$.iter-define.js": [
      "./$.library",
      "./$.export",
      "./$.redefine",
      "./$.hide",
      "./$.has",
      "./$.iterators",
      "./$.iter-create",
      "./$.set-to-string-tag",
      "./$",
      "./$.wks"
    ],
    "npm:core-js@1.2.7/modules/es6.promise.js": [
      "./$",
      "./$.library",
      "./$.global",
      "./$.ctx",
      "./$.classof",
      "./$.export",
      "./$.is-object",
      "./$.an-object",
      "./$.a-function",
      "./$.strict-new",
      "./$.for-of",
      "./$.set-proto",
      "./$.same-value",
      "./$.wks",
      "./$.species-constructor",
      "./$.microtask",
      "./$.descriptors",
      "./$.redefine-all",
      "./$.set-to-string-tag",
      "./$.set-species",
      "./$.core",
      "./$.iter-detect",
      "process"
    ],
    "npm:core-js@1.2.7/modules/$.redefine.js": [
      "./$.global",
      "./$.hide",
      "./$.uid",
      "./$.core"
    ],
    "npm:core-js@1.2.7/modules/$.hide.js": [
      "./$",
      "./$.property-desc",
      "./$.descriptors"
    ],
    "npm:core-js@1.2.7/modules/$.to-object.js": [
      "./$.defined"
    ],
    "npm:core-js@1.2.7/modules/$.iobject.js": [
      "./$.cof"
    ],
    "npm:core-js@1.2.7/modules/$.is-array-iter.js": [
      "./$.iterators",
      "./$.wks"
    ],
    "npm:core-js@1.2.7/modules/$.to-length.js": [
      "./$.to-integer"
    ],
    "npm:core-js@1.2.7/modules/$.set-to-string-tag.js": [
      "./$",
      "./$.has",
      "./$.wks"
    ],
    "npm:core-js@1.2.7/modules/$.iter-call.js": [
      "./$.an-object"
    ],
    "npm:core-js@1.2.7/modules/$.shared.js": [
      "./$.global"
    ],
    "npm:core-js@1.2.7/modules/$.html.js": [
      "./$.global"
    ],
    "npm:core-js@1.2.7/modules/$.dom-create.js": [
      "./$.is-object",
      "./$.global"
    ],
    "npm:core-js@1.2.7/modules/$.to-index.js": [
      "./$.to-integer"
    ],
    "npm:core-js@1.2.7/modules/$.array-methods.js": [
      "./$.ctx",
      "./$.iobject",
      "./$.to-object",
      "./$.to-length",
      "./$.array-species-create"
    ],
    "npm:core-js@1.2.7/modules/$.array-includes.js": [
      "./$.to-iobject",
      "./$.to-length",
      "./$.to-index"
    ],
    "npm:core-js@1.2.7/modules/$.get-names.js": [
      "./$.to-iobject",
      "./$"
    ],
    "npm:core-js@1.2.7/modules/$.is-array.js": [
      "./$.cof"
    ],
    "npm:core-js@1.2.7/modules/$.enum-keys.js": [
      "./$"
    ],
    "npm:core-js@1.2.7/modules/$.set-proto.js": [
      "./$",
      "./$.is-object",
      "./$.an-object",
      "./$.ctx"
    ],
    "npm:core-js@1.2.7/modules/$.object-sap.js": [
      "./$.export",
      "./$.core",
      "./$.fails"
    ],
    "npm:core-js@1.2.7/modules/$.to-primitive.js": [
      "./$.is-object"
    ],
    "npm:core-js@1.2.7/modules/$.string-trim.js": [
      "./$.export",
      "./$.defined",
      "./$.fails"
    ],
    "npm:core-js@1.2.7/modules/$.is-integer.js": [
      "./$.is-object"
    ],
    "npm:core-js@1.2.7/modules/$.string-context.js": [
      "./$.is-regexp",
      "./$.defined"
    ],
    "npm:core-js@1.2.7/modules/$.string-at.js": [
      "./$.to-integer",
      "./$.defined"
    ],
    "npm:core-js@1.2.7/modules/$.fails-is-regexp.js": [
      "./$.wks"
    ],
    "npm:core-js@1.2.7/modules/$.set-species.js": [
      "./$.global",
      "./$",
      "./$.descriptors",
      "./$.wks"
    ],
    "npm:core-js@1.2.7/modules/$.iter-detect.js": [
      "./$.wks"
    ],
    "npm:core-js@1.2.7/modules/$.string-repeat.js": [
      "./$.to-integer",
      "./$.defined"
    ],
    "npm:core-js@1.2.7/modules/$.add-to-unscopables.js": [
      "./$.wks",
      "./$.hide"
    ],
    "npm:core-js@1.2.7/modules/$.array-fill.js": [
      "./$.to-object",
      "./$.to-index",
      "./$.to-length"
    ],
    "npm:core-js@1.2.7/modules/$.array-copy-within.js": [
      "./$.to-object",
      "./$.to-index",
      "./$.to-length"
    ],
    "npm:core-js@1.2.7/modules/$.flags.js": [
      "./$.an-object"
    ],
    "npm:core-js@1.2.7/modules/$.is-regexp.js": [
      "./$.is-object",
      "./$.cof",
      "./$.wks"
    ],
    "npm:core-js@1.2.7/modules/$.fix-re-wks.js": [
      "./$.hide",
      "./$.redefine",
      "./$.fails",
      "./$.defined",
      "./$.wks"
    ],
    "npm:core-js@1.2.7/modules/$.collection.js": [
      "./$.global",
      "./$.export",
      "./$.redefine",
      "./$.redefine-all",
      "./$.for-of",
      "./$.strict-new",
      "./$.is-object",
      "./$.fails",
      "./$.iter-detect",
      "./$.set-to-string-tag"
    ],
    "npm:core-js@1.2.7/modules/$.collection-strong.js": [
      "./$",
      "./$.hide",
      "./$.redefine-all",
      "./$.ctx",
      "./$.strict-new",
      "./$.defined",
      "./$.for-of",
      "./$.iter-define",
      "./$.iter-step",
      "./$.uid",
      "./$.has",
      "./$.is-object",
      "./$.set-species",
      "./$.descriptors"
    ],
    "npm:core-js@1.2.7/modules/$.collection-weak.js": [
      "./$.hide",
      "./$.redefine-all",
      "./$.an-object",
      "./$.is-object",
      "./$.strict-new",
      "./$.for-of",
      "./$.array-methods",
      "./$.has",
      "./$.uid"
    ],
    "npm:core-js@1.2.7/modules/$.own-keys.js": [
      "./$",
      "./$.an-object",
      "./$.global"
    ],
    "npm:core-js@1.2.7/modules/$.object-to-array.js": [
      "./$",
      "./$.to-iobject"
    ],
    "npm:core-js@1.2.7/modules/$.string-pad.js": [
      "./$.to-length",
      "./$.string-repeat",
      "./$.defined"
    ],
    "npm:core-js@1.2.7/modules/$.collection-to-json.js": [
      "./$.for-of",
      "./$.classof"
    ],
    "npm:core-js@1.2.7/modules/$.task.js": [
      "./$.ctx",
      "./$.invoke",
      "./$.html",
      "./$.dom-create",
      "./$.global",
      "./$.cof",
      "process"
    ],
    "npm:core-js@1.2.7/modules/$.species-constructor.js": [
      "./$.an-object",
      "./$.a-function",
      "./$.wks"
    ],
    "npm:core-js@1.2.7/modules/$.redefine-all.js": [
      "./$.redefine"
    ],
    "github:jspm/nodelibs-process@0.1.2.js": [
      "github:jspm/nodelibs-process@0.1.2/index"
    ],
    "npm:core-js@1.2.7/modules/$.microtask.js": [
      "./$.global",
      "./$.task",
      "./$.cof",
      "process"
    ],
    "npm:core-js@1.2.7/modules/$.array-species-create.js": [
      "./$.is-object",
      "./$.is-array",
      "./$.wks"
    ],
    "github:jspm/nodelibs-process@0.1.2/index.js": [
      "process"
    ],
    "npm:process@0.11.9.js": [
      "npm:process@0.11.9/browser.js"
    ],
    "github:chartjs/Chart.js@1.0.2.js": [
      "github:chartjs/Chart.js@1.0.2/Chart.js"
    ],
    "github:twbs/bootstrap@3.3.7.js": [
      "github:twbs/bootstrap@3.3.7/js/bootstrap.js"
    ],
    "github:twbs/bootstrap@3.3.7/js/bootstrap.js": [
      "jquery"
    ],
    "npm:jquery@3.2.1.js": [
      "npm:jquery@3.2.1/dist/jquery.js"
    ],
    "app.js": [
      "jquery",
      "fastclick"
    ],
    "components/probability-chart.js": [
      "aurelia-framework",
      "aurelia-dependency-injection",
      "jquery",
      "chartjs"
    ],
    "pages/attack-calc.js": [
      "bootstrap",
      "bootstrap/css/bootstrap.css!",
      "../util/PossibleRolls",
      "../util/AttackProperty",
      "../util/Dice",
      "jquery"
    ],
    "pages/attribute-test.js": [
      "bootstrap",
      "bootstrap/css/bootstrap.css!",
      "../util/Dice",
      "../util/PossibleRolls",
      "jquery"
    ],
    "util/PossibleRolls.js": [
      "./RollResult"
    ]
  }
});