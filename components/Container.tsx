import React from 'react'
import {View , Text} from 'react-native'
import FormSubmit from './FormSubmit'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DisplayUsers from './DisplayUsers'

 export type RootList = {
     Form : any ;
     Display : any;
 }
 const tab = createNativeStackNavigator<RootList>()
 
 const Container = () => {
  return (
     <tab.Navigator initialRouteName='Form' screenOptions={{
         headerStyle : {
            backgroundColor : 'yellow',
         },
         headerTintColor : 'black'
     }}>
           <tab.Screen  name ='Form' component={FormSubmit} options={{title : 'Register'}} />
           <tab.Screen  name ='Display' component={DisplayUsers} options={{title : 'Users'}}/>
          
     </tab.Navigator>  
   
  )
    
}

export default Container