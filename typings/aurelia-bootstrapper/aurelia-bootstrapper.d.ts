// Type definitions for aurelia-bootstrapper v0.12.0
// Project: https://github.com/aurelia/bootstrapper
// Definitions by: Kristian Mandrup <https://github.com/kristianmandrup/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'aurelia-bootstrapper/index' {
	export function bootstrap(configure: any): Promise<{}>;

}
declare module 'aurelia-bootstrapper' {
	export * from 'aurelia-bootstrapper/index';
}
