module.exports = {
  dest: 'docs',
  base: '/guia-vuepress-markdown/',
  lang: 'es-MX',
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
    ]
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
