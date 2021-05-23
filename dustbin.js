class Dustbin {
constructor(x,y){
var option={
    isStatic:true
}
this.width=150
this.height=200
this.body=Bodies.rectangle(x,y,100,200,option)
this.image=loadImage("dustbingreen.png")
World.add(world,this.body)
}
display(){
    var pos=this.body.position
    push()
    translate(pos.x,pos.y)
    imageMode(CENTER)
    image(this.image,0,0,this.width,this.height)
    pop()
}
}