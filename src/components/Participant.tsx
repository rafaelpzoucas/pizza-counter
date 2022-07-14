import { Minus, Pizza, Plus, } from "phosphor-react"
import { useState } from "react"

export function Participant() {
    const [count, setCount] = useState(0)

    function increase() {
        setCount(count + 1)
    }
    
    function decrease() {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className="flex flex-col justify-between gap-4 bg-gray-50 border-2 rounded-lg p-4">
            <div className="flex flex-row align-middle justify-between">
                <div className="flex flex-row gap-3">
                    <input className="bg-gray-50 outline-none text-lg w-full font-bold" type="text" placeholder="Digite o nome" />
                </div>
                <strong className="text-2xl">{count} pizzas</strong>
            </div>

            <div className="flex flex-grow justify-between gap-2">
                <button onClick={decrease} className="bg-gray-200 flex flex-grow justify-center p-4 rounded-lg">
                    <Minus size={24} color="#2e2e2e" />
                </button>

                <button onClick={increase} className="bg-gray-200 flex flex-grow justify-center p-4 rounded-lg">
                    <Plus size={24} color="#2e2e2e" />
                </button>
            </div>
        </div>
    )
}