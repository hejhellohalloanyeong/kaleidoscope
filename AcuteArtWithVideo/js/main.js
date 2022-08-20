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

// videoTexture	


		let video01 = document.getElementById( 'video01_ADensityNew' );
		let video02 = document.getElementById( 'video02_AllAtAnyTime' );
		let video03 = document.getElementById( 'video03_GiantDOKU' );
		let video04 = document.getElementById( 'video04_HolidaySpace' );
		let video05 = document.getElementById( 'video05_ImaginaryFriend' );
		let video06 = document.getElementById( 'video06_Language' );
		let video07 = document.getElementById( 'video07_LightBulbMan' );
		let video08 = document.getElementById( 'video08_LOVE' );
		let video09 = document.getElementById( 'video09_Lune' );
		let video10 = document.getElementById( 'video10_MaratusSpecious' );
		let video11 = document.getElementById( 'video11_RMBCity' );
		let video12 = document.getElementById( 'video12_TheFourTemperaments' );
		let video13 = document.getElementById( 'video13_UltraLightBeamsofLove' );
		let video14 = document.getElementById( 'video14_WillingToBeVulnerable' );
		let video15 = document.getElementById( 'video15_Worm' );
		let video16 = document.getElementById( 'video16_WunderkammerCluster' );
	

		video01.onloadeddata = function () {video01.play()};
		video02.onloadeddata = function () {video02.play()};
		video03.onloadeddata = function () {video03.play()};
		video04.onloadeddata = function () {video04.play()};
		video05.onloadeddata = function () {video05.play()};
		video06.onloadeddata = function () {video06.play()};
		video07.onloadeddata = function () {video07.play()};
		video08.onloadeddata = function () {video08.play()};
		video09.onloadeddata = function () {video09.play()};
		video10.onloadeddata = function () {video10.play()};
		video11.onloadeddata = function () {video11.play()};
		video12.onloadeddata = function () {video12.play()};
		video13.onloadeddata = function () {video13.play()};
		video14.onloadeddata = function () {video14.play()};
		video15.onloadeddata = function () {video15.play()};
		video16.onloadeddata = function () {video16.play()};


		
		let video01Texture = new THREE.VideoTexture( video01 );
		let video02Texture = new THREE.VideoTexture( video02 );
		let video03Texture = new THREE.VideoTexture( video03 );
		let video04Texture = new THREE.VideoTexture( video04 );
		let video05Texture = new THREE.VideoTexture( video05 );
		let video06Texture = new THREE.VideoTexture( video06 );
		let video07Texture = new THREE.VideoTexture( video07 );
		let video08Texture = new THREE.VideoTexture( video08 );
		let video09Texture = new THREE.VideoTexture( video09 );
		let video10Texture = new THREE.VideoTexture( video10 );
		let video11Texture = new THREE.VideoTexture( video11 );
		let video12Texture = new THREE.VideoTexture( video12 );
		let video13Texture = new THREE.VideoTexture( video13 );
		let video14Texture = new THREE.VideoTexture( video14 );
		let video15Texture = new THREE.VideoTexture( video15 );
		let video16Texture = new THREE.VideoTexture( video16 );
	

		video01Texture.minFilter = THREE.LinearFilter;
		video01Texture.magFilter = THREE.LinearFilter;
		video02Texture.minFilter = THREE.LinearFilter;
		video02Texture.magFilter = THREE.LinearFilter;
		video03Texture.minFilter = THREE.LinearFilter;
		video03Texture.magFilter = THREE.LinearFilter;
		video04Texture.minFilter = THREE.LinearFilter;
		video04Texture.magFilter = THREE.LinearFilter;
		video05Texture.minFilter = THREE.LinearFilter;
		video05Texture.magFilter = THREE.LinearFilter;
		video06Texture.minFilter = THREE.LinearFilter;
		video06Texture.magFilter = THREE.LinearFilter;
		video07Texture.minFilter = THREE.LinearFilter;
		video07Texture.magFilter = THREE.LinearFilter;
		video08Texture.minFilter = THREE.LinearFilter;
		video08Texture.magFilter = THREE.LinearFilter;
		video09Texture.minFilter = THREE.LinearFilter;
		video09Texture.magFilter = THREE.LinearFilter;
		video10Texture.minFilter = THREE.LinearFilter;
		video10Texture.magFilter = THREE.LinearFilter;
		video11Texture.minFilter = THREE.LinearFilter;
		video11Texture.magFilter = THREE.LinearFilter;
		video12Texture.minFilter = THREE.LinearFilter;
		video12Texture.magFilter = THREE.LinearFilter;
		video13Texture.minFilter = THREE.LinearFilter;
		video13Texture.magFilter = THREE.LinearFilter;
		video14Texture.minFilter = THREE.LinearFilter;
		video14Texture.magFilter = THREE.LinearFilter;
		video15Texture.minFilter = THREE.LinearFilter;
		video15Texture.magFilter = THREE.LinearFilter;
		video16Texture.minFilter = THREE.LinearFilter;
		video16Texture.magFilter = THREE.LinearFilter;


		video01Texture.name = 'video_01';
		video02Texture.name = 'video_02';
		video03Texture.name = 'video_03';
		video04Texture.name = 'video_04';
		video05Texture.name = 'video_05';
		video06Texture.name = 'video_06';
		video07Texture.name = 'video_07';
		video08Texture.name = 'video_08';
		video09Texture.name = 'video_09';
		video10Texture.name = 'video_10';
		video11Texture.name = 'video_11';
		video12Texture.name = 'video_12';
		video13Texture.name = 'video_13';
		video14Texture.name = 'video_14';
		video15Texture.name = 'video_15';
		video16Texture.name = 'video_16';

		video01Texture.wrapS = video01Texture.wrapT = THREE.ClampToEdgeWrapping;
		video02Texture.wrapS = video02Texture.wrapT = THREE.ClampToEdgeWrapping;
		video03Texture.wrapS = video03Texture.wrapT = THREE.ClampToEdgeWrapping;
		video04Texture.wrapS = video04Texture.wrapT = THREE.ClampToEdgeWrapping;
		video05Texture.wrapS = video05Texture.wrapT = THREE.ClampToEdgeWrapping;
		video06Texture.wrapS = video06Texture.wrapT = THREE.ClampToEdgeWrapping;
		video07Texture.wrapS = video07Texture.wrapT = THREE.ClampToEdgeWrapping;
		video08Texture.wrapS = video08Texture.wrapT = THREE.ClampToEdgeWrapping;
		video09Texture.wrapS = video09Texture.wrapT = THREE.ClampToEdgeWrapping;
		video10Texture.wrapS = video10Texture.wrapT = THREE.ClampToEdgeWrapping;
		video11Texture.wrapS = video11Texture.wrapT = THREE.ClampToEdgeWrapping;
		video12Texture.wrapS = video12Texture.wrapT = THREE.ClampToEdgeWrapping;
		video13Texture.wrapS = video13Texture.wrapT = THREE.ClampToEdgeWrapping;
		video14Texture.wrapS = video14Texture.wrapT = THREE.ClampToEdgeWrapping;
		video15Texture.wrapS = video15Texture.wrapT = THREE.ClampToEdgeWrapping;
		video16Texture.wrapS = video16Texture.wrapT = THREE.ClampToEdgeWrapping;
	

var artworkTextures = [
	video01Texture,
	video02Texture,
	video03Texture,
	video04Texture,
	video05Texture,
	video06Texture,
	video07Texture,
	video08Texture,
	video09Texture,
	video10Texture,
	video11Texture,
	video12Texture,
	video13Texture,
	video14Texture,
	video15Texture,
	video16Texture
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
// scene.fog = new THREE.Fog('#f0efeb', 1, 200);
scene.background = new THREE.Color('black');

// Camera
const camera = new THREE.PerspectiveCamera(
	95,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);



// camera.position.set(100, 100, 50); //desktop
// // camera.position.set(100, 100, 250); //mobile
// scene.add(camera);









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


// introSphere 포스터 텍스쳐 구

const introSphereMaterial = new THREE.MeshBasicMaterial({
	map: randTexture
})
const introSphereGeometry = new THREE.SphereGeometry(101, 132, 132);
const introSphere = new THREE.Mesh(introSphereGeometry, introSphereMaterial);
introSphere.position.set(0, 0, 0);
introSphere.rotation.x = -Math.PI * 0.5;
scene.add(introSphere);


//Geometry
// const circleGeometry = new THREE.CircleGeometry(100, 132);
const bgSphereGeometry = new THREE.SphereGeometry(100, 132, 132);
const infoDateGeometry = new THREE.PlaneGeometry(78, 26);
const infoArtistGeometry = new THREE.PlaneGeometry(112.5, 100);
const infoOrgGeometry = new THREE.PlaneGeometry(120, 10);
const infoTitleGeometry = new THREE.PlaneGeometry(50, 12.5);


//Material
// const circleMaterial = new THREE.MeshStandardMaterial({
// 	color: '#f0efeb'
// });
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
// const circle = new THREE.Mesh(circleGeometry, circleMaterial);
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

	console.log(randTexture);
	// console.log(randTexture);

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



// circle.rotation.x = - Math.PI * 0.5;
// circle.position.set(0, 0, 0);
bgSphere.rotation.x = -Math.PI * 0.5;
bgSphere.position.set(0, 0, 0);
infoDate.position.set(-12, 15, -70);
infoArtist.rotation.x = -Math.PI * 0.5;
infoArtist.position.set(0.7, 0, -10);
infoOrg.position.set(0, 10, 50);
infoTitle.position.set(-25, 45, -70);



scene.add(bgSphere, infoDate, infoArtist, infoOrg, infoTitle);
}



// 그리기
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
			console.log('모바일 창 로드');
			camera.position.set(100, 120, 250);
			scene.add(camera);
		} else {
			console.log('데스크톱 창 로드');
			camera.position.set(100, 100, 50);
			scene.add(camera);
		}
		// camera.position.set(100, 100, 500); //desktop

	})


	video01Texture.needsUpdate = true;
	video02Texture.needsUpdate = true;
	video03Texture.needsUpdate = true;
	video04Texture.needsUpdate = true;
	video05Texture.needsUpdate = true;
	video06Texture.needsUpdate = true;


	controls.update();

	renderer.render(scene, camera);
	requestAnimationFrame(draw);
	// renderer.setAnimationLoop(draw);
}



function setSize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.render(scene, camera);
}


// 이벤트




window.addEventListener('resize', setSize);
const preventDragClick = new PreventDragClick(canvas);
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
var meshes = spheres;



canvas.addEventListener('click', e => {
	mouse.x = e.clientX / canvas.clientWidth * 2 - 1;
	mouse.y = -(e.clientY / canvas.clientHeight * 2 - 1);
	// console.log(mouse);
	checkIntersects();
});



function checkIntersects() {
	console.log(preventDragClick.mouseMoved);
	if (preventDragClick.mouseMoved) return;

	raycaster.setFromCamera(mouse, camera);
	const intersects = raycaster.intersectObjects(meshes);

	for (const item of intersects) {
		item.object.name = 'clicked';
		console.log(item.object.name);
		// console.log(bgSphere.material.map);

		bgSphere.material.map = item.object.material.map;
		// item.object.material.color.set('#474747');
		// scene.background = newColor;
		console.log(scene.background);
		break;
	}
}


draw();




