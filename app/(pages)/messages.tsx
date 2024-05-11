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
          <Text>DASHBOARD</Text>
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
    paddingTop: 100,
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
});
