import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Image,
  TextInput,
  Pressable,
} from 'react-native';

/*  */
import React, { Component, useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
/*  */
import Ionicons from '@expo/vector-icons/Ionicons';

import {useRouter, router} from 'expo-router';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';


import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import {saveLogin_1} from '../helpers/verifylogin/login'

//import {HeaderHelper} from './helpers';
export default function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [securePwd, setsecurePwd] = useState(true);
  const [eyeviewer, setEyeviewer] = useState('eye');

  async function saveLogin(key, value){
    try{
      await SecureStore.setItemAsync(key, value);
      return true
    } catch( e ){
      return false
    }
  }

  async function getValueFor(key){
    try{
      let result = await SecureStore.getItemAsync(key);
      if(result){
        if(result == 'false'){
          return 'loggout out'
        }
        else{
          return 'logged in'
        }
      }
      else{ return 'key not found1' }
    } catch(e){
      return 'an error occured'
    }
  
  }

 const login = () => {

  setLoginMessage("Loadig please wait");
    const params = {
        email: email,
        password: password,
    };    

    if(email.trim() == '' || password.trim() == ''){
      setLoginMessage('User email or phone number and password required')
    } else{

      axios.post('https://capitaltrademarks.com/users/testing__22.php', params, { 
        headers: {
            'content-type': 'application/json',
        },
      }).then(function (response) {
          //alert(JSON.stringify(response.data.uid));
          setLoginMessage(response.data.message)
          if(response.data.status === 'success'){
            router.replace('/(pages)');
            saveLogin_1('password', 'true')
            saveLogin_1('uid', response.data.uid)
            saveLogin_1('customername', 'G. Charles Asuquo')
          }
        }).catch(function (error) {
          setLoginMessage(error)
        });
    }
      //

  };

  const revilpwdtoggle = () => {
    
    if(securePwd === true){
      setsecurePwd(false)
      setEyeviewer('eye-with-line')
    } else{
      setsecurePwd(true)
      setEyeviewer('eye')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={{flex: 0.4, backgroundColor: '#3EB489',}}></View>
      <View style={styles.container2}>
        <View style={styles.contentui}>
          <View style={styles.complogo}>
            <Image 
              source={require('.././image/images.png')}
              style={styles.compimage}
              contentFit="cover"
              transition={1000}
            />            
          </View>
          <View>
            <Text style={styles.textboxes}>
              Sign-in to your account
            </Text>
          </View>
          <View style={styles.textboxes}>
            <View>
              <View style={styles.pad_tp_botm_5}>
                  <Text style={[styles.emailphone, styles.textboxLabel]}> 
                    Email or Phone number required
                  </Text>
                  <View style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
                    <View style={{position: 'absolute', padding: 10}}>
                      <Feather name="user" size={24} color="black" style={styles.emailphone} />
                    </View> 
                    <TextInput
                      style={[styles.emailphone, styles.inputbtnconfig, styles.input_emailphone]}
                      placeholder='Email or Phone number'
                      autoCorrect={false}
                      autoCapitalize='none'
                      keyboardType='email-address'
                      onChangeText={(e) => setEmail(e)}
                      value={email}
                     />
                  </View>
              </View>


              <View style={styles.pad_tp_botm_5}>
                <Text style={[styles.emailphone, styles.textboxLabel]}> 
                  Password required 
                </Text>
                <View style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
                  <View style={{position: 'absolute', padding: 10}}>
                    <FontAwesome name="lock" size={24} style={styles.emailphone} />
                  </View>
                  <TextInput
                    secureTextEntry={securePwd}
                    style={[styles.password_inpt, styles.emailphone, styles.inputbtnconfig_showpwd, styles.input_eye]}
                    placeholder='Input your password'
                    onChangeText={(e) => setPassword(e)}
                    value={password}
                  />
                  <Pressable 
                    onPress={revilpwdtoggle}
                    style={styles.presibleeyes}
                    >
                    <Entypo name={eyeviewer} size={24} color="#ffffff" />
                  </Pressable>
                </View>
              </View>

              <View style={styles.pad_tp_botm_5}>
                <Text> {loginMessage}  </Text>
                <Pressable 
                  style={[styles.inputbtnconfig, styles.btn_login]}
                  onPress={login}
                  >
                  <Text style={[styles.whitetext, styles.loginbtn_text]}>Sign-In</Text>
                </Pressable>

                <View style={[styles.pad_tp_botm_5, styles.mlty_btn_2,]}>
                  <Link href="/signup" asChild style={[styles.inputbtnconfig, styles.btn_login_2]}>
                    <Pressable>
                      <Text 
                      style={[styles.whitetext, styles.loginbtn_text]}
                      >Sign-up</Text>
                    </Pressable>
                  </Link>

                  <Link href="/recoveraccount" asChild style={[styles.inputbtnconfig, styles.btn_login_2]}>
                    <Pressable>
                      <Text style={[styles.whitetext, styles.loginbtn_text]}>Recover account</Text>
                    </Pressable>
                  </Link>

                  <Link href="/verifyemail" asChild style={[styles.inputbtnconfig, styles.btn_login_2]}>
                    <Pressable>
                      <Text 
                      style={[styles.whitetext, styles.loginbtn_text]}
                      >Verify Email</Text>
                    </Pressable>
                  </Link>
                </View>

              </View>

            </View>
          </View>
        </View>
      </View>
      
    </SafeAreaView>
  );
}

// the new thing i added to app.json is the config: in iso part
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2:{
    //paddingTop: 250,
    paddingLeft: 0,
    paddingRight: 0,
    //display: 'flex',
    flex: 1,
    //flexWrap: 'wrap',
    //alignContent: 'space-between',
    //justifyContent: 'space-around',
    backgroundColor: '#3EB489',
  },
  contentui:{
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    overflow: 'hidden',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    justifyContent: 'space-around',
    padding: 20,
  },

  complogo: {
    flex: 1,
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  compimage:{
    flex: 1,
    width: '70%',
  },
  textboxes: {
    flex: 2,
  },
  inputbtnconfig: {
    borderColor: '#3EB489'/*'#d9dee3'*/,
    borderWidth: 1,
    paddingTop: 10,
    paddingLeft: 35,
    paddingBottom: 10,
    paddingRight: 10,
    borderRadius: 10,
  },
  inputbtnconfig_showpwd: {//new
    borderColor: '#3EB489'/*'#d9dee3'*/,
    borderWidth: 1,
    paddingTop: 10,
    paddingLeft: 35,
    paddingBottom: 10,
    paddingRight: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  input_emailphone: {
    width: '100%',
  },
  input_eye: {
    width: '90%',
  },
  password_inpt: {
  },
  presibleeyes:{
    paddingTop: 10,
    paddingLeft: 5,
    backgroundColor: '#3EB489',
    width: '10%',
    textAlign: 'center',
    borderColor: 'transparent',
    color: '#ededed',
    borderWidth: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  textboxLabel: {
    paddingBottom: 5,
    paddingLeft: 5,
  },
  emailphone: {
    color: '#697a8d',
    //borderBlockColor: '#d9dee3',

  },
  password: {},
  textinputfocused: {
    borderColor: '#d9dee3',
  },
  btn_login: {
    backgroundColor: '#3EB489',
    textAlign: 'justify',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  btn_login_2:{
    width: '33%',
    backgroundColor: '#3EB489',
    textAlign: 'justify',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 3,
  },
  mlty_btn_2:{
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'space-around',
  },
  whitetext: {
    color: 'white',
  },
  loginbtn_text:{
    fontSize: 12,
    lineHeight: 18,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  pad_tp_botm_5:{
    paddingBottom: 10,
    paddingTop: 18,
  },
  pad_tp_botm_10:{},
});
