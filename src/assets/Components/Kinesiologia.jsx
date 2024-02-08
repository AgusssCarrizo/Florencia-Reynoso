import React from "react";

export default function Kinesiologia() {
   return (
      <section className="flex items-center flex-col">
         <div className="w-full px-20 md:w-3/4 text-justify p-5 bg-slate-600 md:bg-slate-100 md:rounded-xl md:dark:bg-slate-600 mt-16">
            <h2 className="text-3xl text-center md:text-left mb-4 font-bold dark:text-slate-300">
               Kinesiologia y fisiatria
            </h2>

            <p className=" font-medium dark:text-slate-200">
               Actividades vinculadas con los procesos de evaluación y
               rehabilitación de las capacidades funcionales de las personas,
               así como en la prevención, rehabilitación e integración para
               lograr la plena inserción de la persona en la sociedad.
            </p>
         </div>
         <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
               <div class="flex flex-col text-center w-full mb-20">
                  <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 dark:text-gray-50">
                     Tratamientos
                  </h1>
               </div>
               <div className="carousel w-full ">
                  <div
                     id="slide1"
                     className="carousel-item relative w-full gap-4">
                     <a href="#slide4" className="btn btn-circle my-auto">
                        ❮
                     </a>
                     <div className="flex rounded-lg h-full w-full  bg-emerald-200  p-8 flex-col  items-center justify-center text-center">
                        <h3 className="text-slate-800 text-lg font-bold  ">
                           Rehabilitación traumatológica y deportiva.
                        </h3>
                     </div>

                     <div className="flex rounded-lg h-full w-full  bg-emerald-200  p-8 flex-col  items-center justify-center text-center">
                        <h3 className="text-slate-800 text-lg font-bold  ">
                           Rehabilitación neurológica.
                        </h3>
                     </div>

                     <div className="flex rounded-lg h-full w-full  bg-emerald-200  p-8 flex-col  items-center justify-center text-center">
                        <h3 className="text-slate-800 text-lg font-bold  ">
                           Kinesiología respiratoria en niños.
                        </h3>
                     </div>

                     <a
                        href="#slide2"
                        className="btn btn-circle justify-center my-auto">
                        ❯
                     </a>
                  </div>
                  <div
                     id="slide2"
                     className="carousel-item relative w-full gap-4">
                     <a href="#slide1" className="btn btn-circle my-auto">
                        ❮
                     </a>
                     <div className="flex rounded-lg h-full w-full  bg-emerald-200  flex-col  items-center justify-center text-center">
                        <h3 className="text-slate-800 text-lg font-bold  ">
                           Terapia manual e instrumental.
                        </h3>
                     </div>
                     <div className="flex rounded-lg h-full w-full  bg-emerald-200  p-8 flex-col  items-center justify-center text-center">
                        <h3 className="text-slate-800 text-lg font-bold  ">
                           Terapia con ventosas para dolor de origen miofascial.
                        </h3>
                     </div>
                     <div className="flex rounded-lg h-full w-full  bg-emerald-200 p-8 flex-col  items-center justify-center text-center">
                        <h3 className="text-slate-800 text-lg font-bold  ">
                           Fisioterapia.
                        </h3>
                     </div>
                     <a href="#slide3" className="btn btn-circle my-auto ">
                        ❯
                     </a>
                  </div>
                  <div
                     id="slide3"
                     className="carousel-item relative w-full  gap-4">
                     <a href="#slide2" className="btn btn-circle my-auto">
                        ❮
                     </a>
                     <div className="flex rounded-lg h-full w-full  bg-emerald-200  flex-col  items-center justify-center text-center">
                        <h3 className="text-slate-800 text-lg font-bold  ">
                           Terapia física en todas las edades, tanto para
                           prevención. como tratamiento.
                        </h3>
                     </div>
                     <div className="flex rounded-lg h-60 w-full  bg-emerald-200  p-8 flex-col  items-center justify-center text-center">
                        <h3 className="text-slate-800 text-lg font-bold  ">
                           Trabajo postural.
                        </h3>
                     </div>

                     <a href="#slide1" className="btn btn-circle my-auto">
                        ❯
                     </a>
                  </div>
               </div>
            </div>
         </section>
      </section>
   );
}
