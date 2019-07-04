import React, { Component } from 'react';
import axios from 'axios';


export default class EditPlayer extends Component {

    constructor(props) {
        super(props);

        this.onChangePlayerDescription = this.onChangePlayerDescription.bind(this);
        this.onChangePlayerTeam = this.onChangePlayerTeam.bind(this);
        this.onChangePlayerPosition = this.onChangePlayerPosition.bind(this);
        this.onChangePlayerCompleted = this.onChangePlayerCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        

        this.state = {
            player_description: '',
            player_team: '',
            player_position: '',
            player_scratch: false
        }
        this.deletePlayer = this.deletePlayer.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:4000/Players/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    player_description: response.data.player_description,
                    player_team: response.data.player_team,
                    player_position: response.data.player_position,
                    player_scratch: response.data.player_scratch
                })   
            })
            .catch(function (error) {
                console.log(error);
            })        
    }

    deletePlayer(event) {
        event.preventDefault();
        console.log(this.state.player_description)
        axios.delete('http://localhost:4000/Players/delete/'+this.props.match.params.id)
          .then(res => {
            console.log(res)
              this.setState({ redirect: this.state.redirect === true })
              this.props.history.push('/');
          });
      }



    onChangePlayerDescription(e) {
        this.setState({
            player_description: e.target.value
        });
    }

    onChangePlayerTeam(e) {
        this.setState({
            player_team: e.target.value
        });
    }

    onChangePlayerPosition(e) {
        this.setState({
            player_position: e.target.value
        });
    }

    onChangePlayerCompleted(e) {
        this.setState({
            player_scratch: !this.state.player_scratch
        });
    }


    onSubmit(e) {
        e.preventDefault();
        const obj = {
            player_description: this.state.player_description,
            player_team: this.state.player_team,
            player_position: this.state.player_position,
            player_scratch: this.state.player_scratch
        };
        console.log(obj);
        axios.post('http://localhost:4000/Players/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
            this.props.history.push('/');
              
    }

    render() {
        return (
            <div>
                <h3 style= {{ marginTop: 20 }} align="center">Thought of a better team eh?</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.player_description}
                                onChange={this.onChangePlayerDescription}
                                />
                    </div>
                    {/* <div className="form-group">
                        <label>Team: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.player_team}
                                onChange={this.onChangePlayerTeam}
                                />
                    </div> */}
                    <div class="form-group">
                        <label for="FormControlSelect1">Team</label>
                        <select class="form-control form-control-sm" id="FormControlSelect1"
                                value={this.state.player_team}
                                onChange={this.onChangePlayerTeam}>
                        <option>Anaheim Ducks</option>
                        <option>Arizona Coyotes</option>
                        <option>Boston Bruins</option>
                        <option>Buffalo Sabres</option>
                        <option>Calgary Flames</option>
                        <option>Carolina Hurricanes</option>
                        <option>Chicago Blackhawks</option>
                        <option>Colorado Avalanche</option>
                        <option>Columbus Blue Jackets</option>
                        <option>Dalls Stars</option>
                        <option>Detroit Red Wings</option>
                        <option>Edmonton Oilers</option>
                        <option>Flordia Panthers</option>
                        <option>Los Angeles Kings</option>
                        <option>Minnesota Wild</option>
                        <option>Montreal Canadiens</option>
                        <option>Nashville Predators</option>
                        <option>New Jersey Devils</option>
                        <option>New York Islanders</option>
                        <option>New York Rangers</option>
                        <option>Ottawa Senators</option>
                        <option>Philadelphia Flyers</option>
                        <option>Pittsburgh Penguins</option>
                        <option>San Jose Sharks</option>
                        <option>St. Louis Blues</option>
                        <option>Tampa Bay Lightning</option>
                        <option>Toronto Maple Leafs</option>
                        <option>Vancouver Canucks</option>
                        <option>Vegas Golden Knights</option>
                        <option>Washington Capitals</option>
                        <option>Winnipeg Jets</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Position: </label><br></br>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="G"
                                    checked={this.state.player_position==='G'}
                                    onChange={this.onChangePlayerPosition}
                                    />
                            <label className="form-check-label">G</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="D"
                                    checked={this.state.player_position==='D'}
                                    onChange={this.onChangePlayerPosition}
                                    />
                            <label className="form-check-label">D</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="LW"
                                    checked={this.state.player_position==='LW'}
                                    onChange={this.onChangePlayerPosition}
                                    />
                            <label className="form-check-label">LW</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="RW"
                                    checked={this.state.player_position==='RW'}
                                    onChange={this.onChangePlayerPosition}
                                    />
                            <label className="form-check-label">RW</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="C"
                                    checked={this.state.player_position==='C'}
                                    onChange={this.onChangePlayerPosition}
                                    />
                            <label className="form-check-label">C</label>
                        </div>
                    </div>
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangePlayerCompleted}
                                checked={this.state.player_scratch}
                                value={this.state.player_scratch}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Bench for now...
                        </label>                        
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Player" className="btn btn-warning" />
                    </div>
                    <div>
                      <button type="button" onClick={this.deletePlayer} className="btn btn-danger" style={{marginBottom: "10px"}}>Delete Player</button>
                    </div>
                </form>
            </div>
        )
    }
}