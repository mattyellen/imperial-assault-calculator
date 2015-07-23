// Type definitions for aurelia-event-aggregator v0.4.0
// Project: https://github.com/aurelia/dependency-injection
// Definitions by: Kristian Mandrup <https://github.com/kristianmandrup/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'aurelia-event-aggregator/index' {
	export class EventAggregator {
	    eventLookup: any;
	    messageHandlers: any;
	    constructor();
	    publish(event: any, data: any): void;
	    subscribe(event: any, callback: any): () => void;
	    subscribeOnce(event: any, callback: any): () => void;
	}
	export function includeEventsIn(obj: any): EventAggregator;
	export function configure(aurelia: any): void;

}
declare module 'aurelia-event-aggregator' {
	export * from 'aurelia-event-aggregator/index';
}
