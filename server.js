// Server
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const { ServerStyleSheet } = require('styled-components')

require('./bundle.js')
const App = global.App

// Create stylesheet
const sheet = new ServerStyleSheet()
const html = ReactDOMServer.renderToString(
  sheet.collectStyles(React.createElement(App))
)

const styles = sheet.getStyleTags()

console.log(html)
