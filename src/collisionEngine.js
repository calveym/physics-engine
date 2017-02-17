exports.CollisionEngine = function () {
    this.allColliders = [];
};

exports.CollisionEngine.prototype.addCollider = function (collider) {
    this.allColliders.push(collider);
};

exports.CollisionEngine.prototype.checkCollisions = function () {
    // TODO: take into account changed position due to entity position offset
    for(i = 0; i < this.allColliders.length; i++) {
        for(x = 0; x < this.allColliders.length - 1; x++) {
            if (this.allColliders[i].x < this.allColliders[x].x + this.allColliders[x].width &&
                this.allColliders[i].x + this.allColliders[i].width > this.allColliders[x].x &&
                this.allColliders[i].y < this.allColliders[x].y + this.allColliders[x].height &&
                this.allColliders[i].height + this.allColliders[i].y > this.allColliders[x].y) {
                    this.resolveCollisions(i, x);
            }
        }
    }
};

exports.CollisionEngine.protype.resolveCollisione = function (indexA, indexB) {
    var colliderA = this.allColliders[indexA];
    var colliderB = this.allColliders[indexB];
    // Find closest sides
    // Move object so no collision is happening
    // Apply half equal force in opposite direction
};
