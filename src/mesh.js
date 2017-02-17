exports.Mesh = function (entity) {
    this.entity = entity;
    this.vertices = [];
    this.triangles = [];
};

exports.Mesh.prototype.clear = function () {
    this.vertices = [];
    this.triangles = [];
};
