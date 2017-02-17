exports.Time = function () {};

exports.Time.prototype.deltaTime = function () {
    return thisTick - lastTick;
};

exports.Time.prototype.timeSinceStart = function () {
    return thisTick - startTick;
};
