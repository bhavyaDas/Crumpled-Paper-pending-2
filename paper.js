
class Paper {
    constructor(x,y){
var options={

    isStatic:false,
    restitution:0.3,
    density:1.2,
    friction:0
}
this.y=656
this.radius=60
this.body=Bodies.circle(x,656,60,options)
this.image=loadImage("paper.png")
World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        imageMode(RADIUS)
        image(this.image,0,0,this.radius,this.radius)
        pop()
    }
}