var Vector2 = require("./vector2").Vector2;

module.exports.Transform = function (entity, position) {
    this.position = position;
    this.previousPosition = new Vector2(0, 0);
    this.entity = entity;
};
