import React, { Component } from 'react';
import Chart from 'chart.js';

class MonthlySpending extends Component {
  
  monthlyData = this.props.data


  componentDidMount() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'bar',

      // The data for our dataset
      data: {
        //labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        labels: this.monthlyData.map(x => x.month + " " + x.year),
        datasets: [{
          label: 'Monthly spendings',
          backgroundColor: '#fed766',
          borderColor: '#fed766',
          borderWidth: 1,
          data: this.monthlyData.map(x => x.budgets.reduce((accumulator, currentValue) => { return accumulator + currentValue.used }, 0)),
          fill: false
        }]
      },

      // Configuration options go here
      options: {}
    });
  }

  render() {
    return (<div className="overviewObject">
          <h3>Overall Monthly Spendings</h3>
    <canvas id="myChart"></canvas>
    </div>
    );
  }
}

export default MonthlySpending;