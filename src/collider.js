exports.Collider = function (entity, x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.entity = entity;
    this.isTrigger = false;
};

exports.Collider.prototype.trigger = function () {
    console.log("Triggered" + this.entity.name);
};
