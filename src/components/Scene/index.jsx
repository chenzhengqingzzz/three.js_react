import { useEffect } from "react";
import * as THREE from 'three'


export default function Scene(){


  //相当于componentDidMount钩子
  useEffect(() => {

    console.log('已经成功加载3D组件');

    //！！在这里编写我们的three.js代码

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

    //相机
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
    camera.position.z = 3
    //添加相机到场景
    scene.add(camera)

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
    // renderer.render(scene, camera)
    // document.body.appendChild(renderer.domElement) 
    
    // //1: 时间校正帧率
    // let time = Date.now()
    //2: 时钟校正帧率
    //总是从0开始
    const clock = new THREE.Clock()

    const animate = () => {
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
      console.log(elapsedTime);
      //可以发现这个时间是匀速增加，则不需要+=来校正
      mesh.position.y = Math.sin(elapsedTime)
      mesh.position.x = Math.cos(elapsedTime)
  
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