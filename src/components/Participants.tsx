import { useState } from "react"
import { Participant } from "./Participant"

import { Plus } from 'phosphor-react'


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
                className="flex items-center justify-center gap-2 w-full rounded-lg p-4 font-bold border text-zinc-600 dark:text-zinc-100"
                onClick={handleCreateNewParticipant}
            >
                <Plus />
                Add eater
            </button>
        </div>
    )
}