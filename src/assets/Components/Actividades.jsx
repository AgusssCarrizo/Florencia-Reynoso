import React from "react";

export default function Actividades() {
   return (
      <div className="grid grid-cols-2 lg:grid-cols-3 w-5/6 mx-auto gap-6">
         <div>
            <img
               src="src/assets/img/Pilates/Circuito.jpeg"
               alt="Fisioterapia"
            />
         </div>
         <div>
            <img
               src="src/assets/img/Pilates/Pilates-embarazadas.jpeg"
               alt="Fisioterapia"
            />
         </div>
         <div>
            <img
               src="src/assets/img/Pilates/Pilates-mix.jpg"
               alt="Fisioterapia"
            />
         </div>
         <div>
            <img src="src/assets/img/Pilates/Reformer.jpg" alt="Fisioterapia" />
         </div>
      </div>
   );
}
