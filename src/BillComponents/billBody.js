import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class BillBody extends Component{

  getDescription() {
    return this.props.bill.map(single => {
      return <Text>{single.name}</Text>
    })
  }
  render() {


  const {body} = styles
  return (
    <View style = {body}>
      <Text></Text>
      {this.getDescription()}
      <Text> Quantiy </Text>
      <Text> Total </Text>
    </View>
  )
}
}

const styles = {
  body: {
    flex: 2,
    paddingTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderBottomWidth: 2,


  }
}

function mapStateToProps(state, props) {
  return {
    bill: state.bill
  }
}


export default connect(mapStateToProps, null)(BillBody)
