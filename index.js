// 1. Imprime por consola el string 'Hello World'.
console.log('Hello World')
// 2. Declara una variable de las dos formas posibles, e imprime por consola los dos valores.
const userName = 'Fran'
let age = 3
console.log(userName)
console.log(age)
// 3. Cambia ahora el valor de una de las dos variables e imprime por consola.
age = 54
console.log(age)
// 4. Crea dos variable numéricas e imprime el resultado de sumarlas por consola.
let num1 = 5
let num2 = 95
console.log(num1 + num2)
// 5. Declara dos variables de tipo string. Imprime por consola el resultado de concatenarlas.
const country = 'Finlandia'
const capital = 'Helsinki'
console.log(`La capital de ${country} es ${capital}`);
// 6. Crea una función que imprima por consola el string 'Hello World'.
function greetings() {
  console.log('Hello world')
}
greetings();

         //otra forma
const greet = function() {
  console.log('Hello world')
}
greet()
// 7. Crea una función que, al ser llamada, imprima por consola el resultado de la multiplicación de dos números introducidos como parámetros.
function multiplicate (num1, num2) {
  console.log(num1 * num2)
 }
 multiplicate(7, 7)

       // Arrrow function 
const mutliply = (x, z) => {
  console.log(x * z);
}
mutliply(6,9)
// 8. Crea una función que imprima por consola el resultado de elevar al cubo un número dado como parámetro.
function third(a) {
  return Math.pow(a, 3)
}
third(3)

      //arrow function 
const elevateCube = (m) => {
    return m**3  //console.log(Math.pow(a, 3))
}
elevateCube(5)
// 9. Crea una función que saque por consola el área de un rectángulo de dimensiones dadas como parámetro.
const rectangle = (w, h ) => {
  return w * h;
}
rectangle(2, 7)
// 10. Crea una función que imprima por consola un número al azar entre 0 y 10.
    //arrow function
const random = () => {
  const maxNumber = 11
  const minNumber = 0
 return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)
}
const randomNumber = random()
console.log(`${randomNumber}`)

            //Otra forma
      const random1 = () => {
      const n = Math.random()
      const result = Math.trunc(n * 11)  // esto redondea. Tambien Math.round/Math.floor/Math.ceil
      return result           
    }
    for (let i = 0; i < 4; i++) {
      random1()
    }
// 11. Adivina el número: Crea una función que primero guarde en una variable un número aleatorio del 1 al 10. Después, pregunte al usuario a través de un prompt un número del 1 al 10. Una vez recibida la respuesta, compare estos dos números. Si los números coinciden, imprime por consola un string indicando que el usuario ha acertado, sino, imprime por consola que el usuario ha fallado seguido del número correcto.
const app  = () => {
  const randomNumber = Math.trunc(Math.random() * 11)
  const userNumber = parseInt (prompt ('Introduce un numero del 1 al 10'),)
if(randomNumber === userNumber){
  return 'you are a magician';
}else{
  return `you are a fraud. The correct number is ${userNumber}`;
}
}
app()
// 12. Crea una función que reciba un número como parámetro e imprima por consola si el número dado es par o impar.
const correctNumber = (p) => {
  if (p % 2) {
    console.log(`El numero ${p} es impar`)
     return
  `El numero ${p} es par`;
  }
}
correctNumber(115)
// 13. Crea una función que reciba un parámetro de tipo string e imprima por consola el string revertido. (ejemplo: 'casa' => 'asac).
function reverse(word) {
  const change = word.split('').reverse().join('')
  return change
}
reverse('teide')
// 14. Crea una función que devuelva la tabla de multiplicar de un número introducido como parámetro.
// LLama a la función desde console.log() para que el resultado se imprima por consola
const num3 = (t) =>{
let result=[];
for(let i = 0; i < 11; i++){
  result.push(t * i);
}
return result;
};
num3(9)
// 15. Crea una función que reciba un número por parámetros y retorne si el número recibido es un número primo.
// LLama a la función desde console.log() para que el resultado se imprima por consola
const isPrime = (h) => {
  if(h <= 1 ) {
    return false
  }
  for (let i = 2; i < h; i++){
    if (h % i === 0) {
      return false 
    }
    }
    return true 
  }

console.log(isPrime(3))
