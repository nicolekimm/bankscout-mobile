import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import Icons from 'react-native-vector-icons/MaterialIcons';
import LandingScreen from './components/Landing';
import RegisterScreen from './components/Register';
import LoginScreen from './components/Login';
import FAQScreen from './components/FAQ';
import MyOffersScreen from './components/MyOffers';
import OfferScreen from './components/OfferPage';
import AccountScreen from './components/Accounts';
import AccountInfoScreen from './components/AccountInfo';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function MainTabNavigator() {
  return (
    <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
      activeTintColor: '#101010',
      style: {
        backgroundColor: '#25315C'
      }
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: () => {
        let iconName;
        if (route.name == 'Offers') {
          iconName = 'search-dollar'
        } else if (route.name == 'FAQ') {
          iconName = 'question-circle'
        } else if (route.name == 'Accounts') {
          iconName = 'chart-bar'
        } else if (route.name == 'My Offers') {
          iconName = 'coins'
        } 
        return <Icon type='font-awesome-5' name={iconName} size={24} color="white" />
      }
    })}>
      <Tab.Screen name='Offers' component={LoginScreen} />
      <Tab.Screen name='Accounts' component={AccountScreen} />
      <Tab.Screen name='My Offers' component={MyOffersScreen} />
      <Tab.Screen name='FAQ' component={FAQScreen} />
    </Tab.Navigator>
  )
}

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='LandingScreen'
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#101010'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: '#ffd700',
          headerBackTitleVisible: false
        }}
        headerMode='float'>
        <Stack.Screen
          name='Landing'
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Register'
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Login'
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='OfferPage'
          component={OfferScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='AccountInfoPage'
          component={AccountInfoScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator


