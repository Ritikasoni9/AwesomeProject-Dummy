import React,{useState,useEffect} from 'react'
import { 
  View,
  Image,
  TouchableOpacity,
  StyleSheet ,
  useWindowDimensions,

  ScrollView,
  Text,
 
} from 'react-native'
import logo from '../../../assets/images/Otp.png';
import OtpInputs from 'react-native-otp-inputs';


const OtpScreen = () => {

  
const [OTP, setOTP] = useState("");
    const {height}=useWindowDimensions();
    const [counter, setCounter] = React.useState(120);

    const resendOTP=()=>{

      setCounter(120);

    }


    useEffect(() => {
      
            const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
            return () => clearInterval(timer);
        }, [counter]);
      
        function secondsToTime(secs)
        {
            var hours = Math.floor(secs / (60 * 60));
          
            var divisor_for_minutes = secs % (60 * 60);
            var minutes = Math.floor(divisor_for_minutes / 60);
            var minutes1 = minutes >=10 ? minutes : "0"+minutes
            
            var divisor_for_seconds = divisor_for_minutes % 60;
            var seconds = Math.ceil(divisor_for_seconds);
            var seconds1 = seconds >= 10 ? seconds : "0"+seconds 
          
            var obj = minutes1+":"+seconds1
            return obj;
        }

  return (
    <ScrollView>
  <View style={style.root}>
      
      <Text style={{alignSelf:"center", fontSize:25,color:"#253A79", fontWeight:"bold"}}>Verify Email Id</Text>
      <View style={{
        marginTop:10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}></View>
      
      
     <Image  source = {logo} style={[style.logo,{height:height*0.4}]} resizeMode='contain'/>
    
    <Text style={style.text}>OTP sent at 'abc @gmail.com'</Text>

    <Text style={style.text1}>Enter OTP Here</Text>

    <View style={style.root1}>
    <OtpInputs  
                inputStyles={{textAlign:'center',padding:10}}
                inputContainerStyles ={style.otp}
                handleChange={(code) => setOTP(code)}
                numberOfInputs={6}
              />

    </View>
    <View style={{flexDirection:'row'}}>             
              <Text style={style.resendtime}>{secondsToTime(counter)}</Text>

{
      counter > 0 ?
      counter < 120 ?

    <TouchableOpacity style={style.resend}>
        <Text style={{fontSize:18,fontWeight:"bold", color:"#EE351F",textDecorationLine:"underline"}}> Resend OTP</Text>
    </TouchableOpacity>
  :  
    <TouchableOpacity style={style.resend}>
        <Text style={{fontSize:18,fontWeight:"bold", color:"#EE351F",textDecorationLine:"underline"}}> Resend OTP</Text>
    </TouchableOpacity>

 :

 <TouchableOpacity 
 style={style.resend}

                onPress={()=>{   
                  resendOTP();
                }}>
                <Text style={{fontSize:18,fontWeight:"bold", color:"#EE351F",textDecorationLine:"underline"}}> Resend OTP</Text>
                </TouchableOpacity>
}

</View>
<TouchableOpacity style={style.procced}>
        <Text style={style.textp}> Verify & Procceed</Text>
    </TouchableOpacity>
    </View>
    
    
    
 
 </ScrollView>
  
  
  )
  
}
const style=StyleSheet.create({
    root:{
       
    
      padding:20,
      backgroundColor:"white",
     
       

  
    },
    procced:{
        alignItems:"center",
        marginVertical:30,
        backgroundColor:"#253A79",
        padding:9,
        borderWidth:1,
        borderRadius:8,
        width:240,
     marginHorizontal:45

    },
    textp:{
        

       fontSize:20,
       color:"white"

    },

   
    root1:{
      flexDirection:"row",
     

  
  
    },
    resend:{
      

        marginVertical:22,
        marginLeft:18
        
        


    },
    resendtime:{
      fontWeight:'500',
      marginLeft:"50%",
     
      fontSize:15,
      marginVertical:25,
     

      
      color:"black",
      
      
    },

    text:{
      fontWeight:"bold",
      fontSize:18,
      color:"#253A79",
      marginLeft:6,
      marginTop:10,
      

    },
    text1:{
        fontWeight:"bold",
        marginRight:10,
        fontSize:18,
        color:"#253A79",
        marginLeft:6,
        marginVertical:25,
        marginRight:186
  
      },
    input:{
        borderWidth:1,
        height:'80%',
        width:"12%",
        marginHorizontal:5,
     
    
        fontWeight:"bold",
        fontSize:18,
        paddingLeft:15
        

       



    },
    
  
    logo:{
        backgroundColor:"white",
      width: '100%',
      maxWidth:500,
      maxHeight:'100%',
    },
    otp:{
      height: 40,
      width:'12%',
      marginHorizontal:'2%',
      marginVertical:'4%',
      borderWidth: 1,
      borderRadius:5,
      borderColor:'#1434A4',
      flexDirection:'row',
      alignSelf:'center'
     
    },
    
    
    
  
  })



export default OtpScreen