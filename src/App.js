import { Canvas } from "@react-three/fiber";
import { useGLTF , Stage , PresentationControls } from "@react-three/drei";

function Model (props)
{
  const { scene } = useGLTF("/Emoji.glb");
  return <primitive object={scene} {...props}></primitive>
}


function App() {
  return (
   <Canvas style={{"position" :"absolute"}}>
    <color attach="background" args={["#000000"]}></color>
    <PresentationControls speed={1.5} global zoom={.5 }>
      <Stage>
        <Model scale={0.01} ></Model>
      </Stage>
    </PresentationControls>
   </Canvas>
  );
}

export default App;
