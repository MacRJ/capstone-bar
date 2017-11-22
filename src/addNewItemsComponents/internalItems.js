import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllItems, getType} from '../../actions/actions';
import Item from './item'

class InternalItems extends Component {

componentDidMount() {
  this.props.getAll()
}

// selecting a type
selectingAType = (id) => {
  this.props.selectItem(id)
}

// rendering the bar items types
barItems() {
  const {items} = this.props

//Filtering out multiple examples of cateogories
  var filtering = func(items)
  function func(arr) {
    return arr.filter(item => {
      return item.id === item.drink_type
    })
  }
  // Mapping funciton for Item
  return filtering.map((item, i) => {
      return item.selected ? <Item
                                key={item.id}
                                item={item}
                                selecting={this.selectingAType}
                                selected = {true}
                                /> : <Item
                                        key={item.id}
                                        item={item}
                                        selecting={this.selectingAType}
                                        selected = {false}
                                        />

    })
}



render() {
  const {container} = styles
    return (
      <View style={container}>
      {this.barItems()}
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    width: 550,
    height: 650,
    flexWrap: 'wrap'
  }
}
function mapStateToProps(state, props) {
  return {
    items: state.items
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getAll: bindActionCreators(getAllItems, dispatch),
    selectItem: bindActionCreators(getType, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(InternalItems)
