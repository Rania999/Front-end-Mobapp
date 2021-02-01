import {Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container : {
        margin : 20,
    },
    row : {
        flexDirection : "row",
        alignItems : "center",
        marginVertical : 10,
        borderColor : "lightgrey"



    },
    iconContainer :{
        
        backgroundColor : "lightgrey",
        padding : 10,
        borderRadius : 10,
        height :70,
        width :250,
        justifyContent :"center",
        alignContent :"center",
        

    },
    locationText : {
        fontSize :30,
        fontFamily :"monospace",
        color : "black",
        
    },
    textInput :{
        fontSize :40,
        fontFamily :"sans-serif-condensed"
        
    },
});

    export default styles;