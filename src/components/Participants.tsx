import { useState } from "react"
import { Participant } from "./Participant"


export function Participants() {
    const [participants, setParticipants] = useState([0])

    function handleCreateNewParticipant() {
        setParticipants([...participants, participants.length + 1])
    }

    return (
        <div className="flex flex-col gap-8 p-4">
            <main className="flex flex-col gap-2">
                {
                    participants.map(() => {
                        return (
                                <Participant />
                        )
                    })
                }
            </main>

            <button
                className="flex items-center justify-center w-full rounded-lg p-4 font-bold text-zinc-100 bg-rose-700"
                onClick={handleCreateNewParticipant}
            >
                Adidionar participante
            </button>
        </div>
    )
}