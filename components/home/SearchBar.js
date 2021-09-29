import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar({ cityHandler }) {
    return (
        <View style={{ marginTop: 15, flexDirection: "row" }}>
            <GooglePlacesAutocomplete
                query={{key: "AIzaSyAwFxSYT0Ui9Z4oR9z-GKPDVSmg4RdMdXY"}}
                onPress={(data, details = null) => {
                    console.log(data.description);
                    const city = data.description.split(",")[0];
                    cityHandler(city);
                }}
                placeholder="Sreach..."
                styles={{
                    textInput: {
                        backgroundColor: "#eee",
                        borderRadius: 20,
                        fontWeight: "700",
                        marginTop: 7,
                    },
                    textInputContainer: {
                        backgroundColor: "#eee",
                        borderRadius: 50,
                        flexDirection: "row",
                        alignItems: "center",
                    },
                }}
                renderLeftButton={() => (
                    <View style={{ marginLeft: 10 }}>
                        <Ionicons name="location-sharp" size={24} />
                    </View>
                )}
                renderRightButton={() => (
                    <View
                        style={{
                            flexDirection: "row",
                            marginRight: 8,
                            backgroundColor: "white",
                            alignItems: "center",
                            padding: 9,
                            borderRadius: 30,
                        }}
                    >
                        <AntDesign
                            name="clockcircle"
                            size={11}
                            style={{ marginRight: 8 }}
                        />
                        <Text>Search</Text>
                    </View>
                )}
            />
        </View>
    );
}
