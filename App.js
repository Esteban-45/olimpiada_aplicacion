/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Alert,
  View,
  Image,
  ImageBackground,
  Text,
} from 'react-native';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.Buscar()
    this.state = {
      distancias:[]
    };
  }

  Buscar = () =>{
    const interval = setInterval(() => {
    fetch('http://10.0.15.249/olimpiadas/index.php',{//
      method: 'GET',
      header:{
        'Accept' : 'application/json',
        'Content-type' : 'application/json'
      }
    })
    .then((respuesta) => respuesta.json())
    .then((resp)=>{
      this.setState({distancias:resp})
    })
    .catch((error)=>{
      console.log(error);
    })
  },1000)
  }

  render(){
    if (this.state.distancias <= 2.50) {
      return(
        <SafeAreaView>
          <View>
            {Alert.alert('Estas al lado de', 'Una estatua del Jose de San Martin')}
          </View>
        </SafeAreaView>
      );
    }else{
      return(
        <SafeAreaView>
          <View>
            <Text>Bienvenido al Museo</Text>
          </View>
        </SafeAreaView>
      );
    }

  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
