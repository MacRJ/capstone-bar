import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Tab from './tab';
import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTab, selectTab, getBill, getAllTabs, upDateBill} from '../actions/actions';
import AddNew from './addNew';

class tabs extends Component {
state = {
  rerender: false
}


renderTabs() {
return this.props.tabs.map((tab, i) => {
  const colors = ['#33a1fd','#52dbaf','#fdca40','#f79824','#33a1fd','#52dbaf','#fdca40','#f79824','#33a1fd','#52dbaf','#fdca40','#f79824','#2176ff','#32ffd2', '#2de5bd','#3bba51','#cec500','#439aca','#31393c','#e9743f','#fede86',  '#5ee19b', '#c26ed2', '#36c2a6',  '#ec696d'];
  const authors = ['Ernest Hemingway', 'Mark Twain', 'Stephen King','Charles Dickens', 'Norm!!', 'F. Scott Fitzgerald']
  const images = ['https://murmuring-tundra-40675.herokuapp.com/public/images/animals/bee.png', 'https://murmuring-tundra-40675.herokuapp.com/public/images/animals/bull.png', 'https://murmuring-tundra-40675.herokuapp.com/public/images/animals/kangaroo.png', 'https://murmuring-tundra-40675.herokuapp.com/public/images/animals/lion.png', 'https://murmuring-tundra-40675.herokuapp.com/public/images/animals/stud.png','https://murmuring-tundra-40675.herokuapp.com/public/images/animals/shark.png', 'https://murmuring-tundra-40675.herokuapp.com/public/images/015-bird.png', 'https://murmuring-tundra-40675.herokuapp.com/public/images/021-squirrel.png', 'https://murmuring-tundra-40675.herokuapp.com/public/images/dog-paw.png']
  return <Tab
  key={tab.id}
  tab={tab}
  color={colors[i]}
  select={this.props.selectTab}
  author={authors[i]}
  image={images[i]}
  />
})
}

componentDidUpdate() {
  this.props.getBill()
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
     // upDateBill: bindActionCreators(upDateBill, dispatch)
   }
 }

export default connect(mapStateToProps, mapDispatchToProps)(tabs)
