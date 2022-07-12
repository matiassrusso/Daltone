import React, {Component, useState} from 'react'
import { StatusBar, Text, View, TouchableOpacity, Image } from 'react-native'
//import { View } from 'react-native-animatable'
//import { TouchableOpacity } from 'react-native-gesture-handler'
//import { color } from 'react-native-reanimated'
import { mainStyles, loginStyles } from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/Colors'
//import RecuperarPasswordScreen from './RecuperarPasswordScreen'

function goToScreen(props, routeName){
    props.navigation.navigate(routeName)
}

export default function LoginScreen(props){

        return(
            <View style={[mainStyles.container,{padding: 200}]}>
                <View style = {mainStyles.btnTransparent}>
                <TouchableOpacity onPress={()=> goToScreen(props, 'Sastre')}>
                    <Text style={ [mainStyles.btntxt,{ color: color.BLACK}]}>Ir a lo de Sastre</Text>
                    </TouchableOpacity>
                </View>
                <View style = {mainStyles.btnTransparent}>
                    <TouchableOpacity onPress={()=> goToScreen(props, 'MVP')}>
                        <Text style={ [mainStyles.btntxt,{ color: color.BLACK}]}>Ir al MVP</Text>
                    </TouchableOpacity>
                </View>
                <View style = {mainStyles.btnTransparent}>
                    <TouchableOpacity onPress={()=> goToScreen(props, 'Login')}>
                        <Text style={ [mainStyles.btntxt,{ color: color.BLACK}]}>Volver a inicio</Text>
                    </TouchableOpacity>
                </View>


            </View>
            
        )
    
        
    
}