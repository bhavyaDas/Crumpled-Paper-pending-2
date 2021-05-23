class Ground {
    constructor(x,y){
   var options={
       isStatic:true
   }
   this.width=3000
   this.height=50
   this.body=Bodies.rectangle(x,y,3000,50,options)
   World.add(world,this.body)
    }
   display(){
       var pos= this.body.position
       push()
       translate(pos.x,pos.y)
       rectMode(CENTER)
       fill("brown")
       rect(pos.x,pos.y,this.width,this.height)
       pop()
   }
   }