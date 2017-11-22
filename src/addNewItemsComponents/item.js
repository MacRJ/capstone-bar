import React, {Component} from 'react';
import {Text, View, TouchableHighlight, ScrollView} from 'react-native'
import {connect} from 'react-redux'

class Item extends Component {

// pulldown menu of all drinks in a category
  pulldown(){
  return this.props.pulldown.map(item => {
    return <Text key={item.id}>{item.name}</Text>
  })
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
                    {this.pulldown()}
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
function mapStateToProps(state, props) {
  return {
    pulldown: state.pulldown
  }
}



export default connect(mapStateToProps, null)(Item)
