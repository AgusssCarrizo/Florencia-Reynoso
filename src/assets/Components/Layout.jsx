import React from "react";
import {Outlet, Link} from "react-router-dom";

import Footer from "./Footer";
import Home from "./Home";

export default function Layout() {
   return (
      <div>
         <div className="navbar  bg-base">
            <div className="navbar-start">
               <div className="dropdown">
                  <div
                     tabIndex={0}
                     role="button"
                     className="btn btn-ghost lg:hidden">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h8m-8 6h16"
                        />
                     </svg>
                  </div>
                  <nav>
                     <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                           <Link to="/">Sobre mí</Link>
                        </li>
                        <li>
                           <a>Servicios</a>
                           <ul className="p-2">
                              <li>
                                 <Link to="Kinesiologia-Fisiatria">
                                    Kinesiologia - Fisiatria
                                 </Link>
                              </li>
                              <li>
                                 <Link to="Pilates">Pilates</Link>
                              </li>
                           </ul>
                        </li>
                        <li>
                           <Link to="/#Testimonio">Testimonios</Link>
                        </li>
                     </ul>
                  </nav>
               </div>
               <a>
                  <img
                     src="https://res.cloudinary.com/diotu9grj/image/upload/v1707482787/Logo_mo67xd.jpg"
                     alt=""
                     className="w-20 ml-6"
                  />
               </a>
            </div>
            <div className="navbar-center hidden lg:flex">
               <nav>
                  <ul className="menu menu-horizontal px-1">
                     <li>
                        <Link to="/">Sobre mí</Link>
                     </li>
                     <li>
                        <details>
                           <summary>Servicios</summary>
                           <ul className="p-2">
                              <li>
                                 <Link to="Kinesiologia-Fisiatria">
                                    Kinesiologia - Fisiatria
                                 </Link>
                              </li>
                              <li>
                                 <Link to="Pilates">Pilates</Link>
                              </li>
                           </ul>
                        </details>
                     </li>
                     <li>
                        <a href="/#Testimonio">Testimonios</a>
                     </li>
                  </ul>
               </nav>
            </div>
            <div className="navbar-end">
               <a
                  className="btn btn-outline btn-success checked:btn-success"
                  href="https://wa.link/w06ugr"
                  target="_blank">
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
               </a>
            </div>
         </div>
         <Outlet />
         <Footer />
      </div>
   );
}
