import { inject } from 'aurelia-dependency-injection';
import { DialogController } from 'aurelia-dialog';
import { Config } from '../util/Config';

export class SaveDialog {
    controller: DialogController;
    includeAttack: boolean;
    includeDefense: boolean;
    
    constructor( @inject controller: DialogController) {
        this.controller = controller;
    }

    activate() {
    }
}