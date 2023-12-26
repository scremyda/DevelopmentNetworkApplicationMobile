// ShopScreen.js
import { ScrollView, StyleSheet, View, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { axiosInstance } from '../api';
import { setSearchValue } from '../store/filterSlice'; // Assuming you have a setSearchValue action
import {setAutoparts} from '../store/autopartSlice';
import DeviceCard from '../components/DeviceCard';
import Breadcrumbs from '../components/Breadcrumbs';

export default function ShopScreen({ navigation }) {
    const dispatch = useDispatch();
    const { autoparts_list } = useSelector((state) => state.autopart);
    const { searchValue } = useSelector((state) => state.filter);

    useEffect(() => {
        async function getAllAutoparts() {
            try {
                const response = await axiosInstance.get(`/autoparts/get-all?name=${searchValue}`);
                dispatch(setAutoparts(response?.data.autoparts)); // Adjust the payload based on your API response
            } catch (error) {
                console.error('Error fetching autoparts:', error);
            }
        }
        getAllAutoparts();
    }, [dispatch, searchValue]);

    const onTextChange = (text) => {
        dispatch(setSearchValue(text));
        console.log(text);
    };

    return (
        <ScrollView>
            <View style={styles.page}>
                <Breadcrumbs pages={[]} navigation={navigation} />
                <TextInput
                    style={styles.input}
                    onChangeText={onTextChange}
                    value={searchValue}
                />
                {!!autoparts_list &&
                    autoparts_list.map((autopart) => <DeviceCard key={autopart.autopart_id} {...autopart} navigation={navigation} />)}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#453b64',
    },
    input: {
        height: 40,
        margin: 8,
        width: 320,
        padding: 10,
        color: 'white',
        borderWidth: 1,
        backgroundColor: '#6e608d',
        borderRadius: 8,
    },
});
