var Vector2 = require("./vector2").Vector2;

exports.Rigidbody = function (entity) {
    var gravity = new Vector2(0, -10);
    this.velocity = new Vector2(0, 0);
    this.useGravity = false;
    this.isKinematic = false;
    this.entity = entity;
    this.time = this.entity.main.time;
};

exports.Rigidbody.prototype.updatePosition = function () {
    this.entity.transform.previousPosition = this.entity.transform.position;
    if(useGravity) {
        this.addForce(this.gravity * this.entity.main.time.deltaTime());
    }
    this.entity.transform.position += (this.velocity * Time.deltaTime());
};

exports.Rigidbody.prototype.addForce = function (force) {
    this.velocity += force * this.entity.main.time.deltaTime();
};
