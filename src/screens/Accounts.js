import React, { useEffect } from 'react';
import {Text, View} from 'react-native';
import { useSelector } from 'react-redux';

import { useActions } from '../hooks/useActions';
import { BASE_URL } from '../utils/js/axiosSettings';

const URL = `${BASE_URL}/accounts`

export const Accounts = ({ navigation }) => {
    const store = useSelector(state => state)
    const { fetchAccounts } = useActions()

    useEffect(() => {
        fetchAccounts(URL)
    }, [])

    console.log(store);

    return (
        <View>
            <Text>Accounts</Text>
        </View>
    )
}