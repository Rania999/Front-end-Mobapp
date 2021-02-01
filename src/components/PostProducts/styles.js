import {Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    row : {
        flexDirection : "column"
    },

    container : {
        alignContent : "center"
    },
    
    image : {
        width : "50%", 
        aspectRatio: 3/2,
        resizeMode : "cover",
        borderRadius : 10,
        top: 20

    },
    nameProduct :{
        fontFamily :"sans-serif-condensed",
        fontSize : 20,
        position:"absolute",
        top:-175,
        left : 300
    },
    description : {
        fontSize : 12,
        color : "lightgrey"
    },
    price : {
        fontSize : 12,
        position:"absolute",
        top : -140,
        left:300,
        backgroundColor :"white"
    },
    button :{
        borderRadius : 15, 
        borderWidth : 3,
        width : 30, 
        height : 30,
        justifyContent : "center",
        alignItems : "center",
        borderColor : 'grey'

    },
    generalInfo : {
        alignItems :"center",
        justifyContent : "space-between",
        flexDirection : "row",
        borderBottomWidth : 3,
        borderColor : '#264a00',
        padding : 20,
        marginHorizontal :5
    },
    buttonContainer : {
        flexDirection : "row",
        alignItems : "center"
    }, 
    buttonText : {
        marginHorizontal :5,
        fontSize : 20,
        color :"black",

    },
    buttonPanier : {
        backgroundColor :'#419c00',
        marginVertical : 10,
        borderRadius : 5,
        borderWidth : 2,
        width : 150,
        alignItems : "center",
        borderColor : "darkgrey"  
    },
    
    text:{
        color: "white",
        fontFamily :"sans-serif-condensed"
    }

});

    export default styles;