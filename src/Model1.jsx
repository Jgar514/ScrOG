import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model1(props) {
	const { nodes, materials } = useGLTF("./models/ballscrog2.glb");
	return (
		<group {...props} dispose={null}>
			<group scale={[1, 1, 3.815]}>
				<mesh castShadow receiveShadow geometry={nodes.Cube002.geometry} material={materials["Material.009"]} />
				<mesh castShadow receiveShadow geometry={nodes.Cube002_1.geometry} material={materials["Material.001"]} />
				<mesh castShadow receiveShadow geometry={nodes.Cube002_2.geometry} material={materials["Material.002"]} />
				<mesh castShadow receiveShadow geometry={nodes.Cube002_3.geometry} material={materials["Material.003"]} />
				<mesh castShadow receiveShadow geometry={nodes.Cube002_4.geometry} material={materials["Material.005"]} />
				<mesh castShadow receiveShadow geometry={nodes.Cube002_5.geometry} material={materials["Material.007"]} />
				<mesh castShadow receiveShadow geometry={nodes.Cube002_6.geometry} material={materials["Material.006"]} />
				<mesh castShadow receiveShadow geometry={nodes.Cube002_7.geometry} material={materials["Material.008"]} />
			</group>
			<mesh castShadow receiveShadow geometry={nodes.bottomcube1.geometry} material={materials.bottomcube1} position={[1.012, -3.576, -0.008]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={1.879} onClick={(e) => window.open("https://github.com/Jgar514/ContactHub")} />
		</group>
	);
}

useGLTF.preload("./models/ballscrog2.glb");
