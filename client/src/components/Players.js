import React, {Component} from 'react';
import axios from 'axios';
import PlayerList from 'PlayerList';

class Players extends Component {
    state = {
        players: []
    };

    componentDidMount() {
        axios
            .get('http://localhost:5000/api/players')
            .then((res) => {
                console.log(res);
                this.setState({players: res.data});
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        console.log(this.state.players);
        return (
            <div>
                <PlayerList/>
            </div>
        );
    }
}

export default Players;
