'use strict';


var Circle = function(){
    this.position = {x:0,y:0};
    this.radius = 10;
    this.color = "black";
};


/**
 * Methode d'encapsulation pour positionner le cercle
 * @param position {object} Object contenant les propriétés x et y
 */
Circle.prototype.setPosition = function(position){

    this.position = position;
};

/**
 * Rayon du cercle
 * @param radius {int}
 */
Circle.prototype.setRadius = function(radius){
    this.radius = radius;
};

/**
 * Couleur du cercle
 * @param color {string} format rgb, hexa, chaine...
 */
Circle.prototype.setColor = function(color){
    this.color = color;
};

/**
 *
 * @param context {CanvasRenderingContext2D}
 */
Circle.prototype.draw = function(context){

    // sauvegarde du context
    context.save();

    // mise à jour de la couleur
    context.fillStyle = this.color;

    context.beginPath();
    context.arc(this.position.x, this.position.y, this.radius, 0,  2*Math.PI, true);

    // tracer la forme
    context.fill();

    // restauration du contexte
    context.restore()
};
