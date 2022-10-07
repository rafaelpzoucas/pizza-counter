import { useState } from "react"

import { Plus, Minus } from 'phosphor-react'

export function Participant() {
    const [count, setCount] = useState(0)

    function reset() {
        if(count > 0) {
            setCount(0)
        }
    }

    function decrease() {
        if(count > 0) {
            setCount(count - 1)
        }
    }
    
    function increase() {
        setCount(count + 1)
    }

    return (
        <div className="flex flex-col gap-4 p-4 rounded-lg w-full border dark:border-none bg-zinc-100 dark:bg-zinc-800">
            <header className="flex flex-row  justify-between w-full">
                <input 
                    type="text" 
                    placeholder="Digite um nome..."
                    className="bg-transparent text-lg focus:shadow-none"
                />
                <strong>{count} fatias</strong>
            </header>
            <div className="flex flex-row gap-2">
                <button 
                    className="flex items-center justify-center w-full p-4 rounded-lg border-2 disabled:opacity-40" 
                    onClick={reset}
                    disabled={count === 0}
                >
                    Zerar
                </button>
                <button 
                    className="flex items-center justify-center w-full p-4 rounded-lg disabled:opacity-40 bg-red-400 dark:bg-red-700" 
                    onClick={decrease}
                    disabled={count === 0}
                >
                    <Minus size={24} />
                </button>
                <button 
                    className="flex items-center justify-center w-full p-4 rounded-lg bg-emerald-400 dark:bg-emerald-700" 
                    onClick={increase}
                >
                    <Plus size={24} />
                </button>
            </div>
        </div>
    )
}