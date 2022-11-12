import React from 'react'
import { View, TextInput,StyleSheet} from 'react-native'
import { COLORS,SIZES } from '../../../constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


     
const CustomInput = ({value,setValue,placeholder,secureTextEntry,keyboardType,maxLength}) => {
  return (
    <View style={style.container}>
      <TextInput 
      value={value}
      onChangeText={setValue}
      placeholder={placeholder} 
      placeholderTextColor={COLORS.black_1}
      style={style.input}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      maxLength={maxLength}
      ></TextInput>
    </View>
  )
}
const style=StyleSheet.create({

    container:{
        backgroundColor:'white',
        width:SIZES.width/1.2,
        height:SIZES.height/19,
        borderColor:"black",
        borderWidth:wp("0.4%"),
        borderRadius:5,
        marginVertical:"2%",
        alignSelf:"center"
      
    },
    input:{
      padding:10,
      
      
      
    },
  
  })
export default CustomInput