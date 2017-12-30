import _ from 'lodash'
import Chart from 'chart.js'
import css from './simple-grid.min.css';

var coinPie = "coinPie";
var seligsonPie = "seligsonPie";

// For a pie chart
var coinPieChart = new Chart(coinPie,{
    type: 'pie',
    data: {
        datasets: [{
            data: [10, 20, 30, 12,34,45,67,45],
            borderWidth: 2,
            backgroundColor:[
                "#ff6384",
                "#ff6384",
                "#ff6384"
            ]
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
    },

    options: {
        color: ['red', 'blue', 'green'],
        labels: {
            defaultFontSize: 8
        }
    }
});

var seligsonPieChart = new Chart(seligsonPie,{
    type: 'pie',
    data: {
        datasets: [{
            data: [10, 20, 30],
            borderWidth: 2,
            backgroundColor:[
                "#ff6384",
                "#ff6384",
                "#ff6384"
            ]
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
    },

    options: {
        color: ['red', 'blue', 'green']
    }
});

