const { VerletPhysics2D, VerletParticle2D, VerletSpring2D } = toxi.physics2d;
const { GravityBehavior } = toxi.physics2d.behaviors;
const { Vec2D, Rect } = toxi.geom;

let physics;
let particleA;

function setup() {
    createCanvas(640, 360);
    physics = new VerletPhysics2D();
    physics.addBehavior(new GravityBehavior(new Vec2D(0, 1)));

    let bounds = new Rect(0, 0, width, height);
    physics.setWorldBounds(bounds);

    particleA = new VerletParticle2D(320, 100);
    physics.addParticle(particleA);

    particleB = new VerletParticle2D(330, 200);
    physics.addParticle(particleB);

    particleC = new VerletParticle2D(310, 200);
    physics.addParticle(particleC);

    spring = new VerletSpring2D(particleA, particleB, 100, 0.5);
    physics.addSpring(spring);

    spring2 = new VerletSpring2D(particleB, particleC, 100, 0.5);
    physics.addSpring(spring2);

}

function draw() {
    background(255);
    physics.update();

    particleA.lock();

    fill(0);
    circle(particleA.x, particleA.y, 16);
    circle(particleB.x, particleB.y, 16);
    circle(particleC.x, particleC.y, 16);

    line(particleA.x, particleA.y, particleB.x, particleB.y);
    line(particleB.x, particleB.y, particleC.x, particleC.y);
    line(particleA.x, particleA.y, particleC.x, particleC.y);

}