exports.CollisionEngine = function () {
    this.allColliders = [];
};

exports.CollisionEngine.prototype.addCollider = function (collider) {
    this.allColliders.push(collider);
};

exports.CollisionEngine.prototype.checkCollisions = function () {
    // TODO: take into account changed position due to entity position offset
    // TODO: create separate broad and narrow collision detection
    for(i = 0; i < this.allColliders.length; i++) {
        for(x = 0; x < this.allColliders.length - 1; x++) {
            var colliderA = this.allColliders[i];
            var colliderB = this.allColliders[x];

            if (colliderA.x < colliderB.x + colliderB.width &&
                colliderA.x + colliderA.width > colliderB.x &&
                colliderA.y < colliderB.y + colliderB.height &&
                colliderA.height + colliderA.y > colliderB.y) {
                    this.resolveCollision(colliderA, colliderB);
            }
        }
    }
};

exports.CollisionEngine.prototype.resolveCollision = function (colliderA, colliderB) {
    // TODO: bounce the objects properly, taking angles of incidence etc into account.
    if(!colliderA.isTrigger && !colliderB.isTrigger) {
        colliderA.entity.transform.position = colliderA.entity.transform.previousPosition;
        colliderA.entity.rigidbody.force.invert();
        colliderB.entity.transform.position = colliderB.entity.transform.previousPosition;
        colliderB.entity.rigidbody.force.invert();
    } else if(colliderA.isTrigger) {
        colliderA.trigger();
    } else if(colliderB.isTrigger) {
        colliderB.trigger();
    }
};
