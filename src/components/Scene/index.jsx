import { useEffect } from "react";
import * as THREE from 'three'//启用轨道控制
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
// import gsap from 'gsap'

// console.log(gsap);
console.log(OrbitControls);

export default function Scene(){


  //相当于componentDidMount钩子
  useEffect(() => {

    console.log('已经成功加载3D组件');

    //！！在这里编写我们的three.js代码

    //光标
    //创建一个常量来存储
    const cursor = {
      x: 0,
      y: 0
    }
    window.addEventListener('mousemove', (event) => {
      cursor.x = event.clientX / sizes.width - 0.5
      cursor.y = -(event.clientY / sizes.height - 0.5)

    })

    //场景
    const scene = new THREE.Scene()

    //红色立方体
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({color: 'red'})
    const mesh = new THREE.Mesh(geometry, material)
    //添加立方体到场景
    scene.add(mesh)

    //尺寸
    const sizes = {
      width: 800,
      height: 600
    }
    //在原点建立坐标轴，往里面传的参数是坐标轴的长度
    const axesHelper = new THREE.AxesHelper(10)
    scene.add(axesHelper)

    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
    
    // //引入横纵比来避免画面被拉伸
    // const aspectRatio = sizes.width / sizes.height
    // //正交相机 在这种投影模式下，无论物体距离相机远近，在最终渲染的图片中物体的大小都保持不变
    // const camera = new THREE.OrthographicCamera(
    //   -1 * aspectRatio,
    //   1 * aspectRatio, 
    //   1, 
    //   -1, 
    //   0.1, 
    //   100)
    camera.position.set(0, 0, 3)
    camera.lookAt(mesh.position)
    //添加相机到场景
    scene.add(camera)



    //初始化渲染器
    //将自定义变量放入一个自定义容器中
    const canvas = document.getElementById('root')
    // const canvas = document.querySelector('.root')
    console.log(canvas);

    //轨道控制器
    //传入两个参数，一个是给予控制的目标，一个是dom元素
    const controls = new OrbitControls(camera, canvas)
    //更改默认目标
    // controls.target.y = 2
    //增加阻尼感
    controls.enableDamping = true
    //更新控制器
    controls.update()

    const renderer = new THREE.WebGLRenderer({
      //渲染画布
      canvas: canvas,
      //抗锯齿开关
      antialias: true
    });
    //调整渲染器的大小
    renderer.setSize(sizes.width, sizes.height)
    //使用该渲染器
    // renderer.render(scene, camera)
    // document.body.appendChild(renderer.domElement) 
    
    // //1: 时间校正帧率
    // let time = Date.now()
    //2: 时钟校正帧率
    //总是从0开始
    const clock = new THREE.Clock()

    // //提供两个参数 一个是我们正在动画的对象 第二个是一个指定目的地对象
    // gsap.to(mesh.position, {
    //   //动画持续时间
    //   duration: 1,
    //   //指定位置
    //   x: 2,
    //    y: 2,
    //   //等待时间（延时）
    //   delay:1
    // })
    // //回归原位
    // gsap.to(mesh.position, {
    //   //动画持续时间
    //   duration: 3,
    //   //指定位置
    //   x: 0,
    //   y: 0,
    //   //等待时间（延时）
    //   delay:2
    // })
    const animate = () => {

      //更新相机
      // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
      // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
      // camera.position.y = cursor.y * 5
      // camera.lookAt(mesh.position)

      // console.log('tik');

      // //1: 时间校正帧率
      // const currentTime = Date.now()
      // //个人理解原理：将现在的时间分别存入一个常量和变量中，常量的时间不会变（定格），而变量中
      // //的时间随时都在变化，两个相减则会得到间隔相同的时间长度，从而统一帧率
      // //现在的时间戳减去上一个时间戳
      // const deltaTime = currentTime - time
      // //更新时间
      // time = currentTime
      // console.log(deltaTime);
      // //相对恒定速度
      // mesh.rotation.y += 0.001 * deltaTime

      //2: 时钟校正帧率
      const elapsedTime = clock.getElapsedTime()
      // console.log(elapsedTime);
      // mesh.rotation.y = elapsedTime
      //可以发现这个时间是匀速增加，则不需要+=来校正
      // camera.position.y = Math.sin(elapsedTime)
      // camera.position.x = Math.cos(elapsedTime)
      // camera.lookAt(mesh.position)
  
      renderer.render(scene, camera)
      window.requestAnimationFrame(animate)
    }
    animate()
    

  }, [])



  return(
    <div>
        {/* 画布容器 */}
      <canvas id="root"/>
      {/* <Test/> */}
    </div>
  )
}