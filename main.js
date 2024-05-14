import { checkWon } from "./src/checkWon"
// import { restart } from "./src/restart"
import { removeMove } from "./src/back"
import { showPopup } from "./src/popup"
import * as THREE from './node_modules/three'
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js'
import { render } from "./src/render.js"

let moves = []

let field = [
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]
]

const scene = new THREE.Scene()
scene.background = new THREE.Color(255, 255, 255)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.x = 3
camera.position.y = 3
camera.position.z = -3

const renderer = new THREE.WebGLRenderer( {canvas:document.getElementById("cube")} )
renderer.setSize(window.innerWidth / 2, window.innerHeight)
document.body.appendChild(renderer.domElement)

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth / 2, window.innerHeight)
})

const controls = new OrbitControls(camera, renderer.domElement)
controls.enablePan = false
controls.enableDamping = true

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material1 = new THREE.MeshBasicMaterial()
material1.transparent = true
const material2 = new THREE.MeshBasicMaterial()
material2.transparent = true
const material3 = new THREE.MeshBasicMaterial()
material3.transparent = true
const material4 = new THREE.MeshBasicMaterial()
material4.transparent = true
const material5 = new THREE.MeshBasicMaterial()
material5.transparent = true
const material6 = new THREE.MeshBasicMaterial()
material6.transparent = true
const material7 = new THREE.MeshBasicMaterial()
material7.transparent = true
const material8 = new THREE.MeshBasicMaterial()
material8.transparent = true
const material9 = new THREE.MeshBasicMaterial()
material9.transparent = true
const material10 = new THREE.MeshBasicMaterial()
material10.transparent = true
const material11 = new THREE.MeshBasicMaterial()
material11.transparent = true
const material12 = new THREE.MeshBasicMaterial()
material12.transparent = true
const material13 = new THREE.MeshBasicMaterial()
material13.transparent = true
const material14 = new THREE.MeshBasicMaterial()
material14.transparent = true
const material15 = new THREE.MeshBasicMaterial()
material15.transparent = true
const material16 = new THREE.MeshBasicMaterial()
material16.transparent = true
const material17 = new THREE.MeshBasicMaterial()
material17.transparent = true
const material18 = new THREE.MeshBasicMaterial()
material18.transparent = true
const material19 = new THREE.MeshBasicMaterial()
material19.transparent = true
const material20 = new THREE.MeshBasicMaterial()
material20.transparent = true
const material21 = new THREE.MeshBasicMaterial()
material21.transparent = true
const material22 = new THREE.MeshBasicMaterial()
material22.transparent = true
const material23 = new THREE.MeshBasicMaterial()
material23.transparent = true
const material24 = new THREE.MeshBasicMaterial()
material24.transparent = true
const material25 = new THREE.MeshBasicMaterial()
material25.transparent = true
const material26 = new THREE.MeshBasicMaterial()
material26.transparent = true
const material27 = new THREE.MeshBasicMaterial()
material27.transparent = true

let materials = [
  [
    [material1, material2, material3],
    [material4, material5, material6],
    [material7, material8, material9]
  ],
  [
    [material10, material11, material12],
    [material13, material14, material15],
    [material16, material17, material18]
  ],
  [
    [material19, material20, material21],
    [material22, material23, material24],
    [material25, material26, material27]
  ]
]


const cube1 = new THREE.Mesh(geometry, material1)
const cube2 = new THREE.Mesh(geometry, material2)
const cube3 = new THREE.Mesh(geometry, material3)
const cube4 = new THREE.Mesh(geometry, material4)
const cube5 = new THREE.Mesh(geometry, material5)
const cube6 = new THREE.Mesh(geometry, material6)
const cube7 = new THREE.Mesh(geometry, material7)
const cube8 = new THREE.Mesh(geometry, material8)
const cube9 = new THREE.Mesh(geometry, material9)
const cube10 = new THREE.Mesh(geometry, material10)
const cube11 = new THREE.Mesh(geometry, material11)
const cube12 = new THREE.Mesh(geometry, material12)
const cube13 = new THREE.Mesh(geometry, material13)
const cube14 = new THREE.Mesh(geometry, material14)
const cube15 = new THREE.Mesh(geometry, material15)
const cube16 = new THREE.Mesh(geometry, material16)
const cube17 = new THREE.Mesh(geometry, material17)
const cube18 = new THREE.Mesh(geometry, material18)
const cube19 = new THREE.Mesh(geometry, material19)
const cube20 = new THREE.Mesh(geometry, material20)
const cube21 = new THREE.Mesh(geometry, material21)
const cube22 = new THREE.Mesh(geometry, material22)
const cube23 = new THREE.Mesh(geometry, material23)
const cube24 = new THREE.Mesh(geometry, material24)
const cube25 = new THREE.Mesh(geometry, material25)
const cube26 = new THREE.Mesh(geometry, material26)
const cube27 = new THREE.Mesh(geometry, material27)

cube1.position.set(-1.2, -1.2, 1.2)
cube2.position.set(-1.2, -1.2, 0)
cube3.position.set(-1.2, -1.2, -1.2)
cube4.position.set(0, -1.2, 1.2)
cube5.position.set(0, -1.2, 0)
cube6.position.set(0, -1.2, -1.2)
cube7.position.set(1.2, -1.2, 1.2)
cube8.position.set(1.2, -1.2, 0)
cube9.position.set(1.2, -1.2, -1.2)
cube10.position.set(-1.2, 0, 1.2)
cube11.position.set(-1.2, 0, 0)
cube12.position.set(-1.2, 0, -1.2)
cube13.position.set(0, 0, 1.2)
cube14.position.set(0, 0, 0)
cube15.position.set(0, 0, -1.2)
cube16.position.set(1.2, 0, 1.2)
cube17.position.set(1.2, 0, 0)
cube18.position.set(1.2, 0, -1.2)
cube19.position.set(-1.2, 1.2, 1.2)
cube20.position.set(-1.2, 1.2, 0)
cube21.position.set(-1.2, 1.2, -1.2)
cube22.position.set(0, 1.2, 1.2)
cube23.position.set(0, 1.2, 0)
cube24.position.set(0, 1.2, -1.2)
cube25.position.set(1.2, 1.2, 1.2)
cube26.position.set(1.2, 1.2, 0)
cube27.position.set(1.2, 1.2, -1.2)

scene.add(cube1)
scene.add(cube2)
scene.add(cube3)
scene.add(cube4)
scene.add(cube5)
scene.add(cube6)
scene.add(cube7)
scene.add(cube8)
scene.add(cube9)
scene.add(cube10)
scene.add(cube11)
scene.add(cube12)
scene.add(cube13)
scene.add(cube14)
scene.add(cube15)
scene.add(cube16)
scene.add(cube17)
scene.add(cube18)
scene.add(cube19)
scene.add(cube20)
scene.add(cube21)
scene.add(cube22)
scene.add(cube23)
scene.add(cube24)
scene.add(cube25)
scene.add(cube26)
scene.add(cube27)

function animate() {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}

animate()

let isBlue = true
let playWithBot = false
let freeze = false
const cells = document.querySelectorAll(".cell")
const restartButton = document.getElementById("restart")
const backButton = document.getElementById("back")
const popup = document.getElementById("popup")
const slider = document.getElementById("bot")
render(materials, field)

slider.addEventListener("change", () => {
  restart()
  if (playWithBot) {
    playWithBot = false
  } else {
    playWithBot = true
  }
})


popup.addEventListener("click", () => {
  popup.classList.remove("show")
  popup.classList.add("hide")
  // restart()
  freeze = true
  isBlue = true
  moves = []
  field = [
    [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ],
    [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ],
    [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
  ]
  // render(materials, field)
})

restartButton.addEventListener("click", () => {
  freeze = false
  restart()
})

backButton.addEventListener("click", () => {
    const id = moves.pop()
    removeMove(id, isBlue, cells, document)
    field[Number(id[0])][Number(id[1])][Number(id[2])] = 0
    isBlue = !isBlue
    if (playWithBot) {
      const id1 = moves.pop()
      removeMove(id1, isBlue, cells, document)
      field[Number(id1[0])][Number(id1[1])][Number(id1[2])] = 0
      isBlue = !isBlue
    }
    render(materials, field)
  }  
)

cells.forEach(cell => {
  cell.classList.add((isBlue ? "hoverBlue" : 'hoverRed'))
})

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    if (!(moves.includes(cell.id) || freeze)) {
      cell.classList.add((isBlue) ? 'blue' : 'red')
      addMove(cell.id)
      render(materials, field)
      if (checkWon([Number(cell.id[0]), Number(cell.id[1]), Number(cell.id[2])], isBlue ? 1 : -1, field)) {
        showPopup(popup, isBlue, document)
        isBlue = true
        return
      }
      isBlue = !isBlue
      redraw(cells)

      if (playWithBot) {
        const move = botDoMove(moves, field)
        addMove(move)
        const moveCell = document.getElementById(move)
        moveCell.classList.add("red")
        // redraw(cells)
        isBlue = true
        redraw(cells)
        isBlue = false
        render(materials, field)
        if (checkWon([Number(move[0]), Number(move[1]), Number(move[2])], -1, field)) {
          showPopup(popup, isBlue, document)
        } 
        isBlue = true
      }
    }
  })
})

function redraw(cells) {
  cells.forEach(cell => {
    if (cell.classList.contains("blue")) {
      cell.classList.remove("hoverBlue")
    } else if (cell.classList.contains('red')) {
      cell.classList.remove("hoverRed")
    } else {
      cell.classList.remove((isBlue) ? "hoverRed" : "hoverBlue")
      cell.classList.add((isBlue) ? "hoverBlue" : 'hoverRed')
    }
  })
}

function addMove(id) {
  moves.push(id)
  field[Number(id[0])][Number(id[1])][Number(id[2])] = (isBlue) ? 1 : -1
}

function restart() {
  cells.forEach((cell) => {
    cell.classList.remove("blue")
    cell.classList.remove("red")
    cell.classList.remove("hoverRed")
    cell.classList.add("hoverBlue")
  })

  isBlue = true
  moves = []
  field = [
    [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ],
    [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ],
    [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
  ]
  render(materials, field)
}

function idToMove(s) {
  return [Number(s[0]), Number[s[1]], Number[s[2]]]
}

function moveToId(i, j, k) {
  return i.toString() + j.toString() + k.toString()
}

function randomChoose(choices) {
  var index = Math.floor(Math.random() * choices.length)
  return choices[index]
}

function botDoMove(moves, field) {
  let freeCells = []
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        if (field[i][j][k] == 0) {
          freeCells.push(moveToId(i, j, k))
        }
      }
    }
  }

  return randomChoose(freeCells)
}
