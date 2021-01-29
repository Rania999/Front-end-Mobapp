import React, {useState} from "react";
import {View, Text, ImageBackground, Pressable} from "react-native";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";
import { FlatList,List } from "react-native-gesture-handler";
import CheckBox from '@react-native-community/checkbox';




const FilterScreen = (props) => {
    const navigation = useNavigation();
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    {/*const typesOfProducts = { "Tout",
             "Produits Secs",
        "Fruits et Légumes",
        "Poisson",
        "Viande",
        "Farine et Pain",
        "Crémerie",
        "Plantes",
        "Vin artisanal"
        "Bière artisanale"
        "Spécialités cuisinées"
        "Épicerie sucrée"
        "Hygiène et cosmétique"
        "Artisanat"}
*/}

    return (
        <View>
            <ImageBackground 
            source = {require('../../../assets/images/aliment.png')} 
            style = {styles.image}>
            <View style={styles.container}>
            <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}/>
      
    
          
        
        <Text style={styles.label}> testttttttt</Text>
    
    </View>





                {/* <Pressable style = {styles.searchButton}
            onPress = {() => navigation.navigate('Destination Search')}>
                
                    <Text style = {styles.buttonTextSearch}> Où êtes-vous ?</Text>
                </Pressable>
                <Pressable style = {styles.button}
                onPress = {() => navigation.navigate('Login')}>
                    <Text style = {styles.buttonText}> Se déconnecter</Text>
                </Pressable>

                <Text style = {styles.title}> Nos magasins </Text>



                <Pressable style = {styles.button}
                onPress = {() => navigation.navigate('Shops')}>
                    <Text style = {styles.buttonText}> Tous les découvrir</Text>
                </Pressable>
                <FlatList
                data = {feedShops}
                renderItem = {(item) => <Post post = {item}/>}
                horizontal = {true} />*/}
                


            </ImageBackground>
            
        </View>
    );
};

export default FilterScreen;
