class Chain{
    constructor( chain1,chain2) {
        var a = {
            bodyA: chain1,
            bodyB: chain2,
            stiffness: 0.2,
            length:8
        }
        this.chain = constraint.create(a)
        World.add(world,this.chain)

    }
    display() {
        strokeWeight(4);
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
    }





}