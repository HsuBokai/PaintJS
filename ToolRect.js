var ToolRect = function()
{
    this.l = 10;
    this.t = 10;
    this.w = 10;
    this.h = 10;
}

ToolRect.prototype.setLeftTop = function(x, y)
{
    this.l = x;
    this.t = y;
}

ToolRect.prototype.setRightButtom = function(x, y)
{
    this.w = x - this.l;
    this.h = y - this.t;
}

ToolRect.prototype.draw = function(context)
{
    context.beginPath();
    context.rect(this.l, this.t, this.w, this.h);
    context.stroke();
}
