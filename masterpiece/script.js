'use strict';

/*global getRandomInteger, getRandomColor, Circle */
var canvas, ctx;

function onClickCanvas(envent){
    var position, radius, color, circle;
    
    position = {x:event.offsetX, y:event.offsetY};
    radius = getRandomInteger(10,50);
    color = getRandomColor();
    
    circle = new Circle();

    circle.setPosition(position);
    circle.setRadius(radius);
    circle.setColor(color);

    circle.draw(ctx);
}





document.addEventListener('DOMContentLoaded',function(){

    canvas  = document.getElementById("mon_canvas");
    ctx     = canvas.getContext("2d");
    
    canvas.addEventListener('click', onClickCanvas);
    canvas.addEventListener('touch', onClickCanvas);
});
