module.exports = {
  dest: 'docs',
  base: '/guia-vuepress-markdown/',
  lang: 'es-ES',
  title: 'Curso de Vuepress',
  description: 'Curso intersemestral de Vuepress. ITCampeche',
  themeConfig: {
    editLinks: false,
    lastUpdated: false,
    nav: [
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org/guide'
      },
      {
        text: 'Markdown',
        link: 'https://programminghistorian.org/es/lecciones/introduccion-a-markdown'
      },
      {
        text: 'Markdown Github',
        link: 'https://docs.github.com/es/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax'
      },
    ],
    sidebar: [
      '/',
      '/pages/01-practica-1',
      '/pages/02-markdown',
      '/pages/03-design',
      '/pages/04-practica-2',
      '/pages/05-deploy',
      '/pages/06-practica-3',
      '/pages/07-avanzado',
    ]
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
