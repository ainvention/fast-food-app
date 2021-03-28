import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Tabs from './src/navigation/tabs'
import { Tab2, Tab3 } from './src/screens'

const Stack = createStackNavigator();

const App = () => {

    const [loaded] = useFonts({
      "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
      "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
      "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),

    })
    
    if(!loaded){
      return null;
    }
    
    
      return (
        <SafeAreaProvider>
          <NavigationContainer>
              <Stack.Navigator
                  screenOptions={{
                      headerShown: false
                  }}
                  initialRouteName={'Home'}
              >
                  <Stack.Screen name="Home" component={Tabs} style={{marginTop:20}} />
                  <Stack.Screen name="Tab2" component={Tab2} style={{marginTop:20}} />
                  <Stack.Screen name="Tab3" component={Tab3} style={{marginTop:20}} />
              </Stack.Navigator>
          </NavigationContainer>
          </SafeAreaProvider>
      )
    
}

export default App;