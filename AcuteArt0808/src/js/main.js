import * as THREE from './three.module.js';
import { OrbitControls } from './OrbitControls.js';
import { DoubleSide } from './three.module.js';
import { PreventDragClick } from './PreventDragClick.js';

// ----- 메모: 배경 컬러값: #f0efeb / R:240 G:239 B:235

	// Texture Load
	const loadingManager = new THREE.LoadingManager();
	loadingManager.onStart = () => {
		console.log('로드 시작');
	};
	loadingManager.onProgress = img => {
		console.log( img + ' 로드 중');
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
		'./img/testimg.png');

	const textureCube = new THREE.CubeTextureLoader()
	.setPath( 'textures/cubemap/' )
	.load( [ 'px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png' ] );
	textureCube.mapping = THREE.CubeRefractionMapping;
	
// videoTexture	
	const video01 = document.getElementById( 'video01_ADensityNew' );
	const video02 = document.getElementById( 'video02_AllAtAnyTime' );
	const video03 = document.getElementById( 'video03_GiantDOKU' );
	const video04 = document.getElementById( 'video04_HolidaySpace' );
	const video05 = document.getElementById( 'video05_ImaginaryFriend' );
	const video06 = document.getElementById( 'video06_Language' );

	video01.onloadeddata = function () {video01.play()};
	video02.onloadeddata = function () {video02.play()};
	video03.onloadeddata = function () {video03.play()};
	video04.onloadeddata = function () {video04.play()};
	video05.onloadeddata = function () {video05.play()};
	video06.onloadeddata = function () {video06.play()};

	const video01Texture = new THREE.VideoTexture( video01 );
	const video02Texture = new THREE.VideoTexture( video02 );
	const video03Texture = new THREE.VideoTexture( video03 );
	const video04Texture = new THREE.VideoTexture( video04 );
	const video05Texture = new THREE.VideoTexture( video05 );
	const video06Texture = new THREE.VideoTexture( video06 );
	
	video01Texture.needsUpdate = true;
	video02Texture.needsUpdate = true;
	video03Texture.needsUpdate = true;
	video04Texture.needsUpdate = true;
	video05Texture.needsUpdate = true;
	video06Texture.needsUpdate = true;

	video01Texture.name = 'video_01';
	video02Texture.name = 'video_02';
	video03Texture.name = 'video_03';
	video04Texture.name = 'video_04';
	video05Texture.name = 'video_05';
	video06Texture.name = 'video_06';

	video01Texture.wrapS = video01Texture.wrapT = THREE.ClampToEdgeWrapping;
	video02Texture.wrapS = video02Texture.wrapT = THREE.ClampToEdgeWrapping;
	video03Texture.wrapS = video03Texture.wrapT = THREE.ClampToEdgeWrapping;
	video04Texture.wrapS = video04Texture.wrapT = THREE.ClampToEdgeWrapping;
	video05Texture.wrapS = video05Texture.wrapT = THREE.ClampToEdgeWrapping;
	video06Texture.wrapS = video06Texture.wrapT = THREE.ClampToEdgeWrapping;

// infoDateTextrue.wrapS = infoDateTextrue.wrapT = THREE.RepeatWrapping;


	var texturesListHor = [
		video01Texture, 
		video02Texture];
		
	var texturesListVer = [
		video03Texture, 
		video04Texture, 
		video05Texture,
		video06Texture];


	// var randTextureHor = texturesListHor[Math.floor(Math.random() * texturesListHor.length)];
	// var randTextureVer = texturesListVer[Math.floor(Math.random() * texturesListVer.length)];

	// console.log(randTextureHor.name + ' 랜덤 로드');	
	// console.log(randTextureVer.name + ' 랜덤 로드');	



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
		85,
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

	const pointLight = new THREE.PointLight( 'white', 1, 100 );
	pointLight.position.set( 10, 200, 10 );
	scene.add( pointLight );
	


	 

	// Controls
	const controls = new OrbitControls(camera, renderer.domElement);
	controls.maxPolarAngle = Math.PI / 2;
	controls.enableDamping = true;
	controls.maxDistance = 200;




//Geometry
	// const circleGeometry = new THREE.CircleGeometry(100, 132);
	const bgSphereGeometry  = new THREE.SphereGeometry(100, 132, 132);
	const infoDateGeometry = new THREE.PlaneGeometry(135, 45);
	const infoArtistGeometry = new THREE.PlaneGeometry(110, 100);
	const infoOrgGeometry = new THREE.PlaneGeometry(140, 20);


//Material
	// const circleMaterial = new THREE.MeshStandardMaterial({
	// 	color: '#f0efeb'
	// });
	const bgSphereMaterial = new THREE.MeshBasicMaterial({
		map: texture01,
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
	const sphereMaterial = new THREE.MeshBasicMaterial({
		// envMap: textureCube, 
		// refractionRatio: 0.8,
		map: texture01,
		side: DoubleSide
	});
	const spheres = [];
	let sphere;
	for (let i = 0; i < 16; i++) {
		sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
		sphere.position.x = (Math.random() - 0.5) * 130;
		sphere.position.y = (Math.random() - 0.5) * 130;
		sphere.position.z = (Math.random() - 0.5) * 130;



		// sphere.position.x = Math.random() * 50 - 5;
		// sphere.position.y = Math.random() * 50 - 5;
		// sphere.position.z = Math.random() * 50 - 5;
		// sphere.rotation.y = (Math.random() - 0.5) * 100;
		scene.add(sphere);
		spheres.push(sphere);
	}


	// circle.rotation.x = - Math.PI * 0.5;
	// circle.position.set(0, 0, 0);
	bgSphere.rotation.x = -Math.PI * 0.5;
	infoDate.position.set(0, 20, -60);
	infoDate.rotation.set(0, 0, 0);
	infoArtist.rotation.x = - Math.PI * 0.5;
	infoArtist.position.set(0, 0.5, 0);
	infoOrg.position.set(0, 10, 60);
	bgSphere.position.set(0, 0, 0);
	

	scene.add(bgSphere, infoDate, infoArtist, infoOrg);


	
	// 그리기
	const clock = new THREE.Clock();

	function draw() {
		const delta = clock.getDelta();
        const time = clock.getElapsedTime();
		const timer = 0.1 * Date.now();


		bgSphere.rotation.y =  time * 0.1;

		// spheres[0].position.x += Math.cos(time) * 0.1;

		// for ( let i = 0, il = spheres.length; i < il; i ++ ) {

		// 			const sphere = spheres[ i ];
		// 			// ( Math.random() * 100 )
		// 			sphere.position.x = ( Math.random() * 50 ) * Math.cos( timer + i );
		// 			// sphere.position.y = ( Math.random() * 50 ) * Math.sin( timer + i * 1.1 );
		// 			// sphere.position.z = ( Math.random() * 50 ) * Math.sin( timer + i * 1.1 );


		// 		}


		open.addEventListener('click', () => {
			anim.play();
			camera.position.set(100, 100, 50); //desktop
			
		})


	
		controls.update();

		renderer.render(scene, camera);
		renderer.setAnimationLoop(draw);
	}
	
	
	console.log(sphere.position.x, sphere.position.y ,sphere.position.z );
	

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
