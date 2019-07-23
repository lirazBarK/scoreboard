import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {

    static propTypes ={
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        isHighScore: PropTypes.bool,
        index: PropTypes.number,
        id: PropTypes.number,
        changeScore: PropTypes.func,
        removePlayer:  PropTypes.func
    }

    render() {
        const {
            name,
            score,
            isHighScore,
            index,
            id,
            changeScore,
            removePlayer
        } = this.props;
        return (
            <div className="player">
                <span className="player-name">
                    <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
                    <Icon isHighScore={isHighScore}/>
                    {name}
                </span>

                <Counter
                    score={score}
                    changeScore={changeScore}
                    index={index}
                />
            </div>
        );
    }
}

export default Player;