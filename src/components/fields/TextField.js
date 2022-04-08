import React from "react"
import { View, Text, TextInput, StyleSheet } from 'react-native'
export const TextField = ({ label='Label', placeholder="i.e. placeholder", name, value, onChange, secureTextEntry=false, editable=true }) => {
    const handleTextChange = value => {
        onChange && onChange(name, value)
        console.log({name, value});
    }

    return (
        <View style={styles.textFieldContainer}>
            <Text style={styles.textFieldLabel}>{label}:</Text>
            <TextInput 
                value={value}
                placeholder={placeholder}
                style={styles.textFieldInput} 
                onChangeText={handleTextChange}
                secureTextEntry={secureTextEntry}
                editable={editable && !!onChange}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textFieldContainer: {
        // borderWidth: 3,
        // backgroundColor: 'cadetblue',
    },
    textFieldLabel: {
        marginBottom: 5,

    },
    textFieldInput: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#555',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 2,
        paddingBottom: 2,
        // fontSize: 20,
        // textAlign: 'center'
        marginBottom: 16,
        backgroundColor: '#e8f0fe'
    }
})