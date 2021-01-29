import {Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    image : {
        width : "50%",
        height : 300,
        aspectRatio :3/2,
        resizeMode : 'stretch',
        
        position : 'absolute',
        top : 0,
        bottom : 0,
        left : 300,
        right : 0,
        
    },

    container : {
        height : 300,
        width : 500,
        margin : 50,
        backgroundColor : "white"
    }, 
    businessType : {
        fontSize : 14
    },
    businessName : {
        fontSize : 14
    },
    pdv : {
        position: 'absolute',
        top : 10,

        fontFamily : 'monospace',
        fontSize : 15
    },
    address :{
        fontFamily: 'sans-serif-thin',
        fontSize : 14
    },
    addressDetail :{
        fontFamily: 'sans-serif-thin',
        fontSize : 14
    }, 
    button : {
        borderColor : "lightgrey",
        borderRadius : 2
    }

});

    export default styles;