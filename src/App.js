import Titulo from "./Titulo";
import Filme from "./Filme";
import Horario from "./Horario";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Titulo></Titulo>
      <Routes>
        <Route path="/" element={<Filme></Filme>}></Route>
        <Route path="/sessoes/:filmeId" element={<Horario></Horario>}></Route>
        <Route path="/assentos/:assentoId" element={<Horario></Horario>}></Route>
        <Route path="/sucesso" element={<Horario></Horario>}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
