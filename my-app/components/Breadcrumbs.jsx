import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Breadcrumbs({ navigation, pages}) {
    const handlePressThreats = () => {
        navigation.navigate('Список автозапчастей');
    };

    return (
    <View>
        <View>
            <Text style={styles.breadcrumb} onPress={handlePressThreats}>Список автозапчастей</Text>
            {pages && pages.map((page) => (
                <Text style={styles.breadcrumb} onPress={handlePressThreats}>
                    { " / " + page.autopart.autoparts_list.name }
                </Text>
            ))}
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    breadcrumb: { color: '#f0f0f0', fontSize: 16 }
});
