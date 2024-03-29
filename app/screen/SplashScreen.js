import React, { useContext, useEffect } from 'react'
import { View, StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { imageBackgroundStyle } from '@styles/General'
import { getUsuario } from '@storage/UsuarioAsyncStorage'
import { UsuarioContext } from '@context/UsuarioContext'




export default function SplashScreen(props) {

    const [login, loginAction] = useContext(UsuarioContext)

    useEffect(() =>{
        fetchSesion(loginAction)

    }, [])


        return (
            <View style={imageBackgroundStyle.image}>
                <StatusBar translucent backgroundColor='black' />
                <Animatable.Image
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    style={{
                        width: 200,
                        height: 200,
                        margin: 100,
                    }}
                    source={require('@recursos/images/64943.png')}
                />
            </View>
        )

        async function fetchSesion(loginAction){

            const response = await getUsuario()
            console.log(response)

            if (response == null){
                setTimeout(()=>{
                    goToScreen('Bienvenido')
                }, 1500)
                return
            }

            loginAction({type:'sing-in' , data: response})
            setTimeout(()=>{
                goToScreen('Principal')
            }, 500)
        }

        function goToScreen(routeName){
            props.navigation.replace(routeName)
        }
    
    
}