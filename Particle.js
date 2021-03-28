class Particle
{
    constructor(x, y, r)
    {
        var options ={
            isStatic : true
        }
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
        this.r = 10;
    }
    display()
    {
        var Pos = this.body.position;

        strokeWeight(5);
        stroke('#17FFED');
        fill("white");
        ellipseMode(CENTER);
        ellipse(0, 0, this.r, this.r);
    }
}