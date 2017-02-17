exports.Vector2 = function (a, b) {
    this.x = a;
    this.y = b;
};

exports.Vector2.prototype.invert = function () {
    this.x = -this.x;
    this.y = -this.y;
};
