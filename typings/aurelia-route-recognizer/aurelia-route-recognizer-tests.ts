/// <reference path="lib.d.ts" />
/// <reference path="aurelia-route-recognizer.d.ts" />

var charSpec = {x:2};

function testState {
  var st = new State(charSpec) : State;
  st.charSpec;
  st.nextStates;
  st.get(charSpec);
  st.put(charSpec);
  var m = st.match('x');
  m.length > 1;
}
