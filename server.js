
require('@babel/register')()

require.extensions['.css'] = () => {}

require('./src/server/index.js')