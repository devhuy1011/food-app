import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from "react-native";
import { Divider } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function MenuItem({ restaurantName, foods, hideCheckbox, marginLeft, marginBottom }) {
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
        <ScrollView style={{marginBottom: marginBottom ? 0 : 300}} showsVerticalScrollIndicator={false}>
            {foods?.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItemStyle}>
                        {hideCheckbox ? (
                            <></>
                        ) : (
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
                        )}
                        <FoodInfo food={food} />
                        <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
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

const FoodImage = ({marginLeft ,...props}) => (
    <View>
        <Image
            source={{ uri: props.food.image }}
            style={{
                width: 100,
                height: 100,
                borderRadius: 8,
                marginLeft: marginLeft
            }}
        />
    </View>
);
