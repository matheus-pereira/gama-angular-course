import { ActionReducer } from '@ngrx/store';

export interface MessageState {
    messagesList: {
        text: string;
        date: Date;
    }[];
    loading: boolean;
};

const initialState = {
    messagesList: [],
    loading: false
};

export const messagesReducer: ActionReducer<MessageState> = (state = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            state = {
                ...state,
                messagesList: state.messagesList.concat(action.payload)
            };
            break;
        case 'DELETE_MESSAGE':
            let messages = [...state.messagesList];
            messages.splice(action.payload.index, 1);
            
            state = {
                ...state,
                messagesList: messages
            };
            break;
    }
    
    return state;
}