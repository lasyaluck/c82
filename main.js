canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
color = "black";
width_of_line = 1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    //Addictional Activity start
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_the_line").value;
    //addictional Activity ends
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    current_postion_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_postion_of_mouse_y = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.linewidth = width_of_line;
        console.log("Last postion of x and y =");
        console.log("x=" + last_position_of_x + "y = " + last_postion_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        console.log("Current postion of x and y coordinates =");
        console.log("x = " + current_postion_of_mouse_x + "y = " + current_postion_of_mouse_y);
        ctx.lineTo(current_postion_of_mouse_x + "y = " + current_postion_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = current_postion_of_mouse_x;
    last_position_of_y = current_postion_of_mouse_y;
}