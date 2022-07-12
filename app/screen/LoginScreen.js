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

    const [hidepassword, sethidepassword] = useState(true)
        return(
            <View style={[mainStyles.container,{padding: 25}]}>
                <StatusBar backgroundColor={color.BLACK} translucent ={true}/>
                <View style={[loginStyles.logo]}>
                    <Image source={require('@recursos/images/64943.png')}
                    style={{ height:250, width:250}}/>
                </View>
                <MyTextInput keyboardType="email-address" placeholder='E-mail' image='user'/>
                <MyTextInput keyboardType={null} placeholder='Contraseña' image='lock'
                bolGone={true} secureTextEntry={hidepassword}
                onPress={()=> sethidepassword(!hidepassword)}/>
                <View style = {mainStyles.btnMain}>
                    <TouchableOpacity>
                        <Text style={ mainStyles.btntxt}>Iniciar sesión</Text>
                    </TouchableOpacity>
                </View>
                <View style = {mainStyles.btnTransparent}>
                    <TouchableOpacity onPress={()=> goToScreen(props, 'Registro')}>
                        <Text style={ [mainStyles.btntxt,{ color: color.BLACK}]}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={()=> goToScreen(props, 'RecuperarPassword')}>
                        <Text style={ [mainStyles.txtTransparent, { fontWeight: 'bold',textDecorationLine: 'underline', marginBottom: 10, }]}>Olvide mi contraseña</Text>
                    </TouchableOpacity>
                </View>
                <View style = {mainStyles.btnMVP}>
                    <TouchableOpacity onPress={()=> goToScreen(props, 'MVP')}>
                    <Text style={ [mainStyles.btntxt,{ color: color.BLACK, fontSize: 14, alignItems: 'center',}]}>Ir al MVP</Text>
                    </TouchableOpacity>
                </View>


            </View>
            
        )
    
        
    
}