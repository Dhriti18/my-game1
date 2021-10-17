class Troop{

constructor(x,y)
{
    var options={
        isStatic:true
    }
this.body=Bodies.rectangle(x,y,45,25,options)

this.image=loadImage("Images/troop1.png","Images/troop2.png", "Images/troop3.png",
"Images/troop4.png","Images/troop5.png","Images/troop6.png");
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