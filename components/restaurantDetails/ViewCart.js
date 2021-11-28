import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import OderItem from "./OderItem";
import firebase from "../../fireBase";
import LottieView from "lottie-react-native";

export default function ViewCart({ navigation }) {
    const [modelVisible, setModelVisible] = useState(false);
    const [loadding, setLoadding] = useState(false);

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

    const addOderToFirebase = () => {
        setLoadding(true);
        const db = firebase.firestore();
        db.collection("orders")
            .add({
                items: items,
                restaurantName: restaurantName,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then(() => {
                setTimeout(() => {
                    setLoadding(false);
                    navigation.navigate("OrderCompleted");
                }, 2500);
            });
    };

    const checkOutModalContent = () => {
        return (
            <View style={styles.modalContainer}>
                <View style={styles.modalCheckoutContainer}>
                    <Text style={styles.restaurantName}>{restaurantName}</Text>
                    {items.map((item, index) => (
                        <OderItem key={index} item={item} />
                    ))}
                    <View style={styles.subTotalContainer}>
                        <Text style={styles.subTotalText}>Subtotal:</Text>
                        <Text>${totalUSD}</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                marginTop: 20,
                                backgroundColor: "#000",
                                alignItems: "center",
                                padding: 13,
                                borderRadius: 30,
                                width: 300,
                                position: "relative",
                            }}
                            onPress={() => {
                                addOderToFirebase();
                                setModelVisible(false);
                            }}
                        >
                            <Text
                                style={{
                                    color: "white",
                                    fontSize: 20,
                                    fontWeight: "bold",
                                }}
                            >
                                Check out
                            </Text>
                            <Text
                                style={{
                                    color: "white",
                                    fontSize: 20,
                                    position: "absolute",
                                    right: 20,
                                    top: 13,
                                }}
                            >
                                ${total ? totalUSD : ""}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };
    return (
        <>
            <Modal
                animationType="slide"
                visible={modelVisible}
                transparent={true}
                onRequestClose={() => setModelVisible(false)}
            >
                {checkOutModalContent()}
            </Modal>
            {total ? (
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        position: "absolute",
                        bottom: 330,
                        zIndex: 99,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={{
                                marginTop: 20,
                                backgroundColor: "black",
                                alignItems: "center",
                                padding: 13,
                                borderRadius: 30,
                                width: 250,
                                position: "relative",
                                flexDirection: "row",
                                justifyContent: "flex-end",
                                padding: 15,
                            }}
                            onPress={() => setModelVisible(true)}
                        >
                            <Text
                                style={{
                                    color: "#fff",
                                    fontSize: 20,
                                    marginRight: 30,
                                }}
                            >
                                View Cart
                            </Text>
                            <Text style={{ color: "#fff", fontSize: 20 }}>
                                ${totalUSD}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <></>
            )}
            {loadding ? ( 
                <View
                    style={{
                        backgroundColor: "black",
                        position: "absolute",
                        bottom: 200,
                        opacity: 0.6,
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        width: "100%",
                        zIndex: 999
                    }}
                >
                    <LottieView
                        style={{ height: 200}}
                        source={require("../../assets/animations/scanner.json")}
                        autoPlay
                        speed={3}
                    />
                </View>
            ) : (
                <></>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.7)",
        position: "relative",
    },
    modalCheckoutContainer: {
        backgroundColor: "white",
        padding: 16,
        height: 500,
        borderWidth: 1,
    },
    restaurantName: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 10,
    },
    subTotalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
    },
    subTotalText: {
        textAlign: "left",
        fontWeight: "bold",
        fontSize: 15,
        marginBottom: 10,
    },
});
