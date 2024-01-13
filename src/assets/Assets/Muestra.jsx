import React from "react";

export default function Muestra() {
   return (
      <div className="flex justify-center  gap-20 my-32 flex-wrap">
         <div className=" bg-Fisioterapia flex justify-center items-center h-80 w-80 rounded-xl text-transparent hover:text-black border border-black bg-cover bg-center cursor-pointer">
            <h2 className="font-bold text-3xl text-center  ">Fisioterapia</h2>
         </div>

         <div className=" bg-Kinesiologia flex justify-center items-center h-80 w-80 rounded-xl text-transparent hover:text-black border border-black bg-cover bg-center cursor-pointer">
            <h2 className="font-bold text-3xl text-center  ">Kinesiologia</h2>
         </div>
      </div>
   );
}
