import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import LottieView from "lottie-react-native";
import MenuItem from "../components/restaurantDetails/MenuItem";
import firebase from "../fireBase";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function OrderCompleted({ navigation }) {
    const [lastOrder, setLastOrder] = useState({
        items: [],
    });

    const [cooking, setCooking] = useState(true);

    const { items, restaurantName } = useSelector(
        (state) => state.cartReducer.selectedItems
    );
    const total = items
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, cur) => prev + cur, 0.0);

    const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });
    const isCooking = () => {
        setTimeout(() => {
            setCooking(false);
        }, 8000);
    };

    useEffect(() => {
        const db = firebase.firestore();
        const unSubcribe = db
            .collection("orders")
            .orderBy("createdAt", "desc")
            .limit(1)
            .onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => {
                    setLastOrder(doc?.data());
                });
            });

        isCooking();
        return () => unSubcribe();
    }, []);

    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: "white", paddingTop: 30 }}
        >
            <View
                style={{
                    margin: 15,
                    marginBottom: 0,
                    height: "100%",
                }}
            >
                {cooking ? (
                    <></>
                ) : (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => {
                            navigation.navigate("Home");
                        }}
                    >
                        <Icons icon="angle-left" text="Back" />
                    </TouchableOpacity>
                )}
                <LottieView
                    style={{
                        height: 100,
                        alignSelf: "center",
                        marginBottom: 20,
                    }}
                    source={
                        cooking
                            ? require("../assets/animations/loading-green.json")
                            : require("../assets/animations/check-mark.json")
                    }
                    autoPlay
                    speed={0.6}
                    loop={cooking ? true : false}
                />
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                >
                    Your order at {restaurantName} has been placed for $
                    {totalUSD}
                </Text>
                <ScrollView>
                    <MenuItem
                        foods={lastOrder?.items}
                        hideCheckbox={true}
                        marginBottom={true}
                    />
                    <LottieView
                        style={{
                            height: 200,
                            alignSelf: "center",
                            marginBottom: 40,
                        }}
                        source={require("../assets/animations/cooking.json")}
                        autoPlay
                        speed={0.5}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
const Icons = (props) => (
    <View style={{ flexDirection: "row" }}>
        <FontAwesome5
            name={props.icon}
            size={25}
            style={{
                marginRight: 5,
                alignSelf: "center",
            }}
        />
        <Text style={{ fontSize: 18, fontWeight: "700" }}>{props.text}</Text>
    </View>
);
