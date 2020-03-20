import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ImageBackground, View} from 'react-native';
import {Button} from 'react-native';
import {AppRegistry, TouchableOpacity} from 'react-native';

export default class Game extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      x: 0,
      o: 0,
      game: ['', '', '', '', '', '', '', '', ''],
    };
  }

  restartGame = () => {
    this.setState({
      game: ['', '', '', '', '', '', '', '', ''],
    });
  };

  componentDidUpdate() {
    this.check();
  }

  check = () => {
    let player = this.state.index % 2 !== 0 ? 'x' : 'y';
    var combo = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < combo.length; i++) {
      if (
        this.state.game[combo[i][0]] === player &&
        this.state.game[combo[i][1]] === player &&
        this.state.game[combo[i][2]] === player
      ) {
        alert('Win the game ' + player);
        if (player === 'x') {
          this.setState({
            x: ++this.state.x,
          });
        } else {
          this.setState({
            o: ++this.state.o,
          });
        }
        this.setState({

          game: ['', '', '', '', '', '', '', '', ''],
        });
      }
    }
    if (!this.state.game.includes('')) {
      this.setState({
        game: ['', '', '', '', '', '', '', '', ''],
      });
    }
  };

  onPress = e => {
    if (this.state.game[e] === 'x' || this.state.game[e] === 'y') {
      return;
    }
    let newArray = this.state.game.map((item, i) => {
      if (i === e) {
        if (this.state.index % 2 === 0) {
          return 'x';
        } else {
          return 'y';
        }
      }
      return item;
    });
    // alert(b);
    this.setState({
      game: newArray,
      index: ++this.state.index,
    });
  };

  render() {
    return (
      // <View style={styles.container}>
      <ImageBackground
        resizeMode={'stretch'}
        style={styles.container}
        source={require('../../img/background.jpg')}>
        {this.state.game.map((item, i) => {
          return (
            <TouchableOpacity
              style={styles.blocks}
              onPress={() => this.onPress(i)}>
              <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
          );
        })}
        <Button
          style={styles}
          onPress={this.restartGame}
          title="Перезагрузка"
          loading
        />
        <View style={styles.container}>
          <Text>
            Побед y - {this.state.o} побед х - {this.state.x}
          </Text>
        </View>
      </ImageBackground>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginLeft: 8,
    marginRight: 8,
    paddingVertical: 8,
  },
  blocks: {
    backgroundColor: '#B0B0B0',
    opacity: 0.60,
    justifyContent: 'center',
    margin: 1,
    height: '25%',
    width: '32.82%',
    alignItems: 'center',
  },
  text: {
    color: 'red',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
