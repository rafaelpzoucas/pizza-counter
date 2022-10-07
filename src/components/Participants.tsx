import { useState } from "react"
import { Participant } from "./Participant"


export function Participants() {
    const [participants, setParticipants] = useState([1, 2, 3])

    function handleCreateNewParticipant() {
        setParticipants([...participants, participants.length + 1])
    }

    return (
        <div className="flex flex-col gap-2 p-4">
            {
                participants.map(participant => {
                    return (
                        <Participant />
                    )
                })
            }

            <button
                className="flex items-center justify-center w-full rounded-lg p-4 font-bold text-zinc-100 bg-rose-700"
                onClick={handleCreateNewParticipant}
            >
                Adidionar participante
            </button>
        </div>
    )
}