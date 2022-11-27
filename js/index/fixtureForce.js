// 基于准备好的dom，初始化echarts实例
var forceChart = echarts.init(document.querySelector('.fixtureForce .chart'));
var time2 = [], nowTime2;
var t1 = [], t2 = [];
var t3 = [], t4 = [];
var t5 = [], t6 = [];

// 指定图表的配置项和数据
var option = {
    // 修改两条线的颜色
    color: ['#FFFF99', '#CCFF99', '#FF9999', '#FF9900'],
    // 提示框
    tooltip: {
        trigger: 'axis',
    },
    // 图表说明
    legend: {
        type: 'scroll',
        left: '15%',
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
        name: '关节1',
        type: 'line',
        // smooth: true,
        data: []
    },
    {
        name: '关节2',
        type: "line",
        // smooth: true,
        data: []
    },
    {
        name: '关节3',
        type: "line",
        // smooth: true,
        data: []
    },
    {
        name: '关节4',
        type: "line",
        // smooth: true,
        data: []
    },
    {
        name: '关节5',
        type: "line",
        // smooth: true,
        data: []
    },
    {
        name: '关节6',
        type: "line",
        // smooth: true,
        data: []
    }
    ]
};

function getTempData() {
    // $.getJSON("./json/data_elev.json", function (data) {
    $.getJSON("http://localhost:8080/bigRobotJoint", function (data) {
        t1.push(data.A1);
        t2.push(data.A2);
        t3.push(data.A3);
        t4.push(data.A4);
        t5.push(data.A5);
        t6.push(data.A6);
        // console.log("数据为" + data.A1)
        nowTime2 = new Date().toLocaleTimeString('chinese', { hour12: false });
        time2.push(nowTime2);
    })
}

forceChart.setOption(option);

setInterval(runChart, 1000);

// 绘制图表
function runChart() {
    getTempData();
    forceChart.setOption({
        xAxis: {
            data: time2
        },
        series: [
            {
                name: 'Fixture218',
                data: t1
            },
            {
                name: 'Fixture360',
                data: t2
            },
            {
                name: 'Fixture322',
                data: t3
            },
            {
                name: 'Fixture156',
                data: t4
            },
            {
                name: 'Fixture170',
                data: t5
            },
            {
                name: 'Fixture1',
                data: t6
            }
        ]
    });
    // 数组长度大于20的时候开始清理数据，保证图表中只展示20个点
    if (time2.length >= 10) {
        t1.shift();
        t2.shift();
        t3.shift();
        t4.shift();
        t5.shift();
        t6.shift();
        time2.shift();
    }
}