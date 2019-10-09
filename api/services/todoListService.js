var mongoose = require('mongoose'),
    Task = mongoose.model('Task');

module.exports = {
    list_all_tasks,
    create_a_task,
    read_a_task,
    update_a_task,
    delete_a_task
};

async function list_all_tasks() {
    return await Task.find({});
};
  
  
async function create_a_task(taskParams) {
    var new_task = new Task(taskParams);
    return await new_task.save();
};
  
  
async function read_a_task(id) {
    return await Task.findById(id);
};
  
  
async function update_a_task({id, body}) {
    return await Task.findOneAndUpdate({_id: id}, body, {new: true});
};
  
  
async function delete_a_task(id) {
    return await Task.remove(id);
};