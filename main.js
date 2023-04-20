import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

 

// Definimos la ruta y el nombre de los archivos del modelo
const modelPath = 'assets/models/model.obj';
const materialPath = 'assets/models/model.mtl';
// Cargamos el material del modelo
 
 
const loader = new GLTFLoader();

loader.load( 'assets/models/model.gltf', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );
camera.position.z = 1;


renderer.render( scene, camera );