import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Tab from './tab';
import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllTabs, addTab, selectTab} from '../actions/getAllTabs';
import AddNew from './addNew'

class tabs extends Component {

componentDidMount() {
this.props.getAllTabs()
}

renderTabs() {
return this.props.tabs.map((tab, i) => {
  let colors = ['#52dbaf','#439aca','#e9743f','#fede86', '#3bba51', '#5ee19b', '#c26ed2', '#cec500','#36c2a6',  '#ec696d'];
  return <Tab
  key={tab.id}
  tab={tab}
  color={colors[i]}
  select={this.props.selectTab}
  />
})
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
     getAllTabs: bindActionCreators(getAllTabs, dispatch),
     add: bindActionCreators(addTab, dispatch),
     selectTab: bindActionCreators(selectTab, dispatch)
   }
 }

export default connect(mapStateToProps, mapDispatchToProps)(tabs)
