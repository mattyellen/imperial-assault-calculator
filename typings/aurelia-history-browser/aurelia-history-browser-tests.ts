/// <reference path="lib.d.ts" />
/// <reference path="aurelia-history-browser.d.ts" />
/// <reference path="aurelia-history.d.ts" />

function testBrowserHistory() {
  var bh : History;
  bh = new BrowserHistory();

  bh.interval;
  bh.active;
  bh.previousFragment;
  bh.location;
  bh.history;
  bh.root;
  bh.options;
  bh.fragment;
  bh.iframe;
  bh.getHash();
  bh.getFragment();
  bh.activate({});
  bh.deactivate();
  bh.checkUrl() == true;
  bh.loadUrl(true);
  bh.navigate('x', {});
  bh.navigateBack()
}