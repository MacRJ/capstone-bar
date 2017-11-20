import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Items extends Component {
  render(props) {
    return (
      <View style={this.props.selected ? styles.not_selected : styles.selectedStyle}>
        <Text>Items has been heard</Text>
      </View>
    )
  }
}

const styles = {
  selectedStyle: {
    height: 550,
    width: 650,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#ddd',
    backgroundColor: 'white',
  },
  not_selected: {
    height: 100,
    width: 650,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#ddd',
    backgroundColor: 'white',
    opacity: .1,
  }
}

export default Items
