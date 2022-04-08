import React from "react"
import { View, Text, StyleSheet } from 'react-native'

export const AuthErrorFeedback = ({ message }) => {
    return (
        <View style={styles.warning_msg_container}>
            <Text style={styles.warning_msg}>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    warning_msg_container: {
        backgroundColor: '#f8d7da',
    },  
    warning_msg: {
        color: '#721c24',
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 5
    }
})