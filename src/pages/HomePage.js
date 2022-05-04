import {Canvas, useFrame} from '@react-three/fiber';
import {OrbitControls, useGLTF, PerspectiveCamera} from '@react-three/drei';
import Earth from '../assets/earth/Earth.js';

export default function HomePage(){
	return(
		<div className="div--flexCentreColumn">
			<p className="div--homeParagraph">
				A global communication tool
			</p>
			
			{/*3D canvas*/}
			<Canvas className="div--canvasMain">
				<OrbitControls
					position={[0, 0, 0]}
					enableZoom={false}
					autoRotate={true}
					autoRotateSpeed={-5}
					enablePan={false}
					/>
				<Earth scale={[3,3,3]} rotation={[0, 0, (90+23)]}/>
			</Canvas>
			
			{/*paragraph*/}
			<p className="div--homeParagraph">
				Ping chat is a global chat group; Where everyone can communicate with everyone. 
				Created with reactJS on the front-end and powered by firebase on the back-end. It's my exercise in creating a full-stack web-application.
				See more of my works at www.elbertwithane.com
			</p>
		</div>
	)
}
