import React from 'react'
import { View } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetails/About'
import MenuItem from '../components/restaurantDetails/MenuItem'
import ViewCart from '../components/restaurantDetails/ViewCart'

export default function Restaurant({ route, navigation }) {
    return (
        <View style={{position: 'relative'}}>
            <About route={route} />
            <Divider width={1.8} style={{marginVertical: 20}} />
            <MenuItem restaurantName={route.params.name} />
            <ViewCart navigation={navigation} restaurantName={route.params.name} />
        </View>
    )
}


