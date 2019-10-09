'use strict';
module.exports = function(app) {
  var userController = require('../controllers/userController');

  // user Routes
  app.route('/users/authenticate').post(userController.authenticate);
  app.route('/users/register').post(userController.register);
  app.route('/users/').get(userController.get_all);
  app.route('/users/current').get(userController.get_current);

  app.route('/users/:id')
    .get(userController.get_by_id)
    .put(userController.update)
    .delete(userController.delete_user);
};