/// <reference path="lib.d.ts" />
/// <reference path="aurelia-templating-resources.d.ts" />

function testCompose {
  var c  = new Compose(element, container, compositionEngine, viewSlot, viewResources, taskQueue)
  var newValue = 1, oldValue = 2;
  var executionContext = {};
  c.element;
  c.container;
  c.compositionEngine;
  c.viewSlot;
  c.viewResources;
  c.taskQueue;
  c.executionContext;
  c.view;
  c.viewModel;
  c.model;
  c.currentInstruction;
  c.currentViewModel;
  c.bind(executionContext);
  c.modelChanged(newValue, oldValue);
  c.viewChanged(newValue, oldValue);
  c.viewModelChanged(newValue, oldValue);
}

function testGlobalBehavior {
  var element = {};
  var gb = new GlobalBehavior(element);
  gb.element;
  gb.handler;
  gb.aureliaCommand;
  gb.aureliaAttrName;
  GlobalBehavior.handlers;
  GlobalBehavior.createSettingsFromBehavior;
  GlobalBehavior.jQueryPlugins;
  gb.bind();
  gb.attached();
  gb.detached();
  gb.unbind();
}

var viewFactory, viewSlot, observerLocator;

function testIf {
  var iif = new If(viewFactory, viewSlot)
  iif.viewFactory;
  iif.viewSlot;
  iif.showing;
  iif.view;
  iif.valueChanged(3);
}

function testWith {
  w = new With(viewFactory, viewSlot);
  w.viewFactory;
  w.viewSlot;
  w.view;
  w.valueChanged(3);
}

var executionContext = {};
var items = [];
var key = 'a', value = 3, index = 7, length = 4;
var context = {}, data = {};
var array = ['a','b'], splices = [3,4: string;
var map = {x:2}, records = [1,2: string;

function testRepeat {
  r = new Repeat(viewFactory, viewSlot, observerLocator);
  r.viewFactory;
  r.viewSlot;
  r.observerLocator;
  r.local;
  r.key;
  r.value;
  r.items;
  r.executionContext;
  r.oldItems;
  r.disposeSubscription;
  r.lastBoundItems;
  r.bind(executionContext);
  r.unbind();
  r.itemsChanged();
  r.processItems();
  r.processArrayItems(items);
  r.processMapEntries(items);
  r.processNumber(value);
  r.createBaseExecutionContext(data);
  r.createBaseExecutionKvpContext(key, value);
  r.createFullExecutionContext(data, index, length);
  r.createFullExecutionKvpContext(key, value, index, length);
  r.updateExecutionContext(context, index, length);
  r.handleSplices(array, splices);
  r.handleMapChangeRecords(map, records);
  r.getViewIndexByKey(key);
}

function testShow {
  s = new Show(element);
  s.element;
  s.valueChanged(3);
}

function testSanitizeHtmlValueConverter {
  s = new SanitizeHtmlValueConverter();
  s.sanitizer;

  var untrustedMarkup = "<h1>no trust</h1>";
  var x;
  x = s.toView(untrustedMarkup);
  x = SanitizeHtmlValueConverter.defaultSanitizer(untrustedMarkup);
}


function testReplaceable {
  new Replaceable(viewFactory, viewSlot);
}
