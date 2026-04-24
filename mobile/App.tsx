import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Feature1 from './screens/Feature1'
import Feature2 from './screens/Feature2'
import Feature3 from './screens/Feature3'
import Landing from './screens/Landing'
import Login from './screens/Login'
import { Provider } from 'react-redux'
import reduxStore from './redux/store'

const App = () => {
  const Stack = createNativeStackNavigator()
  return <Provider store={reduxStore}>
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{headerShown:false}}>

        <Stack.Screen name='fe1' component={Feature1} />
        <Stack.Screen name='fe2' component={Feature2} />
        <Stack.Screen name='fe3' component={Feature3} />
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='landing' component={Landing} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  </Provider>
}

export default App

const styles = StyleSheet.create({})