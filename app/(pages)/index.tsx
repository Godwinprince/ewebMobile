import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';

/*  */
import React, { Component, useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
/*  */
import Ionicons from '@expo/vector-icons/Ionicons';

import { MaterialIcons } from '@expo/vector-icons';

import {useRouter, router} from 'expo-router';
import axios from 'axios';

//import {HeaderHelper} from './helpers';

import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { useFonts } from 'expo-font';

import * as SecureStore from 'expo-secure-store';

import {verifyloggedin} from '../../helpers/verifylogin/verify'
import {sessionusername} from '../../helpers/verifylogin/sessoncontent'


//import Slider from '@react-native-community/slider';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      noti: 'none',
      optionClickGesture: {'colors':'#44596e','background':'#ffffff'},
      usernameDisplay:'No',
      userphoneDisplay:'000000000000',
    };
  }

  componentDidMount(): void {//once page mounts on the screen
    verifyloggedin('password')
    //We need to call an asynchronous function that will get user saved documents
  }


  togglenotification() {
    //this.setState({ noti: this.state.noti })
    if(this.state.noti == 'none'){
      this.setState({ noti: this.state.noti = 'block' })
    } else{
      this.setState({ noti: this.state.noti = 'none' })
    }

  }

  settingPageMovement(e, f, g){
    //f = color, g = background
    this.setState({ optionClickGesture: this.state.optionClickGesture.colors = g })
    this.setState({ optionClickGesture: this.state.optionClickGesture.background = f })
    router.replace(e);
  };

  bellToP = () => {
    alert('pressed');
  };

  showAlert = () => {
    alert(0)
  };

  /*const [fontsLoaded] = useFonts({
    'Inter-Black': require('../../assets/fonts/SpaceMono-Regular.ttf'),
    'tt0588m': require('../../assets/fonts/tt0588m_.ttf'),
  });*/

  render() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.container2}>
        <View style={styles.userdetails}>
          <View style={[styles.userflexeddet, styles.wid50]}>
            <View style={{width: '20%'}}>
              <Image
                 style={styles.profileimg}
                source={require('../../image/empty2.jpg')}
                contentFit="cover"
                transition={1000}
              />  
            </View>
            <View style={{width: '73%', padding: 0}}>
              <Text style={[styles.username, styles.writingstyle]}>Hi, {this.state.usernameDisplay}</Text>
              <Text style={[styles.contact, styles.writingstyle]}>{this.state.userphoneDisplay}</Text>
            </View>
            
          </View>
          <View style={[styles.userflexeddet_2, styles.wid30]}>
            <View style={styles.bellToP}>
              <Pressable style={{width: '100%'}} onPress={() => this.togglenotification()}>
                <SimpleLineIcons name="options-vertical"  style={{width: '100%', color: '#ededed'}}  size={24} />
              </Pressable>
              
            </View>
          </View>

          <View style={{
              position: 'absolute',
              zIndex: 1, 
              width: '50%', 
              flex: 1, 
              marginLeft: '50%',
              marginTop: '16%',
              display: this.state.noti,
            }}>
                <View style={
                  {
                    width: '100%', 
                    padding: 20, 
                    backgroundColor: '#ffffff',
                    borderRadius: 10,
                    borderColor: '#e8eaec',
                    borderWidth: 1,
                  }
                }>

                  <View style={{paddingTop: 3,}}>
                    <View style={{padding: 2}}>
                      <View style={[styles.contact, styles.writingstyle, styles.flexed_d]}>
                        <Pressable style={{paddingBottom: 15, width: '70%'}} onPress={() => this.settingPageMovement('/profilesetting', '#44596e', '#ffffff')}>
                           <Text style={{fontSize:15, color: `#44596e`}} style={{fontSize:15, color: `#44596e`}}>Profile Setting</Text>
                        </Pressable>
                        <Pressable style={{width: '70%', paddingBottom: 15}} onPress={() => this.settingPageMovement('/changepassword', '#44596e', '#ffffff')}>
                           <Text style={{fontSize:15, color: `#44596e`}}>Change password</Text>
                        </Pressable>
                        <Pressable style={{width: '70%', paddingBottom: 15}} onPress={() => this.settingPageMovement('/security', '#44596e', '#ffffff')}>
                          <Text style={{fontSize:15, color: `#44596e`}}>Security</Text>
                        </Pressable>
                        <Pressable style={{width: '70%', paddingBottom: 15}} onPress={() => this.settingPageMovement('/virtualaccount','#44596e', '#ffffff')}>
                           <Text style={{fontSize:15, color: `#44596e`}}>Virtual Account</Text>
                        </Pressable>
                        <Pressable style={{width: '70%', paddingBottom: 15}} onPress={() => this.settingPageMovement('/walletsetting', '#44596e', '#ffffff')}>
                        <Text style={{fontSize:15, color: `#44596e`}}>Wallet Setting</Text>
                        </Pressable>
                        <Pressable style={{width: '70%', paddingBottom: 2,}} onPress={() => this.settingPageMovement('/refsetting', '#44596e', '#ffffff')}>
                        <Text style={{fontSize:15, color: `#44596e`}}>Referral setting </Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </View>
              </View>

        </View>
        <View style={styles.contentui}>
          <View style={{width: '100%', padding: 10,}}>
            <View style={styles.moreOptions}>
              <Pressable style={styles.moreOptionsicon} onPress={this.bellToP}>
                <FontAwesome5 name="handshake"  style={{paddingBottom: 10, width: '100%', color: '#3EB489', fontWeight: 'bold', textAlign: 'center'}}  size={25} color="black" />
                <Text style={[styles.centrealign, styles.moreoptionlabel, styles.writingstyle]}>Referral</Text>
              </Pressable>
              <Pressable style={styles.moreOptionsicon} onPress={this.bellToP}>
                <AntDesign name="adduser"  style={{paddingBottom: 10, width: '100%', color: '#3EB489', fontWeight: 'bold', textAlign: 'center'}}  size={25} color="black" />
                <Text style={[styles.centrealign, styles.moreoptionlabel, styles.writingstyle]}>Invite</Text>
              </Pressable>
              <Pressable style={styles.moreOptionsicon} onPress={this.bellToP}>
                <FontAwesome5 name="headset" size={25} color="#3EB489" style={{paddingBottom: 10, width: '100%', color: '#3EB489', fontWeight: 'bold', textAlign: 'center'}} />
                <Text style={[styles.centrealign, styles.moreoptionlabel, styles.writingstyle]}> Chat Admin</Text>
              </Pressable>
            </View>
            <View style={styles.moreOptions}>
              <Pressable style={styles.moreOptionsicon} onPress={this.bellToP}>
                <FontAwesome name="question-circle"  style={{paddingBottom: 10, width: '100%', color: '#3EB489', fontWeight: 'bold', textAlign: 'center'}}  size={25} color="black" />
                <Text style={[styles.centrealign, styles.moreoptionlabel, styles.writingstyle]}>FAQ</Text>
              </Pressable>
              <Pressable style={styles.moreOptionsicon} onPress={this.bellToP}>
                <Ionicons name="gift"  style={{paddingBottom: 10, width: '100%', color: '#3EB489', fontWeight: 'bold', textAlign: 'center'}}  size={25} color="black" />
                <Text style={[styles.centrealign, styles.moreoptionlabel, styles.writingstyle]}>Reward</Text>
              </Pressable>
              <Pressable style={styles.moreOptionsicon} onPress={this.bellToP}>
                <MaterialIcons name="privacy-tip"  style={{paddingBottom: 10, width: '100%', color: '#3EB489', fontWeight: 'bold', textAlign: 'center'}}  size={25} color="black" />
                <Text style={[styles.centrealign, styles.moreoptionlabel, styles.writingstyle]}>Privacy policy</Text>
              </Pressable>
            </View>
            <View style={styles.moreOptions}>
              <Pressable style={styles.moreOptionsicon} onPress={this.bellToP}>
                <Entypo name="megaphone"  style={{paddingBottom: 10, width: '100%', color: '#3EB489', fontWeight: 'bold', textAlign: 'center'}}  size={25} color="black" />
                <Text style={[styles.centrealign, styles.moreoptionlabel, styles.writingstyle]}>Promotions</Text>
              </Pressable>
            </View>

          </View>
          <View style={styles.dashboardmaincont}>
            <View style={{width: '100%', padding: 20, flex: 1,}}>
              <ScrollView style={styles.scrollView}>


              <View style={styles.scroView1}>
                <Pressable style={styles.moreOptionsicon} onPress={this.bellToP}>
                  <Image
                  style={styles.profileimg}
                  source={require('../../image/mtn1.jpg')}
                  contentFit="cover"
                  transition={1000}
                />
                </Pressable>
                <Pressable style={{width: '23.33%'}} onPress={this.bellToP}>
                  <Image
                    style={styles.profileimg}
                    source={require('../../image/airtel2.jpg')}
                    contentFit="cover"
                    transition={1000}
                  />
                </Pressable>
                <Pressable style={{width: '23.33%'}} onPress={this.bellToP}>
                  <Image
                      style={[styles.profileimg]}
                      source={require('../../image/glo1.png')}
                      contentFit="cover"
                      transition={1000}
                    />
                </Pressable>
            </View>


            <View style={styles.scroView1}>
                <Pressable style={styles.moreOptionsicon} onPress={this.bellToP}>
                  <Image
                  style={styles.profileimg}
                  source={require('../../image/gotv2.jpg')}
                  contentFit="cover"
                  transition={1000}
                />
                </Pressable>
                <Pressable style={{width: '23.33%'}} onPress={this.bellToP}>
                  <Image
                    style={styles.profileimg}
                    source={require('../../image/dstv1.jpg')}
                    contentFit="cover"
                    transition={1000}
                  />
                </Pressable>
                <Pressable style={{width: '23.33%'}} onPress={this.bellToP}>
                  <Image
                      style={[styles.profileimg]}
                      source={require('../../image/mytv1.png')}
                      contentFit="cover"
                      transition={1000}
                    />
                </Pressable>
            </View>
            

            <View style={[styles.scroView1, styles.shadowProp]}>
                <Pressable style={styles.moreOptionsicon} onPress={this.bellToP}>
                  <Image
                  style={styles.profileimg}
                  source={require('../../image/startime1.jpg')}
                  contentFit="cover"
                  transition={1000}
                />
                </Pressable>
            </View>

              </ScrollView>
            </View>
          </View>
        </View>
      </View>
      
    </SafeAreaView>
      );
    }
  }

/*
            <Slider
                style={{width: 200, height: 40}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
              />

*/

const styles = StyleSheet.create({
  backgrounds:{
    
  },
  optionClickable: {
    width: '70%',
    paddingBottom: 10,
  },
  username:{
    fontSize: 20, 
    fontWeight: 'bold', 
    color: /*'#3EB489'*/'#ffffff', 
  }, 
  contact:{
    fontSize: 15, 
    fontWeight: 'bold', 
    color: '#ffffff'/*'#44596e'*/,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  alignitemcenter: {
    textAlign:'center',
  },
  scrollView: {
    padding: 5,
    borderColor: 'transparent',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#ffffff',
  },  
  dashboardmaincont:{
    paddingTop: 10, 
    flex: 1,
  },
  writingstyle: {
    fontStyle: 'normal',
    //fontFamily: 'fantasy'/*'fantasy'*/,
  },
  moreoptionlabel:{
    color: '#808080',
    fontSize: 15,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  },
  centrealign: {
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  moreOptionsicon:{
    width: '33.3%',
    padding: 10,
  },
  scroView1:{
    width: '100%',
    height: 100,

    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    justifyContent: 'space-around',     
  },
  moreOptions:{
    //borderColor: /*'#ededed'*/'#ededed', 
    backgroundColor: '#ffffff',
    //borderWidth: 2,
    //borderRadius: 10,
    width: '100%',
    height: 100,
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,

    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    justifyContent: 'space-around', 
  },

  userdetails: {
    width: '100%',
    flex: 0.1,
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 0,
    paddingLeft: 7,
    paddingRight: 7,

    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    //justifyContent: 'space-around',    
  },
  wid50: {
    width: '85%',
  },
  wid30: {
    width: '10%',
  },
  userflexeddet: {
    //flex: 0.5,
    width: '50%',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    //justifyContent: 'space-around',
  },
  userflexeddet_2: {
    width: '50%',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    justifyContent: 'space-around',
  },
  profileimg: {
    borderRadius: 50,
  },
  bellToP:{
    borderRadius: 10,
    width: '100%',
    //backgroundColor: '#44596e', 
    paddingLeft: 10, 
    paddingTop: 10, 
    paddingRight: 10, 
    paddingBottom: 10,
    fontWeight: 'bold',
    //color: '#3EB489',
  },

  container: {
    flex: 1,
  },
  container2:{
    paddingTop: 5,
    paddingLeft: 0,
    paddingRight: 0,
    //display: 'flex',
    flex: 1,
    //flexWrap: 'wrap',
    //alignContent: 'space-between',
    //justifyContent: 'space-around',
    backgroundColor: /*'#44596e'*//*'#e8eaec'*/'#3EB489',
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
    //alignContent: 'space-between',
    //justifyContent: 'space-around',
    padding: 5,
  },
  flexed_d:{
    width: '100%',
    overflow: 'hidden',
    //borderTopLeftRadius: 20,
    //borderTopRightRadius: 20,
  }
});
export default App;