import React, {Component, useState} from 'react'
import { StatusBar, Text, View, TouchableOpacity, Image } from 'react-native'
import { mainStyles, loginStyles } from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/Colors'

function goToScreen(props, routeName){
    props.navigation.navigate(routeName)
}

export default function LoginScreen(props){

        return(
            <View style={[mainStyles.container,{padding: 200}]}>
                
                <View style = {mainStyles.btnTransparent}>
                <TouchableOpacity onPress={()=> goToScreen(props, 'Test2')}>
                    <Text style={ [mainStyles.btntxt,{ color: color.BLACK}]}>Camara</Text>
                    </TouchableOpacity>
                </View>
                <View style = {mainStyles.btnTransparent}>
                    <TouchableOpacity onPress={()=> goToScreen(props, 'Sastre')}>
                        <Text style={ [mainStyles.btntxt,{ color: color.BLACK}]}>Pag Infor</Text>
                    </TouchableOpacity>
                </View>
                <View style = {mainStyles.btnTransparent}>
                    <TouchableOpacity onPress={()=> goToScreen(props, 'Login')}>
                        <Text style={ [mainStyles.btntxt,{ color: color.BLACK}]}>Volver a inicio</Text>
                    </TouchableOpacity>
                </View>
                <View style = {mainStyles.btnTransparent}>
                    <TouchableOpacity onPress={()=> goToScreen(props, 'Contacto')}>
                        <Text style={ [mainStyles.btntxt,{ color: color.BLACK}]}>Pag Contacto</Text>
                    </TouchableOpacity>
                </View>
            


            </View>
            
        )
    
        
    
}