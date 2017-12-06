import React, {Component} from 'react';
import {StyleSheet,View, Text} from 'react-native';
import Working from './working';
import Tabs from './tabs'

class App2 extends Component {

render() {
  const {header, container, tabs, master} = styles

  return (
    <View style={master}>
      <View style={header}>
        <Text>Header</Text>
      </View>
      <View style={container}>
        <Working />
        <Tabs
        style={tabs}
        tabs={this.props.tabs}
        />
      </View>
    </View>
  )
}
}
const styles = StyleSheet.create({
  master: {
    flex:1
  },
  container: {
    flex:.8571,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  header: {
    flex:.1428,
    backgroundColor: '#153243',
    // height: 100,
    // width: 1200,
    flexDirection: 'column'
  },
  tabs: {
    width: 400,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  working: {
  }
});




export default App2
