import * as THREE from '../node_modules/three'
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js'

class InterfaceCube {
    constructor() {
        this.scene = new THREE.Scene()
        this.scene.background = new THREE.Color(255, 255, 255)
        
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        this.camera.position.x = 3
        this.camera.position.y = 3
        this.camera.position.z = 3

        this.renderer = new THREE.WebGLRenderer( {canvas:document.getElementById("cube")} )
        this.renderer.setSize(window.innerWidth / 2, window.innerHeight)
        document.body.appendChild(this.renderer.domElement)

        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.controls.enablePan = false
        this.controls.enableDamping = true

        this.geometry = new THREE.BoxGeometry(1, 1, 1)
        this.materials = []
        this.cubes = []

        for (let i = 0; i < 3; i++) {
            this.materials.push([])
            for (let j = 0; j < 3; j++) {
                this.materials[i].push([])
                for (let k = 0; k < 3; k++) {
                    const m = new THREE.MeshBasicMaterial();
                    m.transparent = true
                    this.materials[i][j].push(m)
                    this.cubes.push(new THREE.Mesh(this.geometry, m))
                } 
            }
        }

        for (let i = 0; i < this.cubes.length; i++) {
            this.cubes[i].position.set(Math.floor(i % 9 / 3 - 1) * 1.2, Math.floor((i-9)/9) * 1.2, Math.floor(-(i % 3 - 1)) * 1.2)
        }

        for (let i = 0; i < this.cubes.length; i++) {
            this.scene.add(this.cubes[i])
        }
        this.animate = this.animate.bind(this)
    }

    animate() {
        requestAnimationFrame(this.animate)
        this.controls.update()
        this.renderer.render(this.scene, this.camera)
    }

    resize() {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth / 2, window.innerHeight)
    }

    render(field) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          for (let k = 0; k < 3; k++) {
            if (field[i][j][k] === 0) {
              this.materials[i][j][k].color.set(0x999999)
              this.materials[i][j][k].opacity = 0.2
            } else if (field[i][j][k] === 1) {
              this.materials[i][j][k].color.setRGB(0, 0, 255)
              this.materials[i][j][k].opacity = 0.6
            } else {
              this.materials[i][j][k].color.setRGB(255, 0, 0)
              this.materials[i][j][k].opacity = 0.6
            }
          }
        }
      }
    }  
}

export { InterfaceCube }