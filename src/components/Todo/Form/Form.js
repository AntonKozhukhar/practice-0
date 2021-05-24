import React from 'react';
import classes from './Form.module.scss'

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      input: ''
    }
  }

  addTask = (e) => {
    e.preventDefault()
    const { input } = this.state
    if (input) {
      this.props.addTask(input)
      this.setState({input: ''})
    }
  }

  inputChange = event => {
  this.setState({input: event.target.value})
}

  render() {
    const { input } = this.state

    return (
      <form className={classes.form}>
        <input
          type="text"
          placeholder='Enter new task'
          value={input}
          onChange={this.inputChange}
        />
        <button
          className={classes.btn}
          onClick={this.addTask}
        >ADD</button>
      </form>
    );
  }
};

export default Form;
