# #PlatziCodingChallenge
Repo para el #PlatziCodingChallenge, 100 días de retos de programación con @platzi!

100 días de retos de programación con Platzi

Instalar dependencias
```shel
npm install
```

## Contenido
- [Día 2 - Área de un Triangulo](#Día-2)
- [Día 3 - Reloj](#Día-3)
- [Día 4 - Repite la palabra](#Día-4)
- [Día 5 - Elimina las vocales](#Día-5)
- [Día 6 - Calculadora](#Día-6)
- [Día 7 - Piedra, Papel O Tijeras](#Día-7)
- [Día 8 - Volumen y Área de un Cilindro](#Día-8)
- [Día 9 - Número secreto](#Día-9)
- [Día 10 - Pig Latin](#Día-10)
- [Día 11 - Generador de Contraseñas](#Día-11)
- [Día 12 - Próximo Cumpleaños](#Día-12)
- [Día 13 - Calculadora de Propinas](#Día-13)
- [Día 14 - Números Primos](#Día-14)



## `Día 2`
Calcular área de un triangulo recibiendo por parametros su base y altura
>  A = (b * h) / 2

El ejemplo esta hecho para ejecutarse desde la terminal.
Modo de uso:

```shell
node challenge/day2 get-area -b=5 -h=10
```
o bien
```shell
node challenge/day2 get-area --base=5 --height=10
```

## `Día 3`
Convierte las horas y minutos a segundos.
Este reto esta hecho para ejecutarse desde la terminal
```shell
node challenge/day3 clock -h=32 -m=20
```
o bien
```shell
node challenge/day3 clock --hours=32 --minutes=20
```
## `Día 4`
Repite N veces la palabra mediante una función recursicva.
Este reto esta hecho para ejecutarse desde la terminal
```shell
node challenge/day4 repeat -w=platzi -r=20
```
o bien
```shell
node challenge/day4 repeat --word=platzi --reps=20
```
## `Día 5`
Elimina las vocales minusculas, mayusculas y con acento de un
parrafo.
Para correlo puede copiar y pegar el código del archivo `challenge/day5.js`
en la consola de su navegador, o bien desde la terminal:

```shell
node challenge/day5
```
## `Día 6`
[Challenge](https://platzi.com/comunidad/platzicodingchallenge-calculadora-piedra-papel-o-tijera/)

Calculadora que recibe dos valores y un operador parra realizar 
el calculo correspondiente.

Este reto esta hecho para ejecutarse desde la terminal
```shell
node challenge/day6 calculate --v1=2 --op=+ --v2=2
```
o bien
```shell
node challenge/day6 calculate --valie1=2 --operator=+ --value2=2
```
## `Día 7`

[Challenge](https://platzi.com/comunidad/platzicodingchallenge-calculadora-piedra-papel-o-tijera/)

Clasico juego de Priedra, Papel o Tijeras, el usuario elige una 
de las tres opciones
 - Piedra: 0
 - Papel: 1
 - Tijera: 2

la computadora elegira la suya y la función determinará quien
es el ganador.


Para probar este ejercición Copia  el código que esta dentro
del archivo `challenge/day7.js` y pegalo en la consola del navegador.

## `Día 8`
[Challenge](https://platzi.com/comunidad/platzicodingchallenge-volumen-de-un-cilindro-numero-secreto/)

Calcula el Volumen o el Área de un cilindro según el valor
de su radio (r) y su altura (h).

Formula para calcular el Volumen:
> V = πr^2h

Formula para calcular el Área:
> V = 2πr(r + h)

Este reto esta hecho para ejecutarse desde la terminal
```shell
node challenge/day8 area -r=3 -h=7 -u=m
node challenge/day8 volume -r=3 -h=7 -u=m
```
o bien
```shell
node challenge/day8 area --radius=3 --heigt=7 --unit=m
node challenge/day8 volume --radius=3 --heigt=7 --unit=m
```

## `Día 9`
[Challenge](https://platzi.com/comunidad/platzicodingchallenge-volumen-de-un-cilindro-numero-secreto/)

Genera un numero aleatorio el cual deberá ser adivinado por el usuario.

Para correlo puede copiar y pegar el código del archivo `challenge/day9.js`
en la consola de tú navegador.

### Uso de la función 
```js
// Asígnamos el nivel de dificultar
const level = 20
console.log(secretNumber(level));

// Si no enviamos el nivel se deja por default el nivel 10
console.log(secretNumber());
```

## `Día 10`
[Challenge](https://platzi.com/comunidad/platzicodingchallenge-traductor-de-_pig-latin_/)

Traduce un texto a **_Pig Latin_**, la traducción es palabra por palabra y sigue las siguientes reglas:
1. Si una palabra comienza con sonido de consonante, se pasan todas las consonantes antes de la primer vocal y se agrega la sílaba “ay” al final
2. Si la palabra inicia con vocal, entonces agrega la sílaba “way” al final 

Para correlo puede copiar y pegar el código del archivo `challenge/day10.js`
en la consola de tú navegador.

### Uso de la función 
```js
// Mandamos el texto que deseamos traducir
const text = 'This is my new text';
console.log(translate(text));
```

## `Día 11`
[Challenge](https://platzi.com/comunidad/platzicodingchallenge-generador-de-contrasenas/)

Generá constraseñas aleatorias segun los parametros capturados por el usuario:
- Longitud de la contraseña.
- Si incluirá minúsculas, mayúsculas, números y caracteres especiales.

Para correlo puede copiar y pegar el código del archivo `challenge/day11.js`
en la consola de tú navegador.

### Uso de la función 
```js
console.log(create());
```



## `Día 12`
[Challenge](https://platzi.com/comunidad/platzicodingchallenge-proximo-cumpleanos/)

Calcula los días que faltan para el cumpleaños del usuario según la fecha ingresada.

Formatos validos leer una fecha:
1. aaaa-mm-dd
2. aaaa/mm/dd
3. aaaa.mm.dd

Este reto esta hecho para ejecutarse desde la terminal
```shell
node challenge/day12 next -b=1991-11-21
```
o bien
```shell
node challenge/day12 next --birthday=1991-11-21
```

## `Día 13`
[Challenge](https://platzi.com/comunidad/platzicodingchallenge-calculadora-de-propina/)

Crea comandas de platillos según un menú en especifico, obtiene el sub total del pedido, menu, platillos y la propina.

Para probarlo puede copiar y pegar el código del archivo `challenge/day13.js`
en la consola de tú navegador.

### Modo de implementación 
```js
const menu = [
  {
    id: 1,
    descripcion: 'Torta Ahogada',
    precio: 35
  },{
    id: 2,
    descripcion: 'Limonada',
    precio: 25
  }
];

const comanda = new Comanda(menu);
comanda.setPlatillo({
    id: 1,
    descripcion: 'Torta Ahogada',
    precio: 35,
    cantidad: 1
  });

const pripina = comanda.calcularPropina(10);

```
## `Día 14`
[Challenge](https://platzi.com/comunidad/platzicodingchallenge-numeros-primos/)

Obtiene todos los números primos que existen entre 1 y N 

> N = Número determinado por el usuario

Características de los números primos:

1. Es un número natural entero mayor a 1.
2. Tiene únicamente 2 divisores: el mismo número y el 1.

Para probarlo puede copiar y pegar el código del archivo `challenge/day14.js`
en la consola de tú navegador.


### Implementación 
```js
const num = 7
const primosArr = numerosPrimos(num);
console.log(primosArr);

/*
* resultado:
* [ 2, 3, 5, 7 ]
*/

```