import React from "react";

export default function Hero() {
   return (
      <div>
         <div
            className="hero min-h-screen  bg-base-200 flex-col lg:flex-row"
            id="asa">
            <div className="hero-content flex-col lg:flex-row w-[70%]  gap-16 mt-11 md:dark:bg-slate-800 h-auto md:dark:rounded-sm md:dark:shadow-lg md:dark:shadow-slate-700">
               <img
                  src="https://images.unsplash.com/photo-1657524433818-938be6f05fab?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="max-w-sm rounded-lg shadow-2xl h-96"
               />
               <div>
                  <h1 className="text-5xl font-bold">Lic. Florencia Reynoso</h1>
                  <h4>M.P Nº: 9735</h4>
                  <p className="py-6">
                     Hola! 👋🏼 Mi nombre es Florencia Reynoso. Egresada de la
                     Licenciatura en Kinesiología y Fisiatría de UGR, Rosario.
                     También Instructora de pilates, área que descubrí en el
                     transcurso de mi vida como estudiante como kine, y me
                     fascinó. Realicé cursos para todos los niveles, en mat y en
                     reformer, esferodinamia y para embarazadas.
                     <br />
                     Soy una profesional capacitada para actuar en distintos
                     ámbitos laborales cumpliendo funciones preventivas y
                     terapéuticas, entre otras.
                     <br />
                     <br />A lo largo de mi carrera tuve la posibilidad de
                     practicar en varias áreas de la kinesiología. Puedo afirmar
                     que me gusta mucho el área de traumatología y deporte, pero
                     también trabajo y disfruto de la rehabilitación neurológica
                     en pacientes adultos mayores y niños.
                  </p>
                  <a href="https://wa.link/w06ugr" target="_blank">
                     <button className="btn bg-green-400 text-white">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="16"
                           height="16"
                           fill="currentColor"
                           class="bi bi-whatsapp"
                           viewBox="0 0 16 16">
                           <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                        </svg>
                        Contactarme
                     </button>
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}
