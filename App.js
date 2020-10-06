/* by : Tiago Ribeiro Santos 
   Date : 02/10/2020
*/

import React, { Component } from 'react';
import {
  ImageBackground,
  Alert,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';



export default class App extends Component {
  clicou = () => {
    Alert.alert('Food App', 'Você clicou em mim!');
  };
  render() {
    return (
      <View style={styles.container}>


        <Text style={styles.titulo}>Login Food Mobile </Text>

        <TextInput style={styles.input} placeholder="Digite Seu Email" />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Digite Sua Senha"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.clicou();
          }}>
          <Text style={styles.botaoText}>Login</Text>
        </TouchableOpacity>


      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',

  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  logo: {
    width: '80%',
    height: 70,
  },
  /* fundo: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
  }, */
  input: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: 'black',
    alignSelf: 'stretch',
    marginBottom: 15,
    marginHorizontal: 20,
    fontSize: 16,
  },
  button: {
    width: '55%',
    height: 42,
    backgroundColor: 'black',
    marginTop: 10,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

