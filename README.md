# Password Gen
![Portada del juego Zorro Feroz](https://jgalvandesign.com/assets/images/project__digitalBoard.jpg)
## Descripción
Bienvenido a este proyecto en el cual podemos realizar dibujos en canvas con tan solo unas líneas de HTML5, CSS y Javascript.

El proyecto te permite dibujar en la pantalla con el mouse actualmente, en próximas actualizaciones implementaré algo de diseño a los features de color y grosor de la línea para que resulte más atractivo, y también intentare corregir un desfase de la posición cuando se utiliza en móvil en futuras actualizaciones.

Puedes probar este proyecto aquí mismo para ver si te gusta o puedes descargar el código desde el repositorio e implementarlo donde desees.


### Link de acceso
https://jgalvandesign.com/digitalBoard.html


### Tecnologías
HTML5, CSS, Javascript


### LICENCIA
MIT


## INSTALACIÓN
Puedes descargar los archivos desde Github directamente o clonar el repositorio.

URL de Descarga: https://github.com/Jgalvan7/digitalBoard.git

Clonar erpositorio: $ git clone https://github.com/Jgalvan7/digitalBoard.git


## CÓMO USAR
Para implementarlo en otro proyecto, simplemente debe agregar estas líneas de código al proyecto y guardar los archivos de CSS y JS en las carpetas correspondientes:


En el HEAD:

``<link rel="stylesheet" href="/css/styles.css">``

En el BODY:

``<section class="moduloBoard" id="canvasMouse">``

``<div class="moduloBoard__option">``

``<input type="color" name="selColor" id="selColor">``

``<select name="grosor" id="grosor">``

``<option value="1">1px</option>``

``<option value="2">2px</option>``

``<option value="3">3px</option>``

``<option value="4">4px</option>``

``<option value="5">5px</option>``

``</select>``

``</div>``

``<canvas class="moduloBoard__lienzo" width="700" height="450" id="areaDibujo"></canvas>``

``</section>``

``<script src="./src/digitalBoard.js"></script>``


## Actualizaciones y Parches
### Versión
1.0


### Fecha último Update
14/10/2021


### Notas del último parche 14/10/2021
Este es el update inicial, con una versión estable del proyecto, en futuras actualizaciones se mejorara el código para hacerlo mas compacto, se dará diseño a la parte de las opciones de dibujo y se corregirá un bug cuando se utiliza la pizarra en una tablet o en un móvil.
