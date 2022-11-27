var chartDom = document.querySelector('.dirGarph .chart');
var myChart = echarts.init(chartDom);
var option;
myChart.showLoading();
$.get('../../json/AssemblyProcessGraph1.json', function (graph) {
    myChart.hideLoading();
    graph.nodes.forEach(function (node) {
        node.symbolSize = 10;
    });
    // console.log(graph.links);
    option = {
        tooltip: {},
        series: [
            {
                name: 'Les Miserables',
                type: 'graph',
                layout: 'none',
                data: graph.nodes,
                links: graph.links,
                categories: graph.categories,
                roam: true,
                label: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                },
                force: {
                    repulsion: 2000
                },
                labelLayout: {
                    hideOverlap: true
                },
                scaleLimit: {
                    min: 2,
                    max: 10
                },
                lineStyle: {
                    color: 'source',
                    width: 2,
                    curveness: 0.5
                }
            }
        ]
    };
    myChart.setOption(option, true);
});

option && myChart.setOption(option);