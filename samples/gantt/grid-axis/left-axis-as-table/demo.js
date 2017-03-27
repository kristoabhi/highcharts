
// THE CHART
Highcharts.chart('container', {
    title: {
        text: 'Left Axis as Table'
    },
    xAxis: [{
        grid: true,
        type: 'datetime',
        min: Date.UTC(2017, 10, 18),
        max: Date.UTC(2017, 11, 16)
    }],
    yAxis: {
        reversed: true,
        grid: {
            enabled: true,
            borderColor: '#fa0',
            borderWidth: 5,
            columns: [{
                name: 'Project',
                pointProperty: 'name',
                type: 'category'
            }, {
                name: 'Assignee',
                pointProperty: 'assignee',
                type: 'category'
            }, {
                name: 'Est. days',
                pointProperty: function (point) {
                    var number = (point.x2 - point.x) / (1000 * 60 * 60 * 24);
                    return Math.round(number * 100) / 100;
                },
                type: 'category' // TODO Make linear axis behave like category axis
            }, {
                name: 'Start date',
                pointProperty: 'x',
                type: 'datetime',
                min: Date.UTC(2017, 10, 18),
                max: Date.UTC(2017, 11, 16)
            }, {
                name: 'End date',
                pointProperty: 'x',
                type: 'datetime',
                min: Date.UTC(2017, 10, 18),
                max: Date.UTC(2017, 11, 16)
            }]
        }
    },
    series: [{
        name: 'Project 1',
        type: 'xrange',
        data: [{
            x: Date.UTC(2017, 10, 18, 8),
            x2: Date.UTC(2017, 10, 25, 16),
            name: 'Start prototype',
            assignee: 'Richards',
            y: 0
        }, {
            x: Date.UTC(2017, 10, 20, 8),
            x2: Date.UTC(2017, 10, 24, 16),
            name: 'Develop',
            assignee: 'Michaels',
            y: 1
        }, {
            x: Date.UTC(2017, 10, 25, 16),
            x2: Date.UTC(2017, 10, 25, 16),
            name: 'Prototype done',
            assignee: 'Richards',
            y: 2
        }, {
            x: Date.UTC(2017, 10, 27, 8),
            x2: Date.UTC(2017, 11, 3, 16),
            name: 'Test prototype',
            assignee: 'Richards',
            y: 3
        }, {
            x: Date.UTC(2017, 10, 23, 8),
            x2: Date.UTC(2017, 11, 15, 16),
            name: 'Run acceptance tests',
            assignee: 'Halliburton',
            y: 4
        }]
    }]
});