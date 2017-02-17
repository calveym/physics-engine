var Vector2 = require("./vector2").Vector2;

module.exports.Transform = function (entity) {
    this.position = new Vector2(1, 2);
    this.rotation = new Vector2(3, 4);
    this.entity = entity;
};
