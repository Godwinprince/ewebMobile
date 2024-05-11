import * as SecureStore from 'expo-secure-store';

export async function saveLogin_1(key, value){
  try{
    await SecureStore.setItemAsync(key, value);
    return true
  } catch( e ){
    return false
  }
}

 