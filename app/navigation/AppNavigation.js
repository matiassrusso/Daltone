import { ImagePickerIOS } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SplashScreen from '@screen/SplashScreen'
import LoginScreen from '@screen/LoginScreen'
import PrincipalScreen from '@screen/PrincipalScreen'
import RecuperarPasswordScreen from "@screen/RecuperarPasswordScreen";
import RegistroScreen from "@screen/RegistroScreen";
import MVPScreen from "@screen/MVPScreen";
import SastreScreen from "@screen/SastreScreen";
import NicoScreen from "@screen/NicoScreen";



const AppNavigation = createStackNavigator({
    Splash:{
        screen: SplashScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    Login:{
        screen: LoginScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    Principal:{
        screen: PrincipalScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    RecuperarPassword:{
        screen: RecuperarPasswordScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    Registro:{
        screen: RegistroScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    MVP:{
        screen: MVPScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    Nico:{
        screen: NicoScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    Sastre:{
        screen: SastreScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
})

export default createAppContainer(AppNavigation)