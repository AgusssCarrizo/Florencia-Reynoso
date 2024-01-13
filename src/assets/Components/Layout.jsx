import React from "react";
import {Outlet, Link} from "react-router-dom";

import Footer from "./Footer";

export default function Layout() {
   return (
      <div>
         <div className="navbar bg-base-100  border-b border-black">
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
                                 <Link to="Kinesiologia">Kinesiologia </Link>
                              </li>
                              <li>
                                 <a>Fisioterapia</a>
                              </li>
                           </ul>
                        </li>
                        <li>
                           <a>Testimonios</a>
                        </li>
                     </ul>
                  </nav>
               </div>
               <a className="btn btn-ghost text-xl">Logo</a>
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
                                 <Link to="Kinesiologia">Kinesiologia </Link>
                              </li>
                              <li>
                                 <a>Fisioterapia</a>
                              </li>
                           </ul>
                        </details>
                     </li>
                     <li>
                        <a>Testimonios</a>
                     </li>
                  </ul>
               </nav>
            </div>
            <div className="navbar-end">
               <a className="btn">Contactarme</a>
            </div>
         </div>
         <Outlet />
         <Footer />
      </div>
   );
}
