import {Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container : {
        margin : 100,
        alignContent : "center",
        alignItems : "center"
    },
    title : {
        fontSize : 30,
        marginBottom : 20,

    },

    button : {
        backgroundColor : "orange",
        width : Dimensions.get("screen").width - 300,
        height : Dimensions.get("screen").height /5 - 100,
        borderRadius : 5,
        alignItems : "center",
        justifyContent : "center",
        margin : 5


    },
    buttonText:{
        fontSize :20,
        alignContent : "center", 
        color : "black",
        justifyContent :"center"

    },

});

    export default styles;