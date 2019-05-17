module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    [
      "import",
      {
        "libraryName": "vant",
        "style": true
      }
    ],
    '@babel/plugin-transform-runtime'
  ]
}