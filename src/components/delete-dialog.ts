import { inject } from 'aurelia-dependency-injection';
import { DialogController } from 'aurelia-dialog';
import { Config } from '../util/Config';

export class DeleteDialog {
    controller: DialogController;
    config: Config;

    constructor( @inject controller: DialogController) {
        this.controller = controller;
    }

    activate(config: Config) {
        this.config = config;
    }
}