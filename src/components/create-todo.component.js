import React, {Component} from 'react';
import axios from 'axios';

export default class AddPlayer extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
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

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);
     
        const newTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        };

        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => console.log(res.data));
            this.setState({ redirect: this.state.redirect === false })
            this.props.history.push('/');

        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>+ New Player</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Player Name: </label>
                        <input placeholder="Enter one of your greats..." type="text"
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Team: </label>
                        <input placeholder="Their best team or their last team, you decide!" type="text"
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
                                    value="G"
                                    checked={this.state.todo_priority==='G'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">G</label>
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
                    <div className="form-group">
                        <input type="submit" value="Put em out for a shift..." className="btn btn-warning" />
                    </div>
                </form>
            </div>
        )
    }
}