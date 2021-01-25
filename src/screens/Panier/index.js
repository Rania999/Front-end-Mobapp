import React from "react";
import {View, Text, ImageBackground, Pressable} from "react-native";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";



const PanierScreen = (props) => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Ceci est le panier</Text>

        </View>
    );
};

export default PanierScreen;