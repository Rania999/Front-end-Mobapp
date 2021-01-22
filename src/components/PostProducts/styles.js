import {Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    row : {

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
    },
    generalInfo : {
        alignItems :"center",
        flexDirection : "row"
    }

});

    export default styles;