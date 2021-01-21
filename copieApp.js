import React, {useState} from 'react';
import {FlatList,TextInput, Button, View, Text, StyleSheet} from 'react-native';
import {encode} from 'base-64';



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
});



function Hello(props) {
  return (
    <Text>{props.text}</Text>
  )
}


let magasin1 = {nomCommerce : "test",
typeCommerce : "bidule", 
pointDeVente : "machin",
adresse : "5678 GYHUYTFG"
}


const Magasin = (props) => {
return (<Text style ={styles.bigBlue}>
  <Text> {props.nomCommerce} </Text> 
  <Text> {props.typeCommerce}</Text>
  <Text> Point de vente : {props.pointDeVente}</Text>
  <Text> Adresse : {props.adresse} </Text>
  <Button title = "Plus d'infos"></Button>
  <Button title = "Les produits"></Button>
  </Text>
  
)
}

function sendRequest(key,updateFunction, route) {
  const url = new URL(route, 'http://localhost:5000/')
  url.searchParams.append('filter',key)
  console.log("Requesting " + url.toString())
  fetch(url, {
    method : 'GET'
  }
  ).then((response) => response.json()).then(updateFunction).catch(
    (e) => {alert('Something went wrong ' + e.message)}
  )
}

function sendRequestCredentials(key,updateFunction) {
  const route = "/store"
  const url = new URL(route, 'https://kiva.mobapp.mines-paristech.fr/api')
  url.searchParams.append('filter',key)
  const hd = new Headers({'Authorization' : 'Basic ' + encode('kiva:bien') })
  console.log("Requesting " + url.toString())
  fetch(url, {
    method : 'GET',
    headers : hd
  }
  ).then((response) => {
    if (response.status == '200') {
      return(response.json())
    } else {
      alert('Response code :' + response.status)
    }
  }).then(updateFunction).catch(
    (e) => {alert('Something went wrong here' + e.message)}
  )
}

function addCouple(key, value, route){
  const url = new URL(route, 'http://localhost:5000/')
  url.searchParams.append('key',key)
  url.searchParams.append('val',value)

  console.log("Requesting " + url.toString())
  fetch(url, {
    method : 'POST',
    body : {key: key, val : value}
  }

  ).then(response => console.log(response.status)).catch(
    (e) => {alert('Something went wrong ' + e.message)}
  )
}

const KivAppA = () => {
  const [clef, setClef] = useState("alice")
  const [key, setKey] = useState("clé")
  const [value, setValue] = useState("valeur")
  const [liste, setListe] = useState([])
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <View style = {{flexDirection : "row"}}>
          <Text style = {styles.title} > Magasins </Text>
          <Magasin magasin1 />
          <Text style={styles.bigBlue}>
            Filter:
          </Text>
          <TextInput value={clef} onChangeText={(txt) => {setClef(txt); sendRequest(txt,setListe, "/store")}}></TextInput>
          <Text style={{alignItems: "center", alignSelf: "center", justifyContent: "center"}}> Clé : </Text>
      
          <TextInput value={key} onChangeText={(txt)=> {setKey(txt)}}></TextInput> 
          <Text style={{alignItems: "center", alignSelf: "center", justifyContent: "center"}}> Valeur : </Text>
          <TextInput value={value} onChangeText={(txt)=> {setValue(txt)}}></TextInput>  
        </View>
        
        <Hello text={clef}></Hello>
        <KeyValues display={liste}/>
        <Button title="Envoyer" onPress={(evt) => {sendRequest(clef,setListe, "/store")}}></Button>
        <Button title="Ajouter" onPress={(evt) => {addCouple(key, value, "/store")}}></Button>
        
    </View>
  )
}


function KeyValues(props){
  return(
    <FlatList data={props.display} renderItem={
      ({item, index: idx}) => 
      <Text>{"Element " + idx +  " is (" + item[0] + " -> " + item[1] + ")"}</Text> 
      }
      keyExtractor={(item) => item[0]}>
    </FlatList>
  )
}

export default KivAppA;