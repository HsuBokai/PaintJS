var ToolCircle = function()
{
    this.center_x = 10;
    this.center_y = 10;
    this.radius = 10;
}

ToolCircle.prototype.setCenterPoint = function(x, y)
{
    this.center_x = x;
    this.center_y = y;
}

ToolCircle.prototype.setRadiusByEndPoint = function(x, y)
{
    var diff_x = x - this.center_x;
    var diff_y = y - this.center_y;
    //console.log([diff_x, diff_y]);
    this.radius = Math.sqrt(diff_x*diff_x + diff_y*diff_y);
}

ToolCircle.prototype.draw = function(context)
{
    context.beginPath();
    context.arc(this.center_x, this.center_y, this.radius, 0, Math.PI*2, false);
    //context.strokeStyle = "red";
    //context.lineWidth = 3;
    //context.fillStyle = color;
    //context.fill();
    context.stroke();
}
