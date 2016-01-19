var config = require('./webpack.base.config')

config.debug = true

config.devtool = 'eval-source-map'

module.exports = config
