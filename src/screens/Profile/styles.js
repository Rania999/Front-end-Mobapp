import {Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    image : {

        width : "100%",
        height : "90%",
        position:"relative",
        top: 100,
        resizeMode : "cover",
        alignItems : "center",
        alignContent : "center",
        justifyContent : "center"

    },

    button : {
        backgroundColor : "white",
        width : 300,
        height: 50,
        justifyContent : "center",
        borderRadius : 5,
        alignItems : "center",
        elevation :15,
        },

    text :{
        fontFamily :"sans-serif-medium",
        fontSize :18,
        
    },
    
    attributs : {
        fontSize: 16,
        fontFamily :"monospace",
        backgroundColor : "white",
        margin : 15

    },
    row : {
        flexDirection : "row"
    }


    }

);

export default styles;