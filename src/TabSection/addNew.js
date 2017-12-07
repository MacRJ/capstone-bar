import React from 'react';
import {TouchableHighlight, Text} from 'react-native';

const AddNew = ({add}) => {
  return (
    <TouchableHighlight style={styles.add} onPress={() => add()}>
      <Text style={{color: 'white'}}>Add New Tab</Text>
    </TouchableHighlight>
  )
}

const styles = {
  add: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#153243',
    height: 70,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'black',
  }
}

export default AddNew
