import {Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    title : {
        fontSize : 100,
        fontWeight : "bold",
        color : "white",
        alignContent : "center",
        justifyContent : "center"
    },
    button : {
        backgroundColor : "white",
        width : Dimensions.get("screen").width - 300,
        borderRadius : 5,
        alignItems : "center"
    },
    textInput : {
        fontSize : 15
    }

});

export default styles;