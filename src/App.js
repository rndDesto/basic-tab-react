import React, { Component } from 'react';
import TabsComponent from './Component/TabsComponent';
import TabContentComponent from './Component/TabContentComponent';
import './App.css';

class App extends Component {
  state = {
    activeTab : 0,
    page : 0
  }
  
  handleClick = (tab,event) => {
    event.preventDefault();
    this.setState({
      activeTab: tab
    });
    // console.log(tab);
  }

  handleNext = () => {
    this.setState({
      page: this.state.page + 1
    });
  }

  handlePrev = () => {
    this.setState({
      page: this.state.page - 1
    });
  }

  handleFinish = () => {
    alert("finish");
  }



  render() {
    let next,prev,finish = null;
    // let prev = null;
    // let finish = null
    if(this.state.page === 0){
      next = (
        <button onClick={this.handleNext}>Next</button>
      )
      console.log("AAA");
    }
    else if (this.state.page >= 2){
      console.log("CCC");
      prev = (
        <button onClick={this.handlePrev}>Prev</button>
      )
      finish = (
        <button onClick={this.handleFinish}>Finish</button>
      )
    }
    else {
      console.log("BBB");
      next = (
        <button onClick={this.handleNext}>Next</button>
      )
      prev = (
        <button onClick={this.handlePrev}>Prev</button>
      )
    }

    const step = ['step 1 ', 'step 2', 'step 3']; 
    let stepList = null;
    stepList = (
      step.map((step, index) => {

        return (<div key={index} className={`step${this.state.page === index ? ' active':''} `}>{step}</div>)
      })
    )


    return (
      <div className="App">
      <TabsComponent activeTab={this.state.activeTab} changeTab={this.handleClick}/>
      <TabContentComponent activeTab={this.state.activeTab} />
      <h1>In Page {this.state.page + 1}</h1>

      
      {stepList}
      {prev}
      {next}
      {finish}
      </div>
    );
  }
}

export default App;
