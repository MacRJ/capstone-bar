import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {MakeFulfilled} from '../../actions/actions'



class Item extends Component {



// Getting the total for the line Item
  getTotal() {
    const {quantity, price, name} = this.props.currentTab
    let price2 = parseFloat(price)
    let total = 0

    if(quantity > 1) {
      for(var i =0; i < quantity; i++){
          total = price2 + total
      }
    } else {
      return parseFloat(price).toFixed(2)
    }
    return total.toFixed(2)
  }

  render() {
  const {body, one, two, three, four, body2} = styles

    return (
      <View style={this.props.currentTab.fulfilled ? body : body2}>
        <Text style={one}>{null}</Text>
        <Text style={two}> {this.props.currentTab.name}</Text>
        <Text style= {three}> {this.props.currentTab.quantity} </Text>
        <Text style={four}> $ {this.getTotal()} </Text>
      </View>
    )
  }
}

const styles = {
  body: {
    flexDirection: 'row',
  },
  body2: {
    flexDirection: 'row',
    backgroundColor: 'red'
  },
  one: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  two: {
    flex: 1
  },
  three: {
    flex: 1
  },
  four: {
    justifyContent: 'flex-end'
  }
}

function mapDispatchToProps(dispatch) {
  return {
    makeFulfilled: bindActionCreators(MakeFulfilled, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Item)
