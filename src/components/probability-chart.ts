import {bindable} from 'aurelia-framework';
import {inject} from 'aurelia-dependency-injection';

export class ProbabilityChart {
    @bindable title: string;
    @bindable xLabel: string;

    legend: LegendInfo[];

    private _chartMaxDamage: number;
    private _chart: LinearInstance;
    private _datasets: any[];
    private _element: Element;

    constructor( @inject element: Element) {
        this._element = element;
        this.resetChart();
    }

    private setChartDisplay(val: boolean) {
        let chartContainer = $(this._element).find("#chartContainer").get(0);
        if (chartContainer !== undefined) {
            chartContainer.style.display = val ? "block" : "none";
        }
    }

    private _currentColor: number = 0;
    private _colors: any[][] = [
        [220, 0, 0, "white"],
        [0, 220, 0, "white"],
        [0, 0, 220, "white"],
        [220, 220, 0, "black"],
        [0, 220, 220, "black"],
        [220, 0, 220, "white"]
    ]

    private getColor(alpha: number): string {
        let i = this._currentColor % this._colors.length;
        let color = this._colors[i];
        let r = color[0];
        let g = color[1];
        let b = color[2];
        return `rgba(${r},${g},${b},${alpha})`;
    }

    private getTextColor(): string {
        let i = this._currentColor % this._colors.length;
        let color = this._colors[i];
        return color[3];
    }

    resetChart() {
        this._chartMaxDamage = 0;
        this._currentColor = 0;
        this._datasets = [];
        this.legend = [];
        this.setChartDisplay(false);

        if (this._chart !== undefined) {
            this._chart.destroy();
        }
    }

    addChartData(newChartData: { [damage: number]: number }) {
        let minValue = 1;
        let maxValue = this._chartMaxDamage;
        for (let v in newChartData) {
            maxValue = Math.max(maxValue, v);
        }

        this._chartMaxDamage = maxValue;

        if (maxValue == 0) {
            return;
        }

        this.setChartDisplay(true);

        let labels = [];
        let data = [];
        let cumulativeProb = 0;
        for (let i = maxValue; i >= minValue; i--) {
            cumulativeProb += (newChartData[i] === undefined) ? 0 : newChartData[i];
            data.unshift(Math.round(cumulativeProb * 100));
            labels.unshift(i);
        }

        this._datasets.push({
            label: "Cumulative Damage Probablity",
            fillColor: this.getColor(0.2),
            strokeColor: this.getColor(1),
            pointColor: this.getColor(1),
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: this.getColor(1),
            data: data
        });

        for (let ds of this._datasets) {
            while (ds.data.length < maxValue) {
                ds.data.push(0);
            }
        }

        if (this.legend.length < 12) {
            this.legend.push({
                value: this._datasets.length,
                color: this.getColor(1),
                textColor: this.getTextColor()
            });
        }

        this._currentColor++;

        if (this._chart !== undefined) {
            this._chart.destroy();
        }

        let ctx = <CanvasRenderingContext2D>(<HTMLCanvasElement>$(this._element).find("#damageChart").get(0)).getContext("2d");
        this._chart = new Chart(ctx).Line({
            labels: labels,
            datasets: this._datasets
        });

    }
}

export class LegendInfo {
    value: number;
    color: string;
    textColor: string;
}
