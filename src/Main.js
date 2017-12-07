import React, {Component} from 'react';
import {StyleSheet,View, Text} from 'react-native';
import BillSection from '.BillSection/billsection';
import Tabs from '.TabSection/tabs'

class Main extends Component {

render() {
  const {header, container, tabs, master} = styles

    return (
      <View style={master}>
        <View style={header}>
          <Text>Header</Text>
        </View>
        <View style={container}>
          <BillSection />
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
    flexDirection: 'column'
  },
  tabs: {
    width: 400,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});




export default Main
