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
