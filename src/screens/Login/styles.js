import {Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container : {
        justifyContent : "center",
        alignItems : "center",
        
    },
   
    
    button1 : {
        backgroundColor : "white",
        width : 200,
        borderRadius : 5,
        justifyContent:"center",
        alignItems : "center",
        position:"absolute",
        top:500,
        elevation :15,
        height :40

    },
    button2 : {
        backgroundColor : "white",
        width : 200,
        borderRadius : 5,
        justifyContent:"center",
        alignItems : "center",
        position:"absolute",
        top:550,
        elevation :15,
        height :40
    },

    textInput1 : {
        fontSize : 15,
        position:"absolute",
        top:420
    },
    textInput2 : {
        fontSize : 15,
        position:"absolute",
        top:450
    },
    image : {
        width : "40%",
        height : "50%",
        resizeMode:"cover",
        alignItems : "center",
        alignContent : "center",
        justifyContent : "center",
        position:"relative",
        top :120   

    },
    
    textStyle1: {
        fontFamily :"sans-serif-medium",
        fontSize : 60,
        color : "orange",
        position :"absolute",
        top:70,
        left :80
         },
     textStyle2: {
            fontFamily :"sans-serif-medium",
            fontSize : 60,
            color : "green",
            position :"absolute",
            top:70  ,         
            right: 50
             },

});

export default styles;