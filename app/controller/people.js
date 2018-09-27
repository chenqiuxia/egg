//'use strict';

module.exports = app => {
    class PeopleController extends app.Controller {
      constructor(ctx) {
        super(ctx, ctx.service.people);
      }
      async show(){
        const values = this.ctx.query;
            const id = this.ctx.params.id;
            console.log(123)
               // const _stock = await main.judgeGiftIsCanBuy(this, id);
            this.handleOptions();
            const people = await this.Service.findById(this.ctx.params[this.param], this.ctx.query);
            people.name = 'test';
            people.sex='1'
            return this.response('show', people);
            
      }
    }
    
  
    return PeopleController;
  };