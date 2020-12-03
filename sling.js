class Slingshot{
    constructor(body1,body2){
        var options={
            bodyA: body1,
            bodyB: body2,
            length: 1,
            stiffness: 0.04
        }
        this.slingshot = Matter.Constraint.create(options);
        World.add(world,this.slingshot);
    }
    display(){
        var ptA = this.slingshot.bodyA.position;
        var ptB = this.slingshot.bodyB.position;
        line(ptA.x,ptA.y,ptB.x,ptB.y);
    }
}