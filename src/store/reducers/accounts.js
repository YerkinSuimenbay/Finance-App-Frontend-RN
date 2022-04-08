import { AccountsActionTypes } from "../actions/accounts"

const initialState = {
    data: {
        accounts: [],
        total: 0,
    },
    loading: true,  // false PREVIOUSLY
    error: null,
}

export const accountsReducer = (state=initialState, action) => {
    switch (action.type) {
        case (AccountsActionTypes.FETCH_ACCOUNTS):
            return { loading: true, error: null, data: { accounts: [], total: 0 } }
        case (AccountsActionTypes.FETCH_ACCOUNTS_SUCCESS):
            return { loading: false, error: null, data: { accounts: action.payload.accounts, total: action.payload.total } }
        case (AccountsActionTypes.FETCH_ACCOUNTS_ERROR):
            return { loading: false, error: action.payload, data: { accounts: [], total: 0 } }
        case (AccountsActionTypes.CLEAN_UP_ACCOUNTS):
            return { loading: true, error: null, data: { accounts: [], total: 0 } }
        default:
            return state
    }
}