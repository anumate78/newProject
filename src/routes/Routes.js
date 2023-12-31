import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import Login from "../Screens/Auth/Login";
import Home from "../Screens/Auth/Home/Home";
const Stack = createNativeStackNavigator()

export const Auth = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login"
             component={Login} 
             header={null}
             options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}


export const Dashbord =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Home"
            component={Home}
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
            {authToken==null?
        <Auth />
        :<Dashbord />
            }
        </NavigationContainer>
    )
}

export default Routes;
