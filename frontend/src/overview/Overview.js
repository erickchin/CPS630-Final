import React, { Component } from 'react';
import MonthlyTable from './MonthlyTable';
import {formatMoney} from './OverviewHelper';

class Overview extends Component {
  state = {
    data: [{
      month: "March",
      year: 2019,
      budgets: [{ name: "Transportation", budget: 100, used: 100 },
      { name: "Coffee Shops", budget: 100, used: 100 },
      { name: "Groceries", budget: 100, used: 40 },
      { name: "Restaurants", budget: 100, used: 3320 },
      { name: "Shopping", budget: 1000, used: 500 }]
    },

    {
      month: "May",
      year: 2019,
      budgets: [{ name: "Transportation", budget: 100, used: 100 },
      { name: "Coffee Shops", budget: 4000, used: 300 },
      { name: "Groceries", budget: 2000, used: 299 },
      { name: "Restaurants", budget: 100, used: 20 },
      { name: "Shopping", budget: 100000, used: 59999 }]
    },

    {
      month: "April",
      year: 2018,
      budgets: [{ name: "Transportation", budget: 100, used: 100 },
      { name: "Coffee Shops", budget: 4000, used: 300 },
      { name: "Groceries", budget: 2000, used: 299 },
      { name: "Restaurants", budget: 100, used: 20 },
      { name: "Shopping", budget: 100000, used: 59999 }]
    }]
  }

  calculateTotalSpent = () => {
    var total = 0
    var year = new Date().getFullYear()
    var currYearBudgets = this.state.data.filter(x => x.year == year)

    currYearBudgets.map(x => x.budgets.map(y => total += y.used))

    return formatMoney(total)
  }

  render() {


    return (
      <div className="container">
        <div className="overviewObject">
          <h3>You have spent ${this.calculateTotalSpent()} this year.</h3> 
          <br/>
          <p>You can find your monthly spendings and budget below.</p>
        </div>
        <br />
        {this.state.data.map(x => <MonthlyTable budgetInfo={x} />)}
      </div>
    );
  }
}

export default Overview;