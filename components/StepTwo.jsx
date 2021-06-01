import React, { useState } from 'react';
import { Container, Header, Content, DatePicker, Button, Form, Item, Input } from 'native-base';
import { View, Text, Platform, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const FormInscription = (props) =>{

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);



  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    
    setDate(currentDate);

    handleChangeDate(currentDate)

    console.log(date);
    
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  console.log(JSON.stringify(date));
  console.log(typeof date);
  console.log("aaa");
  

    return (
        <View style={{marginTop: 100}}>
            <Form>
              <Item>
                <Input placeholder="Classe" onChangeText={(e)=>{props.handleChangeClasse(e)}} />
              </Item>
              <Item >
                <Input placeholder="Sexe" onChangeText={(e)=>{props.handleChangeSexe(e)}} />
              </Item>
              <Item>
                <Input placeholder="Lieu de naissance" onChangeText={(e)=>{props.handleChangeLieu(e)}} />
              </Item>
              <Item >
                <Input placeholder="Date de naissance" onChangeText={(e)=>{props.handleChangeDate(e)}} />
              </Item>
              
              <View>
      <Item>
        <Button style={{backgroundColor:"#abb0b5"}} onPress={showDatepicker} >
          <Text style={{color:"white", fontSize:17}} >Date de naissance</Text>
        </Button>

      </Item>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>

    <Item >
    <Text style={{color:"black", fontSize:16, marginTop:10, marginBottom:10}}>{date.toString().substr(4, 12)} </Text>
              </Item>
              
            </Form>

            <View style={{marginTop:20, justifyContent:"center", display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
                    <View>
                        <Button primary
                        onPress={()=>props.prevStep()}
                        ><Text style={{fontSize:15, color:"white"}}>Precedent</Text></Button>
                    </View>

                    <View>
                        <Button primary
                        onPress={()=>props.Submit()}
                        ><Text style={{fontSize:15, color:"white"}}>Enregistrer</Text></Button>
                    </View>
                </View>

                
        </View>
      );
}

export default FormInscription