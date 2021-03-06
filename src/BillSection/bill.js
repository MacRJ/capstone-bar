import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBill} from '../../actions/actions';
import InternalBill from './internalBill'


class Bill extends Component {
  constructor(props) {
    super(props)
    this.state = {
      interval: null
    }
  }

componentDidMount() {
  this.props.getBill();
    this.setState({interval: setInterval(() => {
      this.props.getBill()
    }, 1000)});
  }
componentWillUnmount() {
  clearInterval(this.state.interval)
}

  render(props) {
    return (
      <View style={this.props.selected ? styles.selectedStyle : styles.not_selected} >
        <InternalBill />
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


function mapDispatchToProps(dispatch) {
  return {
    getBill: bindActionCreators(getBill, dispatch)
  }
}


export default connect(null, mapDispatchToProps)(Bill)
