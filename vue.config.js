const port = '7070';
const title = 'vue最佳实践'

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/best-practice',
  devServer: {
    port,
    before(app) {
      app.get('/api/list', (req, res) => {
        res.json([
          { id: 1, name: "类型注解" },
          { id: 2, name: "编译型语言" }
        ])
      })
    }
  },
  configureWebpack: {
    name: title,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack(config) {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

  }
}