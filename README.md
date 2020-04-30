# Check List | Guía Mass Effect 2

Proyecto que crear una lista de las misiones del juego Mass Effect 2 y que permite ir chequeando las tareas o misiones que ya se han realizado para ver el nivel de progreso del juego y poder completarlo al 100%

## Vista General o despliegue 📦

La app puede ser probada a través del sitio web netlify en el siguiente link:
* [cheklistme2](https://cheklistme2.netlify.app/) - Chek List ME2

## Construido con 🛠️

Esta app solo tiene concepto básicos de desarrollo, con el objetivo de realizar practicas de los conocimientos del framework Vue.js, combinándolo con herramientas de CSS como Bootstrap.

* [HTML] - Para maquetado html
* [CSS] - para corregir funcionalidades menores
* [BOOTSTRAP] - para todo el aspecto visual
* [VUE.JS] - para trabajar la lógica.

## Funcionalidad 🚀
La app almacena en local Storage los datos de las misiones y del progreso. Esto permite que el usuario pueda mantener su progreso guardado.

Al hacer click en el nombre de la mision esta puede cambiar de color de verde a negro, según su estado; esto para indicar si la misión esta completada o no.

Cada misión tiene un boton "ver detalle" que permite ir al sitio web fuente para tener más información.

Hay un menú que permite el recorrido por las secciones de misiones principales, secundarias y footer.

En la sección de footer se puede encontrar el botón "reset" que permite reiniciar el progreso del usuario.


## Datos o Fuentes 📌
Los datos de este archivo están almacenados en un archivo .JSON local que tiene la información extraída del sitio web de [EliteGuia](https://www.eliteguias.com/). Solo se extrajeron los datos relacionados a los títulos de cada misión y una url que permita la redirección a su sitio web para respetar los derechos de autor. Todos los agradecimientos a su(s) creador(es).