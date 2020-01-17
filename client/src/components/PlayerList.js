import React, {Component} from 'react';
import PlayerCard from './PlayerCard';

class PlayerList extends Component {
    render() {
        return (
            <div>
                <h1>Women's World Cup Players</h1>
                <h2>Google Trends Search Interest</h2>
                {this.props.players.map((player) => (
                    <PlayerCard key={player.id} player={player} />
                ))}
            </div>
        );
    }
}

export default PlayerList;