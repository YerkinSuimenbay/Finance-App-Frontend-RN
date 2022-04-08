import axios from "axios"
import { getUserInfo } from "../../utils/js/getUserInfo"
import { UserActionTypes } from "../actions/user"
import AsyncStorage from '@react-native-async-storage/async-storage';

// const getInitialState = async () => {
//     const token = await AsyncStorage.getItem("financeAppToken")
//     console.log(token);
//     // const token = false
//     const { name, email, settings } = await getUserInfo()
//     const initialState = {
//         name,
//         email,
//         settings,
//         loggedIn: !!token,
//         loading: false,
//         error: null,
//     }
//     return initialState
// }

const initialState = {
    name,
    email,
    settings,
    loggedIn: !!token,
    loading: false,
    error: null,
}


axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case (UserActionTypes.FETCH_AUTH):
            return { loading: true, error: null, name: '', email: '', loggedIn: false, settings: {
                app_language: '',
                default_account: '',
                default_period: '',
            } }
        case (UserActionTypes.FETCH_AUTH_SUCCESS):
            return { loading: false, error: null, name: action.payload.name, email: action.payload.email, loggedIn: true, settings: action.payload.settings }
        case (UserActionTypes.FETCH_AUTH_ERROR):
            return { loading: false, error: action.payload, name: '', email: '', loggedIn: false, settings: {
                app_language: '',
                default_account: '',
                default_period: '',
            } }
        case (UserActionTypes.LOGOUT_USER):
            return { loading: false, error: null, name: '', email: '', loggedIn: false, settings: {
                app_language: '',
                default_account: '',
                default_period: '',
            } }
        // SETTINGS
        case (UserActionTypes.UPDATE_USER_SETTINGS):
            return { ...state, loading: true, error: null, }
        case (UserActionTypes.UPDATE_USER_SETTINGS_SUCCESS):
            console.log('hereeeeee', { [action.payload.setting_name]: action.payload.setting_value });
            
            return { ...state, loading: false, settings: { ...state.settings, [action.payload.setting_name]: action.payload.setting_value } }
        case (UserActionTypes.UPDATE_USER_SETTINGS_ERROR):
            return { ...state, loading: false, error: action.payload }
        
        default:
            return state
    }
}