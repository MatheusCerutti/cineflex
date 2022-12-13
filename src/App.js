import Titulo from "./Titulo";
import Filme from "./Filme";
import Horario from "./Horario";
import Assentos from "./Assentos";
import Sucesso from "./Sucesso";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";


function App() {
  const [filmeescolhido,setEscolhido] = useState("")
  const [horarioescolhido,setHorario] = useState("")
  const [dataescolhida,setData] = useState ("")
  const [assentoescolhido,setAssentosescolhidos] = useState([])
  const [comprador,setComprador] = useState("")
  const [cpfcomprador,setCPFCom] = useState ("")
  const [urlimagem,setImagem] = useState("")

  return (
    <BrowserRouter>
      <Titulo></Titulo>
      <Routes>
        <Route path="/" element={<Filme/>}></Route>
        <Route path="/sessoes/:filmeId" element={<Horario urlimagem={urlimagem} setImagem={setImagem} filmeescolhido={filmeescolhido} setEscolhido={setEscolhido} />}></Route>
        <Route path="/assentos/:assentoId" element={<Assentos filmeescolhido={filmeescolhido} dataescolhida={dataescolhida} horarioescolhido={horarioescolhido}urlimagem={urlimagem} setHorario={setHorario} setData={setData} setAssentosescolhidos={setAssentosescolhidos} setComprador={setComprador} setCPFCom={setCPFCom}/>}></Route>
        <Route path="/sucesso" element={<Sucesso setImagem={setImagem} setEscolhido={setEscolhido} setHorario={setHorario} setData={setData} setAssentosescolhidos={setAssentosescolhidos} setComprador={setComprador} setCPFCom={setCPFCom} filmeescolhido={filmeescolhido} horarioescolhido={horarioescolhido} dataescolhida={dataescolhida} assentoescolhido={assentoescolhido} comprador={comprador} cpfcomprador={cpfcomprador}/>}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
