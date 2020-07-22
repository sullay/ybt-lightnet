const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors')
const koa_static = require('koa-static-server')
const index = require('./routes/index')
// error handler
onerror(app)

// 跨域
app.use(cors())
// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())

app.use(koa_static({rootDir: __dirname + '/public', rootPath: '/hsrq2G3Lir.txt' ,index: 'hsrq2G3Lir.txt'}))
app.use(koa_static({rootDir: __dirname + '/public/data-img', rootPath: '/data-img/'}))
app.use(koa_static({rootDir: __dirname + '/public/commission', rootPath: '/commission/'}))
app.use(koa_static({rootDir: __dirname + '/public/phone', rootPath: '/'}))
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
