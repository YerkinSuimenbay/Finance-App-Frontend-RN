import axios from "axios"

export const AccountsActionTypes = {
    FETCH_ACCOUNTS: 'FETCH_ACCOUNTS',
    FETCH_ACCOUNTS_SUCCESS: 'FETCH_ACCOUNTS_SUCCESS',
    FETCH_ACCOUNTS_ERROR: 'FETCH_ACCOUNTS_ERROR',
    CLEAN_UP_ACCOUNTS: 'CLEAN_UP_ACCOUNTS'
}

export const fetchAccounts = (url) => {
    return async (dispatch) => {
        try {
            dispatch({ type: AccountsActionTypes.FETCH_ACCOUNTS })
            const res = await axios.get(url)
            const { accounts, total } = res.data
            // console.log(res);
            dispatch({ 
                type: AccountsActionTypes.FETCH_ACCOUNTS_SUCCESS, 
                payload: {
                    accounts, 
                    total, 
                } 
            })

            return accounts
        } catch (error) {
            let errorMessage = 'Error while fetching accounts'
            console.log(error);
            if (axios.isAxiosError(error)) {
                console.log(error.response?.data);
                errorMessage += '. ' + error.response?.data.msg
            } else if (error instanceof Error) {
                errorMessage += error.message
            }
            
            dispatch({ type: AccountsActionTypes.FETCH_ACCOUNTS_ERROR, payload: errorMessage })
        }
    }
}

export const cleanUpAccounts = () => {
    return { type: AccountsActionTypes.CLEAN_UP_ACCOUNTS }
}