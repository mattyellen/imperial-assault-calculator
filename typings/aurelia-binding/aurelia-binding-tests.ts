/ <reference path="lib.d.ts" />
/ <reference path="aurelia-binding.d.ts" />

var scope = {};
var binding = {};
var visitor = {};
var observerLocator = {};
var object = {};
var args = {y:2};

function testAccessKeyedObserver {
  var objectInfo = {};
  var keyInfo = {};
  var observerLocator {};
  var evaluate = 'x';

    var akObs = new AccessKeyedObserver(objectInfo, keyInfo, observerLocator, evaluate);
  akObs.objectInfo;
  akObs.keyInfo;
  akObs.evaluate;
  akObs.observerLocator;
  akObs.disposeKey;
  akObs.disposeObject;
  akObs.disposeProperty;
  akObs.callback;
  akObs.updatePropertySubscription(object, 'x');
  akObs.objectOrKeyChanged(object, 'x');
  akObs.subscribe(function() {});
  akObs.notify();
  akObs.dispose();
}

function testModifyCollectionObserver {

  var taskQueue = 1;
  var col = 2;
  var mcObs = new ModifyCollectionObserver(taskQueue, col);

  mcObs.taskQueue;
  mcObs.queued;
  mcObs.callbacks;
  mcObs.changeRecords;
  mcObs.oldCollection;
  mcObs.collection;
  mcObs.lengthPropertyName;
  mcObs.lengthObserver;
  mcObs.array;
  mcObs.subscribe(function() {});
  mcObs.addChangeRecord({});
  mcObs.reset([]);
  mcObs.getLengthObserver();
  mcObs.call();
}

function testCollectionLengthObserver {
  var clObs = new CollectionLengthObserver([]);
  clObs.collection;
  clObs.callbacks;
  clObs.lengthPropertyName;
  clObs.currentValue;
  clObs.getValue();
  clObs.setValue(3);
  clObs.subscribe(function() {});
  clObs.call(3);
}

function testPathObserver {
  var leftObserver = {};
  var getRightObserver = {};
  var observer = {};
  var pathObs = new PathObserver(leftObserver,getRightObserver,3);

  pathObs.leftObserver;
  pathObs.disposeLeft;
  pathObs.rightObserver;
  pathObs.disposeRight;
  pathObs.callback;
  pathObs.updateRight(observer);
  pathObs.subscribe(function() {});
  pathObs.notify('x');
  pathObs.dispose();
}

function testCompositeObserver {
  var compObs = new CompositeObserver([], 1);
  compObs.subscriptions;
  compObs.evaluate;
  compObs.callback;
  compObs.subscribe(function() {});
  compObs.notify('x');
  compObs.dispose();
}


function testExpression {
  Expression exp = new Expression();
  exp.isChain == false;
  exp.isAssignable == true;
  exp.evaluate();
  exp.assign();
  exp.toString() == 'x';
}

function testChain {
  Chain chain = new Chain('x.y');
  chain.expressions == [];
  chain.evaluate({}, {});
  chain.accept({});
}

function testValueConverter {
  ValueConverter vc = new ValueConverter('x.y', 'x', {x:2}, {y:3});

  vc.expression;
  vc.name;
  vc.args;
  vc.allArgs;

  var binding = {};

  vc.evaluate({}, {});
  vc.assign({}, 3, [{x: 2}]);
  vc.accept({});
  vc.connect(binding, {}): {
  vc.value;
  vc.observer;
}

function testAssign {
  var target = {};
  var visitor = {};
  var binding = {};

  Assign as = new Assign(target, 2);
  as.target;
  as.value;
  as.evaluate({}, {x:2});
  as.accept(visitor);
  var x = as.connect(binding, {});
}

function testConditional {
  var c = new Conditional({x:2}, true, false);
  var visitor = {};
  var binding = {};
  c.condition;
  c.yes;
  c.no;
  c.evaluate({}, {x:4});
  c.accept(visitor);
  c.connect(binding, {});
}

function testAccessScope {
  var scope = {};
  var binding = {};
  var visitor = {};

  AccessScope as = new AccessScope('xy');
  as.name;
  as.isAssignable;
  as.evaluate(scope, [{}]);
  as.assign(scope, 2);
  as.accept(visitor);
  as.connect(binding, scope);
}

function testAccessMember {
  var scope = {};
  var binding = {};
  var visitor = {};

  AccessMember am = new AccessMember({}, 'xy');
  am.object;
  am.name;
  am.isAssignable;
  am.evaluate(scope, [{}]);
  am.assign(scope, {});
  am.accept(visitor);
  am.connect(binding, scope);
}

function testAccessKeyed {
  var scope = {};
  var binding = {};
  var visitor = {};

  AccessKeyed ak = new AccessKeyed({}, 'x');
  ak.object;
  ak.key;
  ak.isAssignable;

  ak.evaluate(scope, [{}]);
  ak.assign(scope, 2);
  ak.accept(visitor);
  ak.connect(binding, scope);
}

function testCallScope {
  var scope = {};
  var binding = {};
  var visitor = {};

  CallScope cs = new CallScope('x', {y:2});
  cs.name;
  cs.args;
  cs.evaluate(scope, [{}], {y:2});
  cs.accept(visitor);
  cs.connect(binding, scope);
}

function testCallMember {
  CallMember cm = new CallMember({}, 'x', {y:2});
  cm.object;
  cm.name;
  cm.args;

  cm.evaluate(scope, [{}], {y:2});
  cm.accept(visitor);
  cm.connect(binding, scope);
}

function testCallFunction {
  CallFunction cf = new CallFunction(function() {}, {y:2});
  cf.func;
  cf.args;
  cf.evaluate(scope, valueConverters, args);
  cf.accept(visitor);
  cf.connect(binding, scope);
}

function testBinary {
  var operation = 'x';
  var left = 1, right = 2;
  Binary b = new Binary(operation, left, right);

  b.operation;
  b.left;
  b.right;
  b.evaluate(scope, valueConverters);
  b.accept(visitor);
  b.connect(binding, scope);
}

var binding = {}, scope = {},
var visitor = function() {

};
var valueConverters = {};

function testPrefixNot {
  var operation = '+', expression = '2+4';
  var pfn = PrefixNot(operation);
  pfn.operation;
  pfn.expression;

  pfn.evaluate(scope, valueConverters) == true;
  pfn.accept(visitor);
  pfn.connect(binding, scope);
}

function testLiteralPrimitive {
  var lp = new LiteralPrimitive(value);
  lp.value;
  lp.evaluate();
  lp.evaluate(scope);
  var x = lp.evaluate(scope, valueConverters);
  lp.accept(visitor);
  lp.connect(binding, scope);
}

function testLiteralString extends Expression {
  var ls = new LiteralString('x');
  ls.value;
  ls.evaluate();
  ls.evaluate(scope);
  var x = ls.evaluate(scope, valueConverters);
  ls.accept(visitor);
  ls.connect(binding, scope);
}
function testLiteralArray {
  var la = new LiteralString(elements);
  la.elements;
  la.evaluate();
  la.evaluate(scope);
  var x = la.evaluate(scope, valueConverters);
  la.accept(visitor);
  la.connect(binding, scope);
}
function testLiteralObject {
  var lobj = new LiteralString(['x', 'y'], [1,2]);
  lobj.keys;
  lobj.values;
  lobj.evaluate();
  lobj.evaluate(scope);
  var x = lobj.evaluate(scope, valueConverters);
  lobj.accept(visitor);
  lobj.connect(binding, scope);
}

function testUnparser {
  var expression = 'x.y';
  var buffer = {};
  var unp = new Unparser(buffer);
  unp.buffer;

  var x : String;
  x = Unparser.unparse(expression);
  var text = 'xyz';
  var args = {x: 2};
  var chain = [1,2,3: string;
  var converter = function(x) {};
  var assign, conditional, access, call, prefix, binary, literal;

  unp.write(text);
  unp.writeArgs(args);
  unp.visitChain(chain);
  unp.visitValueConverter(converter);
  unp.visitAssign(assign);
  unp.visitConditional(conditional);
  unp.visitAccessScope(access);
  unp.visitAccessMember(access);
  unp.visitAccessKeyed(access);
  unp.visitCallScope(call);
  unp.visitCallFunction(call);
  unp.visitCallMember(call);
  unp.visitPrefix(prefix);
  unp.visitBinary(binary);
  unp.visitLiteralPrimitive(literal);
  unp.visitLiteralArray(literal);
  unp.visitLiteralObject(literal);
  unp.visitLiteralString(literal);
}

function testbindingMode {
  var bm = bindingMode;
  bm.oneTime == 2;
  bm.oneWay == 3;
  bm.twoWay = 4;
};

function testBindingExpression {
    observerLocator;
    targetProperty;
    sourceExpression;
    mode;
    valueConverterLookupFunction;
    attribute;
    discrete;
    constructor(observerLocator, targetProperty, sourceExpression, mode, valueConverterLookupFunction, attribute?);
    createBinding(target);
}

function testCallExpression {
    observerLocator;
    targetProperty;
    sourceExpression;
    valueConverterLookupFunction;
    constructor(observerLocator, targetProperty, sourceExpression, valueConverterLookupFunction);
    createBinding(target);
}

function testComputedPropertyObserver {
  var obj = {}, propertyName = 'a', descriptor = {}, observerLocator = {};
  var cpo = ComputedPropertyObserver(obj, propertyName, descriptor, observerLocator);
  cpo.obj;
  cpo.propertyName;
  cpo.descriptor;
  cpo.observerLocator;
  cpo.callbacks;
  cpo.oldValue;
  cpo.subscriptions;

  cpo.getValue();
  cpo.setValue(newValue);
  cpo.trigger(newValue, oldValue);
  cpo.evaluate();
  cpo.subscribe(callback);

  hasDeclaredDependencies(descriptor);
  declarePropertyDependencies(ctor, propertyName, dependencies);
}

function testDirtyChecker {
  var dc = new DirtyChecker();
  dc.tracked;
  dc.checkDelay;

  dc.addProperty(property);
  dc.removeProperty(property);
  dc.scheduleDirtyCheck();
  dc.check();
}

function testDirtyCheckProperty {
  var dcp = new DirtyCheckProperty(dirtyChecker, obj, propertyName);
  dcp.dirtyChecker;
  dcp.obj;
  dcp.propertyName;
  dcp.callbacks;
  dcp.isSVG;
  dcp.oldValue;
  dcp.tracking;
  dcp.newValue;

  dcp.getValue();
  dcp.setValue(newValue);
  dcp.call();
  dcp.isDirty() == false;
  dcp.beginTracking();
  dcp.endTracking();
  dcp.subscribe(callback);
}

function testXLinkAttributeObserver {
  var ao = new AttributeObserver(element, propertyName, attributeName);
  ao.element;
  ao.propertyName;
  ao.attributeName;

  ao.getValue();
  ao.setValue(newValue);
  ao.subscribe(callback);
}

function testDataAttributeObserver {
  var dao = new DataAttributeObserver(element, propertyName);
  dao.element;
  dao.propertyName;

  dao.getValue();
  dao.setValue(newValue);
  dao.subscribe(callback);
}

function testStyleObserver {
  so = new StyleObserver(element, propertyName);
  so.element;
  so.propertyName;

  so.getValue();
  so.setValue(newValue);
  so.subscribe(callback);
  so.flattenCss(object) == 'x';
}

function testValueAttributeObserver {
  var vao = new ValueAttributeObserver(element, propertyName, handler);
  vao.element;
  vao.propertyName;
  vao.handler;
  vao.callbacks;
  vao.oldValue;
  vao.disposeHandler;
  vao.getValue();
  vao.setValue(newValue);
  vao.call();
  vao.subscribe(callback);
  vao.unsubscribe(callback);
}

function testSelect {
  var sel = new ValueObserver(element, handler, observerLocator);
  sel.element;
  sel.handler;
  sel.observerLocator;
  sel.value;
  sel.arraySubscription;
  sel.initialSync;
  sel.oldValue;
  sel.callbacks;
  sel.disposeHandler;
  sel.domObserver;

  sel.getValue();
  sel.setValue(newValue);
  sel.synchronizeOptions();
  sel.synchronizeValue();
  sel.call();
  sel.subscribe(callback);
  sel.unsubscribe(callback);
  sel.bind();
  sel.unbind();
}

function testCheckedObserver {
  var co = new CheckedObserver(element, handler, observerLocator);
  co.element;
  co.handler;
  co.observerLocator;
  co.value;
  co.arraySubscription;
  co.initialSync;
  co.oldValue;
  co.callbacks;
  co.disposeHandler;

  co.getValue();
  co.setValue(newValue);
  co.synchronizeElement();
  co.synchronizeValue();
  co.call();
  co.subscribe(callback);
  co.unsubscribe(callback);
  co.unbind();
}

function testEventManager {
  var em = new EventManager();
  em.elementHandlerLookup;
  em.eventStrategyLookup;
  em.defaultEventStrategy;

  em.registerElementConfig(config);
  em.registerElementPropertyConfig(tagName, propertyName, events);
  em.registerElementHandler(tagName, handler);
  em.registerEventStrategy(eventName, strategy);
  em.getElementHandler(target, propertyName);
  em.addEventListener(target, targetEvent, callback, delegate);
}

function testValueConverterResource {
  var vcr = new ValueConverterResource();
  vcr = new ValueConverterResource('blip');

  vcr.name;
  vcr.instance;

  vcr = ValueConverterResource.convention(name);
  vcr.analyze(container, target);
  vcr.register(registry, name);
  Promise<ValueConverterResource> p;
  p = vcr.load(container, target);
}

function testSetterObserver {
  var so = new SetterObserver(taskQueue, obj, propertyName);

  so.taskQueue;
  so.obj;
  so.propertyName;
  so.callbacks;
  so.queued;
  so.observing;
  so.currentValue;
  so.oldValue;

  so.getValue();
  so.setValue(newValue);
  so.getterValue();
  so.setterValue(newValue);
  so.call();
  so.subscribe(callback);
  so.convertProperty();
}

function testOoObjectObserver {
  var ooo = new OoObjectObserver(obj, observerLocator);
  ooo.obj;
  ooo.observers;
  ooo.observerLocator;
  ooo.observing;
  ooo.subscribe(propertyObserver, callback);
  ooo.getObserver(propertyName, descriptor);
  ooo.handleChanges(changeRecords);
}

function testOoPropertyObserver {
  var opo = new OoPropertyObserver(owner, obj, propertyName);
  opo.owner;
  opo.obj;
  opo.propertyName;
  opo.callbacks;

  opo.getValue();
  opo.setValue(newValue);
  opo.trigger(newValue, oldValue);
  opo.subscribe(callback);
}

function testUndefinedPropertyObserver {
  var upo = new UndefinedPropertyObserver(owner, obj, propertyName);
  upo.owner;
  upo.obj;
  upo.propertyName;
  upo.callbackMap;
  upo.callbacks;
  upo.actual;
  upo.subscription;

  upo.getValue();
  upo.setValue(newValue);
  upo.trigger(newValue, oldValue);
  upo.getObserver();
  upo.subscribe(callback);
}

function testObserverLocator {
  var ol = new ObserverLocator(taskQueue, eventManager, dirtyChecker, observationAdapters);
  ol.taskQueue;
  ol.eventManager;
  ol.dirtyChecker;
  ol.observationAdapters;
  ObserverLocator.inject()[1: string;

  ol.getObserversLookup(obj);
  ol.getObserver(obj, propertyName);
  ol.getObservationAdapter(obj, propertyName, descriptor);
  ol.createPropertyObserver(obj, propertyName);
  ol.getArrayObserver(array);
  ol.getMapObserver(map);
}

function testObjectObservationAdapter {
  handlesProperty(object, propertyName, descriptor);
  getObserver(object, propertyName, descriptor);
}

function testToken {
  var t = new Token(index, text);
  t.index;
  t.text;
  t.opKey;
  t.key;
  t.value;

  t = t.withOp(op);
  t = t.withGetterSetter(key);
  t = t.withValue(value);
  t.toString() == 'x';
}
function testLexer {
  var l = new Lexer()
  l.lex(text)[1: string;
}

function testScanner {
  var sc = new Scanner(input);
  sc.input;
  sc.length;
  sc.peek;
  sc.index;

  sc.scanToken();
  var t : Token;

  t = sc.scanCharacter(start, text);
  t = sc.scanOperator(start, text);
  t = sc.scanComplexOperator(start, code, one, two);


  t = sc.scanIdentifier();
  t = sc.scanNumber(start);
  t = sc.scanString();
  sc.advance();
  sc.error(message);
  sc.error(message, 3);
}

function testParser {
  var p = new Parser();
  p.cache;
  p.lexer;

  p.parse(input);
}

function testParserImplementation {
  var pi = new ParserImplementation(lexer, input);
  pi.index;
  pi.input;
  pi.tokens;

  pi.peek;
  pi.parseChain();
  pi.parseValueConverter();
  pi.parseExpression();
  pi.parseConditional();
  pi.parseLogicalOr();
  pi.parseLogicalAnd();
  pi.parseEquality();
  pi.parseRelational();
  pi.parseAdditive();
  pi.parseMultiplicative();
  pi.parsePrefix();
  pi.parseAccessOrCallMember();
  pi.parsePrimary();

    var as : AccessScope
  as = pi.parseAccessOrCallScope(): ;

  var lo : LiteralObject;
  lo = pi.parseObject();

  pi.parseExpressionList(terminator)[1: string;
  pi.optional(text): boolean;
  pi.expect(text);
  pi.advance();
  pi.error(message);
}

function testListenerExpression {
  var le = new ListenerExpression(eventManager, targetEvent, sourceExpression, delegate, preventDefault);
  le.eventManager;
  le.targetEvent;
  le.sourceExpression;
  le.delegate;
  le.discrete;
  le.preventDefault;

  le.createBinding(target);
}

function testNameExpression {
  var ne = new NameExpression(name, mode);
  ne.property;
  ne.discrete;
  ne.mode;

  ne.createBinding(target);
}
