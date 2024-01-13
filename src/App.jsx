import "./index.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Kinesiologia from "./assets/Components/Kinesiologia.jsx";
import Home from "./assets/Components/Home";
import Layout from "./assets/Components/Layout.jsx";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Home />} />
               <Route path="Kinesiologia" element={<Kinesiologia />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
