import {Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    image : {
        width : "100%",
        height : "100%",
        resizeMode : "cover",
        alignItems : "center",
        alignContent : "center",
        justifyContent : "center"

    },

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
    buttonText:{
        fontSize :16,
        alignContent : "center", 
        color : "black",
        justifyContent :"center"

    },
    buttonTextSearch:{
        fontSize :16,
        alignContent : "center", 
        color : "white",
        justifyContent :"center"

    },
    searchButton : {
        alignContent : "center",
        alignItems : "center",
        justifyContent : "center",
        width : Dimensions.get("screen").width - 200,
        borderRadius :5,

        bottom: 200,
        backgroundColor : "green"


    }

});

export default styles;