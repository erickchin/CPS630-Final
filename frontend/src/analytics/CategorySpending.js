import React, { Component } from 'react';
import Chart from 'chart.js';

class MonthlySpending extends Component {

  componentDidMount() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Monthly spendings',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});
  }

  render() {
    return (<div className="container">
      <h1>Analytics</h1>
      <canvas id="myChart"></canvas>
    </div>
      
    );
  }
}

export default MonthlySpending;