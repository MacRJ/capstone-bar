import React, {Component} from 'react';
import {Text, View, TouchableHighlight, ScrollView} from 'react-native'

class Item extends Component {

// pulldown menu of all drinks in a category
  pulldown(id){
  const {item} = this.props

  console.log('myId', id)
}





// Selecting the category
  selecting() {
    const {selected, item, selecting} = this.props
    const {not_selected, selectedStyle} = styles

    if(selected) {
      return <View>
              <TouchableHighlight
                style={selectedStyle}
                onPress={() => selecting(item.id)}
                >
                <Text>{item.description}</Text>
              </TouchableHighlight>
                <View>
                  <ScrollView >
                    {this.pulldown(item.id)}
                  </ScrollView>
                </View>
             </View>
    } else {
      return <TouchableHighlight
              style={not_selected}
              onPress={() => selecting(item.id)}>

                <Text>{item.description} </Text>
            </TouchableHighlight>
    }
  }



  render() {
    return (
      <View>
        {this.selecting()}
      </View>

      )
  }
}

const styles = {
  not_selected: {
    backgroundColor: 'green',
    marginRight: 25,
    marginBottom: 25,
    width: 150,
    height: 150
  },
  selectedStyle: {
    backgroundColor: 'blue',
    marginRight: 25,
    marginBottom: 25,
    width: 150,
    height: 150

  }
}


export default Item
