class GuessingGame {
    constructor(minValue, maxValue) {
        this.minValue;
        this.maxValue;
    }

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        let result = Math.round((this.minValue + this.maxValue) / 2);
        return result;
    }

    lower() {
        return this.maxValue =  Math.round((this.minValue + this.maxValue) / 2);
    }

    greater() {
        return this.minValue = Math.round((this.minValue + this.maxValue) / 2);
    }
}

module.exports = GuessingGame;
