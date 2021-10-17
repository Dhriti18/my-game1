class Enemy{

    constructor(x,y)
    {
        var options={
            isStatic:true,
        }
    this.body=Bodies.rectangle(x,y,70,50,options)
    
    this.image=loadImage("Images/enemy1.png","Images/enemy2.png","Images/enemy4.png");
    World.add(world,this.body)
    
    
    
    }
    display(){
        push();
       var pos= this.body.position
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,40,40)
    
    pop();
    }
    }