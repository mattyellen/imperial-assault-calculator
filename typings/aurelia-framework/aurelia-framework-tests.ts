/// <reference path="lib.d.ts" />
/// <reference path="aurelia-framework.d.ts" />

function testPlugins() {
  var aurelia = {};
  var plg = new Plugins(aurelia)
  plg.aurelia;
  plg.info;
  plg.processed

  var moduleId = 'x';
  var config = {};
  var plgs: Plugins;

  plgs = plg.plugin(moduleId, config);
}


function testAurelia {
  var loader = {};
  var container = {};
  var resources = [];
  Aurelia au = new Aurelia(loader, container, resources);

  au.loader;
  au.container;
  au.resources;
  au.use;
  au.resourcesToLoad;
  au.currentPluginId;
  au.started;
  au.host;
  au.root;
  Aurelia aux = au.withInstance('x', {});
  aux = au.withSingleton('y', {});
  aux = au.globalizeResources([]);
  aux = au.renameGlobalResource('x/y', 'x');
  au.start();
  au.setRoot('x', 'y');
}
