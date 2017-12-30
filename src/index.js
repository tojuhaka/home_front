import _ from 'lodash'
import Chart from 'chart.js'
import css from './simple-grid.min.css';

var coinPie = "coinPie";
var seligsonPie = "seligsonPie";

const url = "http://91.157.151.61/";

const test = fetch(url)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
        var test = new Chart(coinPie,{
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
        // Create and append the li's to the ul
})


// For a pie chart

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

