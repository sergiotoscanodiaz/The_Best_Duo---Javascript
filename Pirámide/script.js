
var a = prompt("Dime la altura");

var ancho = 1;
var espacios = a;
for (var i = 1; i <= a; i++) {
   
    for (var k = 0;k <= espacios;k++){
        document.write("..");
    }

    for (var j = 0;j < ancho;j++){
        document.write("*");
        
      }

    document.write("<br>");

    ancho+=2;
    espacios--;
}


