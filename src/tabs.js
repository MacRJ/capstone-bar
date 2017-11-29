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
  const colors = ['#3bba51', '#2176ff','#fdca40', '#cec500','#f79824','#33a1fd','#52dbaf','#439aca','#31393c','#e9743f','#fede86',  '#5ee19b', '#c26ed2', '#36c2a6',  '#ec696d'];
  const authors = ['Ernest Hemingway', 'Mark Twain', 'Stephen King','Charles Dickens', 'Norm!!', 'F. Scott Fitzgerald']
  const images = ['http://i1044.photobucket.com/albums/b448/rmacwj2/022-bulldog_zpsa19s0bpw.png', 'http://i1044.photobucket.com/albums/b448/rmacwj2/021-squirrel_zps0pbw5pdg.png', 'http://i1044.photobucket.com/albums/b448/rmacwj2/013-shrimp_zps0bkuik21.png', 'http://i1044.photobucket.com/albums/b448/rmacwj2/016-fish_zpsloe6nw2z.png', 'http://i1044.photobucket.com/albums/b448/rmacwj2/015-bird_zpswid8xgmo.png', 'http://i1044.photobucket.com/albums/b448/rmacwj2/014-owl_zpsjqo7izhx.png', 'http://i1044.photobucket.com/albums/b448/rmacwj2/012-cat_zpsurqu9v88.png', 'http://i1044.photobucket.com/albums/b448/rmacwj2/011-horse_zpsjyzqmao3.png', 'http://i1044.photobucket.com/albums/b448/rmacwj2/007-bat_zpslhcjppge.png', 'http://i1044.photobucket.com/albums/b448/rmacwj2/005-bug-1_zpsajmy6off.png', 'http://i1044.photobucket.com/albums/b448/rmacwj2/006-cow-silhouette_zpsmv9xscqg.png']
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
