import { inject } from 'aurelia-dependency-injection';
import { DialogController } from 'aurelia-dialog';
import { Config } from '../util/Config';

export class SaveDialog {
    controller: DialogController;
    saveOptions: SaveOptions;

    constructor( @inject controller: DialogController) {
        this.controller = controller;
    }

    activate() {
        this.saveOptions = new SaveOptions();
    }

    get canSave(): boolean {
        return this.saveOptions.name != null &&
               this.saveOptions.name != "" &&
               (this.saveOptions.includeAttack ||
                this.saveOptions.includeDefense);
    }
}

export class SaveOptions {
    name: string;
    includeAttack: boolean;
    includeDefense: boolean;
}