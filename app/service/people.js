'use strict';

module.exports = app => {
  class PeopleService extends app.Service {
    constructor(ctx) {
      super(ctx, app.model.People, {
        associations: {
        //    'parent_area': {model: app.model.Area, as: 'parent_area'}, // alias
           // 'operator': {model: app.model.User, as: 'operator'}, // alias
        },
        queries: {
          id: false,
       
        },

      });
    }

    
  }

  return PeopleService;
};