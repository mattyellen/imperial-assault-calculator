/// <reference path="lib.d.ts" />
/// <reference path="aurelia-history.d.ts" />

function testHistory() {
  var his = new History();
  his.activate();
  his.deactivate();
  his.navigate();
  his.navigateBack();
}
