import React ,{useState} from 'react'
import {View , Text , StyleSheet ,TextInput , Button} from 'react-native'
import { useNavigation} from "@react-navigation/native"
import  {NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootList } from './Container';

const FormSubmit = ({route , navigation} : NativeStackScreenProps<RootList , 'Form'>) => {

    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')


    
    

     const handlePress=()=>{
        navigation.navigate('Display',{
            name : name ,
            email : email 

        })   
     }
  return (
    <View style={styles.form}>
         <Text style={styles.word}>Form-Submit</Text>
          <TextInput  style={styles.input} value={name} placeholder='username'  onChangeText={(val)=>setName(val)}/>
          <TextInput style={styles.input}  value={email} placeholder='email'  onChangeText={(val)=>setEmail(val)}/>
          <TextInput  style={styles.input} value={password} placeholder='password'  onChangeText={(val)=>setPassword(val)}/>
           <View style={styles.btn}>
              <Button title='Submit' onPress={handlePress} />
           </View>
    </View>
  )
}

const styles = StyleSheet.create({
    form : {
        
         margin : 100,
         marginTop : 150,
     },
     input : {
        borderWidth : 1,
         margin : 10,
         padding : 10
     },
     word : {
        textAlign : 'center',
        fontSize : 20,
        fontWeight : 'bold'
     } ,
     btn : {
        width : 90 ,
        marginLeft : 50,
        marginTop : 100
     }
    
})

export default FormSubmit