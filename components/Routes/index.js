import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Game from '../Game/index';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Home from '../Home/index';
const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene
        key="home"
        component={Home}
        title="Домашняя страничка"
        initial={true}
        titleStyle={styles.navTitle}
      />
      <Scene key="game" component={Game} title="Game" />
    </Scene>
  </Router>
);
export default Routes;

const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red', // changing navbar color
  },
  navTitle: {
    color: 'black', // changing navbar title color
  },
});
