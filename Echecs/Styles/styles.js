import {StyleSheet} from 'react-native'; 


const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      flexDirection: "row"
    },
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "center", 
      justifyContent: "center"
    },
    title: {
      color: 'red',
      flexDirection: "row",
      fontWeight : "bold"
    },
    image: {
      width : "100%",
      height : "100%"
    }
  });

  export default styles;