import Scene from './components/Scene'

let scene = new Scene(
    document.getElementById('threeJSContainer').offsetWidth,
    document.getElementById('threeJSContainer').offsetHeight
)

let lastUpdateDelta = 0

const deltaTime = 1000

function animate(delta) {
    scene.render(delta);
    requestAnimationFrame(animate)
}
requestAnimationFrame(animate)
