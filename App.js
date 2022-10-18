import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './HomeNavigation';
import { Provider} from "react-redux"
import { store } from './store';

  

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
         <NavigationContainer>
     <Stack.Navigator
     screenOptions={{
       header:()=> null
     }} >
      <Stack.Screen
       name="LoginScreen"
      component={LoginScreen}/>
          <Stack.Screen
       name="SignUpScreen"
       component={SignUpScreen}/>
       <Stack.Screen
       name="HomeScreen"
      component={HomeNavigation}/>  
    </Stack.Navigator>
  </NavigationContainer>
    </Provider>
 
  );
}


