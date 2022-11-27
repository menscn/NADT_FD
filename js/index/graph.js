// ************** 误差传递模型js*********
var graphChart = echarts.init(document.querySelector('.line01_elev .chart'));
var categories = [];
var chardata = [];
var charlinks = [];
// ****************公共逻辑变量*************

for (var i = 0; i < 2; i++) {
    categories[i] = {
        name: '类目' + i
    };
}
option = {
    // 工具箱
    toolbox: {
        // 显示工具箱
        show: true,
        feature: {
            mark: {
                show: true
            }
        }
    },
    series: [{
        type: 'graph', // 类型:关系图
        layout: 'force', //图的布局，类型为力导图
        symbolSize: 1, // 调整节点的大小
        roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移,可以设置成 'scale' 或者 'move'。设置成 true 为都开启
        edgeSymbol: ['circle', 'arrow'],
        data: [],
        links: [],
        edgeSymbolSize: [2, 10],
        edgeLabel: {
            normal: {
                textStyle: {
                    fontSize: 20
                }
            }
        },
        force: {
            repulsion: 2500,
            edgeLength: [10, 50]
        },
        draggable: true,
        lineStyle: {
            normal: {
                width: 10,
                color: '#4b565b',
            }
        },
        edgeLabel: {
            normal: {
                show: true,
                formatter: function (x) {
                    return x.data.name;
                }
            }
        },
        label: {
            normal: {
                show: true,
                textStyle: {}
            }
        },
        categories: categories,
    }]
};
graphChart.setOption(option);

function getData() {
    $.getJSON("../../json/test.json", function (data) {
        chardata.push(data.data[0])
        chardata.push(data.data[1])
        chardata.push(data.data[2])
        chardata.push(data.data[3])
        chardata.push(data.data[4])
        charlinks.push(data.links[0])
        charlinks.push(data.links[1])
        charlinks.push(data.links[2])
        charlinks.push(data.links[3])
    })
}

function runHealthChart() {
    getData();

    graphChart.setOption({
        // 提示框的配置
        tooltip: {
            formatter: function (x) {
                return x.data.des;
            }
        },
        series: [
            {
                data: chardata,
                links: charlinks,
            }
        ]
    });
    chardata.shift();
}

function changeFlag() {
    flag = true;
}
setInterval(runHealthChart, 100);
// runHealthChart()