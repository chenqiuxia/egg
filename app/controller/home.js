/**
 *
 * Created by christy on 2018/9/28.
 */
const Controller = require('egg').Controller
class HomeController extends Controller {
    async index () {
        this.ctx.body = 'welcome the index page'
    }
}
module.exports = HomeController