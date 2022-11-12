import { View, Text ,StyleSheet,Pressable} from 'react-native'
import React from 'react'
import { COLORS,SIZES } from '../../../constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const CustomButton = ({onPress,text}) => {
  return (
    <Pressable onPress={onPress}
    style={style.container}>
      <Text style={style.text}>{text}</Text>
    </Pressable>
  )
}
const style=StyleSheet.create({
    container:{
        backgroundColor:"#3B71F3",
        padding:10,
        width:SIZES.width/2,
        alignItems:"center",
        borderWidth:wp("0.5%"),
        borderRadius:5,
        borderColor:"black",
        marginVertical:10,
       


    },
    
    text:{
        fontWeight:"bold",
        color:COLORS.white,
        
    },
    


});

export default CustomButton;