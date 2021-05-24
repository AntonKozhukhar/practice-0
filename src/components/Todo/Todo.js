import React, { Component } from 'react';
import Task from './Task/Task';
import tasksData from '../../redux/tasksData'
import classes from './Todo.module.scss'
import Form from './Form/Form';
import { Route } from 'react-router';

class Todo extends Component {
  constructor() {
    super()
    this.state = {
      tasks: tasksData
    }
  }

  handleChange = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id)
    this.setState(state => {
      let { tasks } = state
      tasks[index].done = true
      console.log(tasks);
      return tasks
    })
  }

  addTask = task => {
    this.setState(state => {
      let { tasks } = state
      tasks.push({
        id: tasks.length !== 0 ? tasks.length : 0,
        title: task,
        done: false
      })
      return tasks
    })
  }

  deleteTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id)
    this.setState(state => {
      let { tasks } = state
      delete tasks[index]
      return tasks
    })
  }

  render() {

    const { tasks } = this.state

    const activeTasks = tasks.filter(task => task.done === false)
    const doneTasks = tasks.filter(task => task.done === true)
    
    return (
      <div className={classes.todo}>
        <h1>Tasks: {activeTasks.length}</h1>
        <div className={classes.todo__tasks}>
          {[...activeTasks, ...doneTasks].map(task =>
            <Task
              key={task.id}
              title={task.title}
              done={task.done}
              handleChange={() => {this.handleChange(task.id)}}
              deleteTask={() => {this.deleteTask(task.id)}}
            />
          )}
        </div>
        <Route path="/protected">
          <Form addTask={this.addTask}/>
        </Route>
        
      </div>
    )
  }
}

export default Todo