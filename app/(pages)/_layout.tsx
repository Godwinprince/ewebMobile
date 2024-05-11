import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarStyle: {height: 80, backgroundColor: '#3EB489',  borderColor: 'transparent',shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,},
        
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome5 name="house-user" size={29} color="#ffffff" />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="bell"
                    size={30}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1, color: '#ffffff' }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />

<Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color="#ffffff"  />,
          headerRight: () => (
            <Link href="/profile" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="bell"
                    size={30}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1, color: '#ffffff' }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />



<Tabs.Screen
        name="kyc"
        options={{
          headerShown: false,
          title: 'KYC',
          tabBarIcon: ({ color }) => <AntDesign name="Safety" size={29} color="#ffffff" />,
          headerRight: () => (
            <Link href="/kyc" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="edit"
                    size={30}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />



<Tabs.Screen
        name="messages"
        options={{
          headerShown: false,
          title: 'Wallet',
          tabBarIcon: ({ color }) => <Fontisto name="wallet" size={29} color="#ffffff" />,
          headerRight: () => (
            <Link href="/messages" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="edit"
                    size={30}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />

<Tabs.Screen
        name="dashboard"
        options={{
          headerShown: false,
          title: 'Notification',
          tabBarIcon: ({ color }) => <Fontisto name="bell" size={29} color="#ffffff" />,
          headerRight: () => (
            <Link href="/messages" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="edit"
                    size={30}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1, color: '#ffffff' }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />

    </Tabs>
  );
}
