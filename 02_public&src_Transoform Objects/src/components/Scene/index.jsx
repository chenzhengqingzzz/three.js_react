import { useEffect } from "react";
import * as THREE from 'three'
import { Group } from "three";
import Test from "../Test";

export default function Scene(){
  //相当于componentDidMount钩子
  useEffect(() => {

    console.log('已经成功加载3D组件');

    //！！在这里编写我们的three.js代码

    //场景
    const scene = new THREE.Scene()

    //建立一个组的概念
    const group = new THREE.Group()
    scene.add(group)

    //第一个立方体
    const cube1 = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({color: 'BLUE'})
    )
    
    //第二个立方体
    const cube2  = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({color: 'GREEN'})
    )
    cube2.position.x = -2
    
    //第三个立方体
    const cube3 = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({color: 'red'})
    )
    cube1.position.x = 2
    group.add(cube1, cube2, cube3)
    group.position.y = 1
    group.rotation.y = 1
    group.scale.y = 2

    //在原点建立坐标轴，往里面传的参数是坐标轴的长度
    const axesHelper = new THREE.AxesHelper(10)
    scene.add(axesHelper)

    //计算原点到立方体中心这个点的矢量长度
    // console.log('原点到立方体中心这个点的矢量长度:', mesh.position.length());

    //尺寸
    const sizes = {
        width: 500,
        height: 300,
    }

    //相机
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
    camera.position.z = 3
    camera.position.y = 1
    camera.position.x = 1

    //设置摄像机看向某个点
    // camera.lookAt(mesh.position)

    //添加相机到场景
    scene.add(camera)

    //计算立方体中心到摄像机的距离
    // console.log('立方体中心到摄像机的距离:', mesh.position.distanceTo(camera.position))

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
