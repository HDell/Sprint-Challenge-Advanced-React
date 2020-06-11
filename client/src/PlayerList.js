import React, {useEffect, useState} from 'react';
import PlayerCard from './PlayerCard';
import { useDarkMode } from './useDarkMode';

function PlayerList(props) {

    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };


    return (
        <div data-testid="women-display">
            <div className="dark-mode__toggle">
                <div onClick={toggleMode}
                     className={darkMode ? 'toggle toggled' : 'toggle'}>
                </div>
            </div>
            <div>
                <h1>Women's World Cup Players</h1>
                <h2>Google Trends Search Interest</h2>
                {props.players.slice(0,props.count).map((player) => (
                    <PlayerCard key={player.id} player={player} />
                ))}
            </div>
        </div>
        );
}

export default PlayerList;