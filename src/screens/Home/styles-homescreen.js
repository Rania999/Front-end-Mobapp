import {Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    image : {
        width : "100%",
        height : "110%",
        resizeMode : "center",
        alignItems : "center",
        alignContent : "center",
        justifyContent : "center"

    },

    title : {
        fontFamily : "sans-serif-condensed",
        fontSize : 90,
        alignItems:"center",
        color : "orange",
        position :"absolute",
        top :30
       
    },
    title1: {
        backgroundColor :"white",
        fontFamily : "Roboto",
        fontSize : 20,
        color : "#C0C0C0",
        position :"absolute",
        top:320,
        left : 50
    },
    button : {
        backgroundColor : "white",
        width : Dimensions.get("screen").width - 300,
        borderRadius : 5,
        alignItems : "center",
        paddingVertical : 10,
        elevation : 15,
        position : 'absolute',
        bottom :840

        
     },
     button1 : {
        backgroundColor : "white",
        width : Dimensions.get("screen").width - 300,
        borderRadius : 5,
        alignItems : "center",
        paddingVertical : 10,
        elevation : 15,
        position : 'absolute',
        top : 800
     },
    buttonText:{
        fontFamily : "sans-serif-light",
        fontSize :16,
        alignContent : "center", 
        color : "black",
        justifyContent :"center"
        

    },
    buttonTextSearch:{
        fontSize :16,
        color : "white",
        elevation : 15,
        position:"absolute",
        bottom: 300,
        backgroundColor :"green",
        width : Dimensions.get("screen").width - 400,
        alignItems :"center",
        textAlign :"center"
        

    },
    searchButton : {
        alignContent : "center",
        alignItems : "center",
        justifyContent : "center",
        width : Dimensions.get("screen").width - 200,
        borderRadius :5,

        bottom: 200,
        backgroundColor : "green"


    },
    list: {
        backgroundColor :"transparent",
        

        position :"absolute",
        top :300
        
    },

});

export default styles;
