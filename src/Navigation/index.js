import React from 'react'           
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen'
import ModalScreen from '../screens/ModalScreen';
import HomeScreen from '../screens/HomeScreen';
import AddModeScreen from '../screens/AddModeScreen';
import OtpScreen from '../screens/OtpScreen';
import DateTimeDown from '../screens/DateTimeDown';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyDrawer from '../components/MyDrawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Stack = createNativeStackNavigator();
const Stack1=createNativeStackNavigator();


const Drawer = createDrawerNavigator();


const StackScreen= () => {

 
  return(
    
      <Stack.Navigator screenOptions={{headerShown:false}}>
     
        
        <Stack.Screen name='Signun' component={SignInScreen}></Stack.Screen>
      
        <Stack.Screen name='ModalSuccess' component={ModalScreen}></Stack.Screen>
     
        
        
      </Stack.Navigator>
      


   
  )     
  
}





  
  





const Navigation = () => {

 
  
  return (
    <NavigationContainer>

<Drawer.Navigator  drawerContent={props=><MyDrawer {...props}/>} 
screenOptions={{drawerLabelStyle:{marginLeft:-20}}}



>




        
         <Drawer.Screen name='SignIn' component={StackScreen}
         
         options={{drawerIcon:({color})=>(

          <FontAwesome5 name='exclamation-circle'  size={hp('3%')} solid  color={color} style={{alignItems:"center"}} />
                  )
                  
                  }}
         
         
         />

   

        <Drawer.Screen name='SignUp' component={SignUpScreen}
        
        
        options={{drawerIcon:({color})=>(

          <FontAwesome5 name='user-plus'  size={hp('3%')} solid  color={color}  style={{alignItems:"center"}}/>
                  )
                  
                  }}
         
        
        
        
        
        
        />
        
        
        <Drawer.Screen name='AddMode' component={AddModeScreen} 
        
        options={{drawerIcon:({color})=>(

          <FontAwesome5 name='plus-circle'  size={hp('3%')} solid  color={color} style={{alignItems:"center"}}  />
                  )
                  
                  }}
        
        
        />
        <Drawer.Screen name='DateTime' component={DateTimeDown}
        
        options={{drawerIcon:({color})=>(

          <FontAwesome5 name='calendar'  size={hp('3%')} solid  color={color}  style={{alignItems:"center"}}/>
                  )
                  
                  }}
        
        
        
        />

        <Drawer.Screen name='OTP' component={OtpScreen}
        
        options={{drawerIcon:({color})=>(

          <FontAwesome5 name='mobile-alt'  size={hp('3%')}   color={color} style={{marginRight:"1%",alignItems:"center"}}  />
                  )
                  
                  }}
         
        
        />

<Drawer.Screen name='Home' component={HomeScreen}
         
         options={{headerShown:false,drawerIcon:({color})=>(

          <FontAwesome5 name='home'  size={hp('3%')} solid  color={color}  />
                  )
                  
                  }}
         
         
         />
        

        </Drawer.Navigator>





    </NavigationContainer>
      
  )
}

export default Navigation;


