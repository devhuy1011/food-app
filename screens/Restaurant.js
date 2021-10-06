import React from "react";
import { View } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetails/About";
import MenuItem from "../components/restaurantDetails/MenuItem";
import ViewCart from "../components/restaurantDetails/ViewCart";

const foods = [
    {
        title: "Gà nướng kiểu Pháp",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9H4aWAL8Xx8LIFcDQE2dcA_BfLUUpoV0aWw&usqp=CAU",
        price: "$20.6",
        description: "Amazing food form chiken 🇫🇷 ",
    },
    {
        title: "Beef medium rare kiểu Pháp",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvsYxfZk3s7O9GXj46W42xImNZ3WAEagRG5A&usqp=CAU",
        price: "$30.5",
        description: "Hottest number 1 in restaurant 🔥",
    },
    {
        title: "Phở Việt Nam",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1wXJwCN8z5ZKU4J5N9CN0nsXn5VRZigI8nw&usqp=CAU",
        price: "$15.5",
        description: "VietNames fast food noodles 🇻🇳  ",
    },

    {
        title: "Kim chi Hàn Quốc",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYCrSnCVrLJxBAN2ywL53oGlBsa8P8q4HaTw&usqp=CAU",
        price: "$5.5",
        description: "Korean fast food noodles 🇰🇷  ",
    },
    {
        title: "Món ăn kiểu Hàn Quốc",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQ2sip22iAcGNQQRhX6XZop7puqTl1L8Q-A&usqp=CAU",
        price: "$15.5",
        description: "Korean fast food noodles 🇰🇷  ",
    },
    {
        title: "Shashimi Nhật Bản",
        image: "https://img.tastydalat.com.vn/crop/368x368/2020/01/02/sashimi-ca-hoi-8689.jpg",
        price: "$35.5",
        description: "Japanese shashimi  🇯🇵   ",
    },
    {
        title: "Shushi Nhật bản",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx0IW9lxFRWV-bjVqjrUV5iBjDnb_XA29nVw&usqp=CAU",
        price: "$19.9",
        description: "Japanese shushi 🇯🇵  ",
    },
];

export default function Restaurant({ route, navigation }) {
    return (
        <View>
            <About route={route} />
            <Divider width={1.8} style={{ marginVertical: 15 }} />
            <MenuItem restaurantName={route.params.name} foods={foods} />
            <ViewCart navigation={navigation} />
        </View>
    );
}
