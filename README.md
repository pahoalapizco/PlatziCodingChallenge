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



## `Día 2`
Calcular área de un triangulo recibiendo por parametros su base y altura
>  A = (b * h) / 2

El ejemplo esta hecho para ejecutarse desde la terminal.
Modo de uso:

```shell
node day2 get-area -b=5 -h=10
```
o bien
```shell
node day2 get-area --base=5 --height=10
```

## `Día 3`
Convierte las horas y minutos a segundos.
Este reto esta hecho para ejecutarse desde la terminal
```shell
node day3 clock -h=32 -m=20
```
o bien
```shell
node day clock --hours=32 --minutes=20
```
## `Día 4`
Repite N veces la palabra mediante una función recursicva.
Este reto esta hecho para ejecutarse desde la terminal
```shell
node day4 repeat -w=platzi -r=20
```
o bien
```shell
node day4 repeat --word=platzi --reps=20
```
## `Día 5`
Elimina las vocales minusculas, mayusculas y con acento de un
parrafo.
Para correlo puede copiar y pegar el código del archivo `day5.js`
en la consula de su navegador, o bien desde la terminal:

```shell
node day5
```
## `Día 6`
[Challenge](https://platzi.com/comunidad/platzicodingchallenge-calculadora-piedra-papel-o-tijera/)

Calculadora que recibe dos valores y un operador parra realizar 
el calculo correspondiente.

Este reto esta hecho para ejecutarse desde la terminal
```shell
node day6 calculate --v1=2 --op=+ --v2=2
```
o bien
```shell
node day6 calculate --valie1=2 --operator=+ --value2=2
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
del archivo `day7.js` y pegalo en la consola del navegador.

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
node day8 area -r=3 -h=7 -u=m
node day8 volume -r=3 -h=7 -u=m
```
o bien
```shell
node day8 area --radius=3 --heigt=7 --unit=m
node day8 volume --radius=3 --heigt=7 --unit=m
```

## `Día 9`
[Challenge](https://platzi.com/comunidad/platzicodingchallenge-volumen-de-un-cilindro-numero-secreto/)

Genera un numero aleatorio el cual deberá ser adivinado por el usuario.

Para correlo puede copiar y pegar el código del archivo `day9.js`
en la consula de tú navegador.

### Uso de la función 
```js
// Asígnamos el nivel de dificultar
const level = 20
console.log(secretNumber(level));

// Si no enviamos el nivel se deja por default el nivel 10
console.log(secretNumber());
```
