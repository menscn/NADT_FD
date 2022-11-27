// 基于准备好的dom，初始化echarts实例
var tempChart = echarts.init(document.querySelector('.robotJoints .chart'));
var jTime2 = [], nowTime2;
var temp1 = [], t1, temp2 = [], t2;
var temp3 = [], t3, temp4 = [], t4;
var temp5 = [], t5, temp6 = [], t6;

// 指定图表的配置项和数据
var option = {
    // 修改两条线的颜色
    // color: ['#FFFF99', '#CCFF99', '#FF9999', '#FF9900'],
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

function getJointData() {
    $.getJSON("http://localhost:8080/bigRobotJoint", function (data) {
        temp1.push(data.A1);
        temp2.push(data.A2);
        temp3.push(data.A3);
        temp4.push(data.A4);
        temp5.push(data.A5);
        temp6.push(data.A6);
        nowTime2 = new Date().toLocaleTimeString('chinese', { hour12: false });
        jTime2.push(nowTime2);
    })
}

tempChart.setOption(option);

setInterval(runChart, 1000);

// 绘制图表
function runChart() {
    getJointData()
    tempChart.setOption({
        xAxis: {
            data: jTime2
        },
        series: [
            {
                name: '关节1',
                data: temp1
            },
            {
                name: '关节2',
                data: temp2
            },
            {
                name: '关节3',
                data: temp3
            },
            {
                name: '关节4',
                data: temp4
            },
            {
                name: '关节5',
                data: temp5
            },
            {
                name: '关节6',
                data: temp6
            }
        ]
    });
    // 数组长度大于20的时候开始清理数据，保证图表中只展示20个点
    if (jTime2.length >= 10) {
        temp1.shift();
        temp2.shift();
        temp3.shift();
        temp4.shift();
        temp5.shift();
        temp6.shift();
        jTime2.shift();
    }
}