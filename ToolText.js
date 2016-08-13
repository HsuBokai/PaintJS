
var ToolText = function(t)
{
    this.text = t;
    this.center_x = 10;
    this.center_y = 10;
}

ToolText.prototype.setCenterPoint = function(x, y)
{
    this.center_x = x;
    this.center_y = y;
}

ToolText.prototype.draw = function(context)
{
    context.fillText(this.text, this.center_x, this.center_y);
}
