import { Action } from "@ngrx/store";

export class AddMessageAction implements Action {
    readonly type = 'ADD_MESSAGE';
    constructor(public payload: { text: string, date: Date }) { }
}

export class DeleteMessageAction implements Action {
    readonly type = 'DELETE_MESSAGE';
    constructor(public payload: { index: number }) { }
}

export type MessageTypes = AddMessageAction | DeleteMessageAction;