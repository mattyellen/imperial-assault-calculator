/// <reference path="lib.d.ts" />
/// <reference path="aurelia-task-queue.d.ts" />

var task = {};

function testTaskQueue {
  var tq = new TaskQueue();
  tq.microTaskQueue;
  tq.microTaskQueueCapacity;
  tq.taskQueue;
  tq.requestFlushMicroTaskQueue;
  tq.requestFlushTaskQueue;

  tq.queueMicroTask(task);
  tq.queueTask(task);
  tq.flushTaskQueue();
  tq.flushMicroTaskQueue();
  tq.onError({}, {});
}
