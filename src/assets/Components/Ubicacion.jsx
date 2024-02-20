import React from "react";

export default function Ubicacion() {
   return (
      <div className="h-80 w-full flex justify-center gap-3 items-center mx-auto mb-6 flex-col md:flex-row">
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.061583540665!2d-63.01563875582889!3d-35.03018923817866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c43ad55c30078d%3A0x65d23122115d6c93!2sCastelli%20672!5e0!3m2!1ses-419!2sar!4v1708462138000!5m2!1ses-419!2sar"
            width="300"
            height="300"
            style={{border: 0}}
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
