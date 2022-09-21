import { useEffect } from "react";
import * as THREE from 'three'

function App(){
  //相当于componentDidMount钩子
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 96;

    //初始化渲染器
    //将自定义变量放入一个自定义容器中
    const canvas = document.getElementById('myTheeJsCanvas')
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    //环境光
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    ambientLight.castShadow = true
    scene.add(ambientLight)



    //聚光灯 
    const spotLight = new THREE.SpotLight(0xfffffff, 1)
    spotLight.castShadow = true
    spotLight.position.set(0, 64, 32)
    scene.add(spotLight)

    //动画处理
    const animate = () => {
      renderer.render(scene, camera)
      //一旦我们完成，它就会在每一帧运行这个函数并且
      window.requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return(
    <div>
      <canvas id="myTheeJsCanvas"/>
    </div>
  )
}

export default App;

// import React from 'react';
// import * as Three from "three";


// export default class App extends React.Component {

//   camera = null
//   scene = null
//   renderer = null
//   mesh = null


//   render() {
//     return (
//       <div>

//         <div id="container" style={{height:"600px"}}></div>
//       </div>

//     )
//   }


//   init = () => {
//     //#region 初始化相机，场景相关
//     let container = document.getElementById("container");
//     this.scene = new Three.Scene();

//     this.camera = new Three.PerspectiveCamera(
//       45,
//       container.clientWidth / container.clientHeight,
//       0.01,
//       1000
//     );
//     this.renderer = new Three.WebGLRenderer({ antialias: true });
//     //#endregion

//     this.renderer.setClearColor(new Three.Color(0x000000));
//     this.renderer.setSize(container.clientWidth, container.clientHeight);

//     let axes = new Three.AxesHelper(20);
//     this.scene.add(axes);
//     const planeGeometry = new Three.PlaneGeometry(60, 20);
//     const planMaterial = new Three.MeshBasicMaterial({
//       color: 0x000000
//     });
//     let plan = new Three.Mesh(planeGeometry, planMaterial);
//     plan.rotation.x = -0.5 * Math.PI;
//     plan.position.set(15, 0, 0);
//     this.scene.add(plan);

//     //#region 增加一个cube 相机
//     const cubeGeometry = new Three.BoxGeometry(4, 4, 4);
//     let cubeMaterial = new Three.MeshBasicMaterial({
//       color: 0xff0000,
//       wireframe: true
//     });

//     let cube = new Three.Mesh(cubeGeometry, cubeMaterial);
//     cube.position.set(-4, 3, 0);
//     this.scene.add(cube);
//     //#endregion

//     //#region  add  a sphere  增加一个几何体
//     let sphereGeometry = new Three.SphereGeometry(4, 20, 20);
//     let sphereMaterial = new Three.MeshBasicMaterial({
//       color: 0x777ff,
//       wireframe: true
//     });
//     let sphere = new Three.Mesh(sphereGeometry, sphereMaterial);
//     // position the sphere
//     sphere.position.set(20, 4, 2);
//     //add the sphere to the scene
//     this.scene.add(sphere);
//     // position and point the camera to the center of the scene
//     this.camera.position.set(-30, 40, 30);
//     this.camera.lookAt(this.scene.position);
//     //#endregion

//     // this.camera.position.z = 0.6;
//     // let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
//     // let material = new Three.MeshNormalMaterial();
//     // this.mesh = new Three.Mesh(geometry, material);
//     // this.scene.add(this.mesh);

//     container.appendChild(this.renderer.domElement);
//   }
//   animate = () => {
//     requestAnimationFrame(this.animate);
//     // this.mesh.rotation.x += 0.01;
//     // this.mesh.rotation.y += 0.02;
//     this.renderer.render(this.scene, this.camera);
//   }



//   componentDidMount() {
//     this.init();
//     this.animate();
//   }
// }

