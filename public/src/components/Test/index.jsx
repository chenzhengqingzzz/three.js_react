import { useEffect } from "react";
import * as THREE from 'three'

export default function Test(){
  //相当于componentDidMount钩子
  useEffect(() => {

    console.log('已经成功加载3D组件');

    //！！在这里编写我们的three.js代码

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
    const canvas = document.getElementById('root')
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

    
    //添加物体

    //创建大小为16 * 16 * 16的几何图形
    const boxGeometry = new THREE.BoxGeometry(16, 16, 16)
    //网络法线材质
    const boxMaterial = new THREE.MeshNormalMaterial()
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial)
    scene.add(boxMesh)

    //动画处理
    const animate = () => {
      //给上面添加的物体做几何变换
      boxMesh.rotation.x += 0.01;
      boxMesh.rotation.y += 0.01;
      renderer.render(scene, camera)
      //一旦我们完成，它就会在每一帧运行这个函数并且
      window.requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return(
    <div>
        {/* 画布容器 */}
      {/* <canvas id="root"/> */}
    </div>
  )
}