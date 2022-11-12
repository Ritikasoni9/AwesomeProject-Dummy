import { View, Text,Image,StyleSheet } from 'react-native'
import logo from '../../../assets/images/ref.png';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { COLORS,SIZES} from '../../../constants'; 
import React from 'react'

const HomeScreen = () => {
  const navigation=useNavigation();
  const OnLogin = () => {
    navigation.navigate('SignIn');
    return;
  }

  return (
    <View style={style.root}>
       <Image  source = {logo} style={style.logo} resizeMode='contain' />
      <Text style={style.text}>Welcome to Reflom App &#128512; </Text>
      <CustomButton  onPress={OnLogin}  text="Go Back" />
    </View>
  )
}

const style=StyleSheet.create({
    root:{
      alignItems:'center',
      backgroundColor:"white",
     
      flex:1,
  
  
    },
    
    text:{
      paddingVertical:"55%",
      


        alignSelf:"center",
        
        fontWeight:"bold",
        fontSize:28,
        color:COLORS.pink,
        
      
    },
    logo:{
      backgroundColor:"white",
      alignSelf:"center",
       width: wp('40%'),
       height:hp('20%')
   
       
     },
  
  })

export default HomeScreen