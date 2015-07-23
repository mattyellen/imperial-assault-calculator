/// <reference path="lib.d.ts" />
/// <reference path="aurelia-http-client.d.ts" />

function testHeaders() {
  var hds = new Headers({x: 2});
  hds.headers;
  hds.add('x', 2);
  hds.get('x');
  hds.clear();
  hds.configureXHR({xhr: 1});
}

function testHttpResponseMessage {
  var requestMessage = 'x';
  var xhr = {};
  var responseType = 'http';
  var reviver = {};

  var rm = new HttpResponseMessage(requestMessage, xhr, responseType);
  var rmv = new HttpResponseMessage(requestMessage, xhr, responseType, reviver);

  rm.requestMessage;
  rm.statusCode;
  rm.response;
  rm.isSuccess;
  rm.statusText;
  rm.reviver;
  rm.mimeType;
  rm.responseType;
  rm.headers;
  rm.content;
}

function testMimeTypes {
  mimeTypes["text/html"]
  mimeTypes["text/javascript": string;
  mimeTypes["application/javascript": string;
  mimeTypes["text/json": string;
  mimeTypes["application/json": string;
  mimeTypes["application/rss+xml": string;
  mimeTypes["application/atom+xml": string;
  mimeTypes["application/xhtml+xml": string;
  mimeTypes["text/markdown": string;
  mimeTypes["text/xml": string;
  mimeTypes["text/mathml": string;
  mimeTypes["application/xml": string;
  mimeTypes["text/yml": string;
  mimeTypes["text/csv": string;
  mimeTypes["text/css": string;
  mimeTypes["text/less": string;
  mimeTypes["text/stylus": string;
  mimeTypes["text/scss": string;
  mimeTypes["text/sass": string;
  mimeTypes["text/plain": string;
};


function testRequestMessageProcessor {
  var xhrType, transformers;
  var rmp = new RequestMessageProcessor(xhrType, transformers)
  rmp.XHRType;
  rmp.transformers;
  rmp.xhr;
  rmp.abort();

  var client, message = 'xyz';
  rmp.process(client, message);
}

function testJSONPRequestMessage {
  var jrm = new JSONPRequestMessage();
  jrm = new JSONPRequestMessage('aurelia.io');
  jrm = new JSONPRequestMessage('aurelia.io', 'hello');

  jrm.method;
  jrm.uri;
  jrm.content;
  jrm.headers;
  jrm.responseType;
  jrm.callbackParameterName;

  var rmp: RequestMessageProcessor

  rmp = createJSONPRequestMessageProcessor();
}


function testRequestBuilder {
  var rb = new RequestBuilder(client);
  rb.client;
  rb.transformers;
  rb.useJsonp;


  RequestBuilder.addHelper(name, fn);
  rb.send();
}

var message, transformers;
var uri = 'aurelia.io', content = 'xay';
var callbackParameterName;

function testHttpClient {
  var hc = HttpClient();
  hc.requestTransformers;
  hc.requestProcessorFactories;
  hc.pendingRequests;
  hc.isRequesting;
  hc = hc.configure(fn);
  var rb : RequestBuilder;
  rb = hc.createRequest(uri);

  hc.send(message, transformers);
  hc.delete(uri);
  hc.get(uri);
  hc.head(uri);
  hc.jsonp(uri, callbackParameterName?: string);
  hc.options(uri);
  hc.put(uri, content);
  hc.patch(uri, content);
  hc.post(uri, content);
}
