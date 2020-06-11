import React, {Component} from 'react';

class PlayerCard extends Component {
    render() {
        return (
            <div>
                <h3>Name: {this.props.player.name}</h3>
                <p>Country: {this.props.player.country}</p>
                <p>Searches: {this.props.player.searches}</p>
            </div>
        );
    }
}

export default PlayerCard;
