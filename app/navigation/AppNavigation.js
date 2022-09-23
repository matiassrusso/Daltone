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
import TestScreen from "@screen/TestScreen";
import Test2 from "@screen/Test2";
import RegisterScreen from "@screen/RegisterScreen"
import InicioScreen from "@screen/InicioScreen"
import ContactoScreen from "@screen/ContactoScreen"



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
    Test:{
        screen: TestScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    Test2:{
        screen: Test2,
        navigationOptions:{
            headerShown: false,
        }
    },
    Register:{
        screen: RegisterScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    Inicio:{
        screen: InicioScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    
    Contacto:{
        screen: ContactoScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    
})

export default createAppContainer(AppNavigation)