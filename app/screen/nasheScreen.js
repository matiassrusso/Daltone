import React, { useState } from 'react'
import {StyleSheet,Text,View,TextInput,TouchableOpacity,Image,} from 'react-native';
import color from '@styles/Colors'
import { mainStyles, loginStyles } from '@styles/styles'
import ToolBar from '@components/ToolBar'
import MyTextInput from '@components/MyTextInput'
import { Center } from 'native-base';
import { flex } from 'styled-system';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';





export default function App (props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')  
  const [user, setUser] = useState('')
  const [confirmPassword, setConfirmPassowrd] = useState('')

  function goToScreen( routeName) {
    props.navigation.navigate(routeName)
  }
  
    return (
<View style={[styles.container, { padding: 0 }]}>
          <View style={styles.containerLeft}>
          <Text style={[mainStyles.leftText, { paddingBottom: 30 }]}>Crear{"\n"}cuenta </Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Nombre de usuario"
              placeholderTextColor="#000000"
              onChangeText={(text) => setUser(text )}
            />
            
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="E-mail"
              keyboardType="email-address"
              placeholderTextColor="#000000"
              onChangeText={(text) => setEmail(text )}
            />
            
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Contraseña"
              placeholderTextColor="#000000"
              onChangeText={(text) => setPassword(text )}
            />
            
          </View>
          <View style={styles.inputView}>
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Verificar contraseña"
              placeholderTextColor="#000000"
              onChangeText={(text) => setConfirmPassword(text)}
            />
          </View>
          {/* <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity> */}
          <View style={[styles.loginBtn]}>
          <TouchableOpacity
          onPress={() => goToScreen('Login')}>

            <Text style={styles.loginText}>Siguiente</Text>
          </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.inicioText}>Ya tienes cuenta?</Text> 
            <Text style={[styles.inicioText,{color: '#0066CC'},{textDecorationLine: 'underline'}]}>Inicia sesion</Text>
          </TouchableOpacity>
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
    paddingLeft: 30,

  },
  subContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '90%',
    backgroundColor: '#DFDFDF',
    borderRadius: 25,
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
    fontSize:22,
    right: 20,
},

  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '65%',
    backgroundColor: '#9289FF',
    borderRadius: 25,
    height: 55,
    alignItems: 'center',
    display: 'flex', 
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  fontFamily: 'Nunito-Bold',
  left: 50,

  },
  loginText: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'Nunito-light',
  },
  inicioText :{
    color: 'black',
    fontSize: 20,
    fontFamily: 'Nunito-light',

  },
  
  
});