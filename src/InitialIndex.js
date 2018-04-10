import {StackNavigator, SwitchNavigator} from 'react-navigation';
import AppScreen from './Usuario/index';
import LoginScreen from './Login/Login';
import AuthLoadingScreen from './AuthLoadingScreen';
const AppStack = StackNavigator({IndexApp:{screen:AppScreen}},{headerMode:"none"});
const AuthStack = StackNavigator({Login:{screen:LoginScreen}},{headerMode:"none"});
export default SwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    App: AppStack,
},{
    initialRouteName:'AuthLoading'
}
);