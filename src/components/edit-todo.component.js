import React, { Component } from 'react';
import axios from 'axios';


export default class EditTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    todo_description: response.data.todo_description,
                    todo_responsible: response.data.todo_responsible,
                    todo_priority: response.data.todo_priority,
                    todo_completed: response.data.todo_completed
                })   
            })
            .catch(function (error) {
                console.log(error);
            })        
    }

    deleteTodo(event) {
        event.preventDefault();
        console.log(this.state.todo_description)
        axios.delete('http://localhost:4000/todos/delete/'+this.props.match.params.id)
          .then(res => {
            console.log(res)
              this.setState({ redirect: this.state.redirect === true })
              this.props.history.push('/');
          });
      }



    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onChangeTodoCompleted(e) {
        this.setState({
            todo_completed: !this.state.todo_completed
        });
    }


    onSubmit(e) {
        e.preventDefault();
        const obj = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        };
        console.log(obj);
        axios.post('http://localhost:4000/todos/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
            this.props.history.push('/');
              
    }

    render() {
        return (
            <div>
                <h3 style= {{ marginTop: 20 }} align="center">Though of a better team eh?</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Team: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <label>Position: </label><br></br>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="GK"
                                    checked={this.state.todo_priority==='GK'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">GK</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="D"
                                    checked={this.state.todo_priority==='D'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">D</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="LW"
                                    checked={this.state.todo_priority==='LW'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">LW</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="RW"
                                    checked={this.state.todo_priority==='RW'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">RW</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="C"
                                    checked={this.state.todo_priority==='C'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">C</label>
                        </div>
                    </div>
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeTodoCompleted}
                                checked={this.state.todo_completed}
                                value={this.state.todo_completed}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Scratch for now..
                        </label>                        
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-warning" />
                    </div>
                    <div>
                      <button type="button" onClick={this.deleteTodo} className="btn btn-danger" style={{marginBottom: "10px"}}>Delete ToDo</button>
                    </div>
                </form>
            </div>
        )
    }
}