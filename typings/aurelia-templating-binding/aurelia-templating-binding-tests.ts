/// <reference path="lib.d.ts" />
/// <reference path="aurelia-templating-binding.d.ts" />

var resources = [];
var element = {};
var info = {};
var existingInstruction = {};
var attrName = 'x';

function testSyntaxInterpreter {
  var si = new SyntaxInterpreter(parser, observerLocator, eventManager);
  SyntaxInterpreter.inject();
  si.parser;
  si.observerLocator;
  si.eventManager;
  si.attributeMap;
  si.language;
  si.interpret(resources, element, info, existingInstruction);
  si.handleUnknownCommand(resources, element, info, existingInstruction);
  si.determineDefaultBindingMode(element, attrName);
  si.bind(resources, element, info, existingInstruction);
  si.trigger(resources, element, info);
  si.delegate(resources, element, info);
  si.call(resources, element, info, existingInstruction);
  si.options(resources, element, info, existingInstruction);
}

function testTemplatingBindingLanguage {
  var parser = {}, observerLocator = {}, syntaxInterpreter = {};
  var tbl = new TemplatingBindingLanguage(parser, observerLocator, syntaxInterpreter)
  TemplatingBindingLanguage.inject();
  tbl.parser;
  tbl.observerLocator;
  tbl.syntaxInterpreter;
  tbl.emptyStringExpression;
  tbl.attributeMap;

  var resources = [], attrName = 'x', attrValue = 1, value = 2;
  var element = {}, info = 'a', existingInstruction = 'x';

  tbl.inspectAttribute(resources, attrName, attrValue);
  tbl.createAttributeInstruction(resources, element, info, existingInstruction);
  InterpolationBindingExpression ibe;
  ibe = tbl.parseText(resources, value);
  ibe = tbl.parseContent(resources, attrName, attrValue);
}

functon testInterpolationBindingExpression {
  var observerLocator = {}, targetProperty = 'x', parts = [], mode = 'x';
  var valueConverterLookupFunction = function() {}
  var attribute = 'y'
  var ibe = new InterpolationBindingExpression(observerLocator, targetProperty, parts, mode, valueConverterLookupFunction, attribute);
  ibe.observerLocator;
  ibe.targetProperty;
  ibe.parts;
  ibe.mode;
  ibe.valueConverterLookupFunction;
  ibe.attribute;
  ibe.discrete;
  ibe.createBinding(target: any);
}
