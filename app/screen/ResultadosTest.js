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
                <Text style={ [{color: 'black',fontSize: 53}]}>Resultados</Text>
                <Text style={ [{color: 'black',fontSize: 53}]}>Test</Text>

                

        <View style={[mainStyles.otro2Btn, {top:120} ]}>
            <TouchableOpacity
                onPress={() => goToScreen('Register')}>
                <Text style={mainStyles.dosText}>¿Empezamos?</Text>
            </TouchableOpacity>
        </View>

    
        

            </View>
            
        )
    
        
    
}