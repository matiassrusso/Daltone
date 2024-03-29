import React, { useContext, useState } from 'react'
import { StatusBar, Text, View, TouchableOpacity, Image } from 'react-native'
import { mainStyles, loginStyles } from '@styles/styles'
import MyButton from '@components/MyButton'
import { UsuarioContext } from '@context/UsuarioContext'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/Colors'



export default function LoginScreen(props) {

    const [login, loginAction] = useContext(UsuarioContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [hidepassword, sethidepassword] = useState(true)
    return (
        <View style={[mainStyles.container, { padding: 25 }]}>
            <StatusBar backgroundColor={color.BLACK} translucent={true} />
            <View style={[loginStyles.logo]}>
                <Image source={require('@recursos/images/64943.png')}
                    style={{ height: 250, width: 250 }} />
            </View>
            <MyTextInput keyboardType="email-address" placeholder='E-mail' image='user'
                value={email} onChangeText={(email) => setEmail(email)} />
                
            <MyTextInput keyboardType={null} placeholder='Contraseña' image='lock'
                bolGone={true} secureTextEntry={hidepassword}
                onPress={() => sethidepassword(!hidepassword)}
                value={password} onChangeText={(password) => setPassword(password)} />
            <MyButton
                titulo='Iniciar sesion'
                //onPress={() => iniciarSesion()}
                onPress={() => goToScreen('Inicio')}
            />
            <MyButton
                transparent={true}
                titulo='Registrarse'
                onPress={() => goToScreen('Register')}
            />
            <View>
                <TouchableOpacity onPress={() => goToScreen('RecuperarPassword')}>
                    <Text style={[mainStyles.txtTransparent, { fontWeight: 'bold', textDecorationLine: 'underline', marginBottom: 10, }]}>Olvide mi contraseña</Text>
                </TouchableOpacity>
            </View>
            <View style={mainStyles.btnMVP}>
                <TouchableOpacity onPress={() => goToScreen('Test')}>
                    <Text style={[mainStyles.btntxt, { color: color.BLACK, fontSize: 14, alignItems: 'center', }]}>Ir al MVP</Text>
                </TouchableOpacity>
            </View>


        </View>

    )

    function iniciarSesion() {
        loginAction({
            type: 'sign', data: {
                email, password
            }
        })
        goToScreen('Principal')
    }

    function goToScreen(routeName) {
        props.navigation.navigate(routeName)
    }

}