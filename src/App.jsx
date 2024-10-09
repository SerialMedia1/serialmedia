import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { useMemo } from "react";
import { Experience } from "./components/Experience";
import { Overlay } from "./components/Overlay";
import { usePlay } from "./contexts/Play";
import Careers from "./pages/Careers";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar"
import AboutUs from "./pages/AboutUs";


import { ScrollControls } from "@react-three/drei"; // Import ScrollControls


function App() {
  const { play, end } = usePlay();

  const effects = useMemo(
    () => (
      <EffectComposer>
        <Noise opacity={0.08} />
      </EffectComposer>
    ),
    []
  );

  return (
    <Router>
      {/* <Navbar showHeader={false}/> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
            <Navbar showHeader={false}/>
              <Canvas>
                <color attach="background" args={["#ececec"]} />
                <ScrollControls
                  pages={play && !end ? 20 : 0}
                  damping={0.5}
                  style={{
                    top: "10px",
                    left: "0px",
                    bottom: "10px",
                    right: "10px",
                    width: "auto",
                    height: "auto",
                    animation: "fadeIn 2.4s ease-in-out 1.2s forwards",
                    opacity: 0,
                  }}
                >
                  <Experience />
                </ScrollControls>
                {effects}
              </Canvas>
              <Overlay />
            </>
          }
        />
        <Route path="/careers" element={<Careers />} /> {/* Careers page route */}
        <Route path="/services" element={<Services />} /> {/* Services page route */}
        <Route path="/contact" element={<ContactUs />} /> {/* Services page route */}
        <Route path="/about" element={<AboutUs />} /> {/* Services page route */}



      </Routes>
    </Router>
  );
}

export default App;
