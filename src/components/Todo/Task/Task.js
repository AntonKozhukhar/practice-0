import React from 'react';
import { Route } from 'react-router';
import classes from './Task.module.scss'

const Task = (props) => {
  const resolvedClass = {
    textDecoration: 'line-through'
  }
	return (
		<div className={classes.task}>
			<div className={classes.title}>
				<p style={props.done ? resolvedClass : {}}>{props.title}</p>
      </div>
      <div className={classes.check}>
        <Route path='/protected'>
          <input
            type="checkbox"
            defaultChecked={props.done}
            onChange={props.handleChange}
          />
          <span
            onClick={props.deleteTask}
            className={classes.delete}
          >❌</span>
        </Route>
      </div>
		</div>
	);
};

export default Task;
