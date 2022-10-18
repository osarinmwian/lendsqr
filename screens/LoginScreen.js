import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState}from 'react'
import {  signInWithEmailAndPassword } from "firebase/auth";
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from '../firebase/firebase.config';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { Feather,Entypo} from '@expo/vector-icons';

const LoginScreen = ({navigation}) => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [data , setData] = useState({
      secureTextEntry: true,
    });
    const loginUser =() =>{
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => { 
          console.log('login ')
          navigation.navigate('HomeScreen')
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
       secureTextEntry:!data.secureTextEntry
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
           <Text style={styles.title}>Email </Text>
           <View style={styles.email}>
           <MaterialCommunityIcons name="email-outline" size={22} color="gray" style={styles.icon}/>
           <View style={styles.action}>
           <TextInput
           placeholder='enter email'
           style={styles.textInput}
           autoCapitalize="none"
           onChangeText={text => setEmail(text)}/>
           
           </View>
           </View>
           <Text style={styles.title}>Password </Text>
         <View style={styles.password}>
           <Entypo name="lock" size={24} color="gray" />
           <View style={styles.action}>
           <TextInput
           placeholder='enter password'
           secureTextEntry={data.secureTextEntry ? true : false}
           style={styles.textInput}
           autoCapitalize="none"
           onChangeText={text => setPassword(text)}/>
            <TouchableOpacity onPress={updateSecureTextEntry}>
            <Feather name="eye-off" size={18} color="black" style={styles.passwordIcon}/>
            </TouchableOpacity>
           </View>
           </View>
           <View style={styles.buttonSignIn}>
             <TouchableOpacity onPress={loginUser} >
             <Text style={styles.buttonSignInText}>Sign in</Text>
             </TouchableOpacity> 
            </View>
            <View style={styles.buttonSignUp}>
              <Text>
               Don't have an account?
              </Text>
             <TouchableOpacity onPress={()=>navigation.navigate('SignUpScreen')}>
             <Text style={styles.buttonSignUpText}>Sign up</Text>
             </TouchableOpacity> 
            </View>
         </Animatable.View>    
       </View>
       </SafeAreaView>
      
     )
   }
   
   export default LoginScreen
   
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
   buttonSignIn:{
     backgroundColor:"#5175ae",
     marginLeft:"2.5%",
     width:"100%",
     marginTop:"10%",
     padding:"4%",
     borderRadius:"10%",
    
   },
   buttonSignInText:{
     color:"white",
     alignSelf:"center",
     fontSize:18
   },
   buttonSignUp:{
     marginLeft:"2.5%",
     width:"100%",
     marginTop:"2%",
     alignItems:"center",
     justifyContent:"center",
     padding:"4%",
    flexDirection:"row"
   },
   buttonSignUpText:{
     alignSelf:"center",
     fontSize:14,
     marginLeft:"2%",
     color:"red"
   },
   
   
   })
{/* <View>
<TextInput placeholder='email' 
onChangeText = {text => setEmail(text)}
style={{padding:15, borderColor: "grey", backgroundColor:"red"}}
value={email}/>
<View style={{marginTop:5}}>
<TextInput placeholder='password' 
value={password}
onChangeText = {text => setPassword(text)}
secureTextEntry= {true}
style={{padding:15, borderColor: "grey", backgroundColor:"red"}}/>
</View>
<TouchableOpacity
onPress={()=>navigation.navigate('SignUpScreen')}>
  <Text>create an account</Text>
</TouchableOpacity>
<Button title = "login" 
onPress={loginUser} 
style={{backgroundColor:"black"}}/>
</View> */}