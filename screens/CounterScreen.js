import React from 'react';
import {
  Button,
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import HealthComponent from '../components/Counter/HealthComponent';

export default class CounterScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Counter',
      visible: false
    },
  };

  _renderPlayerCounters(count) {
    /*

      if there is one player then the whole screen without transforming the orientation 
      if there are two players split screen horizontally into 2 
      if there are more than 2 players split screen vertically 

    */

    if(count < 1) {
      return <View />
    } 

    let counters = [];
    let ctrPerRow = Math.round(count/2);

    for(let i = 0; i < count; i++){
      console.log('current: ', i)
      counters.push(
        <HealthComponent 
          key={i} 
          counterRotation={ count < ctrPerRow ? styles.rotate180 : styles.rotate0 }/>
      );
    }

    return counters;
  }

  render() {
    return (
      <View style={{paddingTop: 40}}>
        {this._renderPlayerCounters(3)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rotate0: {},  
  rotate90: {
    transform: [{rotate: '90deg'}]
  },
  rotate180: {
    transform: [{rotate: '180deg'}]
  },
  rotate270: {
    transform: [{rotate: '270deg'}]
  }
});
