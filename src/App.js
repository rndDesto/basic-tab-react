import React, { Component } from 'react';
import TabsComponent from './Component/TabsComponent';
import TabContentComponent from './Component/TabContentComponent';

class App extends Component {
  state = {
    activeTab : 0,
  }
  
  handleClick = (tab,event) => {
    event.preventDefault();
    this.setState({
      activeTab: tab
    });
    // console.log(tab);
  }

  render() {
    return (
      <div className="App">
      <TabsComponent activeTab={this.state.activeTab} changeTab={this.handleClick}/>
      <TabContentComponent activeTab={this.state.activeTab} />
      </div>
    );
  }
}

export default App;
