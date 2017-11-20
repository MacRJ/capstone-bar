import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBill} from '../actions/getAllTabs'


class Bill extends Component {

componentDidMount() {
  this.props.getBill()
}

  render(props) {
    console.log('theProps', this.props.bill)
    return (
      <View style={this.props.selected ? styles.selectedStyle : styles.not_selected} >
        <Text>im here</Text>
      </View>
    )
  }
}

const styles = {
  not_selected: {
    height: 100,
    width: 650,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#ddd',
    backgroundColor: 'white',
    opacity: .1,
  } ,
  selectedStyle: {
    height: 550,
    width: 650,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#ddd',
    backgroundColor: 'white',
  }
}

function mapStateToProps(state, props) {
  return {
    bill: state.getBill
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getBill: bindActionCreators(getBill, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Bill)
