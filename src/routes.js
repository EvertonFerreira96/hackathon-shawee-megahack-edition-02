import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Foundation, MaterialIcons, Ionicons } from '@expo/vector-icons'

import PayButton from './components/PayButton'; 

import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScreen from './screens/Pay';


const icons = {
  Home:{
    lib: Foundation,
    name: 'home',
  },
  Wallet:{
    lib: Ionicons,
    name: 'ios-wallet',
  },
  Notifications:{
    lib: Ionicons,
    name: 'md-notifications',
  },
  Settings:{ 
    lib: MaterialIcons,
    name: 'settings',
  },
};

export default function App() {

const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if(route.name === 'Pay')
            return(
            <PayButton 
              onPress={() => navigation.navigate('Pay')}
              focused={focused}
            />
            );
            const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size+5} color={color} style={{marginTop:5}} />;
        },
      })}
      tabBarOptions={{
        style:{
          backgroundColor: '#131111',
          borderTopColor: 'rgba(255, 255, 255, 0.2)', 
          height:65,
          paddingBottom:15
        },
        activeTintColor: '#FEFEFE',
        inactiveTintColor: '#92929C',
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
        title: "Início",
        }}
     />
     <Tab.Screen
      name="Wallet"
      component={WalletScreen}
      options={{
        title: "Carteira",
        }}
     />
     <Tab.Screen
      name="Pay"
      component={PayScreen}
      options={{
        title: "",
        }}
     />
     <Tab.Screen
      name="Notifications"
      component={WalletScreen}
      options={{
        title: "Notificações",
        }}
     />
     <Tab.Screen
      name="Settings"
      component={PayScreen}
      options={{
        title: "Ajustes",
        }}
     />
    </Tab.Navigator>
  ); 
}

