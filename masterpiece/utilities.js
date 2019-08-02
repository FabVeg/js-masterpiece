'use strict';  

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/

function getRandomColor(){
    var red, green, blue, alpha ;

    red   = getRandomInteger(50,255);
    green = getRandomInteger(50,255);
    blue  = getRandomInteger(50,255);
    alpha = getRandomInteger(10,100)/100;

    return  "rgba("+red+","+green+","+blue+","+alpha+")";
}

function getRandomInteger(min, max) {
    //The maximum is inclusive and the minimum is inclusive 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


