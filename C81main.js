canvas=document.getElementById("my_canvas")
ctx=canvas.getContext("2d")
color="red"
line_width=3
var mouseEvent=""
var last_x,last_y

canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e){
    color=document.getElementById("color").value
    line_width=document.getElementById("line_width").value
    mouseEvent="mouse_down"

}

canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e){
    mouseEvent="mouse_up"
}
canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e){
    mouseEvent="mouse_leave"
}
canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e){
    current_x=e.clientX-canvas.offsetLeft
    current_y=e.clientY-canvas.offsetTop
    if (mouseEvent=="mouse_down"){
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=line_width
        ctx.moveTo(last_x,last_y)
        ctx.lineTo(current_x, current_y)
        ctx.stroke()

    }
    last_x=current_x
    last_y=current_y
}

function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}   
