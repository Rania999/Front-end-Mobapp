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
    attributs : {
        fontSize: 16,
        borderBottomColor : "blue",
        margin : 10

    },
    row : {
        flexDirection : "row"
    }


    }

);

export default styles;