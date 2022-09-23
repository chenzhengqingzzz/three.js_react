import { useEffect } from "react";
import * as THREE from 'three'
import TWEEN from "tween";
import Test from "../Test";

export default function Scene(){
  //相当于componentDidMount钩子
  useEffect(() => {

    console.log('已经成功加载3D组件');

    //！！在这里编写我们的three.js代码

    //场景
    const scene = new THREE.Scene()

    //红色立方体
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({color: 'blue'})
    const mesh = new THREE.Mesh(geometry, material)
    //添加立方体到场景
    scene.add(mesh)

    //尺寸
    const sizes = {
        width: 800,
        height: 600
    }

    //相机
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
    camera.position.z = 3
    //添加相机到场景
    scene.add(camera)
    var tween = new TWEEN.Tween(camera.position)
    tween.to({y: 100}, 1000)
    tween.start()
    console.log(camera.position.y);


    //初始化渲染器
    //将自定义变量放入一个自定义容器中
    const canvas = document.getElementById('root')
    // const canvas = document.querySelector('.root')
    console.log(canvas);
    const renderer = new THREE.WebGLRenderer({
      //渲染画布
      canvas: canvas,
      //抗锯齿开关
      antialias: true
    });
    //调整渲染器的大小
    renderer.setSize(sizes.width, sizes.height)
    //使用该渲染器
    renderer.render(scene, camera)
    // document.body.appendChild(renderer.domElement)

    

  }, [])

  return(
    <div>
        {/* 画布容器 */}
      <canvas id="root"/>
      {/* <Test/> */}
    </div>
  )
}