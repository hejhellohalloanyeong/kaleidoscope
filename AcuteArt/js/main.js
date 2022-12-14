import * as THREE from './three.module.js';
import {
	OrbitControls
} from './OrbitControls.js';
import {
	DoubleSide
} from './three.module.js';
import {
	PreventDragClick
} from './PreventDragClick.js';

// Texture Load
const loadingManager = new THREE.LoadingManager();
loadingManager.onStart = () => {
	console.log('Load start');
};
loadingManager.onProgress = img => {
	console.log(img + ' is Loading...');
};
loadingManager.onLoad = () => {
	console.log('Load Completed');
};
loadingManager.onError = () => {
	console.log('Load ERROR');
};
const textureLoader = new THREE.TextureLoader(loadingManager);

const infoDateTextrue = textureLoader.load(
	'./img/infoDate.png');
const infoArtistTextrue = textureLoader.load(
	'./img/infoArtist.png');
const infoOrgTexture = textureLoader.load(
	'./img/infoOrg.png');
const infoTitleTexture = textureLoader.load(
	'./img/infoTitle.png');
const posterTexture = textureLoader.load(
	'./img/poster.jpg');

const texture01 = textureLoader.load(
	'./textures/artworks/01ADensityNew.png');
const texture02 = textureLoader.load(
	'./textures/artworks/02AllAtAnyTime.png');
const texture03 = textureLoader.load(
	'./textures/artworks/03GiantDOKU.png');
const texture04 = textureLoader.load(
	'./textures/artworks/04HolidaySpace.png');
const texture05 = textureLoader.load(
	'./textures/artworks/05ImaginaryFriend.png');
const texture06 = textureLoader.load(
	'./textures/artworks/06Language.png');
const texture07 = textureLoader.load(
	'./textures/artworks/07LightBulbManDressedAsLesSapeurs.png');
const texture08 = textureLoader.load(
	'./textures/artworks/08LOVE.png');
const texture09 = textureLoader.load(
	'./textures/artworks/09Lune.png');
const texture10 = textureLoader.load(
	'./textures/artworks/10MaratusSpecious.png');
const texture11 = textureLoader.load(
	'./textures/artworks/11RMBCity.png');
const texture12 = textureLoader.load(
	'./textures/artworks/12TheFourTemperaments.png');
const texture13 = textureLoader.load(
	'./textures/artworks/13UltraLightBeamsofLove.png');
const texture14 = textureLoader.load(
	'./textures/artworks/14WillingToBeVulnerable.png');
const texture15 = textureLoader.load(
	'./textures/artworks/15Worm.png');
const texture16 = textureLoader.load(
	'./textures/artworks/16WunderkammerCluster.png');

var artworkTextures = [
	texture01,
	texture02,
	texture03,
	texture04,
	texture05,
	texture06,
	texture07,
	texture08,
	texture09,
	texture10,
	texture11,
	texture12,
	texture13,
	texture14,
	texture15,
	texture16
]

var randTexture = artworkTextures[Math.floor(Math.random() * artworkTextures.length)];

// Renderer
const canvas = document.querySelector('#three-canvas');
const renderer = new THREE.WebGLRenderer({
	canvas,
	antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('black');

// Camera
const camera = new THREE.PerspectiveCamera(
	95,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);

// Light
const ambientLight = new THREE.AmbientLight('white', 1);
scene.add(ambientLight);
const pointLight = new THREE.PointLight('white', 1, 100);
pointLight.position.set(10, 200, 10);
scene.add(pointLight);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = Math.PI / 2;
controls.enableDamping = true;
controls.maxDistance = 300;
controls.enablePan = false;
controls.update();

// introSphere 
const introSphereMaterial = new THREE.MeshBasicMaterial({
	map: randTexture
})
const introSphereGeometry = new THREE.SphereGeometry(101, 132, 132);
const introSphere = new THREE.Mesh(introSphereGeometry, introSphereMaterial);
introSphere.position.set(0, 0, 0);
introSphere.rotation.x = -Math.PI * 0.5;
scene.add(introSphere);


//Geometry
const bgSphereGeometry = new THREE.SphereGeometry(100, 132, 132);
const infoDateGeometry = new THREE.PlaneGeometry(78, 26);
const infoArtistGeometry = new THREE.PlaneGeometry(112.5, 100);
const infoOrgGeometry = new THREE.PlaneGeometry(120, 10);
const infoTitleGeometry = new THREE.PlaneGeometry(50, 12.5);

//Material
const bgSphereMaterial = new THREE.MeshBasicMaterial({
	map: posterTexture,
	side: DoubleSide,
})
const infoDateMaterial = new THREE.MeshBasicMaterial({
	map: infoDateTextrue,
	transparent: true,
	side: DoubleSide
});
const infoArtistMaterial = new THREE.MeshBasicMaterial({
	map: infoArtistTextrue,
	transparent: true,
	side: DoubleSide
});
const infoOrgMaterial = new THREE.MeshBasicMaterial({
	map: infoOrgTexture,
	transparent: true,
	side: DoubleSide
});
const infoTitleMaterial = new THREE.MeshBasicMaterial({
	map: infoTitleTexture,
	transparent: true,
	side: DoubleSide
});

// Mesh
const bgSphere = new THREE.Mesh(bgSphereGeometry, bgSphereMaterial);
const infoDate = new THREE.Mesh(infoDateGeometry, infoDateMaterial);
const infoArtist = new THREE.Mesh(infoArtistGeometry, infoArtistMaterial);
const infoOrg = new THREE.Mesh(infoOrgGeometry, infoOrgMaterial);
const infoTitle = new THREE.Mesh(infoTitleGeometry, infoTitleMaterial);


// [ Spheres ]
const sphereGeometry = new THREE.SphereGeometry(12, 64, 64);
let sphereMaterial;
const spheres = [];
let sphere;

for (let i = 0; i < 16; i++) {
	var split = Math.floor(Math.random() * artworkTextures.length);
	var randTexture = artworkTextures[split];
	artworkTextures.splice(split, 1);

	sphereMaterial = new THREE.MeshBasicMaterial({
		side: DoubleSide,
		map: randTexture
	});

	sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
	sphere.position.x = (Math.random() - 0.5) * 120;
	sphere.position.y = (Math.random() - 0.5) * 120;
	sphere.position.z = (Math.random() - 0.5) * 120;
	scene.add(sphere);
	spheres.push(sphere);
}

bgSphere.rotation.x = -Math.PI * 0.5;
bgSphere.position.set(0, 0, 0);
infoDate.position.set(-12, 15, -70);
infoArtist.rotation.x = -Math.PI * 0.5;
infoArtist.position.set(0.7, 0, -10);
infoOrg.position.set(0, 10, 50);
infoTitle.position.set(-25, 45, -70);
scene.add(bgSphere, infoDate, infoArtist, infoOrg, infoTitle);

// draw
const clock = new THREE.Clock();
function draw() {
	const delta = clock.getDelta();
	const time = clock.getElapsedTime();
	const timer = 0.0001 * Date.now();
	bgSphere.rotation.y = time * 0.3;
	introSphere.rotation.y = time * 0.3;
	spheres[0].rotation.x = time * 1.3;
	spheres[1].rotation.y = time * 1.5;
	spheres[2].rotation.z = time * 1.7;
	spheres[3].rotation.x = time * 1.9;
	spheres[4].rotation.y = time * 1.1;
	spheres[5].rotation.z = time * 1.4;
	spheres[6].rotation.x = time * 1.3;
	spheres[7].rotation.y = time * 0.5;
	spheres[8].rotation.z = time * 0.4;
	spheres[9].rotation.x = time * 1.3;
	spheres[10].rotation.z = time * 0.5;
	spheres[11].rotation.z = time * 0.4;
	spheres[12].rotation.y = time * 1.1;
	spheres[13].rotation.x = time * 0.9;
	spheres[14].rotation.y = time * 0.6;
	spheres[15].rotation.z = time * 0.3;

	for (let i = 0, il = spheres.length; i < il; i++) {
		const sphere = spheres[i];
		sphere.position.x = 50 * (Math.cos(1 * timer + i));
		sphere.position.y = 50 * (Math.sin(2 * timer + i));
	}
	open.addEventListener('click', () => {
		anim.play();
		camera.aspect = window.innerWidth / window.innerHeight;

		if (camera.aspect < 1) {
			camera.position.set(100, 100, 250);
			scene.add(camera);
		} else {
			camera.position.set(100, 100, 50);
			scene.add(camera);
		}
	})

	controls.update();
	renderer.render(scene, camera);
	renderer.setAnimationLoop(draw);
}

function setSize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.render(scene, camera);
}

// event
window.addEventListener('resize', setSize);
const preventDragClick = new PreventDragClick(canvas);
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
var meshes = spheres;

canvas.addEventListener('click', e => {
	mouse.x = e.clientX / canvas.clientWidth * 2 - 1;
	mouse.y = -(e.clientY / canvas.clientHeight * 2 - 1);
	checkIntersects();
});

function checkIntersects() {
	if (preventDragClick.mouseMoved) return;

	raycaster.setFromCamera(mouse, camera);

	const intersects = raycaster.intersectObjects(meshes);
	for (const item of intersects) {
		item.object.name = 'clicked';
		bgSphere.material.map = item.object.material.map;
		break;
	}
}
draw();