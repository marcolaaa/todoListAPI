'use strict';
const todoListService = require('../services/todoListService');

exports.list_all_tasks = function(req, res) {
  todoListService.list_all_tasks()
      .then(tasks => res.json(tasks))
      .catch(err => next(err));
};

exports.create_a_task = function(req, res, next) {
  todoListService.create_a_task(req.body)
      .then(task => res.json(task))
      .catch(err => next(err));
}


exports.read_a_task = function(req, res) {
  todoListService.read_a_task(req.params.taskId)
      .then(task => res.json(task))
      .catch(err => next(err));
};


exports.update_a_task = function(req, res) {
  todoListService.update_a_task(req.params.taskId, req.body)
      .then(task => res.json(task))
      .catch(err => next(err));
};


exports.delete_a_task = function(req, res) {
  todoListService.remove(req.params.taskId)
      .then(() => res.json({ message: 'Task successfully deleted' }))
      .catch(err => next(err));
};