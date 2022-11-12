
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,TextInput} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DateTimePickerModal from "react-native-modal-datetime-picker";





const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '7' },
  { label: 'Item 8', value: '8' },
];

const DateTimeDown = () => {

  
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
   
    
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [CurrentTime, setCurrentTime] = useState('');
 
   
   

    useEffect(() => {
    
      var hours = new Date().getHours() //Current Hours
      var min = new Date().getMinutes(); //Current Minutes
      var sec = new Date().getSeconds() //Current Seconds
     
      
     
      setCurrentTime(
       (hours + ':' + min + ':' + sec)
      );
    }, []);
   
   
   
    const showTimePicker = () => {
      setTimePickerVisibility(true);
    };
   
    const hideTimePicker = () => {
      setTimePickerVisibility(false);
    };
  
    const handleConfirmTime = (CurrentTime) => {
   
    setTime(CurrentTime)
      hideTimePicker();
    
    };


   
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      setDate(date);
      hideDatePicker();
    
    };
    const getDate = () => {
      let tempDate = date.toString().split(' ');
      return date !== ''
        ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
        : '';
    };
    const getTime = () => {
      let temtime = CurrentTime
      return time !== ''
        ? temtime
        : '';
    };
   
  



    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Dropdown label
          </Text>
        );
      }
      return null;
    };





  return (
    
    
  <View>
    
    
      
    <View style={styles.container}>
  

      
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
      </View>
      <View style={styles.container1}>
      <TextInput placeholder="Date"  value={getDate()} style={{borderWidth:1,width:"70%",marginHorizontal:20,paddingLeft:10}}
      >
      </TextInput>

     <TouchableOpacity style={{margin:15}}
          onPress={showDatePicker} >
<FontAwesome5  name={'calendar'} solid size={35} color={"#C1272D"}  />
</TouchableOpacity>
    <DateTimePickerModal
      isVisible={isDatePickerVisible}
      mode="date"
     
      onConfirm={handleConfirm}
      onCancel={hideDatePicker}
      onDateChange={(date) => {
        setDate(date);
      }}
    />
    </View>
   
   
   
    <View style={styles.container1}>
      <TextInput value={getTime()}placeholder="Time"z style={{borderWidth:1,width:"70%",marginHorizontal:20,paddingLeft:10}}
      >
      </TextInput>

     <TouchableOpacity style={{margin:15}}
          onPress={showTimePicker} >
<FontAwesome5  name={'clock'} solid size={35} color={"#C1272D"}  />
</TouchableOpacity>
    <DateTimePickerModal
      isVisible={isTimePickerVisible}
      mode="time"
      

      CurrentTime={setCurrentTime}
      onConfirm={handleConfirmTime}
      onCancel={hideTimePicker}
      onTimeChange={() => {
        setCurrentTime(time)
    
      }}
    />
    </View>
</View>
  )
}

const styles = StyleSheet.create({
  container1: {
    backgroundColor: 'white',
flexDirection:"row",
marginVertical:10
  },
    container: {
        backgroundColor: 'white',
        padding: 16,
      },
      dropdown: {
        backgroundColor: 'white',
        height: 50,
        width:"75%",
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginVertical:15,
        
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 16,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
  });




export default DateTimeDown