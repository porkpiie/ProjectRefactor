import React, {Component} from 'react';
import axios from 'axios';

export default class AddPlayer extends Component {

    constructor(props) {
        super(props);

        this.onChangePlayerDescription = this.onChangePlayerDescription.bind(this);
        this.onChangePlayerTeam = this.onChangePlayerTeam.bind(this);
        this.onChangePlayerPosition = this.onChangePlayerPosition.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            player_description: '',
            player_team: '',
            player_position: '',
            player_scratch: false
        }
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

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Player Description: ${this.state.player_description}`);
        console.log(`Player Team: ${this.state.player_team}`);
        console.log(`Player Position: ${this.state.player_position}`);
     
        const newPlayer = {
            player_description: this.state.player_description,
            player_team: this.state.player_team,
            player_position: this.state.player_position,
            player_scratch: this.state.player_scratch
        };

        axios.post('http://localhost:4000/Players/add', newPlayer)
            .then(res => console.log(res.data));
            this.setState({ redirect: this.state.redirect === false })
            this.props.history.push('/');

        this.setState({
            player_description: '',
            player_team: '',
            player_position: '',
            player_scratch: false
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
                                value={this.state.player_description}
                                onChange={this.onChangePlayerDescription}
                                />
                    </div>
                    {/* <div className="form-group">
                        <label>Team: </label>
                        <input placeholder="Their best team or their last team, you decide!" type="text"
                                className="form-control"
                                value={this.state.player_team}
                                onChange={this.onChangePlayerTeam}
                                />
                    </div> */}
                    <div class="form-group">
                        <label for="FormControlSelect1">Their best team or their last team, you decide!</label>
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
                    <div className="form-group">
                        <input type="submit" value="Put em out for a shift..." className="btn btn-warning" />
                    </div>
                </form>
            </div>
        )
    }
}