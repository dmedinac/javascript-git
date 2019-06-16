'use strict'

var lenguajes = new Array("PHP" , "JS" , "Go" , "Java" , "C#" , "C" , "Pascal");

document.write("<h1> Lenguajes de programación del 2019</h1>");
document.write("<ul>");

lenguajes.forEach((puto, perro, culo) => {
    document.write("<li>"+perro+".-"+puto+"</li>");
    console.log(culo)
})

document.write("</ul>")