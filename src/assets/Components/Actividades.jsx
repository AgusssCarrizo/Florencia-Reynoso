import React from "react";

export default function Actividades() {
   return (
      <div className="grid grid-flow-dense lg:grid-cols-3 w-5/6 mx-auto gap-6 items-center ">
         <div className="rounded-lg my-3 ">
            <img
               src="src/assets/img/Pilates/Circuito.jpeg"
               alt="Pilates circuito"
               className="w-full rounded-t"
            />
            <h4 className="text-sm bg-green-200 h-6 rounded-b">
               Pilates circuito
            </h4>
         </div>
         <div className="my-3  ">
            <img
               src="src/assets/img/Pilates/Pilates-embarazadas.jpeg"
               alt="Pilates para embarazadas"
               className="w-full h-full rounded-t "
            />
            <h4 className="text-sm bg-green-200 h-6 rounded-b">
               Pilates para embarazadas
            </h4>
         </div>
         <div className="my-3 ">
            <img
               src="src/assets/img/Pilates/Pilates-mix.jpg"
               alt="Pilates mix"
               className="  h-full rounded-t"
            />
            <h4 className="text-sm bg-green-200 h-6 rounded-b">Pilates mix</h4>
         </div>
         <div className="grid col-start-2 col-end-3 my-3">
            <img
               src="src/assets/img/Pilates/Reformer.jpg"
               alt="Pilates reformer"
               className="w-full  h-full rounded-t"
            />
            <h4 className="text-sm  bg-green-200 h-6 rounded-b">
               Pilates reformer
            </h4>
         </div>
      </div>
   );
}
