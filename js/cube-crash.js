window.onload=function(){
	var camera, scene, renderer;
	var geometry, material, mesh;

	init();
	animate();

		function init() {

		    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
		    camera.position.z = 3000;

		    scene = new THREE.Scene();

		    geometry = new THREE.BoxGeometry(20, 20, 20);
		    material = new THREE.MeshBasicMaterial({
		        color: 0x000000,
		        wireframe: false
		    });

		    mesh = new THREE.Mesh(geometry, material);
		    scene.add(mesh);

		    // Check to see if someone is using a browser that supprts webgl -
		    if ( checkWebGL() ) {
				renderer = new THREE.WebGLRenderer({ alpha: true });
				renderer.setClearColor( 0xffffff, 1 );
			} else {
				renderer = new THREE.CanvasRenderer();
			}
		    
		    renderer.setSize(window.innerWidth, window.innerHeight);

		    document.body.appendChild(renderer.domElement);
		    
		    mesh.position.x = 9500;
		    mesh.position.y = 9500;
		    mesh.position.z = -8800;
			
			
		}

		function animate() {

		    requestAnimationFrame(animate);

		    mesh.rotation.x += 0.01;
		    mesh.rotation.y += 0.02;
		    
		    mesh.position.x = mesh.position.x * 0.997;
		    mesh.position.y = mesh.position.y * 0.997;
		    mesh.position.z += 5;
		    
		    if(camera.position.z > 1000){camera.position.z = camera.position.z * 0.995}
			
			mesh.scale.x += 0.005;
			mesh.scale.y += 0.005;
			mesh.scale.z += 0.005;
			
		    renderer.render(scene, camera);

		}

		// shamelessly stolen from here - http://threejs.org/docs/#Reference/Renderers/CanvasRenderer
		function checkWebGL() {
			try {
				var canvas = document.createElement( 'canvas' );
				return !!( window.WebGLRenderingContext && (
					canvas.getContext( 'webgl' ) ||
					canvas.getContext( 'experimental-webgl' ) )
				);
			} catch ( e ) {
				return false;
			}
		}
}