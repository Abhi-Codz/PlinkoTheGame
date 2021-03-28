class Ground
{
    constructor(x, y, width, height)
    {
        var options ={
            isStatic : true,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height =  height;
        World.add(world, this.body);
    }
    display()
    {
        var Pos = this.body.position;
        strokeWeight(10);
        stroke('#17FFED');
        fill('white');
        rectMode(CENTER);
        rect(Pos.x, Pos.y, this.width, this.height);
    }
}