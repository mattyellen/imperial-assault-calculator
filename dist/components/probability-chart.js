"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
require("jquery");
var chartjs_1 = require("chartjs");
var ProbabilityChart = (function () {
    function ProbabilityChart(element) {
        this._maxDatasets = 8;
        this._currentColor = 0;
        this._colors = [
            [220, 0, 0, "white"],
            [0, 220, 0, "white"],
            [0, 0, 220, "white"],
            [220, 220, 0, "black"],
            [0, 220, 220, "black"],
            [220, 0, 220, "white"]
        ];
        this._element = element;
        this.resetChart();
    }
    ProbabilityChart.prototype.setChartDisplay = function (val) {
        var chartContainer = $(this._element).find("#chartContainer").get(0);
        if (chartContainer !== undefined) {
            chartContainer.style.display = val ? "block" : "none";
        }
    };
    ProbabilityChart.prototype.getColor = function (alpha) {
        var i = this._currentColor % this._colors.length;
        var color = this._colors[i];
        var r = color[0];
        var g = color[1];
        var b = color[2];
        return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
    };
    ProbabilityChart.prototype.getTextColor = function () {
        var i = this._currentColor % this._colors.length;
        var color = this._colors[i];
        return color[3];
    };
    ProbabilityChart.prototype.refreshChart = function () {
        var ctx = $(this._element).find("#damageChart").get(0).getContext("2d");
        this._chart = new chartjs_1.Chart(ctx, {
            type: 'line',
            data: {
                labels: this._labels,
                datasets: this._datasets
            }
        });
    };
    ProbabilityChart.prototype.removeDataset = function () {
        this._datasets.pop();
        this._rawChartData.pop();
        this.legend.pop();
        if (this.legend.length > 1) {
            this.combineIcons.unshift(this.legend[this.legend.length - 2]);
        }
        this.combineIcons.pop();
        this._currentColor--;
    };
    ProbabilityChart.prototype.resetChart = function () {
        this._chartMaxDamage = 0;
        this._currentColor = 0;
        this._datasets = [];
        this._rawChartData = [];
        this.legend = [];
        this.combineIcons = [];
        this.setChartDisplay(false);
        if (this._chart !== undefined) {
            this._chart.destroy();
        }
    };
    ProbabilityChart.prototype.combineChartData = function () {
        var total = this._rawChartData.length;
        var chartData1 = this._rawChartData[total - 2];
        var chartData2 = this._rawChartData[total - 1];
        var combinedChartData = {};
        for (var v1 in chartData1) {
            for (var v2 in chartData2) {
                var totalValue = Number(v1) + Number(v2);
                var prob = chartData1[v1] * chartData2[v2];
                var currentProb = combinedChartData[totalValue];
                if (currentProb === undefined) {
                    combinedChartData[totalValue] = prob;
                }
                else {
                    combinedChartData[totalValue] = currentProb + prob;
                }
            }
        }
        this.removeDataset();
        this.removeDataset();
        this.addChartData(combinedChartData);
    };
    ProbabilityChart.prototype.addChartData = function (newChartData) {
        if (this._datasets.length == this._maxDatasets) {
            return;
        }
        this._rawChartData.push(newChartData);
        var minValue = 1;
        var maxValue = this._chartMaxDamage;
        for (var v in newChartData) {
            maxValue = Math.max(maxValue, Number(v));
        }
        this._chartMaxDamage = maxValue;
        if (maxValue == 0) {
            return;
        }
        this.setChartDisplay(true);
        var labels = [];
        var data = [];
        var cumulativeProb = 0;
        for (var i = maxValue; i >= minValue; i--) {
            cumulativeProb += (newChartData[i] === undefined) ? 0 : newChartData[i];
            data.unshift(Math.round(cumulativeProb * 100));
            labels.unshift(i);
        }
        this._labels = labels;
        this._datasets.push({
            fillColor: this.getColor(0.2),
            strokeColor: this.getColor(1),
            pointColor: this.getColor(1),
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: this.getColor(1),
            data: data
        });
        for (var _i = 0, _a = this._datasets; _i < _a.length; _i++) {
            var ds = _a[_i];
            while (ds.data.length < maxValue) {
                ds.data.push(0);
            }
        }
        var newLegendIcon = {
            value: this._datasets.length,
            color: this.getColor(1),
            textColor: this.getTextColor()
        };
        this.legend.push(newLegendIcon);
        this.combineIcons.push(newLegendIcon);
        if (this.combineIcons.length > 2) {
            this.combineIcons.shift();
        }
        this._currentColor++;
        if (this._chart !== undefined) {
            this._chart.destroy();
        }
        this.refreshChart();
    };
    return ProbabilityChart;
}());
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", String)
], ProbabilityChart.prototype, "title", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", String)
], ProbabilityChart.prototype, "xLabel", void 0);
ProbabilityChart = __decorate([
    __param(0, aurelia_dependency_injection_1.inject),
    __metadata("design:paramtypes", [Element])
], ProbabilityChart);
exports.ProbabilityChart = ProbabilityChart;
var LegendInfo = (function () {
    function LegendInfo() {
    }
    return LegendInfo;
}());
exports.LegendInfo = LegendInfo;
