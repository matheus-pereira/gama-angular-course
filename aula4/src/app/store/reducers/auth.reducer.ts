import { ActionReducer } from '@ngrx/store';

export interface AuthState {
    user: {
        localId: string,
        email:string
    };
    token: string;
}

const initialState = {
    user: null,
    token: null
};

export const AuthReducer: ActionReducer<AuthState> = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_USER':
            state = {
                ...state,
                ...action.payload
            };
            break;
        case 'LOGOUT':
            state = {
                user: null,
                token: null
            };
            break;
    }

    return state;
}