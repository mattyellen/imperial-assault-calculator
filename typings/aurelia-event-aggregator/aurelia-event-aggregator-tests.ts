/// <reference path="lib.d.ts" />
/// <reference path="aurelia-event-aggregator.d.ts" />

function testEventAggregator {
  var evag = new EventAggregator();
  evag.eventLookup;
  evag.messageHandlers;

  var cb = function() {};
  var ev = {};

  evag.publish(ev, []);
  evag.subscribe(ev, cb);
  evag.subscribeOnce(ev, cb);

  EventAggregator ea = includeEventsIn({});
  Aurelia aurelia;
  configure(aurelia);
}
