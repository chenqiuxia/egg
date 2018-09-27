'use strict';

// had enabled by egg
exports.static = true;

// pug
exports.pug = {
  enable: true,
  package: 'egg-view-pug'
};

// sequelize
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize'
};
//validate
// exports.validate = {
//     enable: true,
//     package: 'egg-validate',
// };