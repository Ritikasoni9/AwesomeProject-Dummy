import { View, Text,Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


  


const MyDrawer = (props) => {
    
  return (
      <View style={{flex:1}}>
<DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:"white",flex:1}}  >
    <Image source={require("../../../assets/images/g1.jpeg")} style={{width:wp("69%"),height:hp("35%"),alignItems:"center"}} />
<Text style={{fontWeight:"bold",fontSize:25,alignSelf:"center",padding:15,color:"red",textDecorationLine:"underline"}}>Ritika</Text>
      <DrawerItemList {...props}  />
      


   </DrawerContentScrollView>
  


      </View>
   
  )
}

export default MyDrawer