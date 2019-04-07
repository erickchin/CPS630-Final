import React, { Component } from 'react';
import Chart from 'chart.js';
import OverallMonthlySpending from './OverallMonthlySpending';
import MonthlySpending from './MonthlySpending';

class Analytics extends Component {
  state = {
    currentIndex: 0,
    data: [{
      month: "March",
      year: 2019,
      budgets: [{ name: "Transportation", budget: 100, used: 100 },
      { name: "Coffee Shops", budget: 100, used: 100 },
      { name: "Groceries", budget: 100, used: 40 },
      { name: "Restaurants", budget: 100, used: 100 },
      { name: "Shopping", budget: 1000, used: 500 }]
    },

    {
      month: "February",
      year: 2019,
      budgets: [{ name: "Transportation", budget: 100, used: 100 },
      { name: "Coffee Shops", budget: 100, used: 300 },
      { name: "Groceries", budget: 2000, used: 299 },
      { name: "Restaurants", budget: 100, used: 20 },
      { name: "Shopping", budget: 100, used: 30 },
      { name: "School", budget: 1000, used: 500 }]
    },

    {
      month: "January",
      year: 2019,
      budgets: [{ name: "Transportation", budget: 100, used: 100 },
      { name: "Coffee Shops", budget: 4000, used: 300 },
      { name: "Groceries", budget: 2000, used: 299 },
      { name: "Restaurants", budget: 100, used: 20 },
      { name: "Shopping", budget: 50, used: 50 }]
    },
  
    {
      month: "April",
      year: 2018,
      budgets: [{ name: "Transportation", budget: 100, used: 100 },
      { name: "Coffee Shops", budget: 4000, used: 300 },
      { name: "Groceries", budget: 2000, used: 299 },
      { name: "Restaurants", budget: 100, used: 20 },
      { name: "Shopping", budget: 200, used: 200 }]
    }]
  }

  subtractIndex = () => {
    if (this.state.currentIndex != 0) {
      this.setState((prevState, props) => ({
        currentIndex: prevState.currentIndex - 1
    })); 
    }
    
  }

  addIndex = () => {
    if (this.state.currentIndex < this.state.data.length - 1) {
      this.setState((prevState, props) => ({
        currentIndex: prevState.currentIndex + 1
    })); 
    }
    
  }

  render() {
    return (<div className="container">
      <br/>

      <OverallMonthlySpending data={this.state.data}/>
      <br/>
      <div className="overviewObject">
        <h3>Monthly Spendings</h3>
        <MonthlySpending curr={this.state.currentIndex} data={this.state.data}/>
        <br/>
        <center><button onClick={this.subtractIndex}>Previous</button>       <button onClick={this.addIndex}>Next</button></center>
      </div>
     
    </div>
      
    );
  }
}

export default Analytics;