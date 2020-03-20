import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Actions} from 'react-native-router-flux';

class Home extends Component {
  render() {
    return (
      <View style={styles.block}>
        <ImageBackground
          resizeMode={'stretch'}
          style={{flex: 1}}
          source={require('../../img/background.jpg')}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Actions.game()}>
            <Text style={styles.textButton}>Начать игру!</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    marginLeft: 2,
    marginRight: 2,
    height: 150,
  },
  button: {
    backgroundColor: 'yellow',
    margin: 50,
    opacity: 0.5,
    padding: 15,
    borderRadius: 100,
    alignItems: 'center',
  },
  textButton: {
    fontSize: 26,
    // fontWeight: '800',
  },
});

export default Home;
