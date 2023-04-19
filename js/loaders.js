// Creamos un objeto Loader para cargar el modelo
const loader = new THREE.OBJLoader();

// Definimos la ruta y el nombre de los archivos del modelo
const modelPath = 'assets/models/model.obj';
const materialPath = 'assets/models/model.mtl';

// Cargamos el material del modelo
loader.load(materialPath, (materials) => {
  // Le pasamos los materiales al cargador de modelo
  loader.setMaterials(materials);

  // Cargamos el modelo
  loader.load(modelPath, (model) => {
    // Añadimos el modelo a la escena
    scene.add(model);
  });
});
