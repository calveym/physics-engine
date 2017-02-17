var Vector2 = require("./vector2").Vector2;

module.exports.Rigidbody = function (entity) {
    var gravity = 10;
    this.force = new Vector2(0, 0, 0);
    this.useGravity = false;
    this.isKinematic = false;
    this.entity = entity;
};

exports.Rigidbody.prototype.updatePosition = function () {
    this.entity.transform.previousPosition = this.entity.transform.position;
    this.entity.transform.position += (this.force * Time.deltaTime());
};

module.exports.Rigidbody.prototype.addForce = function (force) {
    this.force += force;
};
