import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Cards from './pages/cards';
import Details from './pages/details';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Cards" component={Cards}/>
                <AppStack.Screen name="Details" component={Details}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}