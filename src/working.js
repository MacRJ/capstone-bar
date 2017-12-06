import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import Bill from './bill';
import Items from './items'

class working extends Component {
 state = {
   billSelected: true,
 }



// Selecting Bill Function
selectingBillFunction() {
    if(!this.state.billSelected) {
      return <TouchableHighlight onPress={() => this.setState({billSelected: true})}>
      <View>
        <Bill selected={this.state.billSelected}/>
      </View>
    </TouchableHighlight>

  } else {
      return <View>
      <Bill selected={this.state.billSelected} />
    </View>
  }
}

// Selecting Items Function
selectingItemsFunction() {
    if(this.state.billSelected) {
      return <TouchableHighlight onPress={() => this.setState({billSelected: false})}>
      <View>
        <Items selected={this.state.billSelected} />
      </View>
    </TouchableHighlight>

  } else {
    return <View>
      <Items selected={this.state.billSelected} />
    </View>
  }
}

  render() {
  return (
    <View style={styles.container}>
      {this.selectingBillFunction()}
      {this.selectingItemsFunction()}
    </View>
        );
    }
};
const styles = {
  container: {
    paddingLeft: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  }
}



export default working
