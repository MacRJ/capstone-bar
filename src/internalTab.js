import React from 'react';
import {View, Image, Text} from 'react-native'

const InternalTab = () => {
  const {container, image, textStyle} = styles
  return (
    <View style={container}>
      <Image style={image} />
      <Text style={textStyle}>Tab</Text>
    </View>
  )
}

const styles = {
  container: {
    flexDirection: 'row',
  },
  textStyle: {
    padding: 15
  },
  image: {
    height: 50,
    width: 50,
    borderColor: 'black',
    backgroundColor: 'black'
  }
}

export default InternalTab
