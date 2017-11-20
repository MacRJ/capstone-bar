import React from 'react'
import {Text, View} from 'react-native'

const BillTotal = () => {
  const {total} = styles
  return (
    <View style = {total}>
      <Text>Bill Total </Text>
    </View>
  )
}

const styles = {
  total: {
    flex: 1
  }
}

export default BillTotal
