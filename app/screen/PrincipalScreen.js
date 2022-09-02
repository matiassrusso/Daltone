import React, { useContext, useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, StatusBar, Alert, BackHandler, Pressable, Image } from 'react-native'
import color from '@styles/Colors'
import { UsuarioContext } from '@context/UsuarioContext'
import MyButton from '@components/MyButton'
import Icon from 'react-native-ico-material-design'
import RoundButton from '../components/RoundButton'
import styles from '@styles/styles'
import { mainStyles, loginStyles } from '@styles/styles'

function useBackButon(handler) {
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handler)
        return () => {
            console.log('hardwareBackPress Close')
            BackHandler.removeEventListener("hardwareBackPress", handler)
        }
    }, [handler])
}



export default function PrincipalScreen(props) {

    useBackButon(desconectarse)
    const [login, loginAction] = useContext(UsuarioContext)


    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <StatusBar
                backgroundColor={color.BLACK}
                barStyle='dark-content'
                translucent={true}
            />

            <Text style={{ color: 'black', fontSize: 64, textAlign: 'center', marginTop: 200, fontFamily: 'Nunito-Bold' }}> Bienvenido{'\n' + login.usuario.email}</Text>
            
            <MyButton
                titulo='Cerrar sesion'
                onPress={() => desconectarse()}
            />
            
            <View style={mainStyles.roundButton}>
                <TouchableOpacity onPress={() => goToScreen('Test2')}>
                    <Text style={[mainStyles.btntxt, { color: color.WHITE, fontSize: 14, alignItems: 'center', }]}>Ir al MVP</Text>
                </TouchableOpacity>
            </View>

        </View>


    )

    function goToScreen(routeName) {
        props.navigation.navigate(routeName)
    }

    function desconectarse(){
        Alert.alert(
            "Salir",
            "Estas seguro que \ndesea cerrar sesion?",
            [
                {
                    text: "Si", onPress:()=>{
                        loginAction({
                            type: 'sign-out',
                            data: {}
                        })
                        goToScreen('Login')
                    }
                },
                {
                    text: "No", onPress: ()=>{}, style: 'cancel'
                }
            ]
        )
    }


}
