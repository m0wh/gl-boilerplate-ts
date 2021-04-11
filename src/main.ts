import { init } from './ts/utils/three-helpers'
import raf from './ts/utils/raf'
import fx from './ts/effects'
import { BoxGeometry, Mesh, MeshNormalMaterial } from 'three'
import { randomGenerator } from './ts/utils/helpers'

const random = randomGenerator() // put seed here

const { camera, renderer, scene } = init()
renderer.pixelRatio = 2

const { composer } = fx({ renderer, scene, camera })

camera.position.z = 5
camera.position.x = 5
camera.position.y = 5

const geo = new BoxGeometry(random() * 1 + 1, random() * 1 + 1, random() * 1 + 1)
const mat = new MeshNormalMaterial()
const box = new Mesh(geo, mat)
scene.add(box)

raf.subscribe((time) => {
  box.rotation.y = time / 1000
  composer.render()
})
