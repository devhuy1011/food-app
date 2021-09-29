import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs() {
    return (
        <View
            style={{
                flexDirection: "row",
                margin: 10,
                marginHorizontal: 30,
                justifyContent: "space-between",
            }}
        >
            <Icons icon="home" text="Home" />
            <Icons icon="search" text="Browser" />
            <Icons icon="shopping-bag" text="Grocery" />
            <Icons icon="receipt" text="Orders" />
            <Icons icon="user" text="Account" />
        </View>
    );
}

const Icons = (props) => (
    <TouchableOpacity>
        <View>
            <FontAwesome5
                name={props.icon}
                size={22}
                style={{
                    marginBottom: 3,
                    alignSelf: "center",
                }}
            />
            <Text style={{ fontSize: 12, fontWeight: "700" }}>
                {props.text}
            </Text>
        </View>
    </TouchableOpacity>
);
