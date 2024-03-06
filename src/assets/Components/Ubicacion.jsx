import React from "react";

export default function Ubicacion() {
   return (
      <div className="h-80 w-full flex justify-center gap-3 items-center mx-auto mb-6 flex-col md:flex-row">
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.0540224765728!2d-63.015700599999995!3d-35.030378400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c43ad55883a321%3A0x4a8f37ddf44f5e00!2sCastelli%20672%2C%20Gral.%20Villegas%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1708963933840!5m2!1ses-419!2sar"
            className=" w-3/4 h-56 md:w-72 md:h-72"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>

         <div>
            <h3>Estamos ubicados en:</h3>
            <p>Castelli 672, Gral. Villegas, Provincia de Buenos Aires</p>
         </div>
      </div>
   );
}
