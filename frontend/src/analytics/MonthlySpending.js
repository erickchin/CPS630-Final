import React, { Component } from 'react';
import Chart from 'chart.js';

class MonthlySpending extends Component {
  monthInfo = this.props.data

  componentDidMount() {
    var ctx = document.getElementById('barGraph').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: this.monthInfo[this.props.curr].budgets.map(x => x.name),
        datasets: [{
            label: 'Categories',
            backgroundColor: '#fe4a49',
            borderColor: '#fe4a49',
            borderWidth: 1,
            data: this.monthInfo[this.props.curr].budgets.map(x => x.used),
        }]
    },

    // Configuration options go here
    options: {}
});
  }

  componentWillReceiveProps(nextProps) {
    var ctx = document.getElementById('barGraph').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: this.monthInfo[nextProps.curr].budgets.map(x => x.name),
        datasets: [{
            label: 'Categories',
            backgroundColor: '#fe4a49',
            borderColor: '#fe4a49',
            borderWidth: 1,
            data: this.monthInfo[nextProps.curr].budgets.map(x => x.used),
        }]
    },

    // Configuration options go here
    options: {}
});
  }

  render() {
    
    return (<canvas id={'barGraph'}></canvas>);
    
  }
}

export default MonthlySpending;