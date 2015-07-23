/// <reference path="lib.d.ts" />
/// <reference path="aurelia-validation.d.ts" />

function testUtilities {
    var utils = new Utilities();
    var x = UtilitiesgetValue(2);
    Utilities.isEmptyValue(3) == false;
}


function testValidationLocale {
    var val = new ValidationLocale({x: 2}, {y:1})
    ValidationLocale.Repository == {};
    val.defaults;
    val.currentLocale;
    val.getValueFor('x', 'y');
    val.setting('a');
    val.translate('a', 2, 4);
}

function testValidateCustomAttributeViewStrategyBase {
  var val = ValidateCustomAttributeViewStrategyBase();
  var validationProperty = 'x';
  var element;
  val.bindingPathAttributes;
  val.getValidationProperty('x', element);
  val.prepareElement(validationProperty, element);
  val.updateElement(validationProperty, element);
}

function testTWBootstrapViewStrategy {
  var bvs = new TWBootstrapViewStrategy(true, false, 'x');

  bvs.appendMessageToInput;
  bvs.appendMessageToLabel;
  bvs.helpBlockClass;

  var currentElement, element;
  var currentDepth = 1;
  var validationProperty = 'x';
  var currentLabels = ['x', 'y': string;

  bvs.searchFormGroup(currentElement, currentDepth);
  bvs.findLabels(formGroup, inputId)[];
  bvs.findLabelsRecursively(currentElement, inputId, currentLabels, currentDepth): void;
  bvs.appendMessageToElement(element, validationProperty): void;
  bvs.appendUIVisuals(validationProperty, currentElement): void;
  bvs.prepareElement(validationProperty, element): void;
  bvs.updateElement(validationProperty, element): void;
}

function testValidationConfigDefaults {
    ValidationConfigDefaults.defaults == {};
}

function callback(x) {
}
var identifier = 'x';
var value = 1;
var name = 'x';

function testValidationConfig {
  ValidationConfig.uniqueListenerId;
  var vc = new ValidationConfig();
  var vci = new ValidationConfig({x:3});

  vc.innerConfig;
  vc.values;
  vc.changedHandlers;
  vc.getValue(identifier);
  vc.setValue(identifier, value): ValidationConfig;
  vc.onLocaleChanged();
  vc.getDebounceTimeout();
  vc = vc.useDebounceTimeout(value);
  vc.getDependencies();
  vc = vc.computedFrom(dependencies);
  vc = vc.useLocale(localeIdentifier);
  vc.locale();
  vc = vc.useViewStrategy(viewStrategy);
  vc.getViewStrategy();
}

function testValidationResult {
  var vr = new ValidationResult();
  vr.isValid;
  vr.properties;
  vr.addProperty(name);
  vr.checkValidity();
  vr.clear();
}
function testValidationResultProperty {
  var group = {};
  var vrp = new ValidationResultProperty(group);
  vrp.group;
  vrp.onValidateCallbacks;
  vrp.isValid;
  vrp.isDirty;
  vrp.message;
  vrp.failingRule;
  vrp.latestValue;
  vrp.clear();
  vrp.onValidate(callback);
  vrp.notifyObserversOfChange();

  var shouldBeDirty = false;
  var validationResponse = function() {};

  vrp.setValidity(validationResponse, shouldBeDirty);
}
