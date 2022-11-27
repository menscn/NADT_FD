
var robot_b_joint1,
    robot_b_joint2,
    robot_b_joint3,
    robot_b_joint3_motor,
    robot_b_joint4,
    robot_b_joint5;
var robot_s_joint1,
    robot_s_joint2,
    robot_s_joint3,
    robot_s_joint3_motor,
    robot_s_joint4,
    robot_s_joint5;

function DefMeshState() {

    robot_b_joint1 = scene.meshes[6];
    robot_b_joint2 = scene.meshes[7];
    robot_b_joint3 = scene.meshes[8];
    robot_b_joint4 = scene.meshes[9]
    robot_b_joint5 = scene.meshes[11];
    robot_b_joint6 = scene.meshes[12];

    robot_s_joint1 = scene.meshes[124];
    robot_s_joint2 = scene.meshes[125];
    robot_s_joint3 = scene.meshes[126];
    robot_s_joint4 = scene.meshes[127];
    robot_s_joint5 = scene.meshes[128];
    robot_s_joint6 = scene.meshes[130];



}





var step_1 = 0, step_2 = 0;
var choose_robot = 1;
var s_angle_1, s_angle_2, s_angle_3, s_angle_4;
var b_angle_1, b_angle_2, b_angle_3, b_angle_4, b_angle_5, b_angle_6;
var i = 0;
function complete_process() {
    DefMeshState()
    robot_b_joint1.rotation = new BABYLON.Vector3(0, Math.PI * (85.74 / 180), 0);
    robot_b_joint2.rotation = new BABYLON.Vector3(0, 0, -(Math.PI * (-80.477 / 180)) - Math.PI / 2);
    robot_b_joint3.rotation = new BABYLON.Vector3(0, 0, -Math.PI * (112.81 / 180) + Math.PI / 2);
    robot_b_joint4.rotation = new BABYLON.Vector3(-Math.PI * (-0.2815 / 180), 0, 0);
    robot_b_joint5.rotation = new BABYLON.Vector3(0, 0, Math.PI * (-57.46 / 180));
    robot_b_joint6.rotation = new BABYLON.Vector3(-Math.PI * (57.75 / 180), 0, 0);
    // $.getJSON("http://127.0.0.1:8080/all", function (data) {

    //     robot_b_joint1.rotation = new BABYLON.Vector3(0, Math.PI * (-data.A1 / 180), 0);
    //     robot_b_joint2.rotation = new BABYLON.Vector3(0, 0, -(Math.PI * (data.A2 / 180)) - Math.PI / 2);
    //     robot_b_joint3.rotation = new BABYLON.Vector3(0, 0, -Math.PI * (data.A3 / 180) + Math.PI / 2);
    //     robot_b_joint4.rotation = new BABYLON.Vector3(-Math.PI * (data.A4 / 180), 0, 0);
    //     robot_b_joint5.rotation = new BABYLON.Vector3(0, 0, Math.PI * (-data.A5 / 180));
    //     robot_b_joint6.rotation = new BABYLON.Vector3(-Math.PI * (data.A6 / 180), 0, 0);

    //     //     robot_s_joint1.rotation = new BABYLON.Vector3(0, -data.B1 * Math.PI / 180, 0);
    //     //     robot_s_joint2.rotation = new BABYLON.Vector3(0, 0, -data.B2 * Math.PI / 180-Math.PI/2);
    //     //    robot_s_joint3.rotation = new BABYLON.Vector3(0, 0, -data.B3 * Math.PI / 180+Math.PI/2);
    //     //     robot_s_joint4.rotation = new BABYLON.Vector3(-data.B4 * Math.PI / 180+Math.PI,0, 0);
    //     //     robot_s_joint5.rotation = new BABYLON.Vector3(0, 0, data.B5 * Math.PI / 180);
    //     //     robot_s_joint6.rotation = new BABYLON.Vector3(0,  data.B6 * Math.PI / 180+Math.PI,0);
    // })

}
//setTimeout(complete_process, 1000)

// var timer_1 = setInterval(complete_process, 10);

function test() {
    DefMeshState()

    $.getJSON("../../json/data.json", function (data) {

        console.log("i" + i)

        // 搬运机器人
        robot_b_joint1.rotation = new BABYLON.Vector3(0, Math.PI * (-data[i].A1 / 180), 0);
        robot_b_joint2.rotation = new BABYLON.Vector3(0, 0, -(Math.PI * (data[i].A2 / 180)) - Math.PI / 2);
        robot_b_joint3.rotation = new BABYLON.Vector3(0, 0, -Math.PI * (data[i].A3 / 180) + Math.PI / 2);
        robot_b_joint4.rotation = new BABYLON.Vector3(-Math.PI * (data[i].A4 / 180), 0, 0);
        robot_b_joint5.rotation = new BABYLON.Vector3(0, 0, Math.PI * (-data[i].A5 / 180));
        robot_b_joint6.rotation = new BABYLON.Vector3(-Math.PI * (data[i].A6 / 180), 0, 0);
        // 螺丝机器人
        robot_s_joint1.rotation = new BABYLON.Vector3(0, -data[i].B1 * Math.PI / 180, 0);
        robot_s_joint2.rotation = new BABYLON.Vector3(0, 0, -data[i].B2 * Math.PI / 180 - Math.PI / 2);
        robot_s_joint3.rotation = new BABYLON.Vector3(0, 0, -data[i].B3 * Math.PI / 180 + Math.PI / 2);
        robot_s_joint4.rotation = new BABYLON.Vector3(-data[i].B4 * Math.PI / 180 + Math.PI, 0, 0);
        robot_s_joint5.rotation = new BABYLON.Vector3(0, 0, data[i].B5 * Math.PI / 180);
        robot_s_joint6.rotation = new BABYLON.Vector3(0, data[i].B6 * Math.PI / 180 + Math.PI, 0);
        // 218内夹爪
        if (data[i].Fix1 == 1) {
            // 机械手上218夹爪显示
            for (i = 31; i <= 35; i++) {
                scene.meshes[i].isVisible = true;
            }
            // 平台上的218夹爪隐藏
            for (i = 63; i <= 67; i++) {
                scene.meshes[i].isVisible = false;
            }
            // 218夹取柔性接头
            if (data[i].FixClose == 1) {
                // 218夹爪上柔性接头显现
                scene.meshes[26].isVisible = true;
                // 平台上柔性接头隐藏
                scene.meshes[110].isVisible = false;
            }
            // 218松开柔性接头
            if (data[i].FixOpen == 1) {
                // 夹爪上柔性接头隐藏
                scene.meshes[26].isVisible = false;
                // 安装平台上柔性接头显现
                scene.meshes[111].isVisible = true;
                flag360 = 1;
            }
        }
        // 机械手上的218消失，平台上的218显示
        if (data[i].Fix1 == 0) {
            // 机械手上218夹爪隐藏
            for (i = 31; i <= 35; i++) {
                scene.meshes[i].isVisible = false;
            }
            // 平台上的218夹爪显示
            for (i = 63; i <= 67; i++) {
                scene.meshes[i].isVisible = true;
            }
        }
        // 360
        if (data[i].Fix2 == 1) {
            // 机械手上夹爪显示
            for (i = 45; i <= 48; i++) {
                scene.meshes[i].isVisible = true;
            }
            // 平台上夹具隐藏
            for (i = 92; i <= 96; i++) {
                scene.meshes[i].isVisible = false;
            }
            // 阶段一，抓取固定体
            if (flag360 == 1) {
                // 抓取固定体
                if (data[i].FixClose == 1) {
                    // 夹爪上固定体显示
                    scene.meshes[52].isVisible = true;
                    // 平台上固定体消失
                    scene.meshes[68].isVisible = false;
                }
                if (data[i].FixOpen == 1) {
                    // 夹爪上固定体隐藏
                    scene.meshes[52].isVisible = false;
                    // 安装平台上的固定体显示
                    scene.meshes[112].isVisible = true;
                    flag360 = 2;
                }
            } else if (flag360 == 2) {
                // 夹取装配体1
                if (data[i].FixClose == 1) {
                    // 夹爪上装配体1显示
                    scene.meshes[56].isVisible = true;
                    scene.meshes[57].isVisible = true;
                    // 安装平台1上装配体隐藏
                    scene.meshes[113].isVisible = false;
                    scene.meshes[114].isVisible = false;
                }
                // 放下装配体1
                if (data[i].FixOpen == 1) {
                    // 夹爪上装配体1隐藏
                    scene.meshes[56].isVisible = false;
                    scene.meshes[57].isVisible = false;
                    // 装配平台2上显示
                    scene.meshes[115].isVisible = true;
                    scene.meshes[116].isVisible = true;
                }
            } else if (flag360 == 3) {
                // 保护工段
                if (data[i].FixClose == 1) {
                    // 夹爪上保护工段显示
                    scene.meshes[44].isVisible = true;
                    // 平台上保护工段消失
                    scene.meshes[97].isVisible = false;
                }
                if (data[i].FixOpen == 1) {
                    // 夹爪上保护工段隐藏
                    scene.meshes[44].isVisible = false;
                    // 安装平台上保护工段出现
                    scene.meshes[85].isVisible = true;
                }
            } else if (flag360 == 4) {
                // 成品
                if (data[i].FixClose == 1) {
                    // 夹爪上成品显示
                    scene.meshes[50].isVisible = true;
                    scene.meshes[51].isVisible = true;
                    scene.meshes[52].isVisible = true;
                    scene.meshes[53].isVisible = true;
                    scene.meshes[54].isVisible = true;
                    scene.meshes[55].isVisible = true;
                    // 安装平台上消失
                    scene.meshes[111].isVisible = false;
                    scene.meshes[112].isVisible = false;
                    scene.meshes[76].isVisible = false;
                    scene.meshes[83].isVisible = false;
                    scene.meshes[84].isVisible = false;
                    scene.meshes[85].isVisible = false;
                }
                if (data[i].FixOpen == 1) {
                    // 夹爪上成品隐藏
                    scene.meshes[50].isVisible = false;
                    scene.meshes[51].isVisible = false;
                    scene.meshes[52].isVisible = false;
                    scene.meshes[53].isVisible = false;
                    scene.meshes[54].isVisible = false;
                    scene.meshes[55].isVisible = false;
                    // 最终工位成品显示
                    scene.meshes[86].isVisible = true;
                    scene.meshes[87].isVisible = true;
                    scene.meshes[88].isVisible = true;
                    scene.meshes[89].isVisible = true;
                    scene.meshes[90].isVisible = true;
                    scene.meshes[91].isVisible = true;

                    flag360 = 0;
                }
            }

        }
        // 360
        if (data[i].Fix2 == 0) {
            // 机械手上夹爪隐藏
            for (i = 45; i <= 48; i++) {
                scene.meshes[i].isVisible = false;
            }
            // 平台上夹具显示
            for (i = 92; i <= 96; i++) {
                scene.meshes[i].isVisible = true;
            }
        }
        // 170
        if (data[i].Fix4 == 1) {
            // 机械手上夹爪显示
            for (i = 19; i <= 23; i++) {
                scene.meshes[i].isVisible = true;
            }
            // 平台上夹具隐藏
            for (i = 69; i <= 79; i++) {
                scene.meshes[i].isVisible = false;
            }
            // 扩张段夹取
            if (data[i].FixClose == 1) {
                // 夹爪上扩张段显示
                scene.meshes[24].isVisible = true;
                // 平台上扩展段消失
                scene.meshes[74].isVisible = false;
            }
            // 扩展段放下
            if (data[i].FixOpen == 1) {
                // 夹爪上扩张段隐藏
                scene.meshes[24].isVisible = false;
                // 安装平台上扩张段显示
                scene.meshes[84].isVisible = true;
                flag360 = 3;
            }
        }
        // 170
        if (data[i].Fix4 == 0) {
            // 机械手上夹爪隐藏
            for (i = 19; i <= 23; i++) {
                scene.meshes[i].isVisible = false;
            }
            // 平台上夹具显示
            for (i = 69; i <= 79; i++) {
                scene.meshes[i].isVisible = true;
            }
        }
        // 开口夹爪
        if (data[i].Fix6 == 1) {
            // 机械手上夹爪显示
            for (i = 25; i <= 28; i++) {
                scene.meshes[i].isVisible = true;
            }
            // 平台上夹具隐藏
            for (i = 103; i <= 106; i++) {
                scene.meshes[i].isVisible = false;;
            }
            // 装配体1夹取
            if (data[i].FixClose == 1) {
                // 夹爪上装配体1显示
                scene.meshes[29].isVisible = true;
                scene.meshes[30].isVisible = true;
                // 安装台2位置隐藏
                scene.meshes[115].isVisible = false;
                scene.meshes[116].isVisible = false;
            }
            // 放下
            if (data[i].FixOpen == 1) {
                // 夹爪上装配体1隐藏
                scene.meshes[29].isVisible = false;
                scene.meshes[30].isVisible = false;
                // 安装平台上显示
                scene.meshes[111].isVisible = true;
                scene.meshes[112].isVisible = true;
            }

        }
        // 开口夹爪
        if (data[i].Fix6 == 0) {
            // 机械手上夹爪隐藏
            for (i = 25; i <= 28; i++) {
                scene.meshes[i].isVisible = false;
            }
            // 平台上夹具显示
            for (i = 103; i <= 106; i++) {
                scene.meshes[i].isVisible = true;
            }
        }
        // 322
        if (data[i].Fix3 == 1) {
            // 机械手上夹爪显示
            for (i = 37; i <= 41; i++) {
                scene.meshes[i].isVisible = true;
            }
            // 平台上夹爪隐藏
            for (i = 77; i <= 81; i++) {
                scene.meshes[i].isVisible = false;
            }
            // 夹取接头防热环
            if (data[i].FixClose == 1) {
                // 夹爪上接头防热环显示
                scene.meshes[42].isVisible = true;
                // 桌面上接头防热环隐藏
                scene.meshes[82].isVisible = true;
            }
            if (data[i].FixOpen == 1) {
                // 夹爪上接头防热环隐藏
                scene.meshes[42].isVisible = false;
                // 安装平台上接头放热环显示
                scene.meshes[83].isVisible = true;
            }
        }
        // 322
        if (data[i].Fix3 == 0) {
            // 机械手上夹爪隐藏
            for (i = 37; i <= 41; i++) {
                scene.meshes[i].isVisible = false;
            }
            // 平台上夹爪显示
            for (i = 77; i <= 81; i++) {
                scene.meshes[i].isVisible = true;
            }
        }

        // 156
        if (data[i].Fix5 == 1) {
            // 机械手上夹爪显示
            for (i = 13; i <= 17; i++) {
                scene.meshes[i].isVisible = true;
            }
            // 平台上夹爪隐藏
            for (i = 98; i <= 102; i++) {
                scene.meshes[i].isVisible = false;
            }
            // HC
            if (data[i].FixClose == 1) {
                // 夹爪上HC显示
                scene.meshes[18].isVisible = true;
                // 平台上HC隐藏
                scene.meshes[75].isVisible = false;
            }
            if (data[i].FixOpen == 1) {
                // 夹爪上 HC隐藏
                scene.meshes[18].isVisible = false;
                // 安装平台上HC显示
                scene.meshes[76].isVisible = true;
                flag360 = 4;
            }

        }
        // 156
        if (data[i].Fix5 == 0) {
            // 机械手上夹爪隐藏
            for (i = 13; i <= 17; i++) {
                scene.meshes[i].isVisible = false;
            }
            // 平台上夹爪显示
            for (i = 98; i <= 102; i++) {
                scene.meshes[i].isVisible = true;
            }
        }
        if (i < Object.keys(data).length) {
            i++;
        } else {
            clearInterval(timer7);
        }
    })
}


// $("#view1").click(function () {
//     if (isPause) {
//         isPause = false;
//         timer6 = setInterval(TestPos1, 10);
//     } else {
//         isPause = true;
//         clearInterval(timer6);
//     }
// })
// $("#view2").click(function () {
//     myCamera.target = new BABYLON.Vector3(-20, -8, 0);
//     myCamera.alpha = 0 * Math.PI / 4;
//     myCamera.beta = 1.1 * Math.PI / 3;
//     myCamera.radius = 30;
// })
// $("#hide").click(function () {
//     myCamera.target = new BABYLON.Vector3(-1, -8, 17);
//     myCamera.alpha = -2 * Math.PI / 4;
//     myCamera.beta = 1.1 * Math.PI / 3;
//     myCamera.radius = 30;
// })
$("#hide1").click(function () {
    i = 0;
    timer7 = setInterval(test, 10);
})
// $("#visible").click(function () {
//     testflag = 0;
//     timer7 = setInterval(TestPos, 10);

// })
// $("#visible1").click(function () {
//     testflag = 0;
//     timer6 = setInterval(TestPos1, 10);
// })