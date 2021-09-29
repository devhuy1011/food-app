import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Divider } from "react-native-elements";

const foods = [
    {
        title: "Gà nướng kiểu Pháp",
        image: "data:image/jpeg;base64,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",
        price: "$20.5",
        description: "Amazing food form chiken 🇫🇷 ",
    },
    {
        title: "Beef medium rare kiểu Pháp",
        image: "data:image/jpeg;base64,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",
        price: "$30.5",
        description: "Hottest number 1 in restaurant 🔥", 
    },
    {
        title: "Món ăn kiểu Hàn Quốc",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQ2sip22iAcGNQQRhX6XZop7puqTl1L8Q-A&usqp=CAU",
        price: "$15.5",
        description: "Korean fast food noodles 🇰🇷  ",
    },
];

export default function MenuItem() {
    return (
        <View>
            {foods.map((food, index) => (
                <View key={index}>
                    {/* <BouncyCheckbox /> */}
                    <View style={styles.menuItemStyle}>
                        <FoodInfo food={food} />
                        <FoodImage food={food} />
                    </View>
                    <Divider width={0.5} orientation='vertical' style={{marginHorizontal: 20}} />
                </View>
            ))}
        </View>
    );
}
const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },
    title: {
        fontSize: 19,
        fontWeight: "700",
    },
});

const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
        <Text style={styles.title}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImage = (props) => (
    <View>
        <Image
            source={{ uri: props.food.image }}
            style={{
                width: 100,
                height: 100,
                borderRadius: 8,
            }}
        />
    </View>
);
