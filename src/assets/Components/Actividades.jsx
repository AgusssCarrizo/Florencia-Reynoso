import React from "react";

export default function Actividades() {
   return (
      <div className="grid grid-flow-dense lg:grid-cols-3 w-5/6 mx-auto gap-6 items-center ">
         <div className="rounded-lg my-3 ">
            <img
               src="https://res.cloudinary.com/diotu9grj/image/upload/v1708148535/Circuito_kxokvv.jpg"
               alt="Pilates circuito"
               className="w-full rounded-t"
            />
            <h4 className="text-sm bg-green-200 h-6 rounded-b font-mono">
               Pilates circuito
            </h4>
         </div>
         <div className="my-3  ">
            <img
               src="https://res.cloudinary.com/diotu9grj/image/upload/v1708148540/Pilates-embarazadas_gic21s.jpg"
               alt="Pilates para embarazadas"
               className="w-full h-full rounded-t "
            />
            <h4 className="text-sm bg-green-200 h-6 rounded-b font-mono">
               Pilates para embarazadas
            </h4>
         </div>
         <div className="my-3 ">
            <img
               src="https://res.cloudinary.com/diotu9grj/image/upload/v1708148538/Pilates-mix_hokwuh.jpg"
               alt="Pilates mix"
               className="  h-full rounded-t"
            />
            <h4 className="text-sm bg-green-200 h-6 rounded-b font-mono">
               Pilates mix
            </h4>
         </div>
         <div className="grid col-start-2 col-end-3 my-3">
            <img
               src="https://res.cloudinary.com/diotu9grj/image/upload/v1708148549/Reformer_gu4trr.jpg"
               alt="Pilates reformer"
               className="w-full  h-full rounded-t"
            />
            <h4 className="text-sm  bg-green-200 h-6 rounded-b font-mono">
               Pilates reformer
            </h4>
         </div>
      </div>
   );
}
