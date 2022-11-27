// 基于准备好的dom，初始化echarts实例
var currentChart = echarts.init(document.querySelector('.current .chart'));

var time = [], nowTime;
var current = [], realCurrent;

// 指定图表的配置项和数据
var option = {
    // 提示框
    tooltip: {
        trigger: 'axis',
    },
    // 图表说明
    legend: {
        top: "0%",
        textStyle: {
            color: "rgba(255,255,255,1)",
            fontSize: "12"
        }
    },
    grid: {
        top: '30',
        left: '10',
        right: '30',
        bottom: '10',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
        axisLabel: {
            textStyle: {
                color: "rgba(255,255,255,1)",
                fontSize: 12
            }
        },
        // x轴线的颜色为   rgba(255,255,255,.2)
        axisLine: {
            lineStyle: {
                color: "rgba(255,255,255,.2)"
            }
        },
        data: []
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            // 不显示刻度线
            show: false
        },
        axisLine: {
            lineStyle: {
                color: "rgba(255,255,255,.1)"
            }
        },
        axisLabel: {
            textStyle: {
                color: "rgba(255,255,255,1)",
                fontSize: 12
            }
        },
        // 修改分割线的颜色
        splitLine: {
            lineStyle: {
                color: "rgba(255,255,255,.1)"
            }
        }
    }],
    series: [{
        name: '搬运机器人电流',
        type: 'line',
        smooth: true, // 圆滑的线
        // 单独修改当前线条的样式
        lineStyle: {
            color: "#0184d5",
            width: 2
        },
        // 填充区域渐变透明颜色
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                [{
                    offset: 0,
                    color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
                },
                {
                    offset: 0.8,
                    color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
                }
                ],
                false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 拐点设置为小圆点
        symbol: 'circle',
        // 设置拐点大小
        symbolSize: 5,
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        // 设置拐点颜色以及边框
        itemStyle: {
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
        },
        data: []
    }
    ]
};

currentChart.setOption(option);

setInterval(runChart, 1000);

function getCurrentData() {
    $.getJSON("./json/data_elev.json", function (data) {
        nowTime = new Date().toLocaleTimeString('chinese', { hour12: false });
        time.push(nowTime);
        realCurrent = ((Math.random() * 0.5) + data.current).toFixed(1);
        current.push(realCurrent);
    })
}
// 绘制图表
function runChart() {
    getCurrentData();
    currentChart.setOption({
        xAxis: {
            data: time
        },
        series: [
            {
                name: '电流（A）',
                data: current
            }
        ]
    });
    // 数组长度大于20的时候开始清理数据，保证图表中只展示20个点
    if (time.length >= 20) {
        current.shift();
        time.shift();
    }
}