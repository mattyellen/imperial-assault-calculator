// Type definitions for aurelia-history v0.4.0
// Project: https://github.com/aurelia/history
// Definitions by: Kristian Mandrup <https://github.com/kristianmandrup/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'aurelia-history/index' {
	export class History {
	    activate(): void;
	    deactivate(): void;
	    navigate(): void;
	    navigateBack(): void;
	}

}
declare module 'aurelia-history' {
	export * from 'aurelia-history/index';
}
