class Paper  {
    constructor(x, y, width){
     
    var options ={

        isStatic:false,
        restituion:0.3,
        friction:0.5,
        density:1.2

    }
    
    
    this.body = Bodies.circle(x,y,width,options);
    World.add(world, this.body);

    this.width = width; 

}


display(){
    
    var pos =this.body.position;
    rectMode(CENTER);
    fill("brown");
    ellipse(pos.x, pos.y, this.width, this.width);
        
    
    }
}