import React, { Component } from 'react';
import {formatMoney} from './OverviewHelper';

class MonthlyRow extends Component {

  /*

  { name: "Transportation", budget: 100, used: 100 },

  */

  budgetMonth = this.props.budgetInfo

  render() {
    return (<tr>
      <td>{this.budgetMonth.name}</td>
      <td className="budgetCol">
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{ width: (this.budgetMonth.used / this.budgetMonth.budget) * 100 + '%' }} aria-valuenow={(this.budgetMonth.used / this.budgetMonth.budget) * 100} aria-valuemin="0" aria-valuemax={100}></div>
        </div>
      </td>
      <td>${formatMoney(this.budgetMonth.budget)}</td>
      <td>${formatMoney(Math.abs(this.budgetMonth.budget - this.budgetMonth.used))} {(this.budgetMonth.budget - this.budgetMonth.used) > 0 ? "left" : "over!"}</td>
    </tr>)
  }
}

export default MonthlyRow;
