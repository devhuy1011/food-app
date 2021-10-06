import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
    {
        name: "Lẩu nướng số 1 Đường Láng",
        img_url:
            "https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?size=626&ext=jpg",
        categories: ["Cafe", "Bar"],
        price: "$$$",
        review: 1234,
        rating: 4.5,
    },
    {
        name: "Nhà hàng kiểu Nhật Bản",
        img_url:
            "https://media-cdn.tripadvisor.com/media/photo-s/11/be/a3/0e/photo-suminato.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$$",
        review: 1534,
        rating: 4,
    },
    {
        name: "Nhà hàng số 321 Hai Bà Trưng Hà Nội",
        img_url:
            "https://media-cdn.tripadvisor.com/media/photo-s/1a/c1/dc/57/restaurant-layout.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$$",
        review: 1534,
        rating: 4.5,
    },
    {
        name: "Cửa hàng đồ ăn nhanh Times Square Hà Nội",
        img_url:
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$$",
        review: 534,
        rating: 4.9,
    },
];

export default function RestaurentItem({ navigation, ...props }) {
    return (
        <>
            {props.restaurantData?.map((restaurant, index) => (
                <TouchableOpacity
                    key={index}
                    activeOpacity={1}
                    style={{ marginBottom: 30 }}
                    onPress={() =>
                        navigation.navigate("Restaurant", {
                            name: restaurant.name,
                            image: restaurant.image_url,
                            price: restaurant.price,
                            reviews: restaurant.review_count,
                            rating: restaurant.rating,
                            categories: restaurant.categories,
                        })
                    }
                >
                    <View
                        style={{
                            marginTop: 10,
                            padding: 15,
                            backgroundColor: "#fff",
                        }}
                    >
                        <RestaurentImage image={restaurant.image_url} />
                        <RestaurentInfo
                            name={restaurant.name}
                            rating={restaurant.rating}
                        />
                        {/* <Text>RestaurentItem</Text> */}
                    </View>
                </TouchableOpacity>
            ))}
        </>
    );
}

const RestaurentImage = (props) => (
    <View>
        <Image
            source={{
                uri: props.image,
            }}
            style={{
                width: "100%",
                height: 180,
            }}
        />
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
            <MaterialCommunityIcons
                name="heart-outline"
                size={25}
                color="#fff"
            />
        </TouchableOpacity>
    </View>
);

const RestaurentInfo = (props) => (
    <View
        style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
        }}
    >
        <View>
            <Text style={{ fontSize: 15, fontWeight: "700" }}>
                {props.name}
            </Text>
            <Text style={{ fontSize: 13, color: "gray" }}>30-45 . min</Text>
        </View>
        <View
            style={{
                backgroundColor: "#eee",
                height: 30,
                width: 30,
                alignItems: "center",
                borderRadius: 15,
                justifyContent: "center",
            }}
        >
            <Text>{props.rating}</Text>
        </View>
    </View>
);
