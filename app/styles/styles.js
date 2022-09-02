import { View, StyleSheet, Text } from 'react-native'
import color from './Colors'


//Estilos para MainScreen
const mainStyles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: color.WHITE
    },
    container2: {
        flex: 1,
        backgroundColor: '#00000',
        paddingLeft: 30,
    
      },

    containerCenter: {
        paddingTop: 10,
        alignItems: 'center',
        marginBottom: 25,
    },
    containerLeft: {
        paddingTop: 10,
        alignItems: 'left',
        marginBottom: 25,
    },
    subContainer: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
        
      },
    inputView: {
        width: '90%',
        backgroundColor: '#DFDFDF',
        borderRadius: 25,
        height: 60,
        marginBottom: 40,
        justifyContent: 'center',
        padding: 20,
        paddingLeft: 30,
      },
      inputText: {
        height: 50,
        color: 'black',
        fontFamily: 'Nunito-light',
        fontSize:22,
        right: 20,
    },

    titleText: {
        fontSize: 28,
        marginTop: 20,
        color: color.BLUE,
        fontFamily: "Nunito-SemiBold"
    },

    leftText: {
        fontSize: 72,
        marginTop: 50,
        color: color.BLACK,
        fontFamily: "Nunito-Regular"
    },
    inicioText :{
        color: 'black',
        fontSize: 20,
        fontFamily: 'Nunito-light',
    
      },
      loginText: {
        color: 'black',
        fontSize: 30,
        fontFamily: 'Nunito-light',
      },

    btnMain: {
        width: 280,
        marginTop: 40,
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: color.BLACK,
        borderRadius: 60
    },
    loginBtn: {
        width: '65%',
        backgroundColor: '#9289FF',
        borderRadius: 25,
        height: 55,
        alignItems: 'center',
        display: 'flex', 
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
      fontFamily: 'Nunito-Bold',
      left: 50,
    
      },
      

    roundButton: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: color.BLACK,
    },
    roundTrasparent: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: color.BLACK,
    },

    btnTransparent: {
        backgroundColor: 'rgba(52, 52, 52, 0)',
        borderColor: color.BLACK,
        width: 280,
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 60
    },

    btntxt: {
        textAlign: 'center',
        fontSize: 17,
        color: color.WHITE,
        paddingVertical: 15,
        fontFamily: 'Nunito-Bold',
    },

    btnMVP: {
        backgroundColor: color.WHITE,
        borderColor: color.BLACK,
        color: color.WHITE,
        width: 100,
        fontSize: 11,
        height: 55,
        borderWidth: 2,
        //marginBottom: 100,
        borderRadius: 25
    },

    txtTransparent: {
        color: color.LIGHTPRIMARYCOLOR,
        fontSize: 14,
        fontFamily: 'Nunito-Light',
    }
    
})

//Estilos para SplashScreen
const splashStyles = StyleSheet.create({
    image: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.WHITE,
    }
})

//Estilos para LoginScreen
const loginStyles = StyleSheet.create({

    logo: {
        paddingTop: 50,
        alignItems: 'center',
    },
})

//Estilos para RegistroScreen
const registroStyles = StyleSheet.create({

    checkBox: {
        marginLeft: 0,
        marginRight: 0,
        borderWidth: 0,
        backgroundColor: color.WHITE,
    },

    containerSocial: {
        paddingTop: 30,
        alignItems: 'center',
        marginBottom: 10,
    },

    buttonSocialIcon: {
        marginBottom: 10,
        width: 250,
        height: 60,
        alignItems: 'center',
        borderRadius: 60,
    },
})

export { mainStyles, splashStyles, loginStyles, registroStyles }