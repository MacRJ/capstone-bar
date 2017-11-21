import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Tab from './tab';
import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTab, selectTab, getBill, getAllTabs, upDateBill} from '../actions/actions';
import AddNew from './addNew';

class tabs extends Component {


renderTabs() {
return this.props.tabs.map((tab, i) => {
  let colors = ['#31393c', '#2176ff','#fdca40', '#f79824','#33a1fd','#52dbaf','#439aca','#e9743f','#fede86', '#3bba51', '#5ee19b', '#c26ed2', '#cec500','#36c2a6',  '#ec696d'];
  return <Tab
  key={tab.id}
  tab={tab}
  color={colors[i]}
  select={this.props.selectTab}
  />
})
}

componentDidUpdate() {
  this.props.getBill()
  this.props.upDateBill(null)
}

componentDidMount() {
this.props.getAllTabs()
}

render(){
  const {tabs} = styles

    return (
      <View >
        <ScrollView
          style={{flex: 1}}
        >
            <View style={tabs} >
              {this.renderTabs()}
            </View>
        </ScrollView>
        <View>
          <AddNew add={this.props.add}/>
        </View>
      </View>
  )
}
};

const styles = {
  tabs: {
    width: 400,
    alignItems: 'flex-end',
    flex: 1
  },
}

function mapStateToProps(state, props) {
  return {
    tabs: state.tabs
  }
}

function mapDispatchToProps(dispatch)
 {
   return {
     add: bindActionCreators(addTab, dispatch),
     selectTab: bindActionCreators(selectTab, dispatch),
     getBill: bindActionCreators(getBill, dispatch),
     getAllTabs: bindActionCreators(getAllTabs, dispatch),
     upDateBill: bindActionCreators(upDateBill, dispatch)
   }
 }

export default connect(mapStateToProps, mapDispatchToProps)(tabs)
