exports.Time = function (main) {
    this.main = main;
};

exports.Time.prototype.deltaTime = function () {
    return this.main.thisTick - this.main.lastTick;
};

exports.Time.prototype.timeSinceStart = function () {
    return this.main.thisTick - this.main.startTick;
};
