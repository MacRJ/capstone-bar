import React from 'react';
import {View, Text} from 'react-native'

const BillBody = () => {
  const {body} = styles
  return (
    <View style = {body}>
      <Text>Bill Body </Text>
    </View>
  )
}

const styles = {
  body: {
    flex: 2
  }
}

export default BillBody
