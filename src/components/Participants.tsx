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

            <div className="bg-white">
                <button
                    onClick={handleCreateNewParticipant}
                >
                    Adidionar participante
                </button>
            </div>
        </div>
    )
}