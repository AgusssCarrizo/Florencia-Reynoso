import React from "react";

export default function Kinesiologia() {
   return (
      <section className="flex w-screen items-center flex-col">
         <div className="w-full px-20 md:w-3/4 text-justify p-5  md:rounded-xl dark:bg-slate-600 mt-16">
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
         <section class="text-gray-600 body-font w-11/12 flex flex-col justify-center  items h-[500px]">
            <div class="container px-5 py-24 mx-auto ">
               <div class="flex flex-col text-center w-full mb-20">
                  <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 dark:text-gray-50">
                     Servicios
                  </h1>
               </div>
               <div className="carousel w-full itm  h-60">
                  <div
                     id="slide1"
                     className="carousel-item relative justify-between w-full gap-4">
                     <a
                        href="#slide4"
                        className="btn btn-circle text-lg w-5 h-8 md:w-8 md:h-8 my-auto">
                        ❮
                     </a>
                     <div className="flex rounded-lg h-full w-1/3  sm:w-1/2  bg-gradient-to-r from-emerald-700 to-emerald-600  p-8 flex-col  items-center justify-center gap-7 text-center ">
                        <h3 className="text-slate-200 text-sm md:text-lg font-bold  ">
                           Rehabilitación traumatológica y deportiva.
                        </h3>
                        <a
                           href="#my_modal_1"
                           className="btn  text-black bg-slate-200 rounded">
                           ver más
                        </a>

                        <div className="modal " role="dialog" id="my_modal_1">
                           <div className="modal-box dark:text-white">
                              <img
                                 src="https://res.cloudinary.com/diotu9grj/image/upload/v1708147980/Rehabilitacion-traumatolo%CC%81gica-y-deportiva_tnx5s8.jpg"
                                 alt="Rehabilitación traumatológica y deportiva."
                                 className="mx-auto"
                              />
                              <p className="py-4">
                                 Esta modalidad de fisioterapia se usa para
                                 tratar una variedad de dolencias que incluyen
                                 lesiones musculoesqueléticas, lesiones
                                 ortopédicas y lesiones relacionadas con el
                                 deporte. Cervicalgias, lumbagias, dorsalgias,
                                 esguinces, tendinitis. recuperación de
                                 operaciones, luxaciones, lesiones musculares,
                                 etc. <br />
                                 <span className="font-bold">
                                    Enfoques del tratamiento:
                                 </span>
                                 <ol>
                                    <li>
                                       1. Reducción de la inflamación y alivio
                                       del dolor.
                                    </li>
                                    <li>
                                       2. Recuperación de la movilidad del
                                       paciente.
                                    </li>
                                    <li>
                                       3. Ejercicios terapéuticos para lograr la
                                       plena inserción de la persona en la
                                       sociedad.
                                    </li>
                                 </ol>
                              </p>
                              <div className="modal-action">
                                 <a href="#slide1" className="btn">
                                    Cerrar
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="flex rounded-lg h-full w-1/3 sm:w-1/2  bg-gradient-to-r from-emerald-700 to-emerald-600   p-8 flex-col  items-center justify-center text-center gap-7 ">
                        <h3 className="text-slate-200 text-sm md:text-lg font-bold  ">
                           Kinesiología respiratoria en niños.
                        </h3>
                        <a
                           href="#niños"
                           className="btn  text-black bg-slate-200 rounded">
                           ver más
                        </a>

                        <div className="modal" role="dialog" id="niños">
                           <div className="modal-box dark:text-white">
                              <img
                                 src="https://res.cloudinary.com/diotu9grj/image/upload/v1708147976/Kinesiologia-respratoria-pediatrica_vpmtuc.jpg"
                                 alt="Kinesiología respiratoria en niños."
                                 className="mx-auto"
                              />
                              <p className="py-4">
                                 Serie de tratamientos que son utilizados como
                                 apoyo y/o complemento para mejorar patologías
                                 del sistema respiratorio. Todas aquellas en las
                                 que se vea afectada la función pulmonar. Entre
                                 las mas comunes se encuentran bronquiolitis,
                                 BOR.
                              </p>
                              <div className="modal-action">
                                 <a href="#slide1" className="btn">
                                    Cerrar
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>

                     <a
                        href="#slide2"
                        className="btn btn-circle justify-center my-auto w-5 h-8 md:w-8 md:h-8">
                        ❯
                     </a>
                  </div>
                  <div
                     id="slide2"
                     className="carousel-item relative justify-between w-full gap-4">
                     <a
                        href="#slide1"
                        className="btn btn-circle my-auto w-5 h-8 md:w-8 md:h-8">
                        ❮
                     </a>
                     <div className="flex rounded-lg h-full w-1/3 sm:w-1/2 bg-gradient-to-r from-emerald-700 to-emerald-600   flex-col  items-center text-center justify-center gap-7 ">
                        <h3 className="text-slate-200 text-sm md:text-lg font-bold  ">
                           Terapia manual e instrumental.
                        </h3>
                        <a
                           href="#my_modal_3"
                           className="btn  text-black bg-slate-200 rounded">
                           ver más
                        </a>

                        <div className="modal" role="dialog" id="my_modal_3">
                           <div className="modal-box dark:text-white">
                              <img
                                 src="https://res.cloudinary.com/diotu9grj/image/upload/v1708147988/Terapia-Manual_mpelj8.jpg"
                                 alt="Terapia manual e instrumental"
                                 className="h-[250px] w-[350px] mx-auto"
                              />
                              <p className="py-4">
                                 Consisten en un amplio grupo de técnicas, en
                                 las que el kinesiólogo usa sus manos y
                                 diferentes instrumentos complementarios. A
                                 través de ellas, se busca evaluar a traves del
                                 tacto diferentes características que nos brinda
                                 el tejido a la palpación, y liberar
                                 restricciones del tejido miofascial, tratar
                                 puntos gatillos, etc.
                                 <br /> Su aplicación , ayuda también a
                                 disminuir o eliminar la inflamación, modular el
                                 dolor, inducir a la relajación, mejorar la
                                 elasticidad facilitando así el movimiento y
                                 beneficiando la función.
                              </p>
                              <div className="modal-action">
                                 <a href="#slide2" className="btn">
                                    Cerrar
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="flex rounded-lg h-full w-1/3 sm:w-1/2 bg-gradient-to-r from-emerald-700 to-emerald-600   p-8 flex-col  items-center justify-center text-center ">
                        <h3 className="text-slate-200 text-sm md:text-lg font-bold  ">
                           Terapia con ventosas para dolor de origen miofascial.
                        </h3>

                        <a
                           href="#my_modal_4"
                           className="btn  text-black bg-slate-200 rounded">
                           ver más
                        </a>

                        <div className="modal" role="dialog" id="my_modal_4">
                           <div className="modal-box dark:text-white">
                              <img
                                 src="https://res.cloudinary.com/diotu9grj/image/upload/v1708147981/Terapia-con-ventosa_kbh8pj.jpg"
                                 alt="Terapia con ventosas"
                                 className="mx-auto"
                              />
                              <p className="py-4">
                                 Complemento utilizado en este caso para la
                                 reducción del dolor musculoesqulético o
                                 miofascial. Mejora el dolor y el rango de
                                 movilidad. Disminuye la prevalencia de
                                 lesiones, mejora el rendimiento deportivo y hay
                                 mejoras en la rehabilitación.
                                 <br />
                                 Su principal efecto es una vasodilatación
                                 contralada y localizada sin daño tisular.
                              </p>
                              <div className="modal-action">
                                 <a href="#slide2" className="btn">
                                    Cerrar
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>

                     <a
                        href="#slide3"
                        className="btn btn-circle my-auto w-5 h-8 md:w-8 md:h-8 ">
                        ❯
                     </a>
                  </div>
                  <div
                     id="slide3"
                     className="carousel-item relative w-full justify-between gap-4">
                     <a
                        href="#slide2"
                        className="btn btn-circle my-auto w-5 h-8 md:w-8 md:h-8">
                        ❮
                     </a>
                     <div className="flex rounded-lg h-full w-1/3 sm:w-1/2  bg-gradient-to-r from-emerald-700 to-emerald-600   flex-col  items-center justify-center text-center gap-7 ">
                        <h3 className="text-slate-200 text-lg font-bold  ">
                           Terapia física.
                        </h3>
                        <a
                           href="#fisica"
                           className="btn  text-black bg-slate-200 rounded">
                           ver más
                        </a>

                        <div className="modal" role="dialog" id="fisica">
                           <div className="modal-box dark:text-white">
                              <img
                                 src="https://res.cloudinary.com/diotu9grj/image/upload/v1708147984/Terapia-Fisica_by52d7.jpg"
                                 alt="Terapia Física"
                                 className="mx-auto"
                              />
                              <p className="py-4">
                                 Apta para todas las edades. Tanto para
                                 <span className="font-bold"> prevención </span>
                                 como para
                                 <span className="font-bold"> tratamiento</span>
                                 . Se realiza como etapa final del tratamiento
                                 en el caso de rehabilitación traumatológica o
                                 deportiva, en casos de patologías como
                                 polineuropatías, secuelas de ACV, miastenia
                                 gravis, etc. Niños con acortamientos
                                 musculares, o con falta de fuerza, coordinación
                                 y equilibrio. O en caso de aquellas personas
                                 que quieren comenzar a ejercitarse de manera
                                 controlada y segura.
                              </p>
                              <div className="modal-action">
                                 <a href="#slide3" className="btn">
                                    Cerrar
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="flex rounded-lg h-full w-1/3 sm:w-1/2  bg-gradient-to-r from-emerald-700 to-emerald-600   p-8 flex-col  items-center justify-center text-center gap-7 ">
                        <h3 className="text-slate-200 text-lg font-bold  ">
                           Trabajo postural.
                        </h3>
                        <a
                           href="#postural"
                           className="btn  text-black bg-slate-200 rounded">
                           ver más
                        </a>

                        <div className="modal" role="dialog" id="postural">
                           <div className="modal-box dark:text-white ">
                              <img
                                 src="https://res.cloudinary.com/diotu9grj/image/upload/v1708147993/Postural_lmj3ax.jpg"
                                 alt="Trabajo postural"
                                 className="mx-auto"
                              />
                              <p className="py-4 dtext-18">
                                 Actividad terapéutica donde a través de
                                 ejercicios simples, variados y entretenidos
                                 podrás mejorar y entrenar la flexibilidad y
                                 fuerza, aprenderás a conocer tu cuerpo con
                                 ejericicios funcionales que aumentarán la
                                 conciencia corporal para mejorar tu postura.
                              </p>
                              <div className="modal-action">
                                 <a href="#slide3" className="btn">
                                    Cerrar
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>

                     <a
                        href="#slide4"
                        className="btn btn-circle my-auto w-5 h-8 md:w-8 md:h-8">
                        ❯
                     </a>
                  </div>
                  <div
                     id="slide4"
                     className="carousel-item relative w-full justify-between gap-4">
                     <a
                        href="#slide3"
                        className="btn btn-circle my-auto w-5 h-8 md:w-8 md:h-8">
                        ❮
                     </a>
                     <div className="flex rounded-lg h-full w-1/2 mx-auto  bg-gradient-to-r from-emerald-700 to-emerald-600 p-8 flex-col  items-center justify-center text-center gap-7 ">
                        <h3 className="text-slate-200 text-sm md:text-lg font-bold  ">
                           Fisioterapia.
                        </h3>
                        <a
                           href="#my_modal_5"
                           className="btn  text-black bg-slate-200 rounded">
                           ver más
                        </a>

                        <div className="modal" role="dialog" id="my_modal_5">
                           <div className="modal-box dark:text-white">
                              <img
                                 src="https://res.cloudinary.com/diotu9grj/image/upload/v1708147953/Fisioterapia_vyoyjv.jpg"
                                 alt="Fisioterapia"
                                 className="mx-auto h-[200px] w-[246px]"
                              />
                              <p className="py-4">
                                 Se utilizan distintos aparatos como complemento
                                 de la rehabilitación, sobretodo en etapas
                                 iniciales. En FR KINESIOPILATES, la terapia mas
                                 utilizada es de Estimulación Nerviosa
                                 Transcutánea, o TENS, que es una técnica de
                                 fisioterapia que utiliza corrientes eléctricas
                                 de baja intensidad para aliviar el dolor y
                                 mejorar la función muscular. Esta terapia
                                 implica la aplicación de electrodos en la piel
                                 sobre la zona afectada.
                              </p>
                              <div className="modal-action">
                                 <a href="#slide4" className="btn">
                                    Cerrar
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>

                     <a
                        href="#slide1"
                        className="btn btn-circle my-auto w-5 h-8 md:w-8 md:h-8">
                        ❯
                     </a>
                  </div>
               </div>
            </div>
         </section>
      </section>
   );
}
