import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, } from 'react-native';
import color from '@styles/Colors'
import { mainStyles, loginStyles, registroStyles } from '@styles/styles'
import ToolBar from '@components/ToolBar'
import MyTextInput from '@components/MyTextInput'
import { Center } from 'native-base';
import { flex, left } from 'styled-system';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CheckBox, SocialIcon, Button } from 'react-native-elements'





export default function App(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')
  const [confirmPassword, setConfirmPassowrd] = useState('')

  function goToScreen(routeName) {
    props.navigation.navigate(routeName)
  }

  return (
    <View style={[styles.container]}>
      <View style={mainStyles.container}>
        <Text style={[mainStyles.logText, { paddingBottom: 50, textAlign: 'center', }]}>Iniciar sesion </Text>

        <View style={[styles.inputView, { paddingTop: 25 }]}>
          <TextInput
            style={styles.inputText}
            placeholder="E-mail"
            keyboardType="email-address"
            placeholderTextColor="#000000"
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={[styles.inputView, { paddingTop: 25 }]}>
          <TextInput
            style={styles.inputText}
            placeholder="Contraseña"
            placeholderTextColor="#000000"
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <TouchableOpacity
          onPress={() => goToScreen('Contacto')}>
          <Text style={[styles.inicioText, { color: 'black' }, { textDecorationLine: 'underline' }, { textAlign: 'center' }, { paddingTop: 25 }, { bottom: 27 }, {}]}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>

        <View style={[styles.loginBtn]}>
          <TouchableOpacity
            onPress={() => goToScreen('Login')}>
            <Text style={styles.loginText}>Iniciar sesion</Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.loginButtonBelowText1, { top: 17.9 }, { fontSize: 20 }]}>〇</Text>
        <View style={[styles.hairlineRg, { top: 3.9 }]} />
        <View style={[styles.hairlineLf, { bottom: -1.9 }]} />

        {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1, height: 2, backgroundColor: 'black' }} />
        </View> */}



        

        <View style={registroStyles.containerSocial}>
          <SocialIcon
            style={registroStyles.socialButton}
            title='Iniciar sesion con Google'
            button type='google'
            iconColor='black'
            color='black'
            light='false'


          />
          <TouchableOpacity>
          <SocialIcon
            style={registroStyles.socialButton}
            title='Iniciar sesion con Facebook'
            light='false'
            button type='facebook'
          />
          </TouchableOpacity>
          {/* <View style={[registroStyles.socialButton]}>
            <Text style={[registroStyles.socialText]}>Iniciar sesion con Google</Text>
        </View> */}
        </View>
        <View>
          <Text style={[styles.inicioText, { top: 1 }, { right: 75, bottom: 100 }]}>Nuevo en Daltone</Text>
          <TouchableOpacity
            onPress={() => goToScreen('Register')}>
            <Text style={[styles.inicioText, { color: '#0066CC' }, { textDecorationLine: 'underline' }, { left: 88 }, { bottom: 26 }]}>Crear una cuenta</Text>
          </TouchableOpacity>
        </View>


      </View>



    </View>

  );
}


const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#00000',
    //paddingLeft: 1,

  },
  subContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hairline: {
    backgroundColor: 'gray',
    height: 1,
    width: 350
  },
  hairlineRg: {
    backgroundColor: 'gray',
    height: 1,
    width: 145,
    left: 100,
  },
  hairlineLf: {
    backgroundColor: 'gray',
    height: 1,
    width: 145,
    right: 100,
  },

  loginButtonBelowText1: {
    fontFamily: 'AvenirNext-Bold',
    fontSize: 14,
    paddingHorizontal: 5,
    alignSelf: 'center',
    color: '#A2A2A2'
  },

  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#DFDFDF',
    borderRadius: 35,
    height: 60,
    marginBottom: 40,
    justifyContent: 'center',
    padding: 20,
    paddingLeft: 30,
  },
  inputText: {
    height: 50,
    color: 'black',
    fontFamily: 'Nunito-light',
    fontSize: 24,
    right: 13,
    bottom:1,
  },

  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#9289FF',
    borderRadius: 25,
    height: 55,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'Nunito-Regular',
    //left: 20,
  },
  loginText: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'Nunito-light',
    fontStyle: 'normal'
  },
  inicioText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Nunito-light',

  },


});