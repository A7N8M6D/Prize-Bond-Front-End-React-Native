import Register from './screens/auths/Register';
import { NavigationContainer}from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Login from "./screens/auths/Login"
export default function App() {
  const Stack=createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}


