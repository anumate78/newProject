import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import Home from "../Screens/Auth/Home/Home";
import Login from "../Screens/Auth/Login";
import SignUp from "../Screens/Auth/SignUp";


const Stack = createNativeStackNavigator()

export const Auth = ()=>{
    return(
        <Stack.Navigator>
              <Stack.Screen 
            name="Login"
            component={Login}
            header={null}
            options={{headerShown:false}}
            />
            <Stack.Screen 
            name="SignUp"
            component={SignUp}
            header={null}
            options={{headerShown:false}}
            />
        </Stack.Navigator>
    )
}



const Routes=()=>{
    const authToken=useSelector((state)=>state.auth.token)
    console.log("AUTH",authToken)
    return(
        <NavigationContainer>
        <Auth />
       
        </NavigationContainer>
    )
}

export default Routes;
