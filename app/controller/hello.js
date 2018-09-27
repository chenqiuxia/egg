// /**
//  * Created by christy on 2018/9/27.
//  */
const Controller = require('egg').Controller
class HelloWorld extends Controller {
    async hello () {
        const ctx = this.ctx;
        const result = await ctx.curl('https://httpbin.org/get?foo=bar');
        let arr = []
        arr.push(result.data.type)
        ctx.body = arr
    }
}
module.exports = HelloWorld
