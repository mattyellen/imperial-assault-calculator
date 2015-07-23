/// <reference path="lib.d.ts" />
/// <reference path="aurelia-loader.d.ts" />

function testTemplateDependency {
  var dep = new TemplateDependency('./alex', 'alex');
  dep.src;
  dep.name;
}


function testTemplateRegistryEntry {
  tre = new TemplateRegistryEntry(3);
  var template = {};
  var resources = [];
  var factory = {};

  tre.id;
  tre.template;
  tre.dependencies;
  tre.resources;
  tre.factory;
  tre.templateIsLoaded == true;
  tre.isReady == true;
  tre.setTemplate(template);
  tre.setResources(resources);
  tre.setFactory(factory);
}

function testLoader() {
  loader = new Loader();
  var url = 'x/y';
  loader.templateRegistry;
  loader.loadModule(1);
  loader.loadAllModules([1,2]);
  loader.loadTemplate(url);
  loader.getOrCreateTemplateRegistryEntry(2);
  Promise p = loader.importDocument(url);
  Promise p = loader.importTemplate(url);
  loader.findTemplate({}, url);
}
