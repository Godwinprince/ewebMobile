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
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
/*  */
import Ionicons from '@expo/vector-icons/Ionicons';

import {useRouter} from 'expo-router';

//import {HeaderHelper} from './helpers';
export default function App() {

  const recoveraccount = () => {
    alert('pressed');
  };

  const signup = () => {
    alert('pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
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
              Find account
            </Text>
          </View>
          <View style={styles.textboxes}>
            <View>
              <View style={styles.pad_tp_botm_5}>
                <Text> Enter email or phone number </Text>
                <TextInput
                  style={[styles.emailphone, styles.inputbtnconfig]}
                  placeholder='Email or Phone number'
                />
              </View>

              <View style={styles.pad_tp_botm_5}>
                <Text>   </Text>
                <Pressable style={[styles.inputbtnconfig, styles.btn_login]}>
                  <Text style={[styles.whitetext, styles.loginbtn_text]}>Find account</Text>
                </Pressable>

                <View style={[styles.pad_tp_botm_5, styles.mlty_btn_2,]}>
                  <Link href="/" asChild style={[styles.inputbtnconfig, styles.btn_login_2]}>
                    <Pressable>
                      <Text 
                      style={[styles.whitetext, styles.loginbtn_text]}
                      >Sign-in</Text>
                    </Pressable>
                  </Link>

                  <Link href="/signup" asChild style={[styles.inputbtnconfig, styles.btn_login_2]}>
                    <Pressable>
                      <Text style={[styles.whitetext, styles.loginbtn_text]}>Sign up</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2:{
    paddingTop: 300,
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
    padding: 10,
    borderRadius: 10,
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
    width: '48%',
    backgroundColor: '#3EB489',
    textAlign: 'justify',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  mlty_btn_2:{
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    justifyContent: 'space-around',
  },
  whitetext: {
    color: 'white',
  },
  loginbtn_text:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  pad_tp_botm_5:{
    paddingBottom: 10,
    paddingTop: 18,
  },
  pad_tp_botm_10:{},
});
