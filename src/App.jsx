// import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Model1 from "./Model1";
import { Suspense } from "react";
import { Environment, OrbitControls, Stage, Backdrop } from "@react-three/drei";
import "./styles.css";
import "@fontsource/cormorant-garamond/500-italic.css";
import "@fontsource/cormorant-garamond/600-italic.css";

function App() {
	return (
		<div className="App">
			<section className="mx-auto relative w-full h-screen mx-auto bg-[transparent]">
				<div className={"absolute bottom-20 md:bottom-24 w-full flex justify-center items-center md:justify-end  pt-10 md:pr-40"}>
					<div>
						<h1 className={`text-white italic; text-[98px] md:text-[116px]`}>
							Scr<span className={"italic text-[#586F56]"}>OG</span>
							{/* <br />
							Garvey */}
						</h1>
						<p className={`italic text-[#586F56] mt-0 pb-10 font- text-[29px]`}>| Screen Of Green |</p>
					</div>
				</div>
				<Canvas gl={{ preserveDrawingBuffer: true }} shadows camera={{ position: [0, 5, 13], fov: 70 }}>
					{/* <Canvas gl={{ preserveDrawingBuffer: true }} dpr={1.5} camera={{ position: [0, 0.5, 6], fov: 35 }}> */}
					<Suspense fallback={null}>
						{/* <gridHelper />
					<axesHelper args={[5]} /> */}
						<Model1 />
						{/* <Stage adjustCamera intensity={0.6} shadows="contact" environment="apartment"> */}
						{/* <rectAreaLight intensity={0.5} position={[0, 8.5, 2.6]} lookAt={[0, 0, 0]} width={18} height={10} /> */}
						<spotLight intensity={3.5} position={[0, 8.5, -0]} castShadow="true" />
						<ambientLight />
						{/* <Stage /> */}
						{/* <Model1 />
					</Stage> */}
						<OrbitControls autoRotate={true} />

						{/* <Environment preset="sunset" background /> */}
					</Suspense>
				</Canvas>
			</section>
		</div>
	);
}

export default App;
