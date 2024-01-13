import React from "react";
import Hero from "./Hero.jsx";
import Muestra from "./Muestra.jsx";
import Testimonial from "./Testimonial.jsx";
import Ubicacion from "./Ubicacion";

export default function Home() {
   return (
      <div>
         <Hero />
         <Muestra />
         <Testimonial />
         <Ubicacion />
      </div>
   );
}
