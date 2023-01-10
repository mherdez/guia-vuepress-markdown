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

