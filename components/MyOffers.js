import React, { Component, useContext, useState } from 'react';
import { Text, View, Image, FlatList, useWindowDimensions } from 'react-native';
import { Input, Button, Header, Card, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TabView, SceneMap } from 'react-native-tab-view';
import TabOffers from './TabOffers';

export default class MyOffers extends React.Component {
    constructor(props){
        super(props);
        this.state  = {
        }

    }

    render(){
        return (
            <View style={{ flex: 1, backgroundColor: '#25315C'}}>
                <Header
                    placement="left"
                    leftComponent={<Image style={{ width: 150, height: 30}} source={require('./bankwhite.png')} resizeMode={'center'} /> }
                    rightComponent={<View style={{ flex: 1, flexDirection:'row', marginRight:'10px'}}>
                            <Icon
                                name='bell'
                                size={22}
                                color='white'
                            />
                            <Icon
                                name='user-circle'
                                size={22}
                                color='white'
                                style={{marginLeft: '20px'}}
                            />
                        </View>}
                    containerStyle={{
                        backgroundColor: '#25315C',
                        justifyContent: 'space-around',
                      }}
                />
                <View style={{ flexDirection:'row', marginTop: '10px'}}>
                    <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', position: 'absolute', marginLeft:'20px', marginRight:'30px'}}>   
                        Offers
                    </Text> 
                </View>
                <TabOffers></TabOffers>
                
            </View>
        )
    }

}


