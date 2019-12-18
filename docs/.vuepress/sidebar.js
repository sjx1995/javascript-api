const ECMAScript = require('./config/ECMAScript')
const BOM = require('./config/BOM')
const DOM = require('./config/DOM')

module.exports = {
  '/ECMAScript/': [
    {
      title: 'String',
      collapsable: false,
      children: ECMAScript.String
    }
  ],
  '/BOM/': BOM,
  '/DOM/': DOM
}
