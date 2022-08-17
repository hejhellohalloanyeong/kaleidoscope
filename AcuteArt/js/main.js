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

// ----- 메모: 배경 컬러값: #f0efeb / R:240 G:239 B:235

// Texture Load
const loadingManager = new THREE.LoadingManager();
loadingManager.onStart = () => {
	console.log('로드 시작');
};
loadingManager.onProgress = img => {
	console.log(img + ' 로드 중');
};
loadingManager.onLoad = () => {
	console.log('로드 완료');
};
loadingManager.onError = () => {
	console.log('로드 에러');
};
const textureLoader = new THREE.TextureLoader(loadingManager);

const infoDateTextrue = textureLoader.load(
	'./img/infoDate.png');
const infoArtistTextrue = textureLoader.load(
	'./img/infoArtist.png');
const infoOrgTexture = textureLoader.load(
	'./img/infoOrg.png');
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

var artworkTextures = [texture01,
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


// [Math.floor(Math.random() * artworkTextures.length)];
// infoDateTextrue.wrapS = infoDateTextrue.wrapT = THREE.RepeatWrapping;



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
// scene.fog = new THREE.Fog('#f0efeb', 1, 200);
scene.background = new THREE.Color('black');

// Camera
const camera = new THREE.PerspectiveCamera(
	95,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
camera.position.set(100, 100, 20); //desktop
// camera.position.set(100, 100, 250); //mobile
scene.add(camera);

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
controls.maxDistance = 200;


//Geometry
// const circleGeometry = new THREE.CircleGeometry(100, 132);
const bgSphereGeometry = new THREE.SphereGeometry(100, 132, 132);
const infoDateGeometry = new THREE.PlaneGeometry(135, 45);
const infoArtistGeometry = new THREE.PlaneGeometry(110, 100);
const infoOrgGeometry = new THREE.PlaneGeometry(140, 20);


//Material
// const circleMaterial = new THREE.MeshStandardMaterial({
// 	color: '#f0efeb'
// });
const bgSphereMaterial = new THREE.MeshBasicMaterial({
	map: randTexture,
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

// Mesh
// const circle = new THREE.Mesh(circleGeometry, circleMaterial);
const bgSphere = new THREE.Mesh(bgSphereGeometry, bgSphereMaterial);
const infoDate = new THREE.Mesh(infoDateGeometry, infoDateMaterial);
const infoArtist = new THREE.Mesh(infoArtistGeometry, infoArtistMaterial);
const infoOrg = new THREE.Mesh(infoOrgGeometry, infoOrgMaterial);


// [ Spheres ]
const sphereGeometry = new THREE.SphereGeometry(12, 32, 32);
let sphereMaterial;

const spheres = [];
let sphere;


for (let i = 0; i < artworkTextures.length; i++) {


	var randTexture = artworkTextures[Math.floor(Math.random() * (artworkTextures.length))];


	// console.log(randTexture);

	sphereMaterial = new THREE.MeshBasicMaterial({
		side: DoubleSide,
		map: randTexture
	});


	sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
	sphere.position.x = (Math.random() - 0.5) * 130;
	sphere.position.y = (Math.random() - 0.5) * 120;
	sphere.position.z = (Math.random() - 0.5) * 130;

	scene.add(sphere);
	spheres.push(sphere);
}


// circle.rotation.x = - Math.PI * 0.5;
// circle.position.set(0, 0, 0);
bgSphere.rotation.x = -Math.PI * 0.5;
infoDate.position.set(0, 20, -60);
infoDate.rotation.set(0, 0, 0);
infoArtist.rotation.x = -Math.PI * 0.5;
infoArtist.position.set(0, 0.5, 0);
infoOrg.position.set(0, 10, 60);
bgSphere.position.set(0, 0, 0);


scene.add(bgSphere, infoDate, infoArtist, infoOrg);



// 그리기
const clock = new THREE.Clock();

function draw() {
	const delta = clock.getDelta();
	const time = clock.getElapsedTime();
	const timer = 0.0001 * Date.now();


	bgSphere.rotation.y = time * 0.3;

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
	spheres[14].rotation.y = time * 0.1;
	spheres[15].rotation.z = time * 0.3;



	// spheres[0].position.y = 60 * (Math.cos( 5 * timer + 1 ));

	// spheres[1].position.y = 60 * (Math.cos( 15 * timer + 1 ));

	for (let i = 0, il = spheres.length; i < il; i++) {

		const sphere = spheres[i];
		// ( Math.random() * 100 )

		sphere.position.x = 50 * (Math.cos(1 * timer + i));
		sphere.position.y = 50 * (Math.sin(2 * timer + i));
		// sphere.position.z = 10 * (Math.cos( 10 * timer + i ));
		// sphere.position.z = 30 * (Math.cos( 10 * timer + i ));


		// sphere.position.y = ( Math.random() * 50 ) * Math.sin( timer + i * 1.1 );
		// sphere.position.z = ( Math.random() * 50 ) * Math.sin( timer + i * 1.1 );
	}

	open.addEventListener('click', () => {
		anim.play();
		camera.position.set(100, 100, 50); //desktop

	})

	controls.update();

	renderer.render(scene, camera);
	renderer.setAnimationLoop(draw);
}

console.log(sphere.position.x, sphere.position.y, sphere.position.z);

function setSize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.render(scene, camera);
}

// 이벤트
window.addEventListener('resize', setSize);

const preventDragClick = new PreventDragClick(canvas);

draw();