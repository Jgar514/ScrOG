import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
	const { nodes, materials } = useGLTF("scrognolight.glb");

	return (
		<group {...props} dispose={null}>
			<group position={[-0, 0, 0]} rotation={[-0.028, 0.23, 0.012]} scale={0.023}>
				<mesh castShadow receiveShadow geometry={nodes.Cylinder034_1.geometry} material={materials["Material.002"]} />
				<mesh castShadow receiveShadow geometry={nodes.Cylinder034_2.geometry} material={materials["Material.001"]} />
				<mesh castShadow receiveShadow geometry={nodes.Cylinder034_3.geometry} material={materials["Material.005"]} />
				<mesh castShadow receiveShadow geometry={nodes.Cylinder034_4.geometry} material={materials["Material.007"]} />
				<mesh castShadow receiveShadow geometry={nodes.Cylinder034_5.geometry} material={materials["Material.006"]} />
				<mesh castShadow receiveShadow geometry={nodes.Cylinder034_6.geometry} material={materials["Material.008"]} />
			</group>
		</group>
	);
}

useGLTF.preload("/scrognolight.glb");
