import React from "react";

export default function Hero() {
   return (
      <div>
         <div className="hero min-h-screen  bg-base-200 flex-col lg:flex-row">
            <div className="hero-content flex-col lg:flex-row w-[70%]  gap-16 mt-11 md:dark:bg-slate-800 h-auto md:dark:rounded-sm md:dark:shadow-lg md:dark:shadow-slate-700">
               <img
                  src="https://images.unsplash.com/photo-1657524433818-938be6f05fab?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="max-w-sm rounded-lg shadow-2xl h-96"
               />
               <div>
                  <h1 className="text-5xl font-bold">Lic. Florencia Reynoso</h1>
                  <p className="py-6">
                     Mi nombre es Florencia Reynoso, egresada de la Licenciatura
                     en Kinesiología y Fisiatría de la UGR, e instructora de
                     pilates. Soy una profesional capacitada para actuar en
                     distintos ámbitos laborales cumpliendo funciones
                     preventivas y terapéuticas, entre otros.
                     <br />
                     <br />
                     A lo largo de mi carrera tuve la posibilidad de practicar
                     en varias áreas de la kinesiología. Puedo afirmar que me
                     gusta mucho el área de traumatología y deporte, pero
                     también trabajo y disfruto de la rehabilitación neurológica
                     en pacientes adultos mayores y niños.
                     <br />
                     <br />
                     En cuanto a pilates, fue un área que descubrí en el
                     transcurso de mi vida como estudiante, y me fascinó. Es por
                     eso que realicé cursos para todos los niveles, en mat y en
                     reformer, esferodinamia y para embarazadas.
                  </p>
                  <button className="btn btn-primary">
                     Contactarme
                     <span class="relative flex h-3 w-3">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                     </span>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
