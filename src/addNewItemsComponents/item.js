import React from 'react';
import {Text, View} from 'react-native'

const Item = (props) => {
  const {container} = styles
  return (
    <View style={container}>
      <Text>{props.item.name} </Text>
    </View>
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
