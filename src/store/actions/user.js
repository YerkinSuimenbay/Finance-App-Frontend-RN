import axios from "axios"
// import AsyncStorage from '@react-native-async-storage/async-storage';


export const UserActionTypes = {
    FETCH_AUTH: 'FETCH_AUTH',
    FETCH_AUTH_SUCCESS: 'FETCH_AUTH_SUCCESS',
    FETCH_AUTH_ERROR: 'FETCH_AUTH_ERROR',
    LOGOUT_USER: 'LOGOUT_USER',
    UPDATE_USER_SETTINGS: 'UPDATE_USER_SETTINGS',
    UPDATE_USER_SETTINGS_SUCCESS: 'UPDATE_USER_SETTINGS_SUCCESS',
    UPDATE_USER_SETTINGS_ERROR: 'UPDATE_USER_SETTINGS_ERROR'
}


export const authUser = (url, dataToSend) => {
    return async (dispatch) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_AUTH })
            const res = await axios.post(url, dataToSend)
            const { user: { name, email, settings }, token } = res.data
            
            const userInfo = { name, email, settings }
            // localStorage.setItem('financeAppUserInfo', JSON.stringify(userInfo))
            // await AsyncStorage.setItem('financeAppUserInfo', JSON.stringify(userInfo))
            
            // localStorage.setItem('financeAppToken', token)
            // await AsyncStorage.setItem('financeAppToken', token)
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            dispatch({ type: UserActionTypes.FETCH_AUTH_SUCCESS, payload: { name, email, settings } })
        } catch (error) {
            dispatch({ type: UserActionTypes.FETCH_AUTH_ERROR, payload: 'Error while fetching auth' })
            
            return error   
        }
    }
}

export const updateUserSettings = (setting_name, setting_value) => {
    return async (dispatch) => {
        try {
            
            dispatch({ type: UserActionTypes.UPDATE_USER_SETTINGS })
            
            const res = await axios.patch('user/settings', { [setting_name]: setting_value })
            const { name, email, settings } = res.data
            
            dispatch({ type: UserActionTypes.UPDATE_USER_SETTINGS_SUCCESS, payload: { setting_name, setting_value } })
            
            const userInfo = { name, email, settings }
            // localStorage.setItem('financeAppUserInfo', JSON.stringify(userInfo))
        } catch (error) {
            dispatch({ type: UserActionTypes.UPDATE_USER_SETTINGS_ERROR, payload: 'Error while fetching auth' })
            
            return error   
        }
    }
}

export const logoutUser = () => {
    return { type: UserActionTypes.LOGOUT_USER }
}