import { ChangeEvent } from "react";

export interface ISelect {
    name: string,
    label?: string,
    value?: string,
    defaultValue?: string,
    options: number[],
    color: Colors,
    onChange?(event: ChangeEvent<HTMLSelectElement>): void,
}

export interface IButton {
    title: string,
    color: Colors,
    small?: boolean,
    disabled?: boolean,
    padding?: string,
    square?: boolean,
    onClick?(event: React.MouseEvent<HTMLElement, MouseEvent>): void,
}

export enum Colors {
    RED, PRIMARY, GRAY, SUCCESS
}

export interface ICheckBox {
    title: string,
    isChecked: boolean,
    onChange?(event: ChangeEvent<HTMLInputElement>): void,
}

export interface IPagination {
    currPage: number,
    maxPage: number,
    itemsPerPage: number,
    allItemsPerPage: number[],
    handlePrevPage?(event: React.MouseEvent<HTMLElement, MouseEvent>): void,
    handleNextPage?(event: React.MouseEvent<HTMLElement, MouseEvent>): void,
    handleNumVisiblePages?(event: ChangeEvent<HTMLSelectElement>): void,
}

export interface ITask {
    id: number,
    title: string,
    creationDate: Date,
    conclusionDate?: Date,
    checked: boolean,
}

export interface ITable {
    tasks: ITask[]
    checkTask(event: ChangeEvent<HTMLInputElement>, taskId: number): void,
    handleRemove(event: React.MouseEvent<HTMLElement, MouseEvent>, taskId: number): void,
}