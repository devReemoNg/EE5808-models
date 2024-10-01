// https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene

import * as THREE from "three";

// VSC import endpoint
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// Codesandbox import endpoint
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

async function createGltfModelsStatic(modalPath) {
	const gltfLoader = new GLTFLoader();
	const gltf = await gltfLoader.loadAsync(modalPath);
	const root = gltf.scene;

	// For root, traverse all the objects for enable Shadows
	root.traverse((obj) => {
		if (obj.castShadow !== undefined) {
			obj.castShadow = true;
			obj.receiveShadow = true;
		}
	});

	return root
}

(async () => {
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(
		55,
		window.innerWidth / window.innerHeight,
		0.1,
		2000,
	);

	// Renderer sence
	const renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMap.enabled = true;
	document.body.appendChild(renderer.domElement);

	let mixer; // new THREE.AnimationMixer

	async function createGltfModels(modalPath) {
		const gltfLoader = new GLTFLoader();
		const gltf = await gltfLoader.loadAsync(modalPath);
		const root = gltf.scene;

		// For root, traverse all the objects for enable Shadows
		root.traverse((obj) => {
			if (obj.castShadow !== undefined) {
				obj.castShadow = true;
				obj.receiveShadow = true;
			}
		});

		// Adding animations to mixer
		mixer = new THREE.AnimationMixer(root);
		gltf.animations.forEach(function (clip) {
			mixer.clipAction(clip).play();
		});

		return root
	}

	// Light
	const light = new THREE.PointLight(0xFFFFFF, 130);
	light.position.set(1, 3, 1);
	light.castShadow = true;
	scene.add(light);

	// Cube
	const geometry = new THREE.BoxGeometry(1, 1, 1);
	const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
	const cube = new THREE.Mesh(geometry, material);
	cube.castShadow = true;
	cube.receiveShadow = true;
	cube.position.set(0, 0.3, 0);
	scene.add(cube);

	const bird = await createGltfModels(
		"https://cdn.jsdelivr.net/gh/devReemoNg/EE5808-models/bird_orange/scene.gltf"
	);

	bird.position.set(0, 0.8, 0);
	scene.add(bird);

	const station = await createGltfModelsStatic(
		"https://cdn.jsdelivr.net/gh/devReemoNg/EE5808-models/metrosubway_station_interior/scene.gltf"
	);
	station.position.set(0, 0.3, 1.2);
	console.log(station);
	scene.add(station);

	let angle = 0;
	const radius = 3.5;

	const clock = new THREE.Clock();
	function animate() {
		// Update camera to follow and spin around the first car
		angle += 0.001;

		// Calculate camera X and Z
		const cameraX = cube.position.x + radius;
		const cameraZ = cube.position.z + radius;

		// Set camera position and object
		camera.position.set(cameraX, 4, cameraZ);

		camera.lookAt(cube.position);
		// camera.lookAt(streetRoad.position);

		mixer.update(clock.getDelta());

		renderer.render(scene, camera);
		requestAnimationFrame(animate);
	}

	requestAnimationFrame(animate);
})();
