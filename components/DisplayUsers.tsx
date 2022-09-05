import React from 'react'
import {View , Text , StyleSheet} from 'react-native'
import {NativeStackScreenProps}  from '@react-navigation/native-stack'
import { RootList } from './Container'

const DisplayUsers = ({route , navigation}: NativeStackScreenProps<RootList , 'Display'>) => {
  return (
    <View>
        <Text style={styles.input}>Display</Text>
         <View style={styles.word}>
              <Text style={styles.input1}>Name - {route.params?.name}</Text>
              <Text  style={styles.input1}>Email - {route.params?.email}</Text>
         </View>
    </View>
  )
}
const styles = StyleSheet.create(({
    input :{
        marginTop : 40,
        textAlign : 'center',
        fontSize : 25,
    }, 
    word : {
        marginTop : 300,
     marginLeft : 80,
 
    } ,
    input1 : {
        fontSize : 20, 
        margin : 10,
        fontWeight : 'bold'
     }
}))

export default DisplayUsers