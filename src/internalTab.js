import React from 'react';
import {View, Image, Text} from 'react-native'

const InternalTab = ({image, author}) => {
  const {container, imageStyle, textStyle} = styles
  return (
    <View style={container}>
      <Image source={{uri: image}} style={imageStyle}/>
      <Text style={textStyle}>{author}</Text>
    </View>
  )
}

const styles = {
  container: {
    flexDirection: 'row',
  },
  textStyle: {
    padding: 15,
    fontStyle: 'italic'
  },
  imageStyle: {
    height: 50,
    width: 50,
    borderColor: 'black',
    backgroundColor: 'black'
  }
}

export default InternalTab
