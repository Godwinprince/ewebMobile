import * as SecureStore from 'expo-secure-store';
import {useRouter, router} from 'expo-router';


export async function sessionusername(key){
  let ret = 'false'
  try{
    let result = await SecureStore.getItemAsync(key);
    if(result){
      return result
    }
    else{ 
      router.replace('../../'); 
    }
  } catch(e){
    ret = 'false'
    router.replace('../../');
  }
}
