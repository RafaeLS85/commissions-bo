import { useState } from "react"

export const useModals = () => {

    const [modalState, setModalState] = useState(false)

    const openModal = () => {
        setModalState(true)
    }


    return {
        modalActions: {openModal},
        modalState: {modalState},
    }
}