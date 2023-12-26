import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShopScreen from './screens/ShopScreen';
import AutopartScreen from './screens/AutopartScreen';
import { store } from './store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Список автозапчастей' component={ShopScreen} />
                    <Stack.Screen name='Автозапчасть' component={AutopartScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
