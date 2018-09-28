/**
 * Created by christy on 2018/9/28.
 */
'use strict';

module.exports = app => {
    class TeacherService extends app.Service {
        constructor(ctx) {
            super(ctx, app.model.teacher, {
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

    return TeacherService;
};