import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();

//loading walls textures
const wallsColorTexture = textureLoader.load("/walls/color.jpg");
const wallsAOTexture = textureLoader.load("/walls/ao.jpg");
const wallsNormalTexture = textureLoader.load("/walls/normal.jpg");
const wallsHeightTexture = textureLoader.load("/walls/height.png");
const wallRoughnessTexture = textureLoader.load("/walls/roughness.jpg");
//loading door textures
const doorColor = textureLoader.load("/door/color.jpg");
const doorAoTexture = textureLoader.load("/door/ao.jpg");
const doorHeightTexture = textureLoader.load("/door/height.png");
const doorNormalTexture = textureLoader.load("/door/normal.jpg");
const doorMetalnessTexture = textureLoader.load("/door/metalness.jpg");
const doorRoughnessTexture = textureLoader.load("/door/roughness.jpg");
//loading roof texture
const roofColor = textureLoader.load("/roof/color.jpg");
const roofAoTexture = textureLoader.load("/roof/ao.jpg");
const roofHeightTexture = textureLoader.load("/roof/height.png");
const roofNormalTexture = textureLoader.load("/roof/normal.jpg");
const roofRoughnessTexture = textureLoader.load("/roof/roughness.jpg");

roofColor.repeat.set(4, 1);
roofAoTexture.repeat.set(4, 1);
roofHeightTexture.repeat.set(4, 1);
roofNormalTexture.repeat.set(4, 1);
roofRoughnessTexture.repeat.set(4, 1);

roofColor.wrapS = THREE.RepeatWrapping;
roofAoTexture.wrapS = THREE.RepeatWrapping;
roofHeightTexture.wrapS = THREE.RepeatWrapping;
roofNormalTexture.wrapS = THREE.RepeatWrapping;
roofRoughnessTexture.wrapS = THREE.RepeatWrapping;

//loading grass texture
const grassColor = textureLoader.load("/grass/color.jpg");
const grassAoTexture = textureLoader.load("/grass/ao.jpg");
const grassHeightTexture = textureLoader.load("/grass/height.png");
const grassNormalTexture = textureLoader.load("/grass/normal.jpg");
const grassRoughnessTexture = textureLoader.load("/grass/roughness.jpg");
//loading grave texture
const graveColorTexture = textureLoader.load("/conc/color.jpg");
const graveAoTexture = textureLoader.load("/conc/ao.jpg");
const graveNormalTexture = textureLoader.load("/conc/normal.jpg");
const graveHeightTexture = textureLoader.load("/conc/height.png");
const graveRoughnessTexture = textureLoader.load("/conc/roughness.jpg");
const graveMetalnessTexture = textureLoader.load("/conc/metalness.jpg");

graveColorTexture.repeat.set(1, 2);
graveAoTexture.repeat.set(1, 2);
graveNormalTexture.repeat.set(1, 2);
graveHeightTexture.repeat.set(1, 2);
graveRoughnessTexture.repeat.set(1, 2);
graveMetalnessTexture.repeat.set(1, 2);

graveColorTexture.wrapS = THREE.RepeatWrapping;
graveAoTexture.wrapS = THREE.RepeatWrapping;
graveNormalTexture.wrapS = THREE.RepeatWrapping;
graveHeightTexture.wrapS = THREE.RepeatWrapping;
graveRoughnessTexture.wrapS = THREE.RepeatWrapping;
graveMetalnessTexture.wrapS = THREE.RepeatWrapping;

graveColorTexture.wrapT = THREE.RepeatWrapping;
graveAoTexture.wrapT = THREE.RepeatWrapping;
graveNormalTexture.wrapT = THREE.RepeatWrapping;
graveHeightTexture.wrapT = THREE.RepeatWrapping;
graveRoughnessTexture.wrapT = THREE.RepeatWrapping;
graveMetalnessTexture.wrapT = THREE.RepeatWrapping;

//loading stone path
const stonePathColor = textureLoader.load("/stonepath/color.jpg");
const stonePathAo = textureLoader.load("/stonepath/ao.jpg");
const stonePathHeight = textureLoader.load("/stonepath/height.png");
const stonePathRoughness = textureLoader.load("/stonepath/roughness.jpg");
const stonePathNormal = textureLoader.load("/stonepath/normal.jpg");

stonePathColor.repeat.set(1, 10);
stonePathAo.repeat.set(2, 10);
stonePathHeight.repeat.set(2, 10);
stonePathRoughness.repeat.set(2, 10);
stonePathNormal.repeat.set(2, 10);

stonePathColor.wrapS = THREE.RepeatWrapping;
stonePathAo.wrapS = THREE.RepeatWrapping;
stonePathHeight.wrapS = THREE.RepeatWrapping;
stonePathNormal.wrapS = THREE.RepeatWrapping;
stonePathRoughness.wrapS = THREE.RepeatWrapping;

stonePathColor.wrapT = THREE.RepeatWrapping;
stonePathAo.wrapT = THREE.RepeatWrapping;
stonePathHeight.wrapT = THREE.RepeatWrapping;
stonePathNormal.wrapT = THREE.RepeatWrapping;
stonePathRoughness.wrapT = THREE.RepeatWrapping;

//loading ground textures
const groundColor = textureLoader.load("/ground/color.jpg");
const groundAoTexture = textureLoader.load("/ground/ao.jpg");
const groundHeightTexture = textureLoader.load("/ground/height.png");
const groundNormalTexture = textureLoader.load("/ground/normal.jpg");
const groundRoughnessTexture = textureLoader.load("/ground/roughness.jpg");

groundColor.repeat.set(10, 10);
groundAoTexture.repeat.set(5, 5);
groundNormalTexture.repeat.set(5, 5);
groundRoughnessTexture.repeat.set(5, 5);
groundHeightTexture.repeat.set(5, 5);

groundColor.wrapS = THREE.RepeatWrapping;
groundAoTexture.wrapS = THREE.RepeatWrapping;
groundHeightTexture.wrapS = THREE.RepeatWrapping;
groundNormalTexture.wrapS = THREE.RepeatWrapping;
groundRoughnessTexture.wrapS = THREE.RepeatWrapping;

groundColor.wrapT = THREE.RepeatWrapping;
groundAoTexture.wrapT = THREE.RepeatWrapping;
groundHeightTexture.wrapT = THREE.RepeatWrapping;
groundNormalTexture.wrapT = THREE.RepeatWrapping;
groundRoughnessTexture.wrapT = THREE.RepeatWrapping;

//loading fence texture
const fenceColor = textureLoader.load("/fence/color.jpg");
const fenceAoTexture = textureLoader.load("/fence/ao.jpg");
const fenceHeightTexture = textureLoader.load("/fence/height.png");
const fenceNormalTexture = textureLoader.load("/fence/normal.jpg");
const fenceAlphaTexture = textureLoader.load("/fence/alpha.jpg");
const fenceMetalnessTexture = textureLoader.load("/fence/metalness.jpg");
const fenceRoughnessTexture = textureLoader.load("/fence/roughness.jpg");

fenceColor.repeat.set(8, 1);
fenceAoTexture.repeat.set(8, 1);
fenceHeightTexture.repeat.set(8, 1);
fenceMetalnessTexture.repeat.set(8, 1);
fenceRoughnessTexture.repeat.set(8, 1);
fenceNormalTexture.repeat.set(8, 1);
fenceAlphaTexture.repeat.set(8, 1);

fenceColor.wrapS = THREE.RepeatWrapping;
fenceAoTexture.wrapS = THREE.RepeatWrapping;
fenceHeightTexture.wrapS = THREE.RepeatWrapping;
fenceMetalnessTexture.wrapS = THREE.RepeatWrapping;
fenceRoughnessTexture.wrapS = THREE.RepeatWrapping;
fenceNormalTexture.wrapS = THREE.RepeatWrapping;
fenceAlphaTexture.wrapS = THREE.RepeatWrapping;

fenceColor.wrapT = THREE.RepeatWrapping;
fenceAoTexture.wrapT = THREE.RepeatWrapping;
fenceHeightTexture.wrapT = THREE.RepeatWrapping;
fenceMetalnessTexture.wrapT = THREE.RepeatWrapping;
fenceRoughnessTexture.wrapT = THREE.RepeatWrapping;
fenceNormalTexture.wrapT = THREE.RepeatWrapping;
fenceAlphaTexture.wrapT = THREE.RepeatWrapping;

const Textures = {
  floorTxt: {
    color: groundColor,
    ao: groundAoTexture,
    normal: groundNormalTexture,
    height: groundHeightTexture,
    roughness: groundRoughnessTexture,
  },
  stonePathTxt: {
    color: stonePathColor,
    height: stonePathHeight,
    ao: stonePathAo,
    roughness: stonePathRoughness,
    normal: stonePathNormal,
  },
  wallsTxt: {
    color: wallsColorTexture,
    ao: wallsAOTexture,
    normal: wallsNormalTexture,
    height: wallsHeightTexture,
    roughness: wallRoughnessTexture,
  },
  doorTxt: {
    color: doorColor,
    ao: doorAoTexture,
    normal: doorNormalTexture,
    height: doorHeightTexture,
    roughness: doorRoughnessTexture,
    metalness: doorMetalnessTexture,
  },

  roofTxt: {
    color: roofColor,
    height: roofHeightTexture,
    roughness: roofRoughnessTexture,
    normal: roofNormalTexture,
    ao: roofAoTexture,
  },
  grassTxt: {
    color: grassColor,
    ao: grassAoTexture,
    height: grassHeightTexture,
    normal: grassNormalTexture,
    roughness: grassRoughnessTexture,
  },
  graveTxt: {
    color: graveColorTexture,
    ao: graveAoTexture,
    normal: graveNormalTexture,
    height: graveHeightTexture,
    roughness: graveRoughnessTexture,
    metalness: graveMetalnessTexture,
  },

  fenceTxt: {
    color: fenceColor,
    ao: fenceAoTexture,
    normal: fenceNormalTexture,
    height: fenceHeightTexture,
    roughness: fenceRoughnessTexture,
    metalness: fenceMetalnessTexture,
    alpha: fenceAlphaTexture,
  },
};

export default Textures;
