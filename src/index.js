import _ from 'lodash'
import Chart from 'chart.js'
import css from './simple-grid.min.css'
import 'chart.piecelabel.js'

var coinPie = "coinPie";
var seligsonPie = "seligsonPie";

var default_colors = ['#3366CC','#DC3912','#FF9900','#109618','#990099','#3B3EAC','#0099C6','#DD4477','#66AA00','#B82E2E','#316395','#994499','#22AA99','#AAAA11','#6633CC','#E67300','#8B0707','#329262','#5574A6','#3B3EAC']

const url = "http://91.157.151.61:80/coins";

function authenticateUser(user, password)
{
    var token = user + ":" + password;

    // Should i be encoding this value????? does it matter???
    // Base64 Encoding -> btoa
    var hash = btoa(token);

    return "Basic " + hash;
}

const headers = new Headers()
headers.append('Authorization', authenticateUser("", ""))

const init = { headers: headers}

const test = fetch(url, init)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
        const coin_values = []
        const coin_labels = []
        for (let i in data.coins.details) {
           coin_values.push(data.coins.details[i].amount)
           coin_labels.push(data.coins.details[i].id)
        }

        var test = new Chart(coinPie,{
            type: 'pie',
            data: {
                datasets: [{
                    data: coin_values,
                    borderWidth: 2,
                    backgroundColor: default_colors
                }],

                // These labels appear in the legend and in the tooltips when hovering different arcs
                labels: coin_labels
            },

            options: {
                pieceLabel: {
                    render: function (args) {
                        return args.label + ' ' + args.percentage +'%';
                    },
                    fontSize: 11,
                    fontColor: '#fff'
                },
                color: ['red', 'blue', 'green'],
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var allData = data.datasets[tooltipItem.datasetIndex].data;
                            var tooltipLabel = data.labels[tooltipItem.index];
                            var tooltipData = allData[tooltipItem.index];
                            var total = 0;
                            for (var i in allData) {
                                total += allData[i];
                            }
                            var tooltipPercentage = Math.round((tooltipData / total) * 100);
                            return tooltipLabel + ': ' + Math.round(tooltipData) + ' (' + tooltipPercentage + '%)';
                        }
                    }
                },
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
            backgroundColor: default_colors
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

