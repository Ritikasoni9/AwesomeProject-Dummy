import { View, Text,StyleSheet,TextInput,TouchableOpacity,ToastAndroid, Animated,
  Easing,
  TouchableHighlight} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React ,{useState}from 'react'
import MultiSelect from 'react-native-multiple-select';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import images from '../../../constants/images';



const items = [{
  id: '92iijs7yta',
  name: 'Burger'
}, {
  id: 'a0s0a8ssbsd',
  name: 'Pizza'
}, {
  id: '16hbajsabsd',
  name: 'Coffee'
}, {
  id: 'nahs75a5sg',
  name: 'Maggie'
}, {
  id: '667atsas',
  name: 'Sandwich'
}, {
  id: 'hsyasajs',
  name: 'Tea'
}, {
  id: 'djsjudksjd',
  name: 'French Fries'
}, {
  id: 'sdhyaysdj',
  name: 'Soft Drinks'
}, {
  id: 'suudydjsjd',
  name: 'Mozito'
  }
];

let rotateValueHolder = new Animated.Value(0);

const startImageRotateFunction = () => {
  rotateValueHolder.setValue(0);
  Animated.timing(rotateValueHolder, {
    toValue: 1,
    duration: 3000,
    easing: Easing.linear,
    useNativeDriver: false,
  }).start(() => startImageRotateFunction());
};

const RotateData = rotateValueHolder.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg'],
});

const AddModeScreen = () => {
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);
  
  const [selectedItems, setSelectedItems] = useState([]);



  const onSelectedItemsChange = (selectedItems) => {
    
    setSelectedItems(selectedItems);

  };


 
// handle click event of the Remove button
const handleRemoveClick = index => {
  const list = [...inputList];
  list.splice(index, 1);
  setInputList(list);
};

const handleInputChange = (value, index) => {
 
  const list = [...inputList];
  list[index]= value;
  setInputList(list);
};
 
// handle click event of the Add button
const handleAddClick = (x) => {
  if(x.firstName=="" && x.lastName==""){
    ToastAndroid.showWithGravity(
      "Please Enter Firstname and last input field completely",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  }
 
  else{
    
  
    setInputList([...inputList, { firstName: "", lastName: "" }]);

  }
 
};
  
const navigation=useNavigation();
const Date =()=>{

  navigation.navigate('DateTime');
  return;

  
}

  
  return (
<View > 




{inputList.map((x, i) => {
        return (
    
<View key={i} style={style.root}>
<Text style={style.tex}>Firstname:</Text>
<TextInput 
      placeholder="Firstname"
        name="firstName"
      style={style.input} 
      value={x.firstName}
      
      onChangeText={e => handleInputChange(e, i)}
     
      ></TextInput>
        
<Text style={style.tex11}>Lastname:</Text>

<TextInput 
      placeholder="lastname"
      name="lastName"
      style={style.input} 
      value={x.lastName}
      
      onChangeText={e => handleInputChange(e, i)}
    
      ></TextInput>


{inputList.length - 1 === i  && <TouchableOpacity onPress={()=>handleAddClick(x)}  ><FontAwesome5  style={{marginHorizontal:2,marginVertical:5}} size={wp('5%')} name={'plus-circle'} solid  color={"#C1272D"}   />
</TouchableOpacity >}
{inputList.length !== 1  && <TouchableOpacity onPress={() => handleRemoveClick(i)}  ><FontAwesome5  style=  {{marginVertical:5,marginHorizontal:2}} name={'minus-circle'}  size={wp('5%')} solid  color={"#C1272D"}  /></TouchableOpacity>}


       
    </View>

);
      })}

<View style ={{margin: wp("1%")}}>

<MultiSelect

items={items}
uniqueKey="id"
onSelectedItemsChange={onSelectedItemsChange}

selectedItems={selectedItems}
selectText="    Pick Items"
searchInputPlaceholderText="Search Items..."
onChangeInput={(text) => console.log(text)}
tagRemoveIconColor="gray"
tagBorderColor="gray"
tagTextColor="red"

selectedItemTextColor="blue"
selectedItemIconColor="gray"

itemTextColor="black"
displayKey="name"
searchInputStyle={{color: 'black'}}
submitButtonColor="#48d22b"
submitButtonText="Submit"

/>

</View >
<View style={{alignSelf:"center"}}> 
<CustomButton  onPress={Date} text="DateTime"/>

</View>
<Animated.Image
          style={{
            width: 200,
            height: 200,
            margin:"10%",
            alignSelf:"center",
            transform: [{ rotate: RotateData }],
          }}
          source={
         images.angelmy
          }
        
        />


<TouchableOpacity  style={{alignSelf:'center'}} onPress={startImageRotateFunction} >
      <Text style ={{marginVertical:"5%",padding:"3%",fontSize:35,borderWidth:1,borderRadius:5,fontFamily:"WaterBrush-Regular",color:"blue"}} >Start  Rotating  Angel  image</Text>
      </TouchableOpacity>


    </View>   
  )
}
const style = StyleSheet.create({
    root: {
      
      
      
marginVertical:15,
      
      flexDirection:"row",
    
      
    },
    
  
    
    tex: {
marginVertical:5,
marginHorizontal:5,
     
      fontSize: hp('2%'),
      fontWeight: 'bold',
 
     
    
    },
    tex11: {
      marginVertical:5,
            marginHorizontal:4,
            fontSize: hp('2%'),
            fontWeight: 'bold',
       
           
          
          },
    input:{
   
   paddingLeft:8,

    
        borderColor:"black",
        borderWidth:hp('0.2'),
        borderRadius:5,
        height:hp('5%'),
        width:wp("23%"),
     
        
  
        
     
        


    }
  
  
  
  
  });



export default AddModeScreen