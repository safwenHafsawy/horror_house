import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import GUI from "lil-gui";
import "./style.css";
import Textures from "./texture";

//Grabbing DOM elements
const canvas = document.getElementById("canvas");

/**
 ** Global variables
 */
const wallsDimensions = { height: 3, width: 4, depth: 4 };
const doorDimensions = { width: 1, height: 2, depth: 1 };
const graveDimension = { width: 0.5, height: 1.75, depth: 0.1 };
const {
  wallsTxt,
  floorTxt,
  doorTxt,
  roofTxt,
  graveTxt,
  stonePathTxt,
  grassTxt,
  fenceTxt,
} = Textures;

/**
 ** Scene
 */
// create a scene, that will hold all our elements such as objects, cameras and lights.
let scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x262837, 3, 14);

/**
 ** Objects
 */

const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(30, 30, 100, 100),
  new THREE.MeshStandardMaterial({
    map: floorTxt.color,
    displacementMap: floorTxt.height,
    normalMap: floorTxt.normal,
    aoMap: floorTxt.ao,
    roughnessMap: floorTxt.roughness,
  })
);
floor.geometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(floor.geometry.attributes.uv.array, 2)
);
floor.material.displacementScale = 0.25;
floor.rotation.x = -Math.PI * 0.5;
floor.receiveShadow = true;
// stone path
const stonePath = new THREE.Mesh(
  new THREE.PlaneGeometry(1.5, 10, 50, 50),
  new THREE.MeshStandardMaterial({
    map: stonePathTxt.color,
    displacementMap: stonePathTxt.height,
    normalMap: stonePathTxt.normal,
    aoMap: stonePathTxt.ao,
    roughnessMap: stonePathTxt.roughness,
  })
);
stonePath.material.displacementScale = 0.1;
stonePath.geometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(stonePath.geometry.attributes.uv.array, 2)
);
stonePath.rotation.x = -Math.PI * 0.5;
stonePath.position.y = 0.09;
stonePath.position.z = 15 * 0.5 - 0.1;
stonePath.receiveShadow = true;

//fence

const fenceGeometry = new THREE.BoxGeometry(10, 1, 0.01, 50, 50, 50);
const fenceMaterial = new THREE.MeshStandardMaterial({
  map: fenceTxt.color,
  transparent: true,
  alphaMap: fenceTxt.alpha,
  displacementMap: fenceTxt.height,
  normalMap: fenceTxt.normal,
  roughnessMap: fenceTxt.roughness,
  metalnessMap: fenceTxt.metalness,
});

const leftFence = new THREE.Mesh(fenceGeometry, fenceMaterial);

const rightFence = new THREE.Mesh(fenceGeometry, fenceMaterial);

rightFence.material.displacementScale = 0.1;
rightFence.geometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(rightFence.geometry.attributes.uv.array, 2)
);

leftFence.material.displacementScale = 0.1;
leftFence.geometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(leftFence.geometry.attributes.uv.array, 2)
);

leftFence.position.set(-6, 0.5, 11);
rightFence.position.set(6, 0.5, 11);

leftFence.castShadow = true;

// house
const house = new THREE.Group();
const walls = new THREE.Mesh(
  new THREE.BoxGeometry(
    wallsDimensions.width,
    wallsDimensions.height,
    wallsDimensions.depth,
    50,
    50,
    50
  ),
  new THREE.MeshStandardMaterial({
    map: wallsTxt.color,
    displacementMap: wallsTxt.height,
    normalMap: wallsTxt.normal,
    aoMap: wallsTxt.ao,
    roughnessMap: wallsTxt.roughness,
  })
);
walls.position.y = wallsDimensions.height * 0.5;
walls.material.displacementScale = 0.01;
walls.geometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(walls.geometry.attributes.uv.array, 2)
);
walls.castShadow = true;
const roof = new THREE.Mesh(
  new THREE.ConeGeometry(3, 1, 4, 64),
  new THREE.MeshStandardMaterial({
    map: roofTxt.color,
    aoMap: roofTxt.ao,
    displacementMap: roofTxt.height,
    roughnessMap: roofTxt.roughness,
    normalMap: roofTxt.normal,
  })
);
roof.material.displacementScale = 0.02;
roof.position.y = wallsDimensions.height + 0.5;
roof.rotation.y = Math.PI * 0.25;
roof.geometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(roof.geometry.attributes.uv.array, 2)
);

const door = new THREE.Mesh(
  new THREE.PlaneGeometry(
    doorDimensions.width,
    doorDimensions.height,
    100,
    100
  ),
  new THREE.MeshStandardMaterial({
    map: doorTxt.color,
    displacementMap: doorTxt.height,
    aoMap: doorTxt.ao,
    normalMap: doorTxt.normal,
    roughnessMap: doorTxt.roughness,
    metalnessMap: doorTxt.metalness,
  })
);

door.position.y = doorDimensions.height * 0.5 - 0.1;
door.position.z = wallsDimensions.depth / 2 + 0.01;
door.material.displacementScale = 0.03;
door.geometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(door.geometry.attributes.uv.array, 2)
);
//adding house components to the house
house.add(walls, roof, door, leftFence, rightFence);

//bushes
const bushes = new THREE.Group();
const bushMaterial = new THREE.MeshStandardMaterial({
  map: grassTxt.color,
  aoMap: grassTxt.ao,
  displacementMap: grassTxt.height,
  normalMap: grassTxt.normal,
  roughnessMap: grassTxt.roughness,
});
bushMaterial.displacementScale = 0.1;

//adding
const bush1 = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 16, 16),
  bushMaterial
);
bush1.position.z = wallsDimensions.depth * 0.5 + 0.2;
bush1.position.x = 1.5;
bush1.geometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(bush1.geometry.attributes.uv.array, 2)
);
const bush2 = new THREE.Mesh(
  new THREE.SphereGeometry(0.3, 16, 16),
  bushMaterial
);
bush2.position.z = wallsDimensions.depth * 0.5 + 0.2;
bush2.position.x = 2;
bush2.geometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(bush2.geometry.attributes.uv.array, 2)
);

const bush3 = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 16, 16),
  bushMaterial
);
bush3.position.z = wallsDimensions.depth * 0.5 + 0.2;
bush3.position.x = -1.5;
bush3.geometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(bush3.geometry.attributes.uv.array, 2)
);

bushes.add(bush1, bush2, bush3);

//adding the graves
const graves = new THREE.Group();
const graveGeometry = new THREE.BoxGeometry(
  graveDimension.width,
  graveDimension.height,
  graveDimension.depth,
  50,
  50,
  50
);
const graveMaterial = new THREE.MeshStandardMaterial({
  map: graveTxt.color,
  displacementMap: graveTxt.height,
  normalMap: graveTxt.normal,
  roughnessMap: graveTxt.roughness,
  metalnessMap: graveTxt.metalness,
  aoMap: graveTxt.ao,
});
graveMaterial.displacementScale = 0.001;
graveGeometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(graveGeometry.attributes.uv.array, 2)
);
for (let i = 0; i < 50; i++) {
  let angle = Math.random() * Math.PI * 2;
  const radius = Math.random() * 3 + 3;

  const grave = new THREE.Mesh(graveGeometry, graveMaterial);
  grave.position.x = Math.sin(angle) * radius;
  if (grave.position.x < 1.5 && grave.position.x > 0) {
    grave.position.x += 1;
  } else if (grave.position.x > -1 && grave.position.x < 0) {
    grave.position.x -= 1;
  }
  grave.position.z = Math.cos(angle) * radius;
  grave.rotation.y = (Math.random() - 0.5) * Math.PI * 0.3;
  grave.castShadow = true;
  grave.receiveShadow = true;
  console.log(grave.castShadow);
  graves.add(grave);
}

//adding objects to the scene
scene.add(floor, house, bushes, graves, stonePath);

/*
 * Ghosts
 */

const ghost1 = new THREE.PointLight(0xffffff, 5, 2.5, 1);
ghost1.position.set(0, 1.5, 4);
ghost1.castShadow = true;
const ghost2 = new THREE.PointLight(0xffffff, 5, 2.5, 1);
ghost2.position.set(0, 1, -8);
ghost2.castShadow = true;

scene.add(ghost1, ghost2);
/**
 ** Camera
 */
// create a camera, which defines where we're looking at
let camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  20
);
// tell the camera where to look
camera.position.set(0, 1.5, 15);

/**
 ** Lights
 */
const ambientLight = new THREE.AmbientLight(0xf6eed5, 0.5);

const MoonLight = new THREE.DirectionalLight(0xf6eed5, 1);
MoonLight.position.set(-3, 5, 15);
MoonLight.castShadow = true;

const doorLight = new THREE.PointLight(0xfcf9d9, 0.5, 10, 2);
doorLight.position.set(
  0,
  doorDimensions.height + 0.5,
  wallsDimensions.depth * 0.5 + 1
);

//adding lights to the scene
scene.add(ambientLight, MoonLight, doorLight);
/**
 ** Controls
 */
const orbitControls = new OrbitControls(camera, canvas);
orbitControls.enableDamping = true;
orbitControls.minDistance = 2;
orbitControls.maxDistance = 15;
orbitControls.minDistance = 4;
orbitControls.min = 0;
orbitControls.maxPolarAngle = Math.PI * 0.5 - 0.09;

// TODO shadow map optimization

/**
 ** Renderer
 */
// create a render and set the size
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};
let renderer = new THREE.WebGLRenderer({ canvas });
renderer.setClearColor(new THREE.Color(0x262837));
renderer.setSize(sizes.width, sizes.height);
renderer.shadowMap.enabled = true;

const clock = new THREE.Clock();
// function for re-rendering/animating the scene
function tick() {
  const elapsedTime = clock.getElapsedTime();

  ghost1.position.x = Math.sin(elapsedTime * 0.3) * Math.PI * 2;
  ghost1.position.z = Math.cos(elapsedTime * 0.5) * Math.PI * 2;

  ghost2.position.x = Math.cos(elapsedTime * 0.5) * Math.PI * 2;
  ghost2.position.z = Math.sin(elapsedTime * 0.2) * Math.PI * 2;
  ghost2.position.y = Math.sin(elapsedTime);

  orbitControls.update();
  renderer.render(scene, camera);

  requestAnimationFrame(tick);
}
tick();

/*
 * Event Listeners
 */

window.addEventListener("resize", () => {
  (sizes.height = window.innerHeight),
    (sizes.width = window.innerWidth),
    (camera.aspect = sizes.width / sizes.height);
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
});

/*
 *controls
 */

const gui = new GUI({ width: 300 });
gui.show(false); //change to true to start using debug
const floorDebug = gui.addFolder("floor");
floorDebug
  .add(floor.material, "displacementScale")
  .min(0.002)
  .max(1)
  .step(0.001);
const fogDebug = gui.addFolder("Fog");
fogDebug.add(scene.fog, "near").min(0).max(15).step(0.1);
fogDebug.add(scene.fog, "far").min(0).max(15).step(0.1);
const directionalLightDebug = gui.addFolder("directional light");
directionalLightDebug.add(MoonLight, "intensity").min(0).max(15).step(0.1);
directionalLightDebug.add(MoonLight.position, "x").min(-20).max(20).step(0.1);
directionalLightDebug.add(MoonLight.position, "y").min(-20).max(20).step(0.1);
directionalLightDebug.add(MoonLight.position, "z").min(-20).max(20).step(0.1);
gui.close();
const ghostDebug = gui.addFolder("Ghost");
ghostDebug
  .add(ghost1, "distance")
  .min(0)
  .max(20)
  .step(0.1)
  .name("Ghost 1 Distance");
ghostDebug.add(ghost1, "decay").min(0).max(20).step(0.1).name("Ghost 1 Decay");
ghostDebug
  .add(ghost2, "distance")
  .min(0)
  .max(20)
  .step(0.1)
  .name("Ghost 2 Distance");
ghostDebug.add(ghost2, "decay").min(0).max(20).step(0.1).name("Ghost 2 Decay");
