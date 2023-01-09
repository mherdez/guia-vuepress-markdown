# Contenido

## Introducción

VuePress es un generador de sitios estáticos alimentado por Vue que genera páginas HTML a partir de archivos de Markdown. Esto le permite centrarse en escribir la documentación en lugar de trabajar en perfeccionar el sitio web.

## Recursos
- [Node.js / npm](https://nodejs.org/es/)
- [Vuepress](https://vuepress.vuejs.org/)
- [Markdown](https://www.markdownguide.org/)
- [Github](https://github.com/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Preparación de la plataforma
### Vuepress

  La forma más rápida de configurar el proyecto VuePress es usar el generador **`create-vuepress-site`**, que montará la estructura básica del sitio de VuePress.

  Para usarlo, abra la terminal en el directorio deseado y ejecute el siguiente comando:

  ~~~sh
  npx create-vuepress-site [optionalDirectoryName]
  ~~~

 ### Github

 Git es un sistema maduro de control de revisiones de código abierto que se mantiene activo y lo utilizan miles de desarrolladores en todo el mundo.

  ~~~sh
  git init
  ~~~

  :::tip
  Para saber más acerca de Git puede consultar: [12 Comandos de Git que debes de saber](https://youtu.be/iT4UOkyI09k)
  :::

## Estructura de directorios

VuePress sigue el principio de "La convención es mejor que la configuración" . La estructura recomendada es la siguiente:

<!-- ![estructura](/img/estructura.png) -->
<img :src="$withBase('/img/estructura.png')">

:::warning NOTA
Hay que tener en cuenta las mayúsculas, minúsculas y capitalización de los archivos.
:::

## Configuración básica

### config.js

El archivo esencial para configurar un sitio VuePress es **`.vuepress/config.js`**, que debería exportar un objeto JavaScript.

<img :src="$withBase('/img/config.png')">

### Navbar

La barra de navegación puede contener el título de su página, el cuadro de búsqueda, los enlaces de la barra de navegación, los idiomas, el enlace del repositorio, etc., todo depende de su configuración.

~~~js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' }
    ]
  }
}
~~~


### Sidebar

La barra lateral nos permite visualizar las secciones y contenido del sitio. A través de ella, se puede consultar la información de una forma más rápida y directa.

~~~js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ]
  }
}
~~~

Puede omitir la extension `.md`, y las rutas que terminan en `/` se infieren como `*/README.md`. El texto del enlace se deduce automáticamente. Para especificar explícitamente el texto del enlace, se puede usar una matriz en forma de `[link, text]`.

:::warning NOTA
Se debe crear antes el archivo para poder incorporarlo al sidebar.
:::


## Personalización del sitio
### config.js
~~~js
module.exports = {
  dest: 'docs',
  base: '/guia-vuepress-markdown/',
  lang: 'es-MX',
  title: 'Curso de Vuepress',
  description: 'Curso intersemestral de Vuepress. ITCampeche',
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
~~~

### themeConfig.navbar
~~~js
  themeConfig: {
    nav: [
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org/guide'
      },
      {
        text: 'Markdown',
        link: 'https://programminghistorian.org/es/lecciones/introduccion-a-markdown'
      },
    ],
  },
~~~

### themeConfig.sidebar

~~~js
  themeConfig: {
    sidebar: [
      '/',
    ]
  },
  ~~~


## Práctica #1. Primeros pasos
- Instalación
- Configuración
- Personalización

## Markdown

### Conocimiento del lenguaje

Markdown nació como herramienta de conversión de texto plano a HTML.

Aunque en realidad **Markdown** también se considera un **lenguaje** que tiene la finalidad de permitir crear contenido de una manera **sencilla de escribir, y que en todo momento mantenga un diseño legible**, así que para simplificar **se puede considerar Markdown como un método de escritura**.

### Sintaxis

#### Elementos de bloque

#### - Párrafos y saltos de línea

Para generar un nuevo párrafo en Markdown simplemente separa el texto mediante una línea en blanco (pulsando dos veces intro)

Al igual que sucede con HTML, Markdown no soporta dobles líneas en blanco, así que si intentas generarlas estas se convertirán en una sola al procesarse.

Para realizar un salto de línea y empezar una frase en una línea siguiente dentro del mismo párrafo, tendrás que pulsar dos veces la barra espaciadora antes de pulsar una vez intro.

#### - Encabezados

Las `#` almohadillas son uno de los métodos utilizados en Markdown para crear encabezados. Debes usarlos añadiendo uno por cada nivel.

~~~md
# Encabezado 1
## Encabezado 2
### Encabezado 3
#### Encabezado 4
##### Encabezado 5
###### Encabezado 6
~~~

#### - Citas

Las citas se generar utilizando el carácter mayor que > al comienzo del bloque de texto.

~~~md
> Un país, una civilización se puede juzgar por la forma en que trata a sus animales.  — Mahatma Gandhi
~~~

> Un país, una civilización se puede juzgar por la forma en que trata a sus animales.  — Mahatma Gandhi

Si la cita en cuestión se compone de varios párrafos, deberás añadir el mismo símbolo `>` al comienzo de cada uno de ellos.

~~~md
> Creo que los animales ven en el hombre un ser igual a ellos que ha perdido de forma extraordinariamente peligrosa el sano intelecto animal.
> Es decir, que ven en él al animal irracional, al animal que ríe, al animal que llora, al animal infeliz. — Friedrich Nietzsche
~~~

> Creo que los animales ven en el hombre un ser igual a ellos que ha perdido de forma extraordinariamente peligrosa el sano intelecto animal.

> Es decir, que ven en él al animal irracional, al animal que ríe, al animal que llora, al animal infeliz. — Friedrich Nietzsche

Incluso puedes concatenar varios `>>` para crear citas anidadas.

~~~md
> Esto sería una cita como la que acabas de ver.
>
> > Dentro de ella puedes anidar otra cita.
>
> La cita principal llegaría hasta aquí.
~~~

> Esto sería una cita como la que acabas de ver.
>
> > Dentro de ella puedes anidar otra cita.
>
> La cita principal llegaría hasta aquí.

#### - Listas

Para crear **listas desordenadas** utiliza `*` **asteriscos**, `-` **guiones**, o `+` **símbolo de suma**.

~~~md
- Elemento de lista 1
- Elemento de lista 2
* Elemento de lista 3
* Elemento de lista 4
+ Elemento de lista 5
+ Elemento de lista 6
~~~

Da igual qué elemento escojas, incluso puedes intercambiarlos. Todos se verán igual al procesarse.

  - Elemento de lista 1
  - Elemento de lista 2
  * Elemento de lista 3
  * Elemento de lista 4
  + Elemento de lista 5
  + Elemento de lista 6

Para generar **listas anidadas** dentro de otras, simplemente tendrás que añadir **cuatro espacios en blanco antes del siguiente `*`, `-` o `+`.

~~~md
- Elemento de lista 1
- Elemento de lista 2
    - Elemento de lista 3
    - Elemento de lista 4
        - Elemento de lista 5
        - Elemento de lista 6
~~~

  - Elemento de lista 1
  - Elemento de lista 2
      - Elemento de lista 3
      - Elemento de lista 4
          - Elemento de lista 5
          - Elemento de lista 6

Para crear **listas ordenadas** debes utilizar la sintaxis de tipo: *«número.»* `1.`. Al igual que ocurre con las listas desordenadas, también podrás **anidarlas o combinarlas**.

~~~md
1. Elemento de lista 1
2. Elemento de lista 2
    - Elemento de lista 3
    - Elemento de lista 4
        1. Elemento de lista 5
        2. Elemento de lista 6
~~~

1. Elemento de lista 1
2.  Elemento de lista 2
    - Elemento de lista 3
    - Elemento de lista 4
        1. Elemento de lista 5
        2. Elemento de lista 6

#### - Códigos de bloque

Si quieres crear un bloque entero que contenga código. Lo único que tienes que hacer es encerrar dicho párrafo entre dos líneas formadas por tres ~ virgulillas.

~~~~
~~~
Creando códigos de bloque.
Puedes añadir tantas líneas y párrafos como quieras.
~~~
~~~~

De esta forma, se obtendrá el siguiente resultado:

~~~
Creando códigos de bloque.
Puedes añadir tantas líneas y párrafos como quieras.
~~~

#### - Reglas horizontales

Las reglas horizontales se utilizan para separar secciones de una manera visual.

Para crearlas, en una línea en blanco se debe incluir tres de los siguientes elementos: **asteriscos**, **guiones**, o **guiones bajos**.

~~~md
***
---
___
~~~
___

#### Elementos de línea

#### - Énfasis (negritas y cursivas)

Markdown utiliza **asteriscos** o **guiones bajos** para enfatizar.

Simplemente tendrás que envolver palabras o textos en éstos símbolos para conseguir *cursivas* o **negritas**.

| MARKDOWN	| RESULTADO |
|-|-|
| \*cursiva*	  | *cursiva* |
| \_cursiva_	  | _cursiva_ |
| \**negrita**	| **negrita** |
| \__negrita__	| __negrita__ |

Por supuesto si quieres utilizar los dos tipos de énfasis no tienes más que ***combinar la sintaxis***, envolviendo la palabra entre tres asteriscos o tres guiones bajos.

| MARKDOWN	| RESULTADO |
|-|-|
| \***cursiva y negrita***	| ***cursiva y negrita***	|
| \___cursiva y negrita___	| ___cursiva y negrita___	|


#### - Links o enlaces

Añadir enlaces a una publicación, más que común, hoy en día es algo casi obligatorio. Con Markdown tendrás varias formas de hacerlo.

**Links o enlaces en línea**

Son los enlaces de toda la vida. Como su nombre indica, se encuentran en línea con el texto.

Se crean escribiendo la palabra o texto enlazada entre `[]` **corchetes**, y el link en cuestión entre `()` **paréntesis**.

| MARKDOWN | RESULTADO |
|-|-|
| [enlace en línea](http://www.limni.net)	| enlace en línea |

**Links o enlaces como referencia**

La desventaja del método anterior, es que si se utiliza links demasiado complejos o largos pueden dificultarte la lectura de tu texto.

Para solucionarlo y crear tu contenido de una manera más ordenada se puede generar enlaces de referencia.

Esto quiere decir que en el texto se enlazará palabras o códigos concretos (formados por letras y/o números), que en otro lugar más apartado de el documento se tendrá definidos como determinadas URL.

~~~md
[nombre de tu referencia]: http:www.tuenlace.com
[nombre que quieres darle a tu enlace][nombre de tu referencia]
~~~

~~~md
[blog]: http://limni.net/blog/
Me llamo Javier Cristóbal y tengo un blog sobre [productividad mac][blog].
En dicha [web][blog] recopilo artículos sobre todo lo relacionado con
automatización, gestión y eficiencia.
~~~

Ejemplo:

:::tip Resultado
[blog]: http://limni.net/blog/
Me llamo Javier Cristóbal y tengo un blog sobre [productividad mac][blog].
En dicha [web][blog] recopilo artículos sobre todo lo relacionado con automatización, gestión y eficiencia.
:::

#### - Código

La forma más sencilla de escribir código en Markdown es envolver el texto entre dos comillas sencillas <code>`</code>. Esto se corresponde con la etiqueta HTML <code>\<code></code>

~~~md
`Esto es una línea de código`
~~~

Se verá como `Esto es una línea de código`.

Como ves, es muy útil para introducir código dentro de la misma línea o párrafo, algo que no permite el método siguiente.

- Texto preformateado <code>\<pre></code>

La otra manera de añadir código en Markdown es comenzar el párrafo con cuatro espacios en blanco. Esto se corresponde con la etiqueta HTML \<pre>

~~~
  Esto es una línea de código
~~~

Se convierte en

~~~
Esto es una línea de código
~~~

:::tip NOTA
¡estos espacios se debe incluir en cada línea que se escriba! Para añadir código en bloque es mejor utilizar la sintaxis anterior: `códigos de bloque`.
:::

#### - Imágenes

Insertar una imagen con Markdown se realiza de una manera prácticamente idéntica a insertar **links**.

Solo que en este caso, deberás añadir un símbolo de `!` **exclamación** al principio y el enlace no será otro que la ubicación de la imagen.

~~~md
![Texto alternativo](/ruta/a/la/imagen.jpg)
~~~

También podrás añadir un título alternativo entrecomillándolo al final de la ruta. Esto sería el título mostrado al dejar el cursor del ratón sobre la imagen.

~~~md
![Texto alternativo](/ruta/a/la/imagen.jpg "Título alternativo")
~~~

Ya que al añadir imágenes también estás tratando con URLs, puedes utilizar el método que viste anteriormente para incluir links mediante referencias, solo que en este caso los enlaces de referencia serán aquellos donde se encuentre tu imagen.

~~~md
De esta forma podrías insertar una imagen
![nombre de la imagen][img1]

O dos, sin ensuciar tu espacio de escritura.
![nombre de la imagen2][img2]

[img1]: /ruta/a/la/imagen2.jpg "Título alternativo uno"
[img2]: /ruta/a/la/imagen2.jpg "Título alternativo"
~~~

#### - Links automáticos
Estos tipo de links son necesarios cuando se quiere mostrar una URL completa, y no un enlace enmascarado bajo una palabra o frase como ocurre con los links en línea.

Para generar links automáticos tan solo tendrás que rodearlos con los símbolos ` < > `

~~~md
<https:www.google.com/>
~~~

<https:www.google.com/>


#### - Omitir Markdown

Para escribir ciertos símbolos como **\* asteriscos o _ guiones bajos**, sin que Markdown los interprete para convertirlos en negritas, cursivas... se antepone la barra invertida `\` delante de cualquiera de los elementos que se enlista a continuación, mismos que no tendrán efecto a la hora de convertirse en negritas, cursivas, links…

~~~
\  barra invertida
`  acento invertido
*  asterisco
_  guión bajo
{} llaves
[] corchetes
() paréntesis
#  almohadilla
+  símbolo de suma
-  guión
.  punto
!  exclamación
~~~

### Multimarkdown

Depende del nivel al que se necesite llegar para escribir documentación u otro tipo de contenido, se puede observar que al Markdown original quizá le faltan ciertas características para poder realizar todo aquello que se necesita (tablas, notas de pie de página, etc.), se puede consultar [Multimarkdown](https://markdown.es/multimarkdown/) para ampliar el conocimiento.


## Vuepress
- Desarrollo de contenidos
- Creación de menús y rutas
- Optimización del código

## Desarrollo y despliegue
- Comprobación
- Estructura
- Navegación
- Código
- Accesibilidad
- Construcción (build)
- Despliegue (Deploy)

## Práctica #2. Publicación de contenidos
- Depuración del contenido
- Optimización
- Empleo de buenas prácticas
- Construcción
- Despliegue y publicación
