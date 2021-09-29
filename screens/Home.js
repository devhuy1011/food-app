import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import BottomTabs from "../components/home/BottomTabs";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import { Divider } from 'react-native-elements'
import RestaurentItem, {
    localRestaurants,
} from "../components/home/RestaurentItem";
import SearchBar from "../components/home/SearchBar";

const YELP_API_KEY =
    "eZ57RJrNCzPap0ulSzFus0G8xDRU6rp9u4B4BcVI5XGDWH3b4cjdYie_LjGJfxd3j8klMbAGQSgTh5yTcnOvUIXTrxgAwsMV1c1TUWVlPhSe9U0FdNGtDIsCA6xMYXYx";

export default function Home({ navigation }) {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("LosAngeles");
    const [activeTab, setActiveTab] = useState("Delivery");

    const getRestaurentFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurant&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) =>
                setRestaurantData(
                    json.businesses.filter((businesses) =>
                        businesses.transactions.includes(
                            activeTab.toLowerCase()
                        )
                    )
                )
            );
    };


    useEffect(() => {
        getRestaurentFromYelp();
    }, [city, activeTab]);

    return (
        <SafeAreaView
            style={{ flex: 1, paddingTop: 20, backgroundColor: "#eee" }}
        >
            <View style={{ backgroundColor: "#fff", padding: 15 }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurentItem
                    restaurantData={restaurantData}
                    navigation={navigation}
                />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    );
}
