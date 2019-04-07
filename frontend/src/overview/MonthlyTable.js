import React, { Component } from 'react';
import MonthlyRow from './MonthlyRow';
import {formatMoney} from './OverviewHelper';

class MonthlyTable extends Component {

  /*
    {
      date: "March 2019",
      budgets: [{ name: "Transportation", budget: 100, used: 100 },
      { name: "Coffee Shops", budget: 100, used: 100 },
      { name: "Groceries", budget: 100, used: 40 },
      { name: "Restaurants", budget: 100, used: 20 },
      { name: "Shopping", budget: 1000, used: 500 }]
    }

  */

  budgetMonths = this.props.budgetInfo
  
  // Calculates the total budget
  totalBudget = Object.keys(this.budgetMonths.budgets).reduce((previous, key) => {
    return previous + this.budgetMonths.budgets[key].budget;
  }, 0);

  // Calculates the total usage
  totalUsed = Object.keys(this.budgetMonths.budgets).reduce((previous, key) => {
    return previous + this.budgetMonths.budgets[key].used;
  }, 0);

  calculateMostSpentCategory = () => {
    var category = ""
    var amount = 0

    // Assuming 0 is the most recent date
    this.budgetMonths.budgets.map(x => {
          if (category === "") {
            category = x.name
            amount = x.used
          }
          else {
            if (amount < x.used) {
              category = x.name
              amount = x.used
            }
          }
      })

    return {type: category, used: formatMoney(amount)}
  }

  render() {
    return (<div><div className="overviewObject">
      <h3>{this.budgetMonths["month"]} {this.budgetMonths["year"]}</h3>
      <p>Your most spent category was {this.calculateMostSpentCategory().type}! You have spent {this.calculateMostSpentCategory().used}. </p>
      <div className="center">
        <table className="monthlyTable">
          <tr>
            <td><strong>Total</strong></td>
            <td className="budgetCol">
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: (this.totalUsed / this.totalBudget) * 100 + '%' }} aria-valuenow={(this.totalUsed / this.totalBudget) * 100} aria-valuemin="0" aria-valuemax={100}></div>
              </div>
            </td>
            <td><strong>Budget</strong></td>
            <td><strong>Over</strong>?</td>
          </tr>
          {this.budgetMonths.budgets.map(x => <MonthlyRow budgetInfo={x}/>)}
        </table>
      </div>
    </div>
      <br />
    </div>);
  }
}

export default MonthlyTable;
