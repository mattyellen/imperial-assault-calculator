/// <reference path="lib.d.ts" />
/// <reference path="aurelia-logging-console.d.ts" />

var logger = {}, message = 'ww';

function testConsoleAppender {
  ConsoleAppender ca = new ConsoleAppender();
  ca.debug(logger, message);
  ca.info(logger, message);
  ca.warn(logger, message);
  ca.error(logger, message);
}
