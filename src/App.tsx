import { Pizza } from "phosphor-react"
import { useState } from "react"
import { Participant } from "./components/Participant"

function App() {

  return (
    <div className="App flex-grow p-4 pb-24">
      <div className="flex flex-row pb-4 gap-4 align-middle">
        <div className="p-2 rounded-full bg-amber-100 flex justify-center align-middle">
            <Pizza size={28} weight="fill" className="text-red-500" />
        </div>
        <strong className="text-2xl">Contador para Rodizio</strong>
      </div>

      <div className="flex flex-col gap-4 overflow-auto">
          <Participant />
          <Participant />
          <Participant />
          <Participant />
          <Participant />
          <Participant />
      </div>

      <div className="fixed bottom-0 left-0 flex flex-grow p-4 bg-white w-full drop-shadow-2xl">
        <button className="flex flex-grow justify-center bg-green-500 p-4 rounded-lg">+ Adicionar participante</button>
      </div>
    </div>
  )
}

export default App
