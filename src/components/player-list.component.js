import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


const Player = props => (
    <tr>
        <td className={props.Player.player_scratch ? 'completed' : ''}>{props.Player.player_description}</td>
        <td className={props.Player.player_scratch ? 'completed' : ''}>{props.Player.player_team}</td>
        <td className={props.Player.player_scratch ? 'completed' : ''}>{props.Player.player_position}</td>
        <td>
            <NavLink to={"/edit/"+props.Player._id}>Edit</NavLink>
        </td>
    </tr>
)

export default class PlayerList extends Component {

    constructor(props) {
        super(props);
        this.state = {Players: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/Players/')
        .then(response => {
            this.setState({ Players: response.data });
            
        })
        .catch(function (error){
            console.log(error);
        })
    }


    PlayerList() {
        return this.state.Players.map(function(currentPlayer, i){
            return <Player Player={currentPlayer} key={i} />;
        })
    }


    render() {
        return (
            <div>
                <h3 className="header" id="h3" style={{ color: "White", marginTop: 10 }} >The Best of the Best</h3>
                <table className="table table-dark table-hover" style={{ marginTop: 25 }} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Team</th>
                            <th>Position</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.PlayerList() }
                    </tbody>
                </table>
        <div>
        <p>&copy; porkpiie 2k19</p>
        </div>
            </div>           
        )
    }
}