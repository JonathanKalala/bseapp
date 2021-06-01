import React, { Component } from 'react';
import { Container, Header, Content, Button, Form, Item, Input } from 'native-base';
import { View, Text } from 'react-native';
const FormInscription = (props) =>{
    
    return (
        <View style={{marginTop: 100}}>
            <Form>
              <Item>
                <Input placeholder="Nom" onChangeText={(e)=>{props.handleChangeNom(e)}} />
              </Item>
              <Item >
                <Input placeholder="Prenom" onChangeText={(e)=>{props.handleChangePrenom(e)}} />
              </Item>
              <Item>
                <Input placeholder="Ecole" onChangeText={(e)=>{props.handleChangeEcole(e)}} />
              </Item>
              <Item >
                <Input placeholder="Matricule" onChangeText={(e)=>{props.handleChangeMatricule(e)}} />
              </Item>
              <Item>
                <Input placeholder="Province" onChangeText={(e)=>{props.handleChangeProvince(e)}} />
              </Item>
            </Form>
            <View style={{marginTop:20, justifyContent:"center", alignItems:"center"}}>
                    <View>
                        <Button primary
                        onPress={()=>props.nextStep()}
                        ><Text style={{fontSize:20, color:"white"}}> Suivant </Text></Button>
                    </View>
                </View>
        </View>
      );
}

export default FormInscription