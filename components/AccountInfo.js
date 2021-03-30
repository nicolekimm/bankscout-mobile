import React, { Component, useContext, useState } from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import { Input, Button, Header, Card, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Unorderedlist from 'react-native-unordered-list';

export default class AccountInfo extends React.Component {
    render() {
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
                <View style={{flexDirection:'row', marginTop: '30px', marginLeft: '20px'}}>
                    <Image
                        style={{ width: 60,
                            height: 60}}
                        source= {{uri: 'https://i.pinimg.com/originals/70/4a/1e/704a1e534e8dc0138eee3ded449555d5.png'}}
                    />
                    <View style={{flexDirection:'column', marginLeft: '30px'}}>
                        <Text style={{fontSize: '25px', fontWeight: 'bold', color: 'white'}}>Chase Bank</Text>
                        <Text style={{fontSize: '15px', color: 'white', marginTop: '5px'}}>Regular Checking</Text>
                    </View>
                </View>

                <View style={{flexDirection:'row', marginTop: '30px', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flexDirection:'column', marginTop:'20px'}}>
                        <Unorderedlist color='white'><Text style={{fontSize: '15px', color: 'white'}}>Monthly direct deposits of at least $500.</Text></Unorderedlist>
                        <Unorderedlist color='white'><Text style={{fontSize: '15px', color: 'white'}}>Used for: $300 Account Package.</Text></Unorderedlist>
                    </View>
                </View>

                <View style={{flexDirection:'row', marginTop: '30px', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: '20px', fontWeight: 'bold', color: 'white'}}>Current Balance: <Text style={{fontSize: '20px', color: '#6F8CF6', fontWeight:'normal'}}>-$100.00</Text></Text>
                </View>

                <Text style={{fontSize: '25px', fontWeight: 'bold', color: 'white', marginTop: '30px', marginLeft:'20px'}}>Transactions</Text>
            </View>
        )
    }
}