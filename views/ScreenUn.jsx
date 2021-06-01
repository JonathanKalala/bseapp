import React from 'react'
import { View, Image } from 'react-native'
import { Container, Header, Content, Button, Text } from 'native-base';

const ScreenUn = ({navigation}) =>{
    return(
        <>
            <View>
            <View style={{justifyContent:"center", alignItems:"center", marginTop:100}}>
                <Image
                    style={{width:150, height:100}}
                    source={{uri: 'https://play-lh.googleusercontent.com/61N6suYxXIXVUAOvaPfDnSGYbgdyjyxtPFxPY6tQdyVXMfkzjYvPVhxF4WZUhKhSHdg'}}
                />
            </View>
            </View>
            <View style={{marginTop:100}}>
                <View style={{marginBottom:20, justifyContent:"center", alignItems:"center"}}>
                    <View>
                        <Button primary
                                onPress={() => navigation.navigate('inscription')}
                        >
                            <Text> S'inscrire </Text>
                        </Button>
                    </View>
                </View>

                <View style={{marginBottom:20, justifyContent:"center", alignItems:"center"}}>
                    <View>
                        <Button primary><Text> Se connecter </Text></Button>
                    </View>
                </View>
            </View>
        </>
    )
}

export default ScreenUn