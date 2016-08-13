
var ToolLine = function()
{
    this.start_x = 0;
    this.start_y = 0;
    this.end_x = 10;
    this.end_y = 10;
}

ToolLine.prototype.setStartPoint = function(x, y)
{
    this.start_x = x;
    this.start_y = y;
}

ToolLine.prototype.setEndPoint = function(x, y)
{
    this.end_x = x;
    this.end_y = y;
}

ToolLine.prototype.draw = function(context)
{
    context.beginPath();
    //context.fillStyle = color;
    //context.lineWidth = 3;
    context.moveTo(this.start_x, this.start_y);
    context.lineTo(this.end_x, this.end_y);
    context.stroke();
}


