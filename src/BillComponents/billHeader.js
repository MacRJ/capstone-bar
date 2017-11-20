import React from 'react';
import {View, Text} from 'react-native'

const BillHeader = () => {
  const {header} = styles
  return (
    <View style={header}>
      <Text> Server: Steve </Text>
      <Text> Description </Text>
      <Text> Total </Text>
    </View>
  )
}

const styles = {
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomWidth: 1
  }
}

export default BillHeader
