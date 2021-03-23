import React from 'react';
import { Text, View, Pressable, Component } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import styles from '../style/style'

let board = [];
const NBR_OF_ROWS = 5;
const NBR_OF_COLS = 5;
const START = 'plus';
const CROSS = 'cross';
const CIRCLE = 'ship';
const NBR_OF_SHIPS = 3;
const WINNING_POINTS = 3;
const NBR_OF_BOMBS = 15;


export default class Gameboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
            nbrOfBombsLeft: NBR_OF_BOMBS,
            status: 'Game has not started yet',
            nbrOfHits: 0,
            ships: this.addShips()
            
          
           
           

 
        }
        this.initializeBoard();
    }
    
    componentDidMount () {
        this.myInterval = setInterval(() => {
            this.setState({
                count:this.state.count - 1
            })
        }, 1000);
     }

    initializeBoard() {
        for (let i = 0; i < NBR_OF_ROWS * NBR_OF_COLS; i++) {
              board[i] = START
        } 
        
    }

    addShips() {
        let ships=[];
        for (let i = 0; i < NBR_OF_SHIPS; i++) {
            let randomNumber = Math.floor(Math.random() * (NBR_OF_ROWS * NBR_OF_COLS) -1);
              ships[i] = randomNumber;
        } 
        return ships; 
    }

    drawItem(number) {
        this.state.ships.indexOf(number)
        let bombs = [];
        let hits = 0;
        let ships = [];
        let count = 30;
        
        if (board[number] ===  ships.indexOf(number) === 1 )  {
            return 'ship' }
            if (board[number] ===  ships.indexOf(number) === -1 )  {
                return 'cross' }
                this.state.nbrOfBombsLeft--;
                this.setState(state => ({
                ships: ships,
                hits: hits,
                bombs: bombs,
                count: count
                
        }), () => {
            this.checkWinner();
        });
    }

    chooseItemColor(number) {
        if(board[number] === CROSS ) {
            return '#FF3031'
        }
        else if (board[number] === CIRCLE) {
            return '#45CE30'
        }
        else {
            return '#74B9FF'
        }
    }


    checkWinner() {
        if (this.state.sum >= WINNING_POINTS &&
            this.state.nbrOfBombsLeft > 0) {
            this.state.nbrOfHits++;
            this.setState({ status: 'You won' });
        }
        else if (this.state.sum >= WINNING_POINTS &&
            this.state.nbrOfBombsLeft === 0) {
            this.state.nbrOfHits++;
            this.setState({ status: 'You won, game over' });
        }
        else if (this.state.nbrOfBombsLeft > 0 &&
            this.state.nbrOfBombsLeft === 0) {
            this.setState({ status: 'You won game over' })
        }
        else if (this.state.nbrOfBombsLeft === 0) {
            
            this.setState({ status: 'Game over' });
            this.resetGame();

        }
        else {
            this.setState({ status: 'Keep on throwing' });
        }
    }



    resetGame() {
        this.setState({
            isCross: true,
            nbrOfBombsLeft: 15,
            status: 'Game has not started yet',
            count: 30
            
        })
        this.initializeBoard();
    }


    render () {
        const firstRow = [];
        const secondRow = [];
        const thirdRow = [];
        const fourthRow = [];
        const fifthRow = [];

        for (let i= 0; i < NBR_OF_ROWS; i++) {
            firstRow.push(
                <Pressable key={i} style={styles.row} onPress={() => this.drawItem(i)}>
                    <Entypo key={i} name={board[i]} size={32} color={this.chooseItemColor(i)} />
                </Pressable>
            )
        }
        for (let  i = NBR_OF_ROWS; i < NBR_OF_ROWS * 2; i++) {
            secondRow.push(
                <Pressable key={i} style={styles.row} onPress={() => this.drawItem(i)}>
                    <Entypo key={i} name={board[i]} size={32} color={this.chooseItemColor(i)} />
                </Pressable>
            )
        }
        for (let  i = NBR_OF_ROWS * 2; i < NBR_OF_ROWS * 3; i++) {
            thirdRow.push(
                <Pressable key={i} style={styles.row} onPress={() => this.drawItem(i)}>
                    <Entypo key={i} name={board[i]} size={32} color={this.chooseItemColor(i)} />
                </Pressable>
            )
        }
        for (let  i = NBR_OF_ROWS * 3; i < NBR_OF_ROWS * 4; i++) {
            fourthRow.push(
                <Pressable key={i} style={styles.row} onPress={() => this.drawItem(i)}>
                    <Entypo key={i} name={board[i]} size={32} color={this.chooseItemColor(i)} />
                </Pressable>
            )
        }
        for (let  i = NBR_OF_ROWS * 4; i < NBR_OF_ROWS * 5; i++) {
            fifthRow.push(
                <Pressable key={i} style={styles.row} onPress={() => this.drawItem(i)}>
                    <Entypo key={i} name={board[i]} size={32} color={this.chooseItemColor(i)} />
                </Pressable>
            )
        }

        return (
            <View style={styles.gameboard}>
                <View style={styles.flex}>{firstRow}</View>
                <View style={styles.flex}>{secondRow}</View>
                <View style={styles.flex}>{thirdRow}</View>
                <View style={styles.flex}>{fourthRow}</View>
                <View style={styles.flex}>{fifthRow}</View>
                <div>
                <Text style={styles.gameinfo}>Time left:{this.state.count}</Text>
                </div>
                <Text style={styles.gameinfo}>Number of hits:{this.state.nbrOfHits}</Text>
                <Text style={styles.gameinfo}>Number of ships:{this.state.nbrOfShips}</Text>
                <Text style={styles.gameinfo}>Bombs left:{this.state.nbrOfBombsLeft}</Text>
                <Text style={styles.gameinfo}>Status:{this.state.status}</Text>
                <Pressable style={styles.button} onPress={() => this.resetGame()}>
                    <Text style={styles.buttonText}>Restart game</Text>
                </Pressable>
            </View>
        )
        }

}