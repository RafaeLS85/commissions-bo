import { SetStateAction, Dispatch } from "react";

export type EditableTableState = {
    activeEdit: string
}

export type EditableTableActions = {
    handleEdit: ({ _id, rate }: {_id: string; rate: number}) => void
    handleCancelBtn: () => null,
    onSubmit: ({ rate, sellerId }: {
        rate: number;
        sellerId: string;
    }) => Promise<void>
    setActiveEdit: Dispatch<SetStateAction<string>>  
}