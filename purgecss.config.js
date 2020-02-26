module.exports = {
  content: [
    './src/**/*.vue',
    './src/**/*.html'
  ],
  whitelist: ['svg:not(:root).svg-inline--fa'],
  whitelistPatterns: [/^fa-/, /^svg-inline--fa/],
  whitelistPatternsChildren: [/^token/, /^pre/, /^code/],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
}
