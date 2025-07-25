import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({alpha: true})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
// document.getElementById('container3D').appendChild(renderer.domElement)
camera.position.setZ(10)

window.camera = camera; // Expose camera for debugging

const topLight = new THREE.DirectionalLight(0xffffff)
topLight.position.set(500, 500, 500)
scene.add(topLight)

// Optional: Add ambient light for better visibility
const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(ambientLight)

const lightHelper = new THREE.PointLightHelper(topLight)
// const gridHelper = new THREE.GridHelper(200, 50)
scene.add(lightHelper)

// const controls = new OrbitControls(camera, renderer.domElement)
// controls.enableDamping = true

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
const loader = new GLTFLoader()

let cookie = null; // Initialize cookie as null
loader.load('/src/assets/cookie.glb', (gltf) => {
    cookie = gltf.scene; // Assign the loaded scene to cookie
    cookie.position.set(0, -5, 0); // Set the position of the cookie
    cookie.scale.set(2, 2, 2); // Scale the cookie down
    cookie.rotation.set(Math.PI / 2, 0, 0); // Rotate the cookie to face the camera
    scene.add(cookie);   // Add the cookie to the scene
});

function animate() {
    requestAnimationFrame(animate);

    if (cookie) { // Check if cookie is loaded before applying rotations
        // cookie.rotation.x += 0.01;
        // cookie.rotation.y += 0.01;
        // cookie.rotation.z += 0.01;
    }

    // controls.update();

    renderer.render(scene, camera);
}

animate();