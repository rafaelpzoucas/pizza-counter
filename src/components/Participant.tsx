import { useState } from "react"

import { Plus, Minus } from 'phosphor-react'

export function Participant() {
    const [count, setCount] = useState(0)

    function decrease() {
        if(count > 0) {
            setCount(count - 1)
        }
    }
    
    function increase() {
        setCount(count + 1)
    }

    return (
        <div className="flex flex-col gap-4 p-4 rounded-lg w-full border bg-zinc-100">
            <header className="flex flex-row  justify-between w-full">
                <input 
                    type="text" 
                    placeholder="Digite um nome..."
                    className="bg-transparent"
                />
                <strong>{count} pizzas</strong>
            </header>
            <div className="flex flex-row gap-2">
                <button 
                    className="flex items-center justify-center w-full p-4 rounded-lg bg-zinc-200" 
                    onClick={decrease}
                >
                    <Minus size={24} color="#155e75" weight="bold" />
                </button>
                <button 
                    className="flex items-center justify-center w-full p-4 rounded-lg bg-zinc-200" 
                    onClick={increase}
                >
                    <Plus size={24} color="#155e75" weight="bold" />
                </button>
            </div>
        </div>
    )
}