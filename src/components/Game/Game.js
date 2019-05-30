import React, { Component } from "react";
import Hole from "../Hole/Hole";
import Mole from "../Mole/Mole";
import "./Game.css";

const HOLESNUM = 6;

class Game extends Component {

    state = {
        score: 0,
        randIndex: -1,
        started: false
    }

    moleTimeout = null;

    startGame = () => {

        this.setState({ randIndex: -1, started: true, score: 0 })
        this.showMole();
        setTimeout(() => {
            clearTimeout(this.moleTimeout);
            this.setState({ randIndex: -1, started: false });
        }, 10000)
    }

    showMole = () => {
        let randIndex = Math.random() * 6 | 0;
        let randTime = Math.floor(Math.random() * 1800) + 200; // random number between 200 and 2000
        this.setState({ randIndex });

        this.moleTimeout = setTimeout(() => {
            this.showMole();
        }, randTime);
    }

    handleMoleWhack = () => {
        this.setState({ score: this.state.score + 1, randIndex: -1 })
    }


    render() {
        console.log(`render with randIndex=${this.state.randIndex} started=${this.state.started} score=${this.state.score}`)

        let holes = Array(HOLESNUM).fill().map((value, index) => (
            <Hole key={index}>
                <Mole onWhack={this.handleMoleWhack} up={index === this.state.randIndex} />
            </Hole>
        ));

        return (
            <>
                <h1>Whack-a-mole! <span className="score">{this.state.score}</span></h1>
                <button disabled={this.state.started} onClick={this.startGame}>Start!</button>
                <div className="game">
                    {holes}
                </div>
            </>
        )
    }
}


export default Game;