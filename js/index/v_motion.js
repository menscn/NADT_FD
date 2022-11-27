// var temp_joint3 = 0;
// var length = 1880;
// var iFlag = 400;
// var stopTimerFlag = false;
// var testflag = 0;
// var isPause = false;

// function DefMeshState() {
//     R_S_joint1 = scene.meshes[62]; // 沿Y轴旋转
//     R_S_joint2 = scene.meshes[63]; // 沿Z轴旋转
//     R_S_joint3 = scene.meshes[64];// 沿Z轴旋转
//     R_S_joint4 = scene.meshes[65]; // 沿Z轴旋转
//     robot_b_joint1 = scene.meshes[6];
//     robot_b_joint2 = scene.meshes[7];
//     robot_b_joint3 = scene.meshes[8];
//     robot_b_joint4 = scene.meshes[9]
//     robot_b_joint5 = scene.meshes[11];
//     robot_b_joint6 = scene.meshes[12];
//     // scene.meshes[123].isVisible = true;
//     // scene.meshes[124].isVisible = true;
//     // scene.meshes[94].isVisible = true;
//     // scene.meshes[95].isVisible = true;
//     // scene.meshes[121].isVisible = true;
//     // scene.meshes[122].isVisible = true;
//     // scene.meshes[25].isVisible = true;
//     // scene.meshes[26].isVisible = true;
//     // scene.meshes[27].isVisible = true;
//     // scene.meshes[28].isVisible = true;
//     // scene.meshes[29].isVisible = true;
//     // scene.meshes[30].isVisible = true;
// }
// function TestPos() {
//     DefMeshState()
//     $.getJSON("../../json/scan.json", function (data) {
//         if (data[testflag].flag == "f2") {
//             // 机械手218夹具显示
//             scene.meshes[31].isVisible = true;
//             scene.meshes[32].isVisible = true;
//             scene.meshes[33].isVisible = true;
//             scene.meshes[34].isVisible = true;
//             scene.meshes[35].isVisible = true;
//             // 桌面夹具218隐藏
//             scene.meshes[73].isVisible = false;
//             scene.meshes[74].isVisible = false;
//             scene.meshes[75].isVisible = false;
//             scene.meshes[76].isVisible = false;
//             scene.meshes[77].isVisible = false;
//         }
//         if (data[testflag].flag == "f3") {
//             // 2-》机械手夹具218上柔性接头显示
//             scene.meshes[36].isVisible = true;
//             // 柔性接头桌面上隐藏
//             scene.meshes[120].isVisible = false;
//         }
//         if (data[testflag].flag == "f4") {
//             // 机械手夹具218上柔性接头隐藏
//             scene.meshes[36].isVisible = false;
//             // 柔性接头桌面上显示
//             scene.meshes[120].isVisible = true;
//         }
//         if (data[testflag].flag == "f5") {
//             // 机械手上夹具218隐藏
//             scene.meshes[31].isVisible = false;
//             scene.meshes[32].isVisible = false;
//             scene.meshes[33].isVisible = false;
//             scene.meshes[34].isVisible = false;
//             scene.meshes[35].isVisible = false;
//             // 桌面上夹具218出现
//             scene.meshes[73].isVisible = true;
//             scene.meshes[74].isVisible = true;
//             scene.meshes[75].isVisible = true;
//             scene.meshes[76].isVisible = true;
//             scene.meshes[77].isVisible = true;
//         }
//         if (data[testflag].flag == "f6") {
//             // 桌面上夹具360隐藏
//             scene.meshes[102].isVisible = false;
//             scene.meshes[103].isVisible = false;
//             scene.meshes[104].isVisible = false;
//             scene.meshes[105].isVisible = false;
//             scene.meshes[106].isVisible = false;
//             // 机械手上夹具360显示
//             scene.meshes[43].isVisible = true;
//             scene.meshes[45].isVisible = true;
//             scene.meshes[46].isVisible = true;
//             scene.meshes[47].isVisible = true;
//             scene.meshes[48].isVisible = true;
//         }
//         if (data[testflag].flag == "f7") {
//             // 桌面上固定体隐藏
//             scene.meshes[78].isVisible = false;
//             // 夹具360上固定体显示
//             scene.meshes[49].isVisible = true;
//         }
//         if (data[testflag].flag == "f8") {
//             // 桌面上固定体显示
//             scene.meshes[78].isVisible = true;
//             // 夹具360上固定体隐藏
//             scene.meshes[49].isVisible = false;
//         }
//         if (data[testflag].flag == "f9") {
//             // 桌面上固定体隐藏
//             scene.meshes[78].isVisible = false;
//             // 夹具360上固定体显示
//             scene.meshes[49].isVisible = true;
//         }
//         if (data[testflag].flag == "f10") {
//             // 桌面上夹具360显示
//             scene.meshes[102].isVisible = true;
//             scene.meshes[103].isVisible = true;
//             scene.meshes[104].isVisible = true;
//             scene.meshes[105].isVisible = true;
//             scene.meshes[106].isVisible = true;
//             // 机械手上夹具360隐藏
//             scene.meshes[43].isVisible = false;
//             scene.meshes[45].isVisible = false;
//             scene.meshes[46].isVisible = false;
//             scene.meshes[47].isVisible = false;
//             scene.meshes[48].isVisible = false;
//         }
//         if (data[testflag].flag == "f11") {
//             // 桌面上170消失,机械手上170显示

//         }
//         if (data[testflag].flag == "f12") {
//             // 桌面上kzd消失,机械手上kzd显示

//         }
//         if (data[testflag].flag == "f13") {
//             // 桌面上kzd显示,机械手上kzd消失

//         }
//         if (data[testflag].flag == "f14") {
//             // 桌面上170显示,机械手上170消失

//         }
//         if (data[testflag].flag == "f15") {
//             // 桌面上夹具360隐藏
//             scene.meshes[102].isVisible = false;
//             scene.meshes[103].isVisible = false;
//             scene.meshes[104].isVisible = false;
//             scene.meshes[105].isVisible = false;
//             scene.meshes[106].isVisible = false;
//             // 机械手上夹具360显示
//             scene.meshes[43].isVisible = true;
//             scene.meshes[45].isVisible = true;
//             scene.meshes[46].isVisible = true;
//             scene.meshes[47].isVisible = true;
//             scene.meshes[48].isVisible = true;
//         }
//         if (data[testflag].flag == "f16") {
//             // 桌面上bhgd消失,机械手上bhgd显示

//         }
//         if (data[testflag].flag == "f17") {
//             // 桌面上bhgd显示,机械手上bhgd隐藏

//         }
//         if (data[testflag].flag == "f18") {
//             // 桌面上360显示,机械手上360隐藏
//         }
//         if (data[testflag].flag == "f19") {
//             // 桌面上322隐藏,机械手上322显示
//         }
//         if (data[testflag].flag == "f20") {
//             // jtfrh机器人出现与隐藏
//         }
//         if (data[testflag].flag == "f21") {
//             // jtfrh桌面出现与机器人隐藏
//         }
//         if (data[testflag].flag == "f22") {
//             // 322桌面出现与机器人隐藏
//         }
//         if (data[testflag].flag == "f23") {
//             // 156桌面隐藏与机器人显示
//         }
//         if (data[testflag].flag == "f24") {
//             // hc桌面隐藏与机器人出现
//         }
//         if (data[testflag].flag == "f25") {
//             // hc桌面隐藏与机器人出现
//         }
//         if (data[testflag].flag == "f26") {
//             // hc桌面出现与机器人隐藏
//         }
//         if (testflag < Object.keys(data).length) {
//             robot_b_joint1.rotation = new BABYLON.Vector3(0, data[testflag].bJoint1 * Math.PI / 180, 0);
//             robot_b_joint2.rotation = new BABYLON.Vector3(0, 0, data[testflag].bJoint2 * Math.PI / 180);
//             robot_b_joint3.rotation = new BABYLON.Vector3(0, 0, data[testflag].bJoint3 * Math.PI / 180);
//             robot_b_joint4.rotation = new BABYLON.Vector3(data[testflag].bJoint4 * Math.PI / 180, 0, 0);
//             robot_b_joint5.rotation = new BABYLON.Vector3(0, 0, data[testflag].bJoint5 * Math.PI / 180);
//             robot_b_joint6.rotation = new BABYLON.Vector3(data[testflag].bJoint6 * Math.PI / 180, 0, 0);
//             testflag++;
//         } else {
//             clearInterval(timer7);
//         }
//     })
// }
// function TestPos1() {

//     DefMeshState()
//     $.getJSON("../../json/complete.json", function (data) {
//         if (data[testflag].flag == 1) {
//             // 1-》机械手218夹具显示，桌面夹具218隐藏
//             // 机械手218夹具显示
//             scene.meshes[31].isVisible = true;
//             scene.meshes[32].isVisible = true;
//             scene.meshes[33].isVisible = true;
//             scene.meshes[34].isVisible = true;
//             scene.meshes[35].isVisible = true;
//             // 桌面夹具218隐藏
//             scene.meshes[73].isVisible = false;
//             scene.meshes[74].isVisible = false;
//             scene.meshes[75].isVisible = false;
//             scene.meshes[76].isVisible = false;
//             scene.meshes[77].isVisible = false;

//         }
//         if (data[testflag].flag == 2) {
//             // 2-》机械手夹具218上柔性接头显示，桌面上隐藏
//             // 2-》机械手夹具218上柔性接头显示
//             scene.meshes[36].isVisible = true;
//             // 柔性接头桌面上隐藏
//             scene.meshes[120].isVisible = false;

//         }
//         if (data[testflag].flag == 22) {
//             // 22-》 3号安装位置柔心接头出现，夹具上柔性接头隐藏
//             // 3号安装位置柔心接头出现
//             scene.meshes[123].isVisible = true;
//             // 夹具上柔性接头隐藏
//             scene.meshes[36].isVisible = false;
//         }
//         if (data[testflag].flag == 3) {
//             // 3-》 机械手上夹具218隐藏，桌面上夹具218出现
//             // 机械手上夹具218隐藏
//             scene.meshes[31].isVisible = false;
//             scene.meshes[32].isVisible = false;
//             scene.meshes[33].isVisible = false;
//             scene.meshes[34].isVisible = false;
//             scene.meshes[35].isVisible = false;
//             // 桌面上夹具218出现
//             scene.meshes[73].isVisible = true;
//             scene.meshes[74].isVisible = true;
//             scene.meshes[75].isVisible = true;
//             scene.meshes[76].isVisible = true;
//             scene.meshes[77].isVisible = true;
//         }
//         if (data[testflag].flag == 4) {
//             // 4-》 机械手上夹具360显示，桌面上夹具360隐藏
//             // 桌面上夹具360隐藏
//             scene.meshes[102].isVisible = false;
//             scene.meshes[103].isVisible = false;
//             scene.meshes[104].isVisible = false;
//             scene.meshes[105].isVisible = false;
//             scene.meshes[106].isVisible = false;
//             // 机械手上夹具360显示
//             scene.meshes[43].isVisible = true;
//             scene.meshes[45].isVisible = true;
//             scene.meshes[46].isVisible = true;
//             scene.meshes[47].isVisible = true;
//             scene.meshes[48].isVisible = true;
//         }
//         if (data[testflag].flag == 5) {
//             // 5-》桌面上固定体隐藏，夹具360上固定体显示
//             // 桌面上固定体隐藏
//             scene.meshes[78].isVisible = false;
//             // 夹具360上固定体显示
//             scene.meshes[49].isVisible = true;
//         }
//         if (data[testflag].flag == 6) {
//             // 6-》三号装配工位固定体显示，机械手夹具360中的固定体隐藏
//             // 机械手夹具360中的固定体隐藏
//             scene.meshes[49].isVisible = false;
//             // 三号装配工位固定体显示
//             scene.meshes[124].isVisible = true;
//         }
//         if (data[testflag].flag == 7) {
//             // 7-》三号工位上柔性接头固定体隐藏，机械手夹具360上柔性体-固定体临时组合显示
//             // 三号工位上柔性接头固定体隐藏
//             scene.meshes[123].isVisible = false;
//             scene.meshes[124].isVisible = false;
//             // 机械手夹具360上柔性体-固定体临时组合显示
//             scene.meshes[56].isVisible = true;
//             scene.meshes[57].isVisible = true;
//         }
//         if (data[testflag].flag == 8) {
//             // 8-》机械手夹具360上的柔性接头和固定体隐藏，五号工位上柔性接头和固定体显示
//             // 机械手夹具360上的柔性接头和固定体隐藏
//             scene.meshes[56].isVisible = false;
//             scene.meshes[57].isVisible = false;
//             // 五号工位上柔性接头和固定体显示
//             scene.meshes[125].isVisible = true;
//             scene.meshes[126].isVisible = true;
//         }
//         if (data[testflag].flag == 9) {
//             // 9-》 机械手上夹具360隐藏，桌面夹具360显示
//             // 桌面上夹具360显示
//             scene.meshes[102].isVisible = true;
//             scene.meshes[103].isVisible = true;
//             scene.meshes[104].isVisible = true;
//             scene.meshes[105].isVisible = true;
//             scene.meshes[106].isVisible = true;
//             // 机械手上夹具360隐藏
//             scene.meshes[43].isVisible = false;
//             scene.meshes[45].isVisible = false;
//             scene.meshes[46].isVisible = false;
//             scene.meshes[47].isVisible = false;
//             scene.meshes[48].isVisible = false;
//         }
//         if (data[testflag].flag == 10) {
//             // 10-》机械手上夹具170显示，桌面上170隐藏
//             // 桌面上170隐藏
//             scene.meshes[79].isVisible = false;
//             scene.meshes[80].isVisible = false;
//             scene.meshes[81].isVisible = false;
//             scene.meshes[82].isVisible = false;
//             scene.meshes[83].isVisible = false;
//             // 机械手上夹具170显示
//             scene.meshes[19].isVisible = true;
//             scene.meshes[20].isVisible = true;
//             scene.meshes[21].isVisible = true;
//             scene.meshes[22].isVisible = true;
//             scene.meshes[23].isVisible = true;
//         }
//         if (data[testflag].flag == 11) {
//             // 11-》 机械手上夹具170的扩张段显示，桌面上扩张段隐藏
//             // 桌面上扩张段隐藏
//             scene.meshes[84].isVisible = false;
//             // 机械手上夹具170的扩张段显示
//             scene.meshes[24].isVisible = true;
//         }
//         if (data[testflag].flag == 12) {
//             // 12-》 4号安装工位上扩张段显示，夹具170上扩张段隐藏
//             // 夹具170上扩张段隐藏
//             scene.meshes[24].isVisible = false;
//             // 4号安装工位上扩张段显示
//             scene.meshes[94].isVisible = true;
//         }
//         if (data[testflag].flag == 13) {
//             // 13-》机械上夹具170隐藏，桌面上170显示
//             // 桌面上170显示
//             scene.meshes[79].isVisible = true;
//             scene.meshes[80].isVisible = true;
//             scene.meshes[81].isVisible = true;
//             scene.meshes[82].isVisible = true;
//             scene.meshes[83].isVisible = true;
//             // 机械上夹具170隐藏
//             scene.meshes[19].isVisible = false;
//             scene.meshes[20].isVisible = false;
//             scene.meshes[21].isVisible = false;
//             scene.meshes[22].isVisible = false;
//             scene.meshes[23].isVisible = false;
//         }
//         if (data[testflag].flag == 14) {
//             // 14-》机械手上夹具360显示，桌面上夹具360隐藏
//             // 桌面上夹具360隐藏
//             scene.meshes[102].isVisible = false;
//             scene.meshes[103].isVisible = false;
//             scene.meshes[104].isVisible = false;
//             scene.meshes[105].isVisible = false;
//             scene.meshes[106].isVisible = false;
//             // 机械手上夹具360显示
//             scene.meshes[43].isVisible = true;
//             scene.meshes[45].isVisible = true;
//             scene.meshes[46].isVisible = true;
//             scene.meshes[47].isVisible = true;
//             scene.meshes[48].isVisible = true;
//         }
//         if (data[testflag].flag == 15) {
//             // 15-》 机械手夹具360上保护工段显示，桌面上保护工段隐藏
//             // 桌面上保护工段隐藏
//             scene.meshes[107].isVisible = false;
//             // 机械手夹具360上保护工段显示
//             scene.meshes[44].isVisible = true;
//         }
//         if (data[testflag].flag == 16) {
//             // 16-》4号安装为保护工段显示，夹具360上保护工段隐藏
//             // 夹具360上保护工段隐藏
//             scene.meshes[44].isVisible = false;
//             // 4号安装为保护工段显示
//             scene.meshes[95].isVisible = true;
//         }
//         if (data[testflag].flag == 17) {
//             // 17-》 机械手上夹具360隐藏，桌面上360夹具显示
//             // 桌面上夹具360显示
//             scene.meshes[102].isVisible = true;
//             scene.meshes[103].isVisible = true;
//             scene.meshes[104].isVisible = true;
//             scene.meshes[105].isVisible = true;
//             scene.meshes[106].isVisible = true;
//             // 机械手上夹具360隐藏
//             scene.meshes[43].isVisible = false;
//             scene.meshes[45].isVisible = false;
//             scene.meshes[46].isVisible = false;
//             scene.meshes[47].isVisible = false;
//             scene.meshes[48].isVisible = false;
//         }
//         if (data[testflag].flag == 18) {
//             // 18-》桌面上开口夹具隐藏，机器上开口夹具显示
//             // 机器上开口夹具显示
//             scene.meshes[25].isVisible = true;
//             scene.meshes[26].isVisible = true;
//             scene.meshes[27].isVisible = true;
//             scene.meshes[28].isVisible = true;
//             // 桌面上开口夹具隐藏
//             scene.meshes[113].isVisible = false;
//             scene.meshes[114].isVisible = false;
//             scene.meshes[115].isVisible = false;
//             scene.meshes[116].isVisible = false;
//         }
//         if (data[testflag].flag == 19) {
//             // 19-》 桌面5上临时组合体隐藏，机械手开口夹具组合体显示
//             // 机械手开口夹具组合体显示
//             scene.meshes[29].isVisible = true;
//             scene.meshes[30].isVisible = true;
//             // 桌面5上临时组合体隐藏
//             scene.meshes[125].isVisible = false;
//             scene.meshes[126].isVisible = false;

//         }
//         if (data[testflag].flag == 20) {
//             // 20-》开口夹具上临时组合体隐藏，4号工位上组合体显示
//             // 4号工位上组合体显示
//             scene.meshes[121].isVisible = true;
//             scene.meshes[122].isVisible = true;
//             // 开口夹具上临时组合体隐藏
//             scene.meshes[29].isVisible = false;
//             scene.meshes[30].isVisible = false;

//         }
//         if (data[testflag].flag == 21) {
//             // 21-》 机械手上开口夹具消失，桌面上开口夹具显示
//             // 机器上开口夹具隐藏
//             scene.meshes[25].isVisible = false;
//             scene.meshes[26].isVisible = false;
//             scene.meshes[27].isVisible = false;
//             scene.meshes[28].isVisible = false;
//             // 桌面上开口夹具显示
//             scene.meshes[113].isVisible = true;
//             scene.meshes[114].isVisible = true;
//             scene.meshes[115].isVisible = true;
//             scene.meshes[116].isVisible = true;

//         }
//         if (testflag < Object.keys(data).length) {
//             R_S_joint1.rotation = new BABYLON.Vector3(0, data[testflag].sJoint1, 0);
//             R_S_joint2.rotation = new BABYLON.Vector3(0, 0, data[testflag].sJoint2);
//             R_S_joint3.rotation = new BABYLON.Vector3(0, 0, data[testflag].sJoint3);
//             R_S_joint4.rotation = new BABYLON.Vector3(0, 0, data[testflag].sJoint4);
//             robot_b_joint1.rotate(BABYLON.Axis.Y, data[testflag].bJoint1 * Math.PI / 180, BABYLON.Space.LOCAL);
//             robot_b_joint2.rotate(BABYLON.Axis.Z, data[testflag].bJoint2 * Math.PI / 180, BABYLON.Space.LOCAL);
//             robot_b_joint3.rotate(BABYLON.Axis.Z, data[testflag].bJoint3 * Math.PI / 180, BABYLON.Space.LOCAL);
//             robot_b_joint4.rotate(BABYLON.Axis.X, data[testflag].bJoint4 * Math.PI / 180, BABYLON.Space.LOCAL);
//             robot_b_joint5.rotate(BABYLON.Axis.Z, -data[testflag].bJoint5 * Math.PI / 180, BABYLON.Space.LOCAL);
//             robot_b_joint6.rotate(BABYLON.Axis.Y, data[testflag].bJoint6 * Math.PI / 180, BABYLON.Space.LOCAL);
//             testflag++;
//         } else {
//             clearInterval(timer6);
//         }

//     })
// }


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
// $("#hide1").click(function () {
//     // testflag = 0;
//     // timer4 = setInterval(fourPos, 10);
// })
// $("#visible").click(function () {
//     testflag = 0;
//     timer7 = setInterval(TestPos, 10);

// })
// $("#visible1").click(function () {
//     testflag = 0;
//     timer6 = setInterval(TestPos1, 10);
// })
