import React, {useEffect, useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';


export const Feedback = () => {
    const { type, message, visible } = useSelector(state => state.feedback)
    const { hideFeedback } = useActions()
    // const [modalVisible, setModalVisible] = useState(true);
console.log({type, message, visible});
    useEffect(() => {
        if (!visible) return

        const timeout = setTimeout(() => {  
            console.log('timeout in')   
            hideFeedback()
        }, 3000)   // HIDE FEEDBACK AFTER 5 seconds
        
        return () => {
            clearTimeout(timeout)
        }
    }, [visible])

    const getModalViewStyle = (type) => {
        if (type === 'success') {
            return {
                backgroundColor: '#8ee5ff',
                color: '#1c4b72'
            }
        } else if (type === 'danger') {
            return {
                backgroundColor: '#f8d7da',
                color: '#721c24',
            }
        }
        // console.log('undefined feedback type');
        return {}
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            // visible={true}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}
        >
            <View style={styles.centeredView}>
                <View style={[
                    styles.modalView,
                    getModalViewStyle(type),
                    ]}
                >
                    <Text style={[
                        styles.modalText,
                        getModalViewStyle(type),
                        ]}
                    >{message}</Text>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000010',
    },
    modalView: {
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        // alignItems: "center",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '80%',
    },
    modalText: {
        // marginBottom: 15,
        textAlign: 'center',
    },
});
