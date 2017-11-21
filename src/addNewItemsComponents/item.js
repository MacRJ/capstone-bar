import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native'

const Item = ({selecting, item}) => {
  const {container} = styles

  return (
    <TouchableHighlight
    style={container}
    onPress={() => selecting(item.id)}
    >
      <Text>{item.name} </Text>
    </TouchableHighlight>
  )
}
const styles = {
  container: {
    backgroundColor: 'green',
    marginRight: 25,
    marginBottom: 25,
    width: 150,
    height: 150
  }
}


export default Item
