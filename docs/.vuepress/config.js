// Title:
module.exports = {
  title: 'PicoQ',
  description: 'A tiny Javascript library to interact with the DOM',
}

// Theme
module.exports = {
  themeConfig: {
    // Navbar
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Github', link: 'https://github.com/jclo/picoq' },
    ],

    // Sidebar
    sidebar: {

      // Guide
      '/guide/': [
        '',
      ],

      // fallback
      '/': [
        '',        /* / */
      ]
    },

    lastUpdated: 'Last Updated', // string | boolean
  },
}
