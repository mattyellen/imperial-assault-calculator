/// <reference path="lib.d.ts" />
/// <reference path="aurelia-metadata.d.ts" />

function testMetadata {
  Metadata.resource == 'x';
  Metadata.paramTypes == 'x';
  Metadata.properties == 'x';
  Metadata.get('x', {}, 'y') == {};
  Metadata.getOwn('x', {}, 'y') == {};
  Type t = {};
  Metadata.getOrCreateOwn('x', t, {}, 'y') == {};
}

function testDecoratorApplicator {
  DecoratorApplicator da = new DecoratorApplicator()
  da = da.decorator(da);
}


function testDecorators: {
  var c = Decorators.configure;
  c.parameterizedDecorator('x', dec);
  c.simpleDecorator('x', dec);
}

function testOrigin {
  var org = new Origin('x', {});

  org.moduleId == 2;
  org.moduleMember == {};
  Origin.get(function() {}) == {};
  Origin.set(function() {}, org);
}
