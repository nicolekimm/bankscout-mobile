import React, { Component, useContext, useState } from 'react';
import { View, useWindowDimensions, Image, Text } from 'react-native';
import { Input, Button, Header, Card, Overlay } from 'react-native-elements';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { ProgressBar, Colors } from 'react-native-paper';

const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#25315C' }}>
            <Card containerStyle={{width: '90%', borderRadius:'10px', backgroundColor:'#C4C4C4'}}>
            <View style={{flexDirection:'row'}}>
                <Image
                    style={{ width: 50,
                        height: 50}}
                    source= {{uri: 'https://i.pinimg.com/originals/70/4a/1e/704a1e534e8dc0138eee3ded449555d5.png'}}
                />
                <View style={{flexDirection:'column', marginLeft: '20px'}}>
                    <Text style={{fontSize: '25px', fontWeight: 'bold'}}>Chase Bank</Text>
                    <Text style={{fontSize: '15px', marginTop: '5px'}}>$150 Savings</Text>
                    <ProgressBar progress={0.5} color={Colors.red800} style={{marginTop: '15px'}} />
                    <Text style={{fontSize: '15px', marginTop: '10px'}}>1 of 2 tasks completed</Text>
                </View>
            </View>
            <View style={{flexDirection:'row', marginTop: '30px'}}>
                <Text style={{fontSize: '15px'}}>Bank Phone Number:</Text>
                <Text style={{fontSize: '15px', color: '#3F518F', marginLeft: '2px'}}>1-123-456-7890</Text>
            </View>
            </Card>
    </View>
);
  
const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#25315C' }} />
);

const ThirdRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#25315C' }} />
);
  
export default function TabOffers() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Current' },
        { key: 'second', title: 'Completed' },
        { key: 'third', title: 'Cancelled' },
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