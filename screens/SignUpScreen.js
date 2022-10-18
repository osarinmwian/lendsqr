import { View, Text, TextInput,  TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { Feather,Entypo, Ionicons } from '@expo/vector-icons';
import { auth } from '../firebase/firebase.config';



const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [data , setData] = useState({
       secureTextEntry: true,
     });        
const signUpUser = ()=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      console.log(res)
      navigation.navigate('LoginScreen')
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    
}

const updateSecureTextEntry = ( ) =>{
  
  setData({
    ...data,
   secureTextEntry:!data.secureTextEntry,
  
  });
}
return (
  <SafeAreaView>
    <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}> Welcome!  </Text>
    </View>
    <Animatable.View
    animation="fadeInUpBig" 
    style={styles.footer}>
    <Text style={styles.title}>Name </Text>
      <View style={styles.email}>
      <Ionicons name="person-circle" size={24} color="gray" style={styles.icon}/>
      <View style={styles.action}>
      <TextInput
      value={name}
      placeholder='enter name'
      style={styles.textInput}
      autoCapitalize="none"
      onChangeText={(text)=>setName(text)}/>
      </View>
      </View>

      <Text style={styles.title}>Email </Text>
      <View style={styles.email}>
      <MaterialCommunityIcons name="email-outline" size={22} color="gray" style={styles.icon}/>
      <View style={styles.action}>
      <TextInput
    value={email}
    placeholder="email"
    style={styles.textInput}
    autoCapitalize="none"
    onChangeText = {text => setEmail(text)}/>
      </View>
      </View>
   <Text style={styles.title}>Password </Text>
    <View style={styles.password}>
      <Entypo name="lock" size={24} color="gray" />
      <View style={styles.action}>
      <TextInput
      placeholder='enter password'
      value={password}
      style={styles.textInput}
      secureTextEntry={data.secureTextEntry ? true : false}
      onChangeText = {text => setPassword(text)}/>
       <TouchableOpacity onPress={updateSecureTextEntry}>
       <Feather name="eye-off" size={18} color="#3d3b3b" style={styles.passwordIcon}/>
       </TouchableOpacity>     
      </View>
      </View>
      <View style={styles.buttonSignUp}>
        <TouchableOpacity onPress={signUpUser}> 
        <Text style={styles.buttonSignUpText}>Sign up</Text>
        </TouchableOpacity> 
       </View>
       <View style={styles.buttonSignIn}>
       <Text>
        Already have an account?
       </Text>
      <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
      <Text style={styles.buttonSignInText}>Sign in</Text>
      </TouchableOpacity> 
     </View>
    </Animatable.View>   
  </View>
  </SafeAreaView> 
)}

export default SignUpScreen

const styles = StyleSheet.create({
container:{
  width:"100%",
  height:"100%",
  backgroundColor:"#5175ae"
},
header:{
  flex:1.5,
  justifyContent:"center",
  alignItems:"center"
},
headerText:{
color:"white",
fontSize:30,
fontWeight:"600"  
},
title:{
color:"#3d3b3b",
  margin:5
},
footer:{
  flex:3,
  width:"100%",
  backgroundColor:"white",
  borderTopLeftRadius:30,
  borderTopRightRadius:30, 
  paddingRight:"10%",
  paddingLeft:"5%",
  paddingTop:"10%",
  paddingHorizontal:"20%"
},
action:{
  flex:1,
  flexDirection:"row",
  justifyContent:"space-between",
  marginRight:"5%"
},
textInput:{
  marginLeft:"1%",
 width:"100%",
 height:"100%"
},
email:{
margin:10,
width:"100%",
height:30,
borderBottomWidth:0.5,
borderBottomColor: "gray",
flexDirection:"row"  
},
password:{
  margin:10,
  width:"100%",
  height:30,
  borderBottomWidth:0.5,
  borderBottomColor: "gray",
  flexDirection:"row"
},
buttonSignUp:{
backgroundColor:"#5175ae",
marginLeft:"2.5%",
width:"100%",
marginTop:"10%",
padding:"4%",
borderRadius:"10%",
},
buttonSignUpText:{
color:"white",
alignSelf:"center",
fontSize:18
},
buttonSignIn:{
marginLeft:"2.5%",
width:"100%",
marginTop:"2%",
alignItems:"center",
justifyContent:"center",
padding:"4%",
flexDirection:"row"
},
buttonSignInText:{
alignSelf:"center",
fontSize:14,
marginLeft:"2%",
color:"red"
},
});