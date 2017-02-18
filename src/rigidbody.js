var Vector2 = require("./vector2").Vector2;

exports.Rigidbody = function (entity) {
    var gravity = new Vector2(0, -10);
    this.velocity = new Vector2(0, 0);
    this.useGravity = false;
    this.isKinematic = false;
    this.grounded = false;
    this.friction = 0;
    this.drag = 1;
    this.entity = entity;
    this.time = this.entity.main.time;
};

exports.Rigidbody.prototype.updatePosition = function () {
    this.entity.transform.previousPosition = this.entity.transform.position;
    this.entity.transform.position += (this.velocity * this.entity.main.time.deltaTime());
    if(this.useGravity && !this.grounded) {
        this.addForce(this.gravity * this.entity.main.time.deltaTime());
    }
    this.addForce(this.drag * -this.velocity * this.entity.main.time.deltaTime());
};

exports.Rigidbody.prototype.addForce = function (force) {
    this.velocity += force * this.entity.main.time.deltaTime();
};

exports.Rigidbody.prototype.changeVelocity = function (newVelocity) {
    this.velocity = newVelocity;
};
