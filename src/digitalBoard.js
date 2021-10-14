// Declaramos las variables que usaremos para acceder a los canvas
const Tapiz = document.getElementById("areaDibujo");
const Lienzo = Tapiz.getContext("2d");
const Coords = Tapiz.getBoundingClientRect();
const CoordsMove = new Array;


if(screen.width < 768) {
    Tapiz.width = screen.width;
}
if(screen.width >= 768 && screen.width < 1000) {
    Tapiz.width = 700;
    Tapiz.height = 400;
}
if(screen.width >= 1000) {
    Tapiz.width = 1000;
    Tapiz.height = 500;
}

/**
 * Código para dibujar con el mouse.
 */
Tapiz.addEventListener("mousedown", function() {
    Tapiz.addEventListener("mousemove", dibujarMouse, false);
}, false);
Tapiz.addEventListener("mouseup", function() {
    Tapiz.removeEventListener("mousemove", dibujarMouse, false);
    borrarArray(CoordsMove);
}, false);

function dibujarMouse (evento) {
    let cx = evento.layerX;
    let cy = evento.layerY;
    CoordsMove.push({cx,cy});
    let color = document.getElementById("selColor");
    color = color.value;
    let grosor = document.getElementById("grosor")
    grosor = grosor.value
    Lienzo.strokeStyle = color;
    Lienzo.lineWidth = grosor;
    for (m of CoordsMove) {
        let x = m.cx;
        let y = m.cy;
        Lienzo.beginPath();
        Lienzo.moveTo(x - 1, y - 1);
        Lienzo.lineTo(x + 1, y + 1);
        Lienzo.closePath();
        Lienzo.stroke();
    }
}

/**
 * Código para dibujar en movil o tablet
 */
Tapiz.addEventListener("touchstart", function() {
    disableScroll();
}, false);
Tapiz.addEventListener("touchmove", function(evento) {
    console.log(evento);
    console.log(Coords.top);
    let cx = evento.touches[0].clientX;
    cx = cx - Coords.left;
    let scroll = evento.touches[0].pageY - evento.touches[0].clientY;
    let cy = evento.touches[0].clientY;
    if(Coords.top > scroll) {
        cy = cy - (Coords.top - scroll);
    } else {
        cy = cy - ((Coords.top - scroll)*(-1));
    }
    CoordsMove.push({cx,cy});
    console.log(cy);
    let color = document.getElementById("selColor");
    color = color.value;
    let grosor = document.getElementById("grosor")
    grosor = grosor.value
    Lienzo.strokeStyle = color;
    Lienzo.lineWidth = grosor;
    for (m of CoordsMove) {
        let x = m.cx;
        let y = m.cy;
        Lienzo.beginPath();
        Lienzo.moveTo(x - 1, y - 1);
        Lienzo.lineTo(x + 1, y + 1);
        Lienzo.closePath();
        Lienzo.stroke();
    }
}, false);
Tapiz.addEventListener("touchend", function() {
    enableScroll()
    borrarArray(CoordsMove);
}, false);



function disableScroll(){
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
}
function enableScroll(){
    document.getElementsByTagName("html")[0].style.overflow = "auto";
}
function borrarArray(array) {
    for (let x = array.length; x > 0; x--) {
        array.pop();
    }
}