import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetails/About'
import MenuItem from '../components/restaurantDetails/MenuItem'

export default function Restaurant({ route }) {
    return (
        <View>
            <About route={route} />
            <Divider width={1.8} style={{marginVertical: 20}} />
            <MenuItem/>
        </View>
    )
}


