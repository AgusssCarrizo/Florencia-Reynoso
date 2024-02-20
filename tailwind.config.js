/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         backgroundImage: {
            Fisioterapia:
               "url('https://plus.unsplash.com/premium_photo-1661751462825-1b7f1a93d641?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGh5c2lvdGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D')",
            Kinesiologia:
               "url('https://images.unsplash.com/photo-1522898467493-49726bf28798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGh5c2lvdGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D')",
         },
         colors: {
            primary: "#0E457D",
         },
      },
   },
   plugins: [require("daisyui")],
};
