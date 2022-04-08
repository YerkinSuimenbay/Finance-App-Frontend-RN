import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getUserInfo() {
    let name = ''
    let email = ''
    let settings = {
        app_language: '',
        default_account: '',
        default_period: '',
    }
    
    try {
        // const userInfoStringified = localStorage.getItem('financeAppUserInfo')
        const userInfoStringified = await AsyncStorage.getItem('financeAppUserInfo')
        if(userInfoStringified !== null) { // userInfoStringified previously stored
          const userInfo = JSON.parse(userInfoStringified)
          name = userInfo.name
          email = userInfo.email
          settings = userInfo.settings
        }
    } catch (error) {
        console.log(error);
    }

    return { name, email, settings }
}