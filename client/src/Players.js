import React, {Component} from 'react';
import axios from 'axios';
import PlayerList from './PlayerList';

class Players extends Component {
    state = {
        players: [],
        count: 1
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

    handleAdd = () => {
        if (this.state.count < this.state.players.length) {
            this.setState({count: this.state.count + 1});
        }
    };

    handleRemove = () => {
        if (this.state.count > 1) {
            this.setState({count: this.state.count - 1});
        }
    };

    render() {
        console.log(this.state.players);
        return (
            <div data-testid="main-element">
                <PlayerList players={this.state.players} count={this.state.count}/>
                <button onClick={this.handleAdd}>Add Player</button>
                <button onClick={this.handleRemove}>Remove Player</button>
            </div>
        );
    }
}

export default Players;
