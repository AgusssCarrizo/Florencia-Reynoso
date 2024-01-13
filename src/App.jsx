import "./index.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./assets/Assets/Header";
import Hero from "./assets/Assets/Hero";
import Muestra from "./assets/Assets/Muestra";
import Testimonial from "./assets/Assets/Testimonial";
import Footer from "./assets/Assets/Footer";
import Ubicacion from "./assets/Assets/Ubicacion";
import Kinesiologia from "./assets/Assets/Kinesiologia";

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Header />}>
                  <Route index element={<Hero />}/>
                  <Route path="Kinesiologia" element={<Kinesiologia/>}}/>
                

               </Route>
            </Routes>
         </BrowserRouter>
         <Header />
         <Hero />
         <Muestra />
         <Testimonial />
         <Ubicacion />
         <Footer />
      </>
   );
}

export default App;
