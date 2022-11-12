import React, { useState } from "react";
import {  Modal, StyleSheet, Text, View,useWindowDimensions ,Image,Pressable} from "react-native";
import logo from '../../../assets/images/success.png';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const ModalScreen = () => {

    const [modalVisible, setModalVisible] = useState(true);
   

    const navigation=useNavigation();
  const onClose = () => {
      navigation.push('Signun');
      return;
    }
  
    return (
    <View>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
      >
        <View style={style.centeredView}>
          <View style={style.modalView}>
          <Image  source = {logo} style={style.logo} resizeMode='contain'/>

            <Text style={style.modalText}>SuccessFully Register</Text>

            <Pressable
              style={style.button}
              onPress={onClose}
            >
              <Text style={style.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

    
    </View>
  )




  
}

const style = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "85%"
      },
      modalView: {
        
        
        backgroundColor: "#ffcccc",
        borderRadius: 20,
    
       
        
        height:hp("55%"),
        width:wp("97%"),
        
      },
      
    
   
    
    modalText: {
   
        
        textAlign: "center",
        fontSize:hp("4.5%"),
        
        fontWeight:"bold",
        color:"red",
        
        
      },


      logo:{
          marginLeft:"30%",
       
    
        width: wp("30%"),
        height:hp("20%")
       
      },
      button: {
        marginVertical:"20%",
        borderRadius: 20,
        backgroundColor:"blue",
        width:wp('50%'),
        height:hp("5%"),
        alignSelf:"center"
        
      },
      textStyle:{
        marginTop:"3.2%",
          alignSelf:"center",
          

        color:"white"
      }
     
     
  });
  

export default ModalScreen