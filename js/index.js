/*
BASIC THREE.JS TEMPLATE
Max Rose -->  July 4th, 2016 
INDEPENDANCE DAY 
*/

//Init of camera, scene and renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({alpha : true});

//Init of Renderer and Canvas
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setClearColor(0xf7e6f6, 0);

//Camera Controls
var controls;
controls = new THREE.OrbitControls( camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

//Ground Helper
var ground = new THREE.GridHelper(10, 0.5, 0xd3d3d3, 0xd3d3d3);
ground.position.y = - 2;
scene.add(ground);

//Basic Box Setup 
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var geometry = new THREE.BoxGeometry(1, 1, 1);
var cube = new THREE.Mesh(geometry, material);
var cube2 = new THREE.Mesh(geometry, material);

scene.add(cube, cube2);
camera.position.z = 5;

//Main Render Function 
var render = function() {
    requestAnimationFrame( render );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube2.position.x = 1;
    
    controls.update();
    renderer.render(scene, camera);
    };

render();