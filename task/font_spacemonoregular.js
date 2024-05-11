

import { useFonts } from 'expo-font';

export default function font_spacemonoregular() {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/SpaceMono-Regular.ttf'),
  });
}