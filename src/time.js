exports.Time = function () {};

exports.Time.prototype.deltaTime = function () {
    return thisTick - lastTick;
};
