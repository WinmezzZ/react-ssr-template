import express from 'express'
import path from 'path'
import cors from 'cors'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ChunkExtractor } from '@loadable/server'
import App from '../app'
import { configureStore } from '../app/store'
import { loadBranchData } from '../app/route'

const app = express()
app.use(cors())

const PORT = 4000

const buildClient = path.resolve('build/client')

app.use(express.static(buildClient))

const statsFile = path.join(buildClient, 'loadable-stats.json')

app.get('/api/users', (_, res) => {
  setTimeout(() => 
    res.json([
      { id: 0, name: '唐三', rate: 100, title: '海神&修罗神', soul: '蓝银草&昊天锤', },
      { id: 1, name: '小舞', rate: 96, title: '敏攻系超级斗罗', soul: '柔骨兔' },
      { id: 2, name: '戴慕白', rate: 95, title: '强攻系超级斗罗', soul: '邪眸白虎' },
      { id: 3, name: '奥斯卡', rate: 92, title: '食物系封号斗罗', soul: '香肠' },
      { id: 4, name: '马红俊', rate: 93, title: '强攻系封号斗罗', soul: '火凤凰' }
    ]), 
  2000)
})


app.get('*', async(req, res) => {
  const store = configureStore()

  await loadBranchData(req.url, store)

  const context = {}

  const extractor = new ChunkExtractor({ statsFile })

  const jsx = extractor.collectChunks(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
      </Provider>
    )

  const template = renderToString(jsx)

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>React SSR</title>
        ${extractor.getStyleTags()}
        <script>window.__INITIAL_STATE__=${JSON.stringify(store.getState())}</script>
      </head>
      <body>
        <div id="root">${template}</div>
        ${extractor.getScriptTags()}
      </body>
    </html>
  `)
})

app.listen(PORT, () => {
  console.log(`App is running: http://localhost:${PORT}`)
})