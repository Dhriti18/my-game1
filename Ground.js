class Ground{

    constructor(x,y)
    {
        var options={
            isStatic:true,
        }
    this.body=Bodies.rectangle(x,y,600,20,options)
   
   this.image=loadImage("Images/stage 1.png")
    
    World.add(world,this.body)
    
    
    
    }
    display(){
        push();
       var pos= this.body.position
  imageMode(CENTER);
  image(this.image,pos.x,pos.y,1200,35)
    
    pop();
    }
    }