export class App {
    public router: any;

    configureRouter(config, router) {
        config.title = 'Imperial Assault';
        config.map([
            { route: ['', 'attack-calc'], name: 'attack-calc', moduleId: 'attack-calc', nav: true, title: 'Attack' },
            { route: 'attribute-test', name: 'attribute-test', moduleId: 'attribute-test', nav: true, title: 'Attribute Test' },
        ]);

        this.router = router;
    }
}