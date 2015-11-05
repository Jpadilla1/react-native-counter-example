/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var Counter = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    }
  },
  _onPressButton() {
    this.setState({count: this.state.count + 1});
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <TouchableHighlight
          onPress={this._onPressButton}
          style={styles.button}
          underlayColor='#1976D2'>
          <Text style={styles.buttonText}>Press Me</Text>
        </TouchableHighlight>
        <Text style={styles.instructions}>
          You have pressed this button {this.state.count} times!
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    textAlign: 'center',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#2196F3'
  },
  buttonText: {
    color: 'white'
  }
});

AppRegistry.registerComponent('Counter', () => Counter);
