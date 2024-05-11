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
  Button,
} from 'react-native';

/*  */
import React, { Component } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
/*  */
import Ionicons from '@expo/vector-icons/Ionicons';

import {useRouter} from 'expo-router';

//import {HeaderHelper} from './helpers';

import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

//import Slider from '@react-native-community/slider';

//export default function App() {

  const bellToP = () => {
    alert('pressed');
  };

  const signup = () => {
    alert('pressed');
  };


  class App extends Component {
    constructor() {
      super();
      this.state = {
        count: 0,
        noti: 'none',
      };
    }
  
    togglenotification() {
      //this.setState({ noti: this.state.noti })
      if(this.state.noti == 'none'){
        this.setState({ noti: this.state.noti = 'block' })
      } else{
        this.setState({ noti: this.state.noti = 'none' })
      }
      //alert(this.state.noti)
    }

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
        <Button
          title="Increment"
          onPress={() => this.togglenotification()}
        />
                </View>
                <View style={{width: '73%', padding: 0}}>
                  <Text style={{fontSize: 20, fontWeight: 'bold', color: '#3EB489'}}>Hi, G.Charles</Text>
                  <Text>08101343467 {this.state.noti}</Text>
                </View>
                
              </View>
              <View style={[styles.userflexeddet_2, styles.wid30]}>
                <View style={styles.belltop}>
                  <Pressable style={{width: '100%',}} onPress={bellToP}>
                    <Entypo name="bell"  style={{width: '100%', color: '#3EB489'}}  size={24} />
                  </Pressable>
                </View>
              </View>
            </View>
            <View style={styles.contentui}>
              <View style={{width: '100%',}}>
                <View style={styles.moreOptions}>
                  <Pressable style={styles.moreOptionsicon} onPress={bellToP}>
                    <FontAwesome5 name="handshake"  style={{width: '100%', margin: '25%', color: '#3EB489'}}  size={25} color="black" />
                    <Text style={styles.centrealign}>Referral</Text>
                  </Pressable>
                  <Pressable style={{width: '23.33%'}} onPress={bellToP}>
                    <AntDesign name="adduser"  style={{width: '100%', margin: '25%', color: '#3EB489'}}  size={25} color="black" />
                    <Text style={styles.centrealign}>Invite a friend</Text>
                  </Pressable>
                  <Pressable style={{width: '23.33%'}} onPress={bellToP}>
                    <FontAwesome5 name="headset" size={25} color="#3EB489" style={{width: '100%', margin: '25%', color: '#3EB489'}} />
                    <Text style={styles.centrealign}>Contact admin</Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.dashboardmaincont}>
                <View style={{width: '100%', padding: 10}}>
                  <ScrollView style={styles.scrollView}>


                  <View style={styles.scroView1}>
                    <Pressable style={styles.moreOptionsicon} onPress={bellToP}>
                      <Image
                      style={styles.profileimg}
                      source={require('../../image/mtn1.jpg')}
                      contentFit="cover"
                      transition={1000}
                    />
                    </Pressable>
                    <Pressable style={{width: '23.33%'}} onPress={bellToP}>
                      <Image
                        style={styles.profileimg}
                        source={require('../../image/airtel2.jpg')}
                        contentFit="cover"
                        transition={1000}
                      />
                    </Pressable>
                    <Pressable style={{width: '23.33%'}} onPress={bellToP}>
                      <Image
                          style={[styles.profileimg]}
                          source={require('../../image/glo1.png')}
                          contentFit="cover"
                          transition={1000}
                        />
                    </Pressable>
                </View>


                <View style={styles.scroView1}>
                    <Pressable style={styles.moreOptionsicon} onPress={bellToP}>
                      <Image
                      style={styles.profileimg}
                      source={require('../../image/gotv2.jpg')}
                      contentFit="cover"
                      transition={1000}
                    />
                    </Pressable>
                    <Pressable style={{width: '23.33%'}} onPress={bellToP}>
                      <Image
                        style={styles.profileimg}
                        source={require('../../image/dstv1.jpg')}
                        contentFit="cover"
                        transition={1000}
                      />
                    </Pressable>
                    <Pressable style={{width: '23.33%'}} onPress={bellToP}>
                      <Image
                          style={[styles.profileimg]}
                          source={require('../../image/mytv1.png')}
                          contentFit="cover"
                          transition={1000}
                        />
                    </Pressable>
                </View>
                

                <View style={[styles.scroView1, styles.shadowProp]}>
                    <Pressable style={styles.moreOptionsicon} onPress={bellToP}>
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
  },  
  dashboardmaincont:{
    paddingTop: 10, 
    flex: 1,
  },
  centrealign: {
    textAlign: 'center',
  },
  moreOptionsicon:{
    width: '23.33%',
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
    borderColor: '#ededed', 
    borderWidth: 0.5,
    borderRadius: 10,
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
  belltop:{
    borderRadius: 10,
    width: '100%',
    backgroundColor: '#ededed', 
    paddingLeft: 10, 
    paddingTop: 10, 
    paddingRight: 10, 
    paddingBottom: 10,
    fontWeight: 'bold',
    color: '#3EB489',
  },

  container: {
    flex: 1,
  },
  container2:{
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    //display: 'flex',
    flex: 1,
    //flexWrap: 'wrap',
    //alignContent: 'space-between',
    //justifyContent: 'space-around',
    backgroundColor: 'white'/*'#3EB489'*/,
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
});

export default App;