import { MouseEventHandler } from "react";
export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    isDisabled?: boolean;
}

export interface SearchManuFacturerProps {
    manufacturer: string;
    SetManuFacturer: (manufacturer: string) => void;
}
