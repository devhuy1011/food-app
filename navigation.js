import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import Home from "./screens/Home";
import Restaurant from "./screens/Restaurant";
import OrderCompleted from "./screens/OrderCompleted";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs();

const store = configureStore();

export default function RootNavigation() {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    };

    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={screenOptions}
                >
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Restaurant" component={Restaurant} />
                    <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
    );
}
