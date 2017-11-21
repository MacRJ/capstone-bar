import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllItems} from '../../actions/actions';
import Item from './item'

class InternalItems extends Component {

componentDidMount() {
  this.props.getAll()
}

barItems() {
  return this.props.items.map(item => {
    return <Item
    key={item.id}
    item={item}
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
    getAll: bindActionCreators(getAllItems, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(InternalItems)
