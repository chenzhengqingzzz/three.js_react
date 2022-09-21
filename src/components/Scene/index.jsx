// import * as THREE from 'three'
// import React from 'react'

 
// export default function Scene() {

    
//     //新建一个场景
//     const scene = new THREE.Scene()

//     //新建一个红色立方体
//     const geometry = new THREE.BoxGeometry(1, 1, 1)
//     const material = new THREE.MeshBasicMaterial({color: 'red'});
//     const mesh = new THREE.Mesh(geometry, material)
//     scene.add(mesh)

//     //摄像机
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight)
//     scene.add(camera)

//     //从dom中获取元素
//     const canvas = document.querySelector('.webgl')
//     console.log(canvas);
//     //渲染器
//     const renderer = new THREE.WebGLRenderer({
//       canvas:  canvas,
//     })
//   return (
//     <canvas className='webgl'></canvas>
//   )
// }