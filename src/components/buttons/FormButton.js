import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"


export const FormButton = ({ label="Submit", onPress=() => {}, style={}, labelStyle={} }) => {
    return (
        <TouchableOpacity
            style={[
                styles.formButton,
                style,
            ]}
            activeOpacity={0.7}
            onPress={onPress}
        >
            <Text 
                style={[
                    styles.formButtonLabel,
                    labelStyle,
                ]}
            >
                {label}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    formButton: {
        padding: 4,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#89abe3',
        backgroundColor: "#fcf6f557",
        marginBottom: 8,
    },
    formButtonLabel: {
        color: "#89abe3",
        alignSelf: 'center'
    },
})