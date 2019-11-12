/*var num = [20];


num[0]= ((Math.random()*100 )+ 1);
num[1]= ((Math.random()*100 )+ 1);
num[2]= ((Math.random()*100 )+ 1);
num[3]= ((Math.random()*100 )+ 1);
num[4]= ((Math.random()*100 )+ 1);
num[5]= ((Math.random()*100 )+ 1);
num[6]= ((Math.random()*100 )+ 1);
num[7]= ((Math.random()*100 )+ 1);
num[8]= ((Math.random()*100 )+ 1);
num[9]= ((Math.random()*100 )+ 1);
num[10]= ((Math.random()*100 )+ 1);
num[11]= ((Math.random()*100 )+ 1);
num[12]= ((Math.random()*100 )+ 1);
num[13]= ((Math.random()*100 )+ 1);
num[14]= ((Math.random()*100 )+ 1);
num[15]= ((Math.random()*100 )+ 1);
num[16]= ((Math.random()*100 )+ 1);
num[17]= ((Math.random()*100 )+ 1);
num[18]= ((Math.random()*100 )+ 1);
num[19]= ((Math.random()*100 )+ 1);

for (var k = 0;k <= 19;k++){
    document.write("Número " + (k +1) +": " + parseInt(num[k]));

    document.write("<br>");
}

if (parseInt(num[k])) {
    
}
*/
var array1=[];
var array2=[];
var array3=[];
var longArray1=20;
var contador1,i,numero;

for(var i = 0; i<20; i++){
for (contador1=0;contador1<=longArray1;contador1++) {
    array1[contador1] = Math.floor(Math.random() * 100) + 1;
}

document.write("Número: " + parseInt(array1));
document.write("<br>");
}

document.write("<br>");
document.write("Números primos:");
document.write("<br>");

for (i=0;i<=longArray1;i++) {
    var divisor=2;
    var primo=true;
    numero=array1[i];
    while (divisor<numero) {
        if (numero % divisor==0) {
            primo=false;
            array3.push(numero);
            break;
        }
        divisor++;
    } 
        if (primo==true) {
        array2.push(numero);
    }
}
document.write("<br>");
document.write(array2);
document.write("<br>");

document.write("<br>");
document.write("Números no primos:");
document.write("<br>");
document.write(array3);
document.write("<br>");

document.querySelector(".demo0").innerHTML = array1;
document.querySelector(".demo1").innerHTML = array2;