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
        borderRadius : 10

    },
    nameProduct :{
        fontWeight : "bold",
        fontSize : 12,
    },
    description : {
        fontSize : 12,
        color : "lightgrey"
    },
    price : {
        fontSize : 12,
    },
    button :{
        borderRadius : 15, 
        borderWidth : 1,
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
        borderBottomWidth : 1,
        borderColor : "grey",
        padding : 20,
        marginHorizontal :5
    },
    buttonContainer : {
        flexDirection : "row",
        alignItems : "center"
    }, 
    buttonText : {
        marginHorizontal : 20,
        fontSize : 16

    },
    buttonPanier : {
        marginVertical : 10,
        borderRadius : 5,
        borderWidth : 2,
        width : 120,
        borderColor : "darkgrey"
        
    }

});

    export default styles;