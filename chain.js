class Chain {
    constructor(
        bodyA, bodyB){
            var optians ={
                bodyA:bodyA,bodyB:bodyB,length:100,stiffness:0.1
                
            }
            this.chain = Matter.Constraint.create(optians)
            World.add(world,this.chain)
        }
        display(){
            var pointA = this.chain.bodyA.position
            var pointB = this.chain.bodyB.position
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    
}