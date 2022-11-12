import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView,KeyboardAvoidingView,ToastAndroid,Image,useWindowDimensions} from 'react-native';
import logo from '../../../assets/images/r1.png';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import { COLORS } from '../../../constants';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const {height}=useWindowDimensions();



  
  
  
  
  
  const onRegister = () => {


if(email==="" && password==="" && firstname==="" && lastname==="" && phoneNumber==="" && confirm===""){
  ToastAndroid.showWithGravity(
    "Required All Field",
    ToastAndroid.SHORT,
    ToastAndroid.CENTER
  );

}

     
        else if(email===''){
          ToastAndroid.showWithGravity(
            "Please Enter Email",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
          
        }

        else if(!isValidEmail(email)){
          ToastAndroid.showWithGravity(
            "Email is not valid ",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );

        }
        
        else if(firstname===''){
          ToastAndroid.showWithGravity(
            "Please Enter Firstname",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
          
        }

       else if(lastname===''){
          ToastAndroid.showWithGravity(
            "Please Enter lastname",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
          
        }
       else if(password==''){
          ToastAndroid.showWithGravity(
            "Please Enter Password",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
          
        }
        else if (!isValidPassword(password) ) {
          ToastAndroid.showWithGravity(
            "Password should be contain minimum 8 character with at least one Capital letter,Small letter,Digit and Special character ! ",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );

        }

        else if(confirm==''){
          ToastAndroid.showWithGravity(
            "Please Enter Confirm password",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
        
        }
        else if(phoneNumber==''){
          ToastAndroid.showWithGravity(
            "Please Enter PhoneNumber",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
          
        }
        else if (password !== confirm) {
          ToastAndroid.showWithGravity(
            "Password and confirm password are not match ",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );


        }

        
        
       


      else{
    var url = 'https://brainmirror.reflomsolutions.com';
    //console.log(firstname, lastname, email, password, phoneNumber, confirm);
    var formData = new FormData();
    formData.append('Email', email);
    formData.append('FirstName', firstname);
    formData.append('LastName', lastname);
    formData.append('Password', password);
    formData.append('ConfirmPassword', confirm);
    formData.append('Phone', phoneNumber);

    fetch(url + '/userSignUp', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    })
      .then(response => response.json())
      .then(json => {
        console.log('response :',json.message,json.status );



        if(json.message=== "Email ID Already Registered!!"){

          console.warn("This Email already exist please try different email to register")
      
        }
        if(json.status==="Success"){

          ToastAndroid.showWithGravity(
            "Congrats you success fully added as a new user ",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );

          
        }

       
        
      })
      .catch((error)=>
      console.log('Response :',error))
  };


 


        }

  const isValidEmail=(value)=>{

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return reg.test(value)

  }


  const isValidPassword=(value)=>{

    const special = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    return special.test(value)
    
  }


    
    
  return (
  
    <ScrollView>
      <View style={style.root}>
      <Image  source = {logo} style={style.logo} />
        
        <Text style={style.text}>Register Here</Text>
        <Text style={style.tex}>Email:</Text>
        <CustomInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
          keyboardType={'email-address'}
        />
        <Text style={style.tex}>Firstname:</Text>
        <CustomInput
          placeholder="Firstname"
          value={firstname}
          setValue={setFirstname}
        />
        <Text style={style.tex}>Lastname:</Text>
        <CustomInput
          placeholder="Lastname"
          value={lastname}
          setValue={setLastname}
        />
        <Text style={style.tex}>Password:</Text>
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <Text style={style.tex}>Confirm Password:</Text>
        <CustomInput
          placeholder="Confirm Password"
      

          value={confirm}
          setValue={setConfirm}
          secureTextEntry={true}
        />
        <Text style={style.tex}>Phone Number:</Text>
        <CustomInput
          placeholder="Number"
         
          value={phoneNumber}
          setValue={setPhoneNumber}
          keyboardType={'phone-pad'}
          maxLength={10}
        />
        <View style={{paddingLeft:110}}>
        <CustomButton  onPress={onRegister} text="Register" />

        </View>

        
        
      </View>
    </ScrollView>

  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:"white"
    
    
    
  },

  text: {
  
    color:"red",
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal:"30%",
    
  },
  tex: {
    marginTop:"4%",
    marginHorizontal:"8%",
    
    fontSize: hp('2.5%'),
    fontWeight: 'bold',

    color:COLORS.black
   

  },
  logo:{
   backgroundColor:"white",
    marginLeft:("30%"),
    width: wp('35%'),
    height:hp('20%')

    
  },





});
export default SignUpScreen;
