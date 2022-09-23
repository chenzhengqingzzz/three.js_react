import React, { useEffect } from 'react'
import * as THREE from 'three'
// import TWEEN from 'tween'
//启用轨道控制
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'


export default function TestScene() {
    useEffect(() => {
        //场景
        var scene = new THREE.Scene()

        //红色立方体
        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({color: 'red'})
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        //摄像机
        var camera = new THREE.PerspectiveCamera(45, window.innerWidth, window.innerHeight, 0.1, 10000)
        //摄像机对准场景中心
        camera.position.z = 500
        camera.position.y = 100
        camera.lookAt(scene.position)
        //启用摄像机轨道控制
        // var orbit = new THREE.OrbitControls(camera)

        // 将呈现器的输出添加到HTML元素
        const canvas = document.getElementById('root')

        console.log(canvas);

        //创建渲染器并且设置大小
        var renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            //抗锯齿
            antialias: true,
            //多重缓冲
            logarithmicDepthBuffer: true
        })
        renderer.setClearColor(new THREE.Color("#0e0934"));
		renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera)

        //环境光
        var ambientLight = new THREE.AmbientLight("#ffffff", 1)
        scene.add(ambientLight)

        //在屏幕显示坐标轴
        var axes = new THREE.AxesHelper(500)
        scene.add(axes)


        
        
    })
    
  return (
    <div>
        {/* 画布容器 */}
        <canvas id="root"/>
    </div>
  )
}
