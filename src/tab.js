import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet, Image} from 'react-native';
import InternalTab from './internalTab'

const tab = ({tab, color, select}) => {
  const styles = StyleSheet.create({
    bill: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      backgroundColor: color,
      height: 70,
      width: 300,
      marginTop: 5,
      borderWidth: 1,
      borderRadius: 15,
      borderColor: '#ddd',
    },
    selectedStyle: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      backgroundColor: color,
      height: 70,
      width: 350,
      marginTop: 5,
      borderWidth: 1,
      borderRadius: 15,
      borderColor: '#ddd',
    }
  })
  const {selected} = tab
  const {image, selectedStyle, bill} = styles

  return (

    <TouchableHighlight
      style={selected ? selectedStyle : bill }
      onPress={() => select(tab.id)}>
        <View>
          <InternalTab />
        </View>
    </TouchableHighlight>
  )
};



export default tab;
