// Title:
module.exports = {
  title: 'PicoQ',
  description: 'A template for writing micro UMD Javascript libraries',
}

// Theme
module.exports = {
  themeConfig: {
    // Navbar
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Github', link: 'https://github.com/jclo/umdlib' },
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
        'license.md',
      ]
    },

    lastUpdated: 'Last Updated', // string | boolean
  },
}
