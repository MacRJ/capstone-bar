import React, {Component} from 'react'
import {Text, View} from 'react-native'
import {connect} from 'react-redux'

class BillTotal extends Component {

grandTotal() {
  return (parseInt(this.props.total) * 1.056).toFixed(2)
}


  render() {
  const {total, container, row} = styles

  return (
    <View style={container}>
      <View style={row}>
        <Text style={{flex: 1}}> Total </Text>
        <Text style={{flex: 1}}>$ {this.props.total}</Text>
      </View>
      <View style={row}>
        <Text style={{flex: 1}}>Tax</Text>
        <Text style={{flex: 1}}> 5.6 %</Text>
      </View>
      <View style={row}>
        <Text style={{flex: 1}}> GrandTotal </Text>
        <Text style={{flex:1}}>$ {this.grandTotal()}</Text>
      </View>
    </View>
  )
}
}
const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  row: {
    flexDirection: 'row',
    padding: 3,
    alignItems: 'flex-end'
  }
}

function mapStateToProps(state, props) {
  return {
    total: state.total
  }
}


export default connect(mapStateToProps, null)(BillTotal)
