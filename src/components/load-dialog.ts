import { inject } from 'aurelia-dependency-injection';
import { DialogController } from 'aurelia-dialog';
import { Config } from '../util/Config';
import { SurgeAttackProperty } from "../util/AttackProperty";

export class LoadDialog {
    controller: DialogController;
    configurations: Config[];

    constructor( @inject controller: DialogController) {
        this.controller = controller;
        this.configurations = [];
    }

    activate() {
        let c2 = new Config();
        c2.name = "Test Attack Config2"
        c2.hasAttackConfig = true;
        c2.attack_type = "range";
        c2.diceCount.red = 1;
        c2.diceCount.blue = 2;
        c2.range = 5;
        this.configurations.push(c2);

        let c1 = new Config();
        c1.name = "Test Attack Config"
        c1.hasAttackConfig = true;
        c1.attack_type = "range";
        c1.range = 4;
        c1.diceCount.red = 2;
        c1.diceCount.green = 1;
        c1.fixedAttackAbility.damage = 1;
        c1.surgeAbilities = [
            {
                damage: 2,
                pierce: 0,
                accuracy: 1,
                surgeCost: 1
            },
            {
                damage: 5,
                pierce: 1,
                accuracy: 0,
                surgeCost: 2
            }
        ];

        this.configurations.push(c1);
        for (let i = 0; i < 30; i++) {
            this.configurations.push(<Config>{
                name: "Test " + i
            });
        }
    }
}

