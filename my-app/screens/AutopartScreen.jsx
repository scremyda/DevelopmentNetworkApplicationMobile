import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import {setAutopart} from '../store/autopartSlice';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { axiosInstance } from '../api';

export default function AutopartScreen({ route, navigation }) {
    const handlePressAutoparts = () => {
        navigation.navigate('Список автозапчастей');
    };

    const { id } = route.params;
    const dispatch = useDispatch();
    const { autopart } = useSelector((state) => state.autopart);
    useEffect(() => {
        async function getAutopartsById() {
            console.log(id)
            await axiosInstance.get(`/autoparts/${id}`).then((response) => {
                dispatch(setAutopart(response.data));
                console.log(autopart)}).catch((err) => {console.log(err)})
        }
        getAutopartsById();
    }, [dispatch]);

    const newHost = "192.168.245.224";

    return (
    <ScrollView>
        <View style={styles.page}>
                <View>
                    <Text style={styles.breadcrumb} onPress={handlePressAutoparts}>Список автозапчастей -></Text>
                        <Text style={styles.textGreen} onPress={handlePressAutoparts}>
                        { "->" + autopart.name}
                    </Text>
                </View>
            {autopart != null &&  autopart.name != "" && autopart.image != undefined &&
            <View style={{margin: 15}}>
                <View>
                    <Image style={styles.image} source={{ uri: `${autopart.image.replace("localhost", newHost)}` }}/>
                    <View>
                        <Text style={styles.textTitle}>{autopart.name}</Text>
                        <Text style={styles.text}>{autopart.description}</Text>
                        <View>
                            <Text style={styles.textTitle}>О автозапчасти:</Text>
                            <Text style={styles.text}>
                                Бренд: {autopart.brand}
                            </Text>
                            <Text style={styles.text}>
                                Модель: {autopart.model}
                            </Text>
                                <Text style={styles.text}>
                    Год производства: {autopart.year}
                                </Text>
                                <Text style={styles.text}>
                    Цена: {autopart.price} руб
                                </Text>
                        </View>
                    </View>
                </View>
            </View> }
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6e608d',
    },
    text: { color: '#f0f0f0', fontSize: 16 },
    textGreen: {color : '#f0f0f0'},
    textTitle: { color: '#f0f0f0', fontSize: 18 , marginTop: 10, marginBottom: 10},
    breadcrumb: { color: '#f0f0f0', fontSize: 16 },
    image: { height: 320, alignSelf: 'stretch' },
});
