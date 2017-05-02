import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import 'jquery';
import { DialogService, DialogCloseResult } from 'aurelia-dialog';
import { inject } from 'aurelia-dependency-injection';
import { PossibleRolls } from "../util/PossibleRolls";
import { SurgeAttackProperty, FixedAttackProperty } from "../util/AttackProperty";
import { DefenseProperty } from "../util/DefenseProperty";
import { Dice } from "../util/Dice";
import { ProbabilityChart } from "../components/probability-chart";
import { LoadDialog } from "../components/load-dialog";
import { Config } from "../util/Config";

export class AttackCalc {
    private _dialogService: DialogService;

    diceCount: Dice<number>;

    surgeAbilities: SurgeAttackProperty[];
    fixedAttackAbility: FixedAttackProperty;
    fixedDefenseAbility: DefenseProperty;
    attack_type: string;
    range: number;

    probabilityChart: ProbabilityChart;

    constructor( @inject dialogService: DialogService) {
        this.diceCount = new Dice<number>();
        this.resetAttackDice();
        this.resetDefenseDice();

        this.surgeAbilities = [];
        this.attack_type = "melee";
        this.range = 0;

        this._dialogService = dialogService;
    }

    attached() {
        $('[data-toggle="tooltip"]').tooltip({ container: "body", delay: { show: 500 } });
    }

    selectAttackType(type: string) {
        this.attack_type = type;
        if (type == "melee") {
            this.range = 0;
        } else if (type == "range") {
            this.range++;
        }
    }

    addAttackProperty(surge: FixedAttackProperty, type: string) {
        surge[type]++;
    }

    addDie(type: string) {
        this.diceCount[type]++;
    }

    addDefenseProperty(type: string) {
        this.fixedDefenseAbility[type]++;
    }

    addNewSurge(surgeCost: number) {
        this.surgeAbilities.push(new SurgeAttackProperty(surgeCost));
    }

    removeSurge(surge: SurgeAttackProperty) {
        this.surgeAbilities = this.surgeAbilities.filter(p => p != surge);
    }

    resetAttackDice() {
        this.loadAttackDice(new Config())
    }

    resetDefenseDice() {
        this.loadDefenseDice(new Config())
    }

    private loadAttackDice(config: Config) {
        this.diceCount.red = config.diceCount.red;
        this.diceCount.blue = config.diceCount.blue;
        this.diceCount.green = config.diceCount.green;
        this.diceCount.yellow = config.diceCount.yellow;
        this.fixedAttackAbility = config.fixedAttackAbility;
    }

    private loadDefenseDice(config: Config) {
        this.diceCount.black = config.diceCount.black;
        this.diceCount.white = config.diceCount.white;
        this.fixedDefenseAbility = config.fixedDefenseAbility;
    }

    private loadConfig(config: Config) {
        if (config.hasAttackConfig) {
            this.loadAttackDice(config);
            
            this.surgeAbilities = config.surgeAbilities;
            this.attack_type = config.attack_type;
            this.range = config.range;
        }
        if (config.hasDefenseConfig) {
            this.loadDefenseDice(config);
        }
    }

    calculateResult() {
        let possibleRolls = new PossibleRolls();
        possibleRolls.applyAllRolls(this.diceCount);

        //possibleRolls.showProb();

        let damageResults = possibleRolls.getEffectiveDamage(this.surgeAbilities, this.fixedAttackAbility, this.fixedDefenseAbility, this.range);
        this.probabilityChart.addChartData(damageResults);
    }

    load() {
        this._dialogService
            .open({ viewModel: LoadDialog, model: {}, lock: true })
            .whenClosed((response: DialogCloseResult) => {
                if (!response.wasCancelled) {
                    this.loadConfig(response.output);
                }
            });
    }

    save() {
        console.log("save")
    }
}



