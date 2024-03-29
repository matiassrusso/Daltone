import React, { useState } from 'react'
import {Text,View,TouchableOpacity,StatusBar,ScrollView} from 'react-native'
import { mainStyles, registroStyles } from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import ToolBar from '@components/ToolBar'
import color from '@styles/Colors'
import { CheckBox, SocialIcon, Button } from 'react-native-elements'

function goToScreen(props, routeName) {
    props.navigation.navigate(routeName)
}

export default function RegistroScreen(props) {

    const [hidePassword, setHidePassword] = useState(false)

    return (
        <ScrollView
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='always'
            style={{ backgroundColor: color.BLACK }}>
            <StatusBar backgroundColor={color.BLACK} translucent={false} />
            <ToolBar titulo='Crear cuenta'
                onPressLeft={() => goToScreen(props, 'Login')}
                iconLeft={require('@recursos/images/back.png')} />
            <View style={[mainStyles.container, { padding: 25 }]}>
                <Text style={mainStyles.leftText}> Crear{"\n"}cuenta</Text>
                <MyTextInput placeholder='Nombre de usuario' image='user' />
                <MyTextInput placeholder='Apellidos' image='user' />
                <MyTextInput keyboardType='email-address' placeholder='E-mail'
                    image='envelope' />
                <MyTextInput keyboardType={null} placeholder='Contraseña'
                    onPress={() => setHidePassword(!hidePassword)}
                    //keyboardType={null}
                    image='lock' bolGone={true}
                    secureTextEntry={hidePassword}
                />
                <CheckBox
                    containerStyle={registroStyles.checkBox}
                    textStyle={{ color: color.BLUE }}
                    title='He leído y acepto los términos y condiciones'
                    checked={false}
                    checkedColor={color.BLUE}
                />
                <View style={mainStyles.btnMain}>
                    <TouchableOpacity onPress={() =>
                        goToScreen(props, 'Login')}>
                        <Text style={mainStyles.btntxt}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: color.BLUE }}>¿Ya tienes una cuenta? </Text>
                    <Button title="Inicia Sesión" onPress={() => goToScreen(props, 'Login')} type="clear" />
                </View>
                <View style={registroStyles.containerSocial}>
                    <SocialIcon
                        style={registroStyles.buttonSocialIcon}
                        title='Iniciar con Facebook'
                        button
                        type='facebook'
                    />
                    <SocialIcon
                        style={registroStyles.buttonSocialIcon}
                        title='Iniciar con Google'
                        button
                        type='google-plus-official'
                    />
                </View>
            </View>
        </ScrollView>
    )
}