var Vector2 = require('./vector2.js').Vector2;
var Vector3 = require('./vector3.js').Vector3;

function Main () {
    var Entity = require('./entity.js').Entity;
    var Rigidbody = require('./rigidbody.js').Rigidbody;
    var CollisionEngine = require('./collisionEngine.js').CollisionEngine;
    var Time = require('./time.js').Time;
    var startTime;
    var thisTick;
    var lastTick;
    var timeSinceStart;
    this.collisionEngine = new CollisionEngine();
    this.time = new Time(this);
    this.entities = [];
    this.tick = 0;

    gameLoop = function () {
        updateTime();
        main.collisionEngine.checkCollisions();
        for(i = 0; i < main.entities.length; i++) {
            main.entities[i].update();
        }
        this.tick++;
        setTimeout(gameLoop, 10);
    };

    start = function () {
        startTime = new Date().getTime();
        for(i = 0; i < main.entities.length; i++) {
            main.entities[i].start();
        }
        this.gameLoop();
    };

    updateTime = function () {
        lastTick = thisTick;
        thisTick = new Date().getTime();
    };

    instantiate = function (name, position) {
        var newEntity = new Entity(main, name, position);
        main.entities.push(newEntity);
        return newEntity;
    };
}

var main = new Main();
// console.log(main);
var testEntity = instantiate("testEntity", new Vector2(0, 0));
var secondTestEntity = instantiate("secondTestEntity", new Vector2(3, 3));
start();
