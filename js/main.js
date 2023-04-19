// Creamos la escena, la cámara y el renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

// Configuramos el renderizador
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Creamos el plano sobre el que colocaremos el modelo
const geometry = new THREE.PlaneGeometry(100, 100, 10, 10);
const material = new THREE.MeshBasicMaterial({color: 0xaaaaaa, wireframe: true});
const plane = new THREE.Mesh(geometry, material);
plane.rotation.x = -Math.PI / 2;
scene.add(plane);

// Movemos la cámara hacia atrás para que veamos el modelo
camera.position.z = 5;

// Creamos los controles para mover el modelo
const controls = new THREE.TrackballControls(camera, renderer.domElement);
controls.rotateSpeed = 5;
controls.zoomSpeed = 1.2;
controls.panSpeed = 0.8;
controls.noZoom = false;
controls.noPan = false;
controls.staticMoving = true;
controls.dynamicDampingFactor