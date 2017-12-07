import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {addDrink} from '../../../actions/actions'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

class PullDownItem extends Component {
    render() {
    const {item, text} = styles
    return (
      <TouchableHighlight
        style={item}
        onPress={() => this.props.addDrink(this.props.item.id)}>
        <Text style={text}>{this.props.item.name}</Text>
      </TouchableHighlight>
    )
  }
}

const styles = {
  item: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    height: 50,
    justifyContent: 'space-around',
    flexDirection: ''
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    fontStyle: 'italic'
  }
}
function mapDispatchToProps(dispatch) {
  return {
    addDrink: bindActionCreators(addDrink, dispatch)
  }
}


export default connect(null, mapDispatchToProps)(PullDownItem)
