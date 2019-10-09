'use strict';
module.exports = function(app) {
  var userController = require('../controllers/userController');

  // user Routes
  app.route('/authenticate').post(userController.authenticate);
  app.route('/register').post(userController.register);
  app.route('/').get(userController.get_all);
  app.route('/current').get(userController.get_current);

  app.route('/:id')
    .get(userController.get_by_id)
    .put(userController.update)
    .delete(userController.delete_user);
};