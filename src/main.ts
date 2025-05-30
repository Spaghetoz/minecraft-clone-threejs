import * as THREE from "three"

/** scene: where all Object3d are placed */
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x22223B);
/** camera: the POV camera */
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
/** renderer: draw all camera and scene onto the screen */
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/** Cube */
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// loop
function animate() {
  requestAnimationFrame(animate);
  /** cube rotation */
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();