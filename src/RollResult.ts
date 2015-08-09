export class RollResult {
    constructor(
        public damage: number = 0,
        public surge: number = 0,
        public range: number = 0,
        public block_damage: number = 0,
        public block_surge: number = 0,
        public miss: boolean = false,
        public probability: number = 1
        ) { }

    getHashCode(): string {
        return `${this.damage}|${this.surge}|${this.range}|${this.block_damage}|${this.block_surge}|${this.miss}`;
    }

    apply(rollResult: RollResult): RollResult {
        return new RollResult(
            this.damage + rollResult.damage,
            this.surge + rollResult.surge,
            this.range + rollResult.range,
            this.block_damage + rollResult.block_damage,
            this.block_surge + rollResult.block_surge,
            this.miss || rollResult.miss,
            this.probability * rollResult.probability
            );
    }
}
