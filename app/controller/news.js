/**
 * Created by christy on 2018/9/28.
 */
const Controller = require('egg').Controller;

class NewsController extends Controller {
    async list () {
        const ctx = this.ctx
        console.log(ctx)
        const page = ctx.query.page || 1
        const newList = await ctx.service.news.list(page)
        await ctx.render('news/list.tpl', {list: newList})
        // const dataList = {
        //     list: [
        //         {id : 1, title: 'the 1st news', url: '/news/1'},
        //         {id : 2, title: 'the 2ed news', url: '/news/2'},
        //         {id : 3, title: 'the 3ed news', url: '/news/3'},
        //         {id : 4, title: 'the 4th news', url: '/news/4'}
        //     ]
        // }
        // await this.ctx.render('news/list.tpl', dataList)
    }
}
module.exports = NewsController