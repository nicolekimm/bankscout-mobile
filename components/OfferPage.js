import React, { Component, useContext, useState } from 'react';
import { Text, View, Image, FlatList, BackHandler, TouchableOpacity } from 'react-native';
import { Input, Button, Header, Card, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import EmojiEventIcon from '@material-ui/icons/EmojiEvents';
import Icons from 'react-native-vector-icons/MaterialIcons';
import OfferTabs from './OfferTabs';

export default class OfferPage extends React.Component {
    constructor(props){
        super(props);
        this.state  = {
        }
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

    }

    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }


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
                <View style={{ flexDirection:'row', marginTop: '40px'}} onPress={BackHandler.exitApp()}>
                    <Text style={{ fontSize: 30, color: '#2BF594', fontWeight: 'bold', position: 'absolute', marginLeft:'20px', marginRight:'30px'}}>   
                        Chase | $150 Savings 
                    </Text> 
                </View>

                <View style={{ flexDirection:'row', marginTop: '40px', justifyContent: 'center', alignItems: 'center', textAlign:'center'}}>
                    <View style={{ flexDirection:'column', marginTop: '30px', justifyContent: 'center', alignItems: 'center', textAlign:'center'}}>
                        <AccountBalanceIcon style={{ fontSize: 40, color: 'white' }}></AccountBalanceIcon>
                        <Text style={{ fontSize: 15, color: 'white'}}>   
                            Savings
                        </Text> 
                    </View>
                    <View style={{ flexDirection:'column', marginTop: '30px', justifyContent: 'center', alignItems: 'center', textAlign:'center'}}>
                        <ArrowRightAltIcon style={{ fontSize: 60, color: 'white', width: '100' }}></ArrowRightAltIcon>
                    </View>
                    <View style={{ flexDirection:'column', marginTop: '30px', justifyContent: 'center', alignItems: 'center', textAlign:'center'}}>
                        <EmojiEventIcon style={{ fontSize: 40, color: 'white'}}></EmojiEventIcon>
                        <Text style={{ fontSize: 15, color: 'white'}}>   
                            $300.00
                        </Text> 
                    </View>
                </View>

                <View style={{ flexDirection:'row', marginTop: '20px', justifyContent: 'center', alignItems: 'center', textAlign:'center'}}>
                    <Text style={{ fontSize: 15, color: '#2BF594'}}>   
                        Reward of $300.00
                    </Text> 
                </View>
                <OfferTabs></OfferTabs>
                <TouchableOpacity onPress={this.handleBackButtonClick}>
                    <Icons name='arrow-back-ios' size={30} color='#fff' style={{marginLeft: '3%', marginBottom: '10px'}}/>
                </TouchableOpacity>



            </View>
        )
    }
}