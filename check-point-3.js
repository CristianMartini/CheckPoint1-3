
/*Declarando a variavel kelvin*/
const Kelvin = 293;
/*convertendo kelvin para celsius*/
const Celsius =(Kelvin - 273) ;
/*convertendo celsius para fahrenheit */
let  Fahrenheit = (Celsius * (9/5)+ 32);
/*arredondando o resultado  */
Fahrenheit = Math.floor(Fahrenheit);
+
 console.log("A temperatura é " + Fahrenheit +
 " graus Fahrenheit");


