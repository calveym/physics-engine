function Main () {
    var Entity = require('./entity.js').Entity;
    var Rigidbody = require('./rigidbody.js').Rigidbody;
    var Vector2 = require('./vector2.js').Vector2;
    var Vector3 = require('./vector3.js').Vector3;
    var CollisionEngine = require('./collisionEngine.js').CollisionEngine;
    var startTime;
    var thisTick;
    var lastTick;
    var timeSinceStart;
    this.collisionEngine = new CollisionEngine();
    this.entities = [];
    this.tick = 0;

    gameLoop = function () {
        updateTime();
        collisionEngine.checkCollisions();
        for(i = 0; i < entities.length; i++) {
            entities[i].update();
        }
        tick++;
        setTimeout(gameLoop, 10);
    };

    start = function () {
        startTime = new Date().getTime();
        for(i = 0; i < entities.length; i++) {
            entities[i].start();
        }
        this.gameLoop();
    };

    updateTime = function () {
        lastTick = thisTick;
        thisTick = new Date().getTime();
    };

    instantiate = function (name, position) {
        var newEntity = new Entity(this, name, position);
        entities.push(newEntity);
        return newEntity;
    };
}

var main = new Main();
var testEntity = instantiate("testEntity", new main.Vector2(0, 0));
var secondTestEntity = instantiate("secondTestEntity", new main.Vector2(3, 3));
start();
