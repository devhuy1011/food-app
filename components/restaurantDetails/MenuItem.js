import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const foods = [
    {
        title: "Gà nướng kiểu Pháp",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9H4aWAL8Xx8LIFcDQE2dcA_BfLUUpoV0aWw&usqp=CAU",
        price: "$20.5",
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
        title: "Món ăn kiểu Hàn Quốc",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQ2sip22iAcGNQQRhX6XZop7puqTl1L8Q-A&usqp=CAU",
        price: "$15.5",
        description: "Korean fast food noodles 🇰🇷  ",
    },
];

export default function MenuItem({ restaurantName }) {
    const dispatch = useDispatch();
    const selectItem = (item, checkboxValue) =>
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                ...item,
                restaurantName: restaurantName,
                checkboxValue: checkboxValue,
            },
        });

    const cartItems = useSelector(
        (state) => state.cartReducer.selectedItems.items
    );

    const isFoodInCart = (food, cartItems) =>
        Boolean(cartItems.find((item) => item.title === food.title));

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItemStyle}>
                        <BouncyCheckbox
                            iconStyle={{
                                borderColor: "lightgray",
                                borderRadius: 5,
                                marginRight: 10,
                            }}
                            fillColor="blue"
                            onPress={(checkboxValue) =>
                                selectItem(food, checkboxValue)
                            }
                            isChecked={isFoodInCart(food, cartItems)}
                        />
                        <FoodInfo food={food} />
                        <FoodImage food={food} />
                    </View>
                    <Divider
                        width={0.5}
                        orientation="vertical"
                        style={{ marginHorizontal: 20 }}
                    />
                </View>
            ))}
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: "row",
        justifyContent: "space-evenly",
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
