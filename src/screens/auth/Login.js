import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native'
// import { Shadow } from 'react-native-shadow-2';
import DropShadow from "react-native-drop-shadow";
import { useSelector } from "react-redux";
import { FormButton } from "../../components/buttons/FormButton";

import { TextField } from "../../components/fields/TextField";
import { AuthErrorFeedback } from "../../components/layout/AuthErrorFeedback";
import { useActions } from "../../hooks/useActions";
import { BASE_URL } from "../../utils/js/axiosSettings";

const URL = `${BASE_URL}/auth/login`

export const Login = ({ navigation, onPress }) => {
    const { loading } = useSelector(state => state.user)
    const { authUser, showFeedback } = useActions()
    const [error, setError] = useState({
        visible: false,
        message: ''
    })    

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setError({
                visible: false,
                message: ''
            })
            setLoginForm({
                email: '',
                password: ''
            })
        });
        return unsubscribe;
    }, [navigation]);


    const onChange = (name, value) => {
        setLoginForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async () => {
        try {
            const output = await authUser(URL, loginForm)
           
            if (axios.isAxiosError(output)) {
                const error = output
                console.log('danger', error.response?.data.msg || 'Server Error');
                // showFeedback('danger', error.response?.data.msg || 'Server Error')
                setError({
                    visible: true,
                    message: error.response?.data.msg || 'Server Error'
                })
              } else if (output instanceof Error) {
                  const error = output
                  console.log('Error error', error.message) // works, `e` narrowed to Error
                //   showFeedback('danger', error.message)
                  setError({
                    visible: true,
                    message: error.response?.data.msg || 'Server Error'
                })
              }
        } catch (error) {
            console.log(axios.isAxiosError(error));
            console.log({error});
        }

        // yerkin@gmail.com
    }

    const switchScreen = () => navigation.navigate('Register')

    return (
        <View style={styles.authContainer}>
            <Text style={styles.header}>Finance App</Text>
            <DropShadow
                style={{
                    shadowColor: "rgba(180, 187, 199, .89)",
                    shadowOffset: {
                        width: 0,
                        height: 0,
                    },
                    shadowOpacity: 1,
                    shadowRadius: 5,
                    width: '90%'
                }}
            >
                <View style={styles.authForm}>

                    <Text style={styles.formHeader}>Login</Text>

                    <TextField label="Email" placeholder="test@gmail.com" name='email' value={loginForm.email} onChange={onChange}/>
                    <TextField label="Password" placeholder="qwerty12345" name='password' value={loginForm.password} onChange={onChange} secureTextEntry/>
                    
                    <FormButton label="Submit" onPress={handleSubmit}/>
                    {/* <FormButton label="Submit" onPress={login} style={{borderColor: 'red'}} labelStyle={{color: 'red'}}/> */}

                    <View style={[
                        styles.authFormBottom,
                        {marginBottom: error.visible ? 10 : 40},
                        ]}
                    >
                        <Text>Does not have account?</Text>
                        <Pressable
                            // style={styles.authFormBottomRedirectButton}
                            onPress={switchScreen}
                            >
                            <Text style={styles.authFormBottomRedirectButtonLabel}>Register</Text>
                        </Pressable>
                    </View>

                    {error.visible && <AuthErrorFeedback message={error.message}/>}

                </View>
            </DropShadow>
        </View> 
    )
}

const styles = StyleSheet.create({
    authContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0eff4',
    },
    header: {
        fontSize: 40,
        marginBottom: 30,
        position: 'absolute',
        top: 20
    },
    authForm: {
        backgroundColor: 'steelblue',
        backgroundColor: '#f0f8ff',
        borderRadius: 5,
        padding: 24,
    },
    formHeader: {
        fontSize: 20,
        fontWeight: '600',
        alignSelf: 'center',
        paddingBottom: 16,
    },
    authFormBottom: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    authFormBottomRedirectButtonLabel: {
        marginLeft: 5,
        color: 'red',
    },
})