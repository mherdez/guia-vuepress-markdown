module.exports = {
  // dest: 'docs',
  // base: '/guia-vuepress-markdown/',
  title: 'Curso de Vuepress',
  description: 'Curso intersemestral de Vuepress. ITCampeche',
  themeConfig: {
    repo: '',
    editLinks: false,
    lastUpdated: false,
    nav: [
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: [
      '/',
      '/guia/',
      '/guia/informacion'
    ]
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
