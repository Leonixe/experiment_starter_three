import * as THREE from 'three'
import { TweenLite, TweenMax } from 'gsap';
import * as dat from 'dat.gui'

/**
* Build basic scene
*/

const OrbitControls = require('three-orbit-controls')(THREE)
export default class Scene {
    constructor(width, height) {
        document.body.addEventListener('touchmove', function (e) {
            e.preventDefault()
        })
        this.scene = new THREE.Scene()
        this.renderer = new THREE.WebGLRenderer({ antialias: true })
        this.renderer.setClearColor(0x050c17, 1);

        // CAMERA
        this.camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 1000)
        this.camera.position.set(0, 0, 40)
        this.camera.lookAt(new THREE.Vector3())

        document.getElementById('threeJSContainer').appendChild(this.renderer.domElement)
        this.canvas = document.getElementById('threeJSContainer').children[0]
        this.ctx = this.canvas.getContext('2d')
        this.onWindowResize = this.onWindowResize.bind(this)
        window.addEventListener('resize', this.onWindowResize, false)

        this.onWindowResize()
    }

    add(element) {
        this.scene.add(element)
    }

    remove(element) {
        this.scene.remove(element)
    }

    onWindowResize() {
        const screenWidth = document.getElementById('threeJSContainer').offsetWidth
        const screenHeight = document.getElementById('threeJSContainer').offsetHeight

        this.camera.aspect = screenWidth / screenHeight
        this.camera.updateProjectionMatrix()

        this.renderer.setSize(screenWidth, screenHeight)
    }

    render(delta) {
        this.renderer.render(this.scene, this.camera)
    }

}