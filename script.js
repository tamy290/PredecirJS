// Examina la desestructuración en objetos anidados con un enfoque en propiedades que podrían no existir.//

const info = {

    personal: {

        nombre: 'Carlos',

        apellido: 'Vega',

        detalles: {

            edad: 30,

            ocupacion: 'Ingeniero'

        }

    }

};

const { personal: { detalles: { edad, salario } } } = info;

console.log(edad); // va a imprimir 30

console.log(salario); //va a imprimir undefined poque la propiedad salario no esta declarado


 //2. Evalúa el uso del operador spread para fusionar objetos con propiedades repetidas.//

const objetoA = { a: 1, b: 2, c: 3 };

const objetoB = { b: 4, c: 5, d: 6 };

const resultado = { ...objetoA, ...objetoB };

console.log(resultado);

// El objeto resultado va a combinar las propiedades de objetoA y objetoB y imprime {a:1,b:4,c:5,d:6}. Teniendo en cuenta que cuando se fusionan objetos usando spread,el objeto más a la derecha tiene prioridad.


 //3. Analiza el alcance de las variables dentro de bloques y funciones.//

function verificar() {

    if (true) {

        const a = 2;

        let b = 3;

        var c = 4;

    }

    console.log(c);

    console.log(a);

    console.log(b);

}

verificar();

//Imprime el valor 4, poruqe los valores de const y let son accesible solo dentro del bloque if ,mientras que el otro dentro de toda función//


//4. Explora el comportamiento de JavaScript cuando se manipulan propiedades de un objeto inmutable.//

const datos = Object.freeze({ nombre: 'Luis', edad: 29 });

datos.edad = 30;

console.log(datos.edad); //Imprime 29 porque al usar Object.freeze hace que el objeto sea inmutable y nose puede cambiar


//5. Comprende la manipulación de arrays con métodos que no modifican el array original.//

const original = [1, 2, 3];

const nuevo = original.concat(4);

console.log(original); //Imprime [1,2,3]

console.log(nuevo);//Imprime [1,2,3,4]
//Al usar concat() devuelve un nuevo array sin modificar la original 

//6. ¿Por qué el código produjo esa salida? ¿Cómo obtendrías el valor del tercer índice?//

const frutas = ['manzana', 'naranja', 'pera', 'mango'];

const [primera, segunda] = frutas;

console.log(primera); //Imprime manzana

console.log(segunda);//Imprime naranja
//Se desestructuran los primeros dos elementos del array 

//7. Examina el comportamiento del ámbito de `let` en bucles, especialmente en bucles anidados.//

for (let i = 0; i < 3; i++) {

    for (let i = 0; i < 2; i++) {

        console.log(i);

    }

}
//Imprime 0,1 , la variable i del bucle interno es diferente al del externo debido al alcance del bloque let


//8. Operador Spread en Objetos ¿Por qué el código produjo esa salida? ¿Cómo solucionarías un problema si quisieras evitar sobrescribir la propiedad ‘b’?//

const objeto1 = { a: 1, b: 2 };

const objeto2 = { b: 3, c: 4 };

const combinado = { ...objeto1, ...objeto2 };

console.log(combinado);
//Imprime {a:1,b:3,c:4}, 

//9. Uso del operador Spread para combinar arrays. Analiza cómo se combinan los arrays y qué sucede con los elementos duplicados.//

const numeros1 = [1, 2, 3];

const numeros2 = [3, 4, 5];

const combinados = [...numeros1, ...numeros2];

console.log(combinados);
//Imprime [1,2,3,3,4,5],los arrays se combinan y los elementos duplicados se mantienen

//10. Alcance y captura de variables en una función. Explora el ámbito de las variables dentro de una función y cómo esto afecta su visibilidad.//

function demostracion() {

    var nombre = 'Ana';

    let edad = 25;

    if (true) {

        var nombre = 'Luis';

        let edad = 30;

    }

    console.log(nombre); //Imprime Luis 
    console.log(edad);//Imprime 25

}

demostracion();


