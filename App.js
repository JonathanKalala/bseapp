// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenUn from './views/ScreenUn'
import { Button } from 'native-base';
import FormInscription from './views/FormInscription'
function HomeScreen({navigation}) {
  console.log(navigation);
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScreenUn navigation={navigation}  />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        onPress={() => navigation.navigate('Details')}
      >
      <Text>Home</Text>
      </Button>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="inscription" component={FormInscription} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;























// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import ScreenUn from './views/ScreenUn'

// export default function App() {
//   return (

//     <View>
//       <StatusBar style="auto" />
//       <ScreenUn />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
