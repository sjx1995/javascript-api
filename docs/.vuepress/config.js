module.exports = {
  title: '重读 JavaScript API',
  description: '不忘初心，方得始终',
  dest: './dist',
  port: '8080',
  head: [['link', { rel: 'icon', href: '/logo.jpg' }]],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: require('./nav'),
    sidebar: require('./sidebar'),
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    searchMaxSuggestoins: 10,
    serviceWorker: {
      updatePopup: {
        message: 'New content is available.',
        buttonText: 'Refresh'
      }
    },
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页 ！',
	}
}
