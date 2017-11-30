import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllItems, getType, getPullDown} from '../../actions/actions';
import {Item} from './';
import PullDownItem from './pulldownitem';

class InternalItems extends Component {

componentDidMount() {
  this.props.getAll()
  this.props.getPullDown(1)
}

// selecting a type
selectingAType = (id) => {
  this.props.selectItem(id)
  this.props.getPullDown(id)
}

getPulldownItems = () => {
  return this.props.pulldown.map(item => {
    return <PullDownItem  key={item.id} item={item}/>
  })
}

// rendering the bar items types
barItems() {
  const {items} = this.props

//Filtering out multiple examples of cateogories
  // var filtering = func(items)
  // function func(arr) {
  //   return arr.filter(item => {
  //     return item.id === item.drink_type
  //   })
  // }

  return items
    .filter(item => item.id === item.drink_type)
    .map((item, i) => {
      return item.selected ? <Item
          key={item.id}
          item={item}
          selecting={this.selectingAType}
          selected = {true}
          icon={item.url}
          />: <Item
                  key={item.id}
                  item={item}
                  selecting={this.selectingAType}
                  selected = {false}
                  icon={item.url}
                  />

    })
}



render() {
  const {container, row, items} = styles
    return (
      <View style={container}>
        <ScrollView horizontal={true} style = {row}>
          {this.barItems()}
        </ScrollView>
        <View style={items}>
          <ScrollView>
            {this.getPulldownItems()}
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    width: 640,
    height: 650,
    flexWrap: 'wrap',
    // backgroundColor: 'green'
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    width: 550,
    flexWrap: 'wrap',
    height: 175,
    width: 650,
  },
  items: {
    flex: 1,
    // backgroundColor: 'red'
  }
}
function mapStateToProps(state, props) {
  return {
    items: state.items,
    pulldown: state.pulldown
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getAll: bindActionCreators(getAllItems, dispatch),
    selectItem: bindActionCreators(getType, dispatch),
    getPullDown: bindActionCreators(getPullDown, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(InternalItems)
