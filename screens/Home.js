import React, {useEffect} from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurentItem, { localRestaurants } from "../components/RestaurentItem";
import SearchBar from "../components/SearchBar";

const YELP_API_KEY =
    "eZ57RJrNCzPap0ulSzFus0G8xDRU6rp9u4B4BcVI5XGDWH3b4cjdYie_LjGJfxd3j8klMbAGQSgTh5yTcnOvUIXTrxgAwsMV1c1TUWVlPhSe9U0FdNGtDIsCA6xMYXYx";

export default function Home() {
    const [restaurantData, setRestaurantData] =
        React.useState(localRestaurants);

    const getRestaurentFromYelp = () =>{
        const yelpUrl = 'https://api.yelp.com/v3/businesses/search?term=restaurant&location=LosAngeles';
    
        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
        }};
    
        return fetch(yelpUrl, apiOptions).then((res) => res.json()).then(json => setRestaurantData(json.businesses)) 
    }

    useEffect(() => {
        getRestaurentFromYelp()
    }, [])

    return (
        <SafeAreaView
            style={{ flex: 1, paddingTop: 30, backgroundColor: "#eee" }}
        >
            <View style={{ backgroundColor: "#fff", padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurentItem restaurantData={restaurantData} />
            </ScrollView>
        </SafeAreaView>
    );
}
