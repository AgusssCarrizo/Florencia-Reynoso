import React from "react";

export default function Kinesiologia() {
   return (
      <section className="flex items-center flex-col">
         <div className="w-full px-20 md:w-3/4 text-justify p-5 bg-slate-600 md:bg-slate-100 md:rounded-xl md:dark:bg-slate-600 mt-16">
            <h2 className="text-3xl text-center md:text-left mb-4 font-bold dark:text-slate-300">
               Kinesiologia y fisiatria
            </h2>

            <p className=" font-medium dark:text-slate-200">
               Intervengo en las actividades vinculadas con los procesos de
               evaluación y rehabilitación de las capacidades funcionales de las
               personas, así como en la prevención, rehabilitación e integración
               para lograr la plena inserción de la persona en la sociedad. Mi
               trabajo en “Espacios” incluye tratamientos traumatológicos y
               deportivos, terapia manual e instrumental, fisioterapia,
               rehabilitación y terapia física en todas las edades, y también
               trabajo postural. Las herramientas que me brinda este lugar de
               trabajo son muchísimas, y gracias a eso el abanico terapéutico es
               enorme.
            </p>
         </div>
         <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
               <div class="flex flex-col text-center w-full mb-20">
                  <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 dark:text-gray-50">
                     Resultados positivos de estos ejercicios
                  </h1>
               </div>
               <div class="flex flex-wrap justify-center -m-4 ">
                  <div class="p-4 md:w-1/3 ">
                     <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col  items-center">
                        <div class="flex items-center  mb-3">
                           <h2 class="text-gray-900 text-lg title-font font-medium">
                              Algo
                           </h2>
                        </div>
                        <div class="flex flex-col items-center">
                           <p class="leading-relaxed text-base text-center">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Ut.
                           </p>
                           <a class="mt-3 text-indigo-500 inline-flex items-center">
                              Learn More
                              <svg
                                 fill="none"
                                 stroke="currentColor"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-width="2"
                                 class="w-4 h-4 ml-2"
                                 viewBox="0 0 24 24">
                                 <path d="M5 12h14M12 5l7 7-7 7"></path>
                              </svg>
                           </a>
                        </div>
                     </div>
                  </div>
                  <div class="p-4 md:w-1/3">
                     <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col items-center">
                        <div class="flex items-center mb-3 items">
                           <h2 class="text-gray-900 text-lg title-font font-medium">
                              algo.
                           </h2>
                        </div>
                        <div class="flex-grow">
                           <p class="leading-relaxed text-base text-center">
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div class="p-4 md:w-1/3">
                     <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col items-center">
                        <div class="flex items-center mb-3">
                           <h2 class="text-gray-900 text-lg title-font font-medium">
                              Algo
                           </h2>
                        </div>
                        <div class="flex-grow">
                           <p class="leading-relaxed text-base text-center">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Id, similique asperiores!
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </section>
   );
}
