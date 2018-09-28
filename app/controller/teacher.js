/**
 * Created by christy on 2018/9/28.
 */
module.exports = app => {
    class TeachersController extends app.Controller {
        constructor(ctx) {
            super(ctx, ctx.service.teacher);
        }
        async show(){
            const values = this.ctx.query;
            const id = this.ctx.params.id;
            // const _stock = await main.judgeGiftIsCanBuy(this, id);
            this.handleOptions();
            const people = await this.Service.findById(this.ctx.params[this.param], this.ctx.query);
            people.name = 'test';
            people.sex='1'
            return this.response('show', people);

        }
    }
    return TeachersController;
};