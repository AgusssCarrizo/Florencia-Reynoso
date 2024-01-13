import React from "react";

export default function Ubicacion() {
   return (
      <div className="h-80 w-full flex justify-center gap-3 items-center mx-auto mb-6 flex-col md:flex-row">
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4064.92039225866!2d-63.02596708402631!3d-35.02917559535809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1704944365289!5m2!1ses-419!2sar"
            width="300"
            height="300"
            style={{border: 0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
         />

         <div>
            <h3>Estamos ubicados en:</h3>
            <p>
               Isturiz Dr. 550, B6242 Gral. Villegas, Provincia de Buenos Aires
            </p>
         </div>
      </div>
   );
}
