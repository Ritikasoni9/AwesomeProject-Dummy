
import React,{useState,useEffect} from 'react';
import { View,BackHandler,Button,Image,TouchableOpacity,ScrollView,KeyboardAvoidingView,StyleSheet ,StatusBar,useWindowDimensions,ToastAndroid,Modal,Text,TextInput,Alert} from 'react-native';
import logo from '../../../assets/images/images.jpeg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { COLORS ,SIZES} from '../../../constants';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import { LoginManager, AccessToken } from 'react-native-fbsdk-next';



const SignInScreen = () => {
  
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  // Handle the button press
  











  GoogleSignin.configure({
    scopes: ["email"],
    webClientId: '104325337013-e5ajqpod1k42de1l900q6chqd45ltloi.apps.googleusercontent.com',
  });

  const [gettingLoginStatus, setGettingLoginStatus] = useState(false);


  const SignInGoogle=async () => {
   
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = await auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    const res = await auth().signInWithCredential(googleCredential);
    console.log(res)
  
  }
  
  const FacebookLogin=async () => {
   try{
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);


  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = await  auth.FacebookAuthProvider.credential(data.accessToken);

  // Sign-in the user with the credential
 const resp=  await auth().signInWithCredential(facebookCredential);
 console.log(resp)
  


}
catch(error){
console.log(error)
    
}


  
  }



  const signInWithPhoneNumber=async (phoneNumber) => {

    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);

  }
   
  const confirmCode=async () => {
    try {
      await confirm.confirm(code);
      alert('success')
      
    } catch (error) {
      alert('Invalid code.');
    }


  }


              const backActionHandler = () => {
                Alert.alert("Alert!", "Are you sure you want to go back?", [
                  {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                  },
                  {
                    
                    
                    text: "YES", onPress: () => BackHandler.exitApp()
                  }
                ]);
                return true;
              };

           
              
  useEffect(() => {


    // Add event listener for hardware back button press on Android
    BackHandler.addEventListener("hardwareBackPress", backActionHandler);

    return () =>
      // clear/remove event listener
      BackHandler.removeEventListener("hardwareBackPress", backActionHandler);
  }, []);







  const[username,setUsername]= useState('');
  const[password,setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

 
 
  
  const {height}=useWindowDimensions();
    
  const onSignPress = () => {
    var formData = new FormData();
    formData.append('Email', username);
    formData.append('Password', password);

    if(username==="" && password===""){
      ToastAndroid.showWithGravity(
        "Required All Field",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    
    }
      
    else if(username===''){
      ToastAndroid.showWithGravity(
        "Please Enter Username",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      
    }
     else if(password===''){
      ToastAndroid.showWithGravity(
        "Please Enter Password",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      
    }

    else if(!isValidEmail(username)){
      ToastAndroid.showWithGravity(
        "Email is not valid Please Enter an Valid Email ",
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
    
else{
fetch('https://brainmirror.reflomsolutions.com/userLogin',
{
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  },
  body: formData,
})
.then((response)=>response.json())
.then((json)=>{
console.log("fetch Api",json.Email,json.status)



  if(json.Email=== undefined){
    
    ToastAndroid.showWithGravity(
      "Wrong username and password please check username or password",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );

    
   

  }
  else{
    navigation.navigate('Home');
      return;
  }

})
}

  }
  
  const isValidEmail=(value)=>{

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return reg.test(value)

  }


  const isValidPassword=(value)=>{

    const special = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    return special.test(value)
    
  }







  const navigation=useNavigation();
  const onRegister = () => {
      navigation.navigate('SignUp');
      return;
    }

  const  Onsuccess=()=>{

    navigation.push('ModalSuccess');
    return;

    
  }

  const OnAddmode =()=>{

    navigation.navigate('AddMode');
    return;

    
  }
  
  

  const OnOtp =()=>{

    navigation.navigate('OTP');
    return;

    
  }
  
  
  return (
    
<View >
    
<Modal  opacity={0}

       animationType = {"slide"}  
        transparent={true}
       
        
        visible={modalVisible}
        onRequestClose={() => {
           
          setModalVisible(!modalVisible);
        }}
      >
        <View style={[style.centeredView, modalVisible ? {backgroundColor: 'rgba(0,0,0,0.5)'} : '']}>
          <View style={style.modalView} >
            <Text style={style.modalText}>Forgot Password ?</Text>
      <View style={style.container}>
      <FontAwesome5  name={'envelope'} solid size={wp("8%")} color={"#C1272D"}  style={{margin:5}} />
      <TextInput 
      placeholder="Email"
      style={style.input} keyboardType={'email-address'}
     
      >
        
        
        
      </TextInput>
     
    </View>
           
           
           
           
            <TouchableOpacity style={style.root1} onPress={Onsuccess} >
            <Text style={style.tex1}>Submit</Text>
          </TouchableOpacity>
     

          </View>
        </View>
      </Modal>

      <KeyboardAvoidingView
      
        keyboardVerticalOffset = {50} // adjust the value here if you need more padding
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
     

      <ScrollView>

    <View style={style.root}>
    <StatusBar backgroundColor={"white"} barStyle="dark-content" />
   
      <Image  source = {logo} style={[style.logo,{height:height*0.3}]} resizeMode='contain'/>
      <Text style={{alignItems:"center",fontFamily:"WaterBrush-Regular",fontSize:hp("5%"),color:"blue",margin:3}}>SignIn </Text>
      <CustomInput placeholder=" Username" value={username} setValue={setUsername} keyboardType={"email-address"}/>
      <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
      <CustomButton onPress={onSignPress} text="Submit"/>
      <CustomButton onPress={onRegister} text="Register"/>
      <CustomButton  onPress={() => setModalVisible(true)}  text="Modal" />
      <CustomButton  onPress={OnAddmode}  text="AddMode" />
    
      <CustomButton  onPress={OnOtp}  text="OTP" />
      
      <TouchableOpacity style={style.root2}  onPress={SignInGoogle} >
      <FontAwesome5  name={'google'} solid size={wp("5%")} color={"#C1272D"}  style={{margin:3,paddingLeft:15}} />
            <Text style={style.tex2}>Sign In with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.root3}  onPress={FacebookLogin} >
      <FontAwesome5  name={'facebook'} solid size={hp("3%")} color={"#4867aa"}  style={{margin:3,paddingLeft:15}} />
            <Text style={style.tex3}>Sign In with Facebook</Text>
          </TouchableOpacity>
   
         {
(!confirm)? <Button title='Phone Number Sign-IN'onPress={() => signInWithPhoneNumber('+919009005696')}></Button>:
null


         } 
         
          <TextInput  style={{borderWidth:1,borderRadius:10,margin:8,width:SIZES.width/1.3,paddingLeft:13}} value={code} onChangeText={text => setCode(text)} keyboardType={'phone-pad'}  placeholder="Enter OTP" placeholderTextColor={COLORS.DarkGray}/>

      <Button title="Confirm Code"  onPress={() => confirmCode()}/>
   
   
   
   
    </View>

    </ScrollView>

</KeyboardAvoidingView>
</View>



  );
};
const style=StyleSheet.create({
  root2: {
    flexDirection:"row",
    alignItems: 'center',
    backgroundColor: '#ffc0cb',
    marginVertical: "5%",
alignSelf:"center",
    height:hp("5.5%"),
    paddingVertical:4,
    
    width: wp("80%"),
    borderRadius: 10,
  },
  
  tex2: {
    color:  
    '#C1272D',
    fontWeight: 'bold',
    fontSize: hp("2.6%"),
marginLeft:SIZES.width/8
  
  },
 
  root3: {
    flexDirection:"row",
    alignItems: 'center',
    backgroundColor: '#D2EFF9',
    marginVertical: "5%",
alignSelf:"center",
    height:hp("5.5%"),
    paddingVertical:4,
    
    width: wp("80%"),
    borderRadius: 10,
  },
  
  tex3: {
    color:  
    '#4867aa',
    fontWeight: 'bold',
    fontSize: hp("2.6%"),
marginLeft:SIZES.width/8,
fontFamily:"WaterBrush-Regular"
  
  },
  
  
  root:{
    alignItems:'center',
    padding:30,
    backgroundColor:"white"


  },
  
  container:{
    backgroundColor:'white',
    width:wp("80%"),
    borderColor:"black",
    borderWidth:1,
    borderRadius:5,
    marginVertical:55,
    
    flexDirection:"row",
    

    
},
input:{
  paddingVertical:"1%",
  marginLeft:"1%"
  
  
  
},

  logo:{
    
    width: wp('60%'),

    maxHeight:'90%',
  },

  centeredView: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    justifyContent:"flex-end"
  },
  modalView: {
    
    
    backgroundColor: "#ffcccc",
    borderRadius: 20,
    padding: 35,
    height:hp("55%"),
    width:wp("97%"),
    
    
  },
  
  
  
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
   
    marginVertical:5,
    textAlign: "center",
    fontSize:hp("4.2%"),
    fontWeight:"bold",
    
  },

  Button:{

    color:"blue",
    borderRadius:15,
    marginVertical:30,



  },
  root1: {
    alignItems: 'center',
    backgroundColor: '#C1272D',
    marginVertical: "5%",
    marginLeft:"20%",
    height:hp("5%"),
    paddingVertical:4,
    
    width: wp("50%"),
    borderRadius: 10,
  },
  
  tex1: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: hp("2.6%"),

  
  },
 
  
 

})
export default SignInScreen