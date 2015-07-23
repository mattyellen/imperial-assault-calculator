/// <reference path="lib.d.ts" />
/// <reference path="aurelia-logging.d.ts" />

function testLogging {
  levels.none == 2;
  levels.error == 4;
  levels.warn == 5;
  levels.info == 6;
  levels.debug == 7;
  
  var ae = new AggregateError('x', {}, true);
  var l = getLogger('x');
  addAppender({});
  setLevel(3)

  var lg = new Logger('x', 'y');
  lg.id;
  lg.debug();
  lg.info();
  lg.warn();
  lg.error();
}
