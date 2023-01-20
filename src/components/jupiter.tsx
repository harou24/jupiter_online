import React from 'react';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Jupiter = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Get the canvas DOM element
        const canvas = canvasRef.current;

        // Create the Three.js renderer
        const renderer = new THREE.WebGLRenderer({canvas});
        renderer.setSize(window.innerWidth, window.innerHeight)
        

        // Create the Three.js scene
        const scene = new THREE.Scene();

        // Create a camera
        const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
        camera.position.z = 5;

        // Create Jupiter
        const jupiter = createJupiter();
        scene.add(jupiter);

        // Create a light
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(1, 0, 1);
        scene.add(light);

        // Render loop
        const render = () => {
            jupiter.rotation.y += 0.003;
            renderer.render(scene, camera);
            requestAnimationFrame(render);
        }
        render();

    }, []);
    return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

const createJupiter = () => {
    // Load the Jupiter texture
    const texture = new THREE.TextureLoader().load('jupiter3.jpg');

    // Create the Jupiter geometry
    const geometry = new THREE.SphereGeometry(2, 64, 64);

    // Create the Jupiter material
    const material = new THREE.MeshPhongMaterial({map: texture});

    // Create the Jupiter mesh
    const mesh = new THREE.Mesh(geometry, material);

    return mesh;
}

export default Jupiter;
