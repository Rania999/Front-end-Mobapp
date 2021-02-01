import {Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    image :{
        
        top:500,
        width : 400,
        height:380,
       resizeMode :'stretch',
        alignItems : "center",
        alignContent : "center",
        justifyContent : "center"

    },
    
    container : {
        
        alignContent : "center",
        alignItems : "center"
    },
    title : {
        position:"absolute",
        top :-470,
        fontSize : 40,
        color :"green",
        fontFamily :"sans-serif-condensed",
        width :410,
        borderColor :"grey",
        alignItems : "center",
        borderWidth : 1,
        borderRadius :5,

    },

    button1 : {
        position :"absolute",
        top :-390,
        backgroundColor : "orange",
        width : 250,
        height :  70,
        borderRadius : 5,
        alignItems : "center",
        justifyContent : "center",
        


    },
    button2 : {
        position :"absolute",
        top :-310,
        backgroundColor : "orange",
        width : 250,
        height :  70,
        borderRadius : 5,
        alignItems : "center",
        justifyContent : "center",
        
    },
    button3 : {
        position :"absolute",
        top :-230,
        backgroundColor : "orange",
        width : 250,
        height :  70,
        borderRadius : 5,
        alignItems : "center",
        justifyContent : "center",
    },
    button4: {
        position :"absolute",
        top :-150,
        backgroundColor : "orange",
        width : 250,
        height :  70,
        borderRadius : 5,
        alignItems : "center",
        justifyContent : "center",
        
    },
    button5 : {
        position :"absolute",
        top : -70,
        backgroundColor : "orange",
        width : 250,
        height :  70,
        borderRadius : 5,
        alignItems : "center",
        justifyContent : "center",
    },   


    buttonText:{
        fontSize :20,
        alignContent : "center", 
        color : "black",
        justifyContent :"center"

    },

});

    export default styles;