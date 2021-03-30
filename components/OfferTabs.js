import React, { Component, useContext, useState } from 'react';
import { View, useWindowDimensions, Image, Text } from 'react-native';
import { Input, Button, Header, Card, Overlay } from 'react-native-elements';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { ProgressBar, Colors } from 'react-native-paper';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#25315C' }}>
            <Card containerStyle={{width: '93%', borderRadius:'10px', backgroundColor:'#C4C4C4'}}>
            <View style={{flexDirection:'row'}}>
                <AccountBalanceIcon style={{ fontSize: 40, color: '#117ACA' }}></AccountBalanceIcon>
                <Text style={{fontSize: '30px', fontWeight: 'bold', marginLeft:'20px'}}>Savings</Text>
            </View>
            <View style={{flexDirection:'column', marginTop: '20px'}}>
                <Text style={{fontSize: '15px'}}>Maintain savings of at least $15,000.</Text>
                <Text style={{fontSize: '15px'}}>Status: Start date must be set to before Sun, Feb. 14.</Text>
                <Text style={{fontSize: '15px'}}>Duration: Until Sun, Feb. 14.</Text>
            </View>
            </Card>
    </View>
);
  
const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#25315C' }}>
        <Card containerStyle={{width: '93%', borderRadius:'10px', backgroundColor:'#C4C4C4'}}>
        <View style={{flexDirection:'row'}}>
            <Image
                style={{ width: 50,
                    height: 50}}
                source= {{uri: 'https://i.pinimg.com/originals/70/4a/1e/704a1e534e8dc0138eee3ded449555d5.png'}}
            />
            <View style={{flexDirection:'column', marginLeft: '20px'}}>
                <Text style={{fontSize: '25px', fontWeight: 'bold'}}>Chase Bank</Text>
                <Text style={{fontSize: '15px', marginTop: '5px'}}>Savings</Text>
                <Text style={{fontSize: '15px', marginTop: '15px'}}>Interest Rate: 0.0%</Text>
                <Text style={{fontSize: '15px', marginTop: '5px'}}>Minimum Opening Balance: None!</Text>
                <Text style={{fontSize: '15px', marginTop: '5px'}}>Monthly fee of $5.</Text>

            </View>
        </View>
        </Card>
    </View>
);

const ThirdRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#25315C' }} />
);
  
export default function OfferTabs() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Tasks' },
        { key: 'second', title: 'Available Accounts' },
        { key: 'third', title: 'Rewards' },
    ]);
  
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
    });

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#4C49C3' }}
            style={{ backgroundColor: '#25315C' }}
        />
    );
  
    return (
          <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          style = {{ marginTop: '50px' }}
          renderTabBar={renderTabBar}
          />
    );
  }