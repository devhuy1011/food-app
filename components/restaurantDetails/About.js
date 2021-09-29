import React from "react";
import { View, Text, Image } from "react-native";

const yelpRestaurantInfo = {
    name: "Nhà hàng số 321 Hai Bà Trưng Hà Nội",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/1a/c1/dc/57/restaurant-layout.jpg",
    price: "$$$",
    review: "1500",
    rating: 4.5,
    categories: [{ title: "Franch" }, { title: "Comfort Food" }],
};

export default function About(props) {
    const { name, image, price, reviews, rating, categories } =
        props.route.params;

    const formattedCategories = categories.map((cat) => cat.title).join(" - ");

    const description = `${formattedCategories} ${
        price ? " - " + price : ""
    } - 🎟  - ${rating}🌟 - (${reviews}+)`;
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle name={name} />
            <RestaurantDescription description={description} />
        </View>
    );
}

const RestaurantImage = (props) => (
    <Image
        source={{ uri: props.image }}
        style={{
            width: "100%",
            height: 180,
        }}
    />
);
const RestaurantTitle = (props) => (
    <Text
        style={{
            fontSize: 29,
            fontWeight: "700",
            marginTop: 10,
            marginHorizontal: 15,
        }}
    >
        {props.name}
    </Text>
);
const RestaurantDescription = (props) => (
    <Text
        style={{
            marginTop: 10,
            marginHorizontal: 15,
            fontWeight: "600",
            fontSize: 15,
        }}
    >
        {props.description}
    </Text>
);
