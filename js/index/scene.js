var canvas = document.getElementById("renderCanvas");
// 2.加载Babylon 3D引擎
var engine = new BABYLON.Engine(canvas, true);
var myCamera;

var createScene = function () {
    // 3.创建Scene对象
    var scene = new BABYLON.Scene(engine);
    // 4.创建相机对象，此处选择旋转相机
    var camera = new BABYLON.ArcRotateCamera("Camera", -2 * Math.PI / 4, 1.1 * Math.PI / 3, 30, new BABYLON.Vector3(-1, -8, 17), scene);
    // var camera = new BABYLON.ArcRotateCamera("Camera", -2 * Math.PI / 4, 0 * Math.PI / 3, 30, new BABYLON.Vector3(0,-23, 0), scene); // 俯视
    // 激活相机
    camera.attachControl(canvas, false);

    // 5.创建light对象
    // 环境光
    var light1 = new BABYLON.HemisphericLight('HemisphericLight', new BABYLON.Vector3(0, 5, -5), scene);
    // 方向光
    const light2 = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(-1, -0.5, -1), scene);
    // 点光
    var light3 = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(0, -0.5, 0), scene);
    // 聚光
    var light4 = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(0, 2, 2), new BABYLON.Vector3(0, -1, 0), Math.PI / 2, 5, scene);

    light1.intensity = 1.5;
    light2.intensity = 2;
    light3.intensity = 1;
    light4.intensity = 2;

    // 6.加载模型，此处会返回网格
    BABYLON.SceneLoader.ImportMesh("", "models/", "v5-8.gltf", scene, function (meshes) {
        for (let i = 0; i < meshes.length; i++) {
            console.log("meshes" + [i] + "的名字:" + scene.meshes[i].id);
        }
        // for (let i = 13; i <= 57; i++) {
        //     scene.meshes[i].isVisible = false;
        // }
        // scene.meshes[86].isVisible = false;
        // // scene.meshes[1].isVisible = false;
        // // scene.meshes[2].isVisible = false;
        // // scene.meshes[4].isVisible = false;
        // // scene.meshes[5].isVisible = false;
        // // scene.meshes[118].isVisible = false;
        // // scene.meshes[119].isVisible = false;
        // for (let i = 93; i <= 101; i++) {
        //     scene.meshes[i].isVisible = false;
        // }
        // for (let i = 121; i <= 126; i++) {
        //     scene.meshes[i].isVisible = false;
        // }
        scene.registerBeforeRender(function () {
            DefMeshState();
        });
    });

    return scene;
}
var scene = createScene();

// 循环渲染
engine.runRenderLoop(function () {
    scene.render();
});

// Resize
window.addEventListener("resize", function () {
    engine.resize();
});

// // 拓展功能
// // 改变场景背景颜色
scene.clearColor = new BABYLON.Color4(0, 0.08, 0.2, 0.6);
// 禁止镜头缩放
myCamera = scene.cameras[0];
myCamera.inertia = 0.5;
myCamera.minZ = 0.1;
// myCamera.lowerRadiusLimit = 30;
// myCamera.upperRadiusLimit = 35;
// // 禁止镜头移动
// scene.activeCamera.panningSensibility = 0;