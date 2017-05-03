import { inject } from 'aurelia-dependency-injection';
import { DialogController } from 'aurelia-dialog';
import { Config } from '../util/Config';
import { ConfigStorage } from "../util/ConfigStorage";

export class LoadDialog {
    controller: DialogController;
    configurations: Config[];

    constructor( @inject controller: DialogController) {
        this.controller = controller;
        this.configurations = [];
    }

    activate() {
        for(let config of ConfigStorage.getConfigs()) {
            this.configurations.push(config);
        }
    }
}

