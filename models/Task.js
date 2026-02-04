const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
}, { timestamps: true
    // collection: 'task',
    
 });

const Task = mongoose.model('Task', TaskSchema/*,'task'*/); //si quiero que la coleccion se llame en singular

module.exports = Task;