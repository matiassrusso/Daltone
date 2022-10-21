import React, {Component, useState} from 'react'
import { StatusBar, Text, View, TouchableOpacity, Image } from 'react-native'
import { mainStyles, loginStyles } from '@styles/styles'
import color from '@styles/Colors'



export default function LoginScreen(props){

    function goToScreen(routeName){
        props.navigation.navigate(routeName)
    }

        return(
            <View style={[mainStyles.container,{paddingTop: 10}]}>
                <Text style={ [mainStyles.unoText,{fontSize: 53}]}>Bienvenido a </Text>
                <Text style={ [mainStyles.unoText,{bottom:35,fontSize: 53 }]}>DALTONE</Text>

                <View style={[loginStyles.logo, {bottom:50}]}>
                <Image source={require('@recursos/images/64943.png')}
                    style={{ height: 250, width: 250 }} />
            </View>
            <Text style={ [mainStyles.unoText,{bottom:80, fontSize: 25}]}>Te ayudaremos a</Text>
            <Text style={ [mainStyles.unoText,{bottom:120, fontSize: 25}]}> distinguir los colores</Text>

        <View style={[mainStyles.otro2Btn, {bottom:100}]}>
            <TouchableOpacity
                onPress={() => goToScreen('Register')}>
                <Text style={mainStyles.dosText}>¿Empezamos?</Text>
            </TouchableOpacity>
        </View>

        <View style={[{bottom:60}]}>
        <Text style={[ {right:70, color:'black', fontSize: 22 }, { textDecorationLine: 'underline' }, { textAlign: 'center' }, { paddingTop: 25 }, { bottom: 27 }, {}]}>¿Ya tenes cuenta?</Text>

            <TouchableOpacity
          onPress={() => goToScreen('Inicio')}>
            <Text style={[{ left:89, color: color.LBLUE, fontSize: 22  }, { textDecorationLine: 'underline' }, { textAlign: 'center' }, { paddingTop: 25 }, { bottom: 81.4 }, {}]}>Inicia sesion</Text>

        </TouchableOpacity>
        </View>
        

            </View>
            
        )
    
        
    
}