import * as SecureStore from 'expo-secure-store';
import {useRouter, router} from 'expo-router';


export async function verifyloggedin(key){
  let ret = 'false'
  try{
    let result = await SecureStore.getItemAsync(key);
    if(result){
      if(result == 'false'){
        ret = 'false'
        router.replace('../../');
      }
      else{
        ret = 'true'
        router.replace('../../(pages)');
      }
    }
    else{ ret = 'false' }
  } catch(e){
    ret = 'false'
    router.replace('../../');
  }
  return ret
}
