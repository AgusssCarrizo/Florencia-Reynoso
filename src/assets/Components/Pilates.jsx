import Actividades from "./Actividades";

export default function Kinesiologia() {
   return (
      <section className="flex items-center flex-col">
         <div className="w-full px-20 md:w-3/4 text-justify p-5 bg-slate-600 md:bg-slate-100 md:rounded-xl md:dark:bg-slate-600 mt-16">
            <h2 className="text-3xl text-center md:text-left mb-4 font-bold dark:text-slate-300">
               Pilates
            </h2>

            <p className=" font-medium dark:text-slate-200">
               Pilates es mucho más que un método. Se trata de toda una
               filosofía de entrenamiento del cuerpo y la mente. Su objetivo es
               lograr un control preciso del cuerpo de la forma más saludable y
               eficiente posible. En definitiva, conseguir un equilibrio
               muscular, reforzando los músculos débiles y alargando los
               músculos acortados. Esto lleva a aumentar el control, la fuerza y
               la flexibilidad del cuerpo, respetando cada articulación. De este
               modo, el método permite al practicante conseguir la armonía del
               cuerpo y mente, y desarrollar sus movimientos con gracia y
               equilibrio.
            </p>
         </div>
         <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
               <div class="flex flex-col text-center w-full mb-20">
                  <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 dark:text-gray-50">
                     Tratamientos
                     <Actividades />
                  </h1>
               </div>
            </div>
         </section>
      </section>
   );
}
