import React from 'react';
import {TouchableHighlight, Text} from 'react-native';

const AddNew = ({add}) => {
  return (
    <TouchableHighlight style={styles.add} onPress={() => add()}>
      <Text>Add New Tab</Text>
    </TouchableHighlight>
  )
}

const styles = {
  add: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b4b8ab',
    height: 70,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
  }
}

export default AddNew
