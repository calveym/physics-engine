module.exports.Vector3 = function (a, b, c) {
    this.x = a;
    this.y = b;
    this.z = c;
};

exports.Vector3.prototype.invert = function () {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
};
