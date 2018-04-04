import React from 'react';
import { Button, View, StyleSheet, Text, TextInput, TouchableHighlight } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

class HealthComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCounter: 25,
      isEditCounter: false,
    };
  }

  _updateHealth(isReduce) {
    this.setState({
      currentCounter: isReduce ? --this.state.currentCounter : ++this.state.currentCounter});
  }

  _renderIcon(name) {
    return (
      <FontAwesome
        name={name}
        size={32}
        color={Colors.tabIconDefault}
      />
    );
  }

  render() {
    return (
      <View style={[styles.container, this.props.counterRotation]}>
        <TouchableHighlight
          onPress={() => this._updateHealth(true)}
          style={styles.healthButtons}>
          {this._renderIcon('minus')}
        </TouchableHighlight>
        <View style={{alignItems: 'center', backgroundColor: 'green'}}>
          { 
            !this.state.isEditCounter && <Text
                style={styles.counterText}
                onLongPress={() => this.setState({isEditCounter: true})}
              >{this.state.currentCounter.toString()}</Text>
          }
          {
            this.state.isEditCounter && <View style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', marginRight: 5}}>
              <TextInput
                style={[styles.counterText]}
                keyboardType="numeric"
                onChangeText={(val) => this.setState({currentCounter: parseInt(val)})}
                value={this.state.currentCounter.toString()}/>
              <TouchableHighlight 
                onPress={() => this.setState({isEditCounter: false})}
                style={{paddingTop: 5}}>
                {this._renderIcon('check')}
              </TouchableHighlight> 
            </View>
          }  
        </View>  
        <TouchableHighlight 
          onPress={() => this._updateHealth(false)}
          style={styles.healthButtons}>
          {this._renderIcon('plus')}
        </TouchableHighlight>
      </View>
      
    );
  }
}

HealthComponent.propTypes = {
  counterRotation: View.propTypes.style
}

HealthComponent.defaultProps = {}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'center', 
  },
  buttons: {
    backgroundColor: 'blue',
    borderColor: 'transparent',
  },
  healthButtons: {
    alignSelf: 'center',
    paddingLeft: 10, 
    paddingRight: 10,
    backgroundColor: 'blue'
  },
  counterText: {
    fontSize: 120,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center'
    // backgroundColor: 'red'
  }
})

export default HealthComponent;
