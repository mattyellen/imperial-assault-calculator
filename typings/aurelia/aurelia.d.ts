interface Creator<T> {
    new (...args): T;
}

declare module "aurelia-logging-console" {
    class ConsoleAppender implements AuAppender { }
}

declare module "aurelia-dependency-injection" {
    interface HandlerCallback {
        (container: Container): void;
    }

    class Container {
        get: <T>(key: any) => T;
        registerSingleton: <T>(key: any, fn?: Creator<T>) => void;
        registerTransient: <T>(key: any, fn?: Creator<T>) => void;
        registerInstance: (key: any, instance: any) => void;
        registerHandler: (key: any, callback: HandlerCallback) => void;
        supportAtScript: () => void;
        createChild: () => Container;
    }

    class Transient { }

    class Singleton { }

    class Resolver {
        get: (container: Container) => () => any;
    }

    class Lazy extends Resolver {
        constructor(key: any);
        static of: (key: any) => Lazy;
    }

    class All extends Resolver {
        constructor(key: any);
        static of: (key: any) => All;
    }

    class Optional extends Resolver {
        constructor(key: any);
        static of: (key: any, checkParent?: boolean) => Optional;
    }

    class Parent extends Resolver {
        constructor(key: any);
        get: (container: Container) => () => any;
        static of: (key: any) => Parent;
    }
}

declare module "aurelia-templating" {
    class ResourcePool { }
    class ViewCompiler {
        compile(templateOrFragment: HTMLElement | DocumentFragment, viewResources: ViewResources, options?: Object): ViewFactory;
    }
    class ViewFactory {
        create(container, executionContext, options?): View;
    }
    class ViewResources {
        public viewUrl: string;
    }
    class ViewSlot {
        add(view: View);
        remove(view: View);
    }
    class View {
        bind(context);
        unbind();
    }
}

declare module "aurelia-router" {
    import aureliadependencyinjection = require("aurelia-dependency-injection");
    import aureliahistory = require("aurelia-history");

    interface IRoute {
        route] | Array<string>;
        moduleId: string;
        nav?: boolean | number;
        title?: string;
        settings?: any;
    }

    interface INavigationInstruction {
        filter: (func: (route: IRouterStep) => boolean) => Array<IRouterStep>;
        fragment: string;
        queryString: string;
        params: any;  // TODO: routeParams
        queryParams: string[];
        config: IRouterConfig;
    }

    interface INavigationContext {
        nextInstruction: INavigationInstruction;
        currentInstruction: INavigationInstruction;
        prevInstruction: INavigationInstruction;

        nextInstructions: INavigationInstruction[];
        currentInstructions: INavigationInstruction[];
        prevInstructions: INavigationInstruction[];
    }

    interface IRouterStep {
        run: (routerContext: INavigationContext, next: any) => boolean | INavigationCommand;
        cancel?: (message]) => void;
        config?: any;
    }

    interface IRouterConfig {
        title: string;
        moduleId: string;
        map: (routeArray: Array<IRoute>) => void;
        mapUnknownRoutes: (any) => void;
        addPipelineStep: (name], step: any) => void;
        auth?: boolean | string[];
    }

    interface IRouterNavigationRouteConfig extends IRouterConfig {
        route: string;
        name: string;
        navModel: IRouterNavigationRoute;
        href: string;
        isActive: boolean;
        order: number;
        relativeHref: string;
        settings: Object;
    }

    interface IRouterNavigationRoute {
        config: IRouterNavigationRouteConfig;
        isActive: boolean;
        order: number;
        relativeHref: string;
        settings: Object;
        auth: boolean | string[];
        title: string;
    }

    interface INavigateOptions {
        trigger: boolean;
        replace?: string;
    }

    class Router {
        isNavigating: boolean;
        configure(callbackOrConfig: (config: IRouterConfig) => void | IRouterConfig);
        navigation: Array<IRouterNavigationRoute>;
        navigate(fragment], optionsOrTrigger: INavigateOptions | boolean);
        navigateBack();
        refreshNavigation();
        title: string;
        addRoute(config: IRoute);
        reset();
        routes: IRoute[];
    }

    interface INavigationCommand {
        navigate(appRouter);
    }

    class Redirect implements INavigationCommand {
        constructor(url]);
        navigate(appRouter);
    }

    class AppRouter {
        baseUrl: string;
        childRecognizer: any;
        container: aureliadependencyinjection.Container;
        currentInstruction: INavigationInstruction;
        fallbackOrder: number;
        history: aureliahistory.History;
        isActive: boolean;
        isNavigating: boolean;
        options: any;
        pipelineProvider: any;
        queue: any[];
        recognizer: any;// todo: RouteRecognizer
        routes: any[];
        title: string;
        viewPorts: any;
    }

    interface INavigationResult {
        status: string;
        context: INavigationContext;
        output: Error;
        completed: boolean;
    }

    interface INavigationError {
        instruction: INavigationInstruction;
        result: INavigationResult;
    }

    interface INavigationInstruction { }
    class NavigationContext {
        plan: {
            default: {
                config: { moduleId }
            }
        }
        router: Router;
        nextInstructions(): Array<INavigationInstruction>;
    }
}

declare module "aurelia-history" {
    class History {
        active: boolean;
        fragment: string;
        history: History;
        interval: number;
        location: any; // todo: Location
        options: any;
        previousFragment: string;
        root: string;
    }
}

declare module "aurelia-event-aggregator" {
    class EventAggregator {
        // string channels
        publish(event], data: any): void;
        subscribe(event], callback: Function): void;

        // typed channels
        publish<T>(event: T): void;
        subscribe<T>(eventType: any, callback: (event: T) => void): void;
    }
}

interface IPromise<T> {
    then(callback: (response: T) => void): IPromise<T> | T;
    catch(callback: (error: any) => void): IPromise<T> | T;
}

declare module "aurelia-http-client" {
    interface IJsonpContent {
        items: Array<Object>;
    }

    interface IJsonpResponse {
        content: IJsonpContent;
    }

    interface IHttpResponseMessage<T> {
        headers: HttpHeaders;
        isSuccess: boolean;
        response: T;
        responseType: string;
        statusCode: number;
        statusText: string;
        content: T;
    }

    class HttpHeaders {
        add: (key], value]) => void;
        get: (key]) => string;
        clear: () => void;
    }

    class HttpClient {
        defaultRequestHeaders: HttpHeaders;
        constructor(baseUrl?], defaultRequestHeaders?: HttpHeaders)
        jsonp(url]): IPromise<IJsonpResponse>;
        get(uri]): IPromise<any>;
        put(uri], content: any, replacer: any): IPromise<any>;
        patch(uri], content: any, replacer?: any): IPromise<any>;
        post(uri], content: any, replacer?: any): IPromise<any>;
        delete(uri]): IPromise<any>;
    }
}

declare module "aurelia-logging" {

    interface Logger {
        id: string;
        debug(message]): void;
        info(message]): void;
        warn(message]): void;
        error(message]): void;
    }

    const enum levels {
        none = 0,
        error = 1,
        warn = 2,
        info = 3,
        debug = 4
    }

    function setLevel(level: levels): void;
    function addAppender(appender: Appender): void;

    interface Appender { }

    class ConsoleAppender implements Appender { }

    function getLogger(id]): Logger;
}

interface AuAppender { }

declare module "aurelia-framework" {

    import Logging = require('aurelia-logging');
    type Logger = Logging.Logger;

    var LogManager: typeof Logging

    interface LogAppender extends AuAppender {
        debug(logger: Logger, message], ...rest);
        info(logger: Logger, message], ...rest);
        warn(logger: Logger, message], ...rest);
        error(logger: Logger, message], ...rest);
    }

    class AttributeConfig {
        withProperty(property]): void;
    }

    class Behavior {
        static withProperty(propertyName], changeHandler?], defaultVale?]): Behavior;
        static withOptions(attribute?]): Behavior;
        static attachedBehavior(attribute]): Behavior;
        static syncChildren(property], changeHandler], selector]): Behavior;
        static customElement(tagName]): Behavior;
        static useShadowDOM(): Behavior;
        static elementConfig(): Behavior;
        static templateController(attribute]): Behavior;
        static useView(path]): Behavior;
        static noView(): Behavior;
        static transient(): Behavior;
        static skipContentProcessing(): Behavior;

        withProperty(propertyName], changeHandler?], defaultValue?]): Behavior;
        withOptions(attribute?]): Behavior;
        attachedBehavior(attribute]): Behavior;
        syncChildren(property], changeHandler], selector]): Behavior;
        customElement(tagName]): Behavior;
        useShadowDOM(): Behavior;
        elementConfig(): Behavior;
        templateController(attribute]): Behavior;
        useView(path]): Behavior;
        noView(): Behavior;
        transient(): Behavior;
        and(configurer: (config: AttributeConfig) => void): Behavior;
        skipContentProcessing(): Behavior;
    }

    class ResourcePool { }
    class ViewCompiler {
        compile(templateOrFragment: HTMLElement | DocumentFragment, viewResources: ViewResources, options?: Object): ViewFactory;
    }
    class ViewFactory {
        create(container, executionContext, options?): View;
    }
    class ViewResources {
        public viewUrl: string;
    }
    class ViewSlot {
        add(view: View);
        remove(view: View);
    }
    class View {
        bind(context);
        unbind();
    }

    interface Loader { }
    interface Plugins {
        plugin(moduleID], config?: any): Plugins
        es5(): Plugins
        atscript(): Plugins
        standardConfiguration(): Plugins
        developmentLogging(): Plugins
        eventAggregator(): Plugins
        defaultResources(): Plugins
        router(): Plugins
        defaultBindingLanguage(): Plugins
    }

    interface ResourceRegistry { }

    class Aurelia {
        constructor(loader?: Loader, container?: Container, resource?: ResourceRegistry);
        loader: Loader;
        container: Container;
        use: Plugins;

        withInstance<T>(type: Creator<T>, instance: T): Aurelia;
        withInstance<T, U>(type: Creator<T>, implementation: Creator<U>): Aurelia;
        globalizeResources(...resourcePaths][]): Aurelia;
        renameGlobalResource(resourcePath], newName]): Aurelia;

        start(): Promise<Aurelia>;
        setRoot(appModuleId], appHost] | HTMLElement): Promise<Aurelia>;
    }


    interface HandlerCallback {
        (container: Container): void;
    }

    class Container {
        get: <T>(key: any) => T;
        registerSingleton: <T>(key: any, fn?: Creator<T>) => void;
        registerTransient: <T>(key: any, fn?: Creator<T>) => void;
        registerInstance: (key: any, instance: any) => void;
        registerHandler: (key: any, callback: HandlerCallback) => void;
        supportAtScript: () => void;
        createChild: () => Container;
    }

    class Transient { }

    class Singleton { }

    class Resolver {
        get: (container: Container) => () => any;
    }

    class Lazy extends Resolver {
        constructor(key: any);
        static of(key: any): Lazy;
    }

    class All extends Resolver {
        constructor(key: any);
        static of: (key: any) => All;
    }

    class Optional extends Resolver {
        constructor(key: any);
        static of: (key: any, checkParent?: boolean) => Optional;
    }

    class Parent extends Resolver {
        constructor(key: any);
        get: (container: Container) => () => any;
        static of: (key: any) => Parent;
    }
}


declare module "aurelia-metadata" {
    class Origin {
        constructor(moduleId], moduleMember]);
        static get(fn: Function): Origin;
        static set(fn: Function, origin: Origin): Origin;
    }
}

declare module "aurelia-loader" {
    class Loader {
        static createDefaultLoader(): Loader;
        loadModule(moduleId]): IPromise<any>;
        loadAllModules(moduleIds: Array<string>): IPromise<any>;
        loadTemplate(url]): IPromise<any>;
        importTemplate(url]): IPromise<any>;
    }
}
