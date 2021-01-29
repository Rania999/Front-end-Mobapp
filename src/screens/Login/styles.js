import {Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container : {
        justifyContent : "center",
        alignItems : "center",
        
    },
   
    
    button : {
        backgroundColor : "white",
        width : 200,
        borderRadius : 5,
        alignItems : "center"
    },
    textInput : {
        fontSize : 15
    },
    image : {
        width : "80%",
        height : "50%",
        resizeMode : "cover",
        alignItems : "center",
        alignContent : "center",
        justifyContent : "center",
        

    },

    containerstyle :{
        
        justifyContent :"center"
    },
    
    textStyle: {
        fontFamily :"sans-serif-thin",
        fontSize : 50,
        fontWeight : "bold",
        color : "orange",
        position :"relative",
        top:50,
        right:10
         },
});

export default styles;