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

// rendering the bar items types
barItems() {
  return this.props.items.map(item => {
    console.log('theItems', item)
    return item.selected ? <Text>This is selected </Text> : <Item
    key={item.id}
    item={item}
    selecting={this.selectingAType}
    />
    })
}

// selecting a type
selectingAType = (id) => {
  this.props.selectItem(id)
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
