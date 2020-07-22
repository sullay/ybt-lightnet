const router = require('koa-router')()
const projectList = require('./data/project')
const info =require('./data/info')
router.prefix('/api')

router.get('/getInfo', async (ctx) => {
  ctx.body = info
})
router.get('/projectList', async (ctx) => {
  ctx.body = projectList
})
router.get('/project/:id',async (ctx)=>{
  ctx.body = projectList.find(project=> project.id === ctx.params.id)
})

module.exports = router
