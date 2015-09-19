export class RollResult {
    constructor(
        public damage: number = 0,
        public surge: number = 0,
        public range: number = 0,
        public block: number = 0,
        public evade: number = 0,
        public miss: boolean = false,
        public probability: number = 1
        ) { }

    getHashCode(): string {
        return `${this.damage}|${this.surge}|${this.range}|${this.block}|${this.evade}|${this.miss}`;
    }

    apply(rollResult: RollResult): RollResult {
        return new RollResult(
            this.damage + rollResult.damage,
            this.surge + rollResult.surge,
            this.range + rollResult.range,
            this.block + rollResult.block,
            this.evade + rollResult.evade,
            this.miss || rollResult.miss,
            this.probability * rollResult.probability
            );
    }
}
