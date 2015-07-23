/// <reference path="lib.d.ts" />
/// <reference path="aurelia-loader-default.d.ts" />

function testDefaultLoader {
  DefaultLoader def = new DefaultLoader();
  def.moduleRegistry;
  def.loadModule('x');
  var promises = def.loadAllModules(['x', 'y']);
  def.loadTemplate('xyz');
}
