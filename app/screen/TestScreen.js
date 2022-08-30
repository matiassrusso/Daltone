import React, { useContext, useState } from 'react'
import { StatusBar, Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { mainStyles, loginStyles } from '@styles/styles'
import MyButton from '@components/MyButton'
import { UsuarioContext } from '@context/UsuarioContext'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/Colors'
import { fontSize } from 'styled-system'



export default function LoginScreen(props) {


    return (
        <View style={[mainStyles.container, { padding: 25 }]}>
            <Text style={[mainStyles.btntxt, { color: color.BLACK, fontSize: 66, textAlign: 'left' }]}>Evaluacion</Text>
            <StatusBar backgroundColor={color.BLACK} translucent={true} />
            <View style={[loginStyles.logo, { padding: 40 }]}>
                <Image source={require('@recursos/images/cristina.jpg')}
                    style={{ height: 300, width: 350 }} />
            </View>
            <MyTextInput keyboardType="number-pad" placeholder='Escriba el numero de arriba' image='user'/>
            <MyButton
                titulo='Siguiente imagen'
                onPress={() => goToScreen('Test2')}/>
                
           


        </View>

    )
    function goToScreen(routeName) {
        props.navigation.navigate(routeName)
    }
}
            
        