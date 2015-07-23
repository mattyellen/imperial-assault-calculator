import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
    diceCount: DiceCount;

    constructor() {
        this.resetDice();
    }

    addDie(type: string) {
        this.diceCount[type]++;
    }

    resetDice() {
        this.diceCount = { red: 0, blue: 0, green: 0, yellow: 0 };
    }

    //configureRouter(config, router){
    //  config.title = 'Aurelia';
    //  config.map([
    //    { route: ['','welcome'], name: 'welcome',  moduleId: './welcome',      nav: true, title:'Welcome' },
    //    { route: 'flickr',       name: 'flickr',   moduleId: './flickr',       nav: true, title:'Flickr' }
    //  ]);

    //  this.router = router;
    // }
}

export class DiceCount {
    red: Number;
    blue: Number;
    green: Number;
    yellow: Number;
}

