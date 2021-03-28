import React, { Component, useContext } from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import { Input, Button, Header, Card, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';

export default class FAQ extends React.Component { 
    constructor(props){
        super(props);
        this.state  = {
            state: null,
        }

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
                <View style={{ flexDirection:'row', marginTop: '30px'}}>
                    <Text style={{ fontSize: 30, color: '#2BF594', fontWeight: 'bold', position: 'absolute', marginLeft:'20px', marginRight:'30px'}}>   
                        General FAQ
                    </Text> 
                </View>
                <View style={{ marginTop: '30px', marginLeft:'20px', marginRight:'30px'}}>
                    <DropDownPicker
                            items={[
                                {label: 'Banks love new customers!', value: 'Banks love new customers!'},
                            ]}
                            defaultValue={this.state.state}
                            placeholder="Why are banks willing to pay me?"
                            placeholderStyle={{color: 'white', fontWeight:'bold'}}
                            containerStyle={{height: 50, marginTop: '40px'}}
                            style={{backgroundColor: '#25315C', width: '100%', borderRadius:'10px'}}
                            itemStyle={{
                                justifyContent: 'flex-start',
                            }}
                            arrowColor='white'
                            dropDownStyle={{backgroundColor: '#fafafa'}}
                            onChangeItem={item => this.setState({
                                state: item.value
                            })}
                    />
                    <DropDownPicker
                            items={[
                                {label: 'Banks love new customers!', value: 'Banks love new customers!'},
                            ]}
                            defaultValue={this.state.state}
                            placeholder="What does BankScout do?"
                            placeholderStyle={{color: 'white', fontWeight:'bold'}}
                            containerStyle={{height: 50, marginTop: '40px'}}
                            style={{backgroundColor: '#25315C', width: '100%', borderRadius:'10px'}}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            arrowColor='white'
                            dropDownStyle={{backgroundColor: '#fafafa'}}
                            onChangeItem={item => this.setState({
                                state: item.value
                            })}
                    />
                    <DropDownPicker
                            items={[
                                {label: 'Banks love new customers!', value: 'Banks love new customers!'},
                            ]}
                            defaultValue={this.state.state}
                            placeholder="What are direct deposits?"
                            placeholderStyle={{color: 'white', fontWeight:'bold'}}
                            containerStyle={{height: 50, marginTop: '40px'}}
                            style={{backgroundColor: '#25315C', width: '100%', borderRadius:'10px'}}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            arrowColor='white'
                            dropDownStyle={{backgroundColor: '#fafafa'}}
                            onChangeItem={item => this.setState({
                                state: item.value
                            })}
                    />
                    <DropDownPicker
                            items={[
                                {label: 'Banks love new customers!', value: 'Banks love new customers!'},
                            ]}
                            defaultValue={this.state.state}
                            placeholder="Can I sign up for any bank I want?"
                            placeholderStyle={{color: 'white', fontWeight:'bold'}}
                            containerStyle={{height: 50, marginTop: '40px'}}
                            style={{backgroundColor: '#25315C', width: '100%', borderRadius:'10px'}}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            arrowColor='white'
                            dropDownStyle={{backgroundColor: '#fafafa'}}
                            onChangeItem={item => this.setState({
                                state: item.value
                            })}
                    />
                    <DropDownPicker
                            items={[
                                {label: 'Banks love new customers!', value: 'Banks love new customers!'},
                            ]}
                            defaultValue={this.state.state}
                            placeholder="How much does this cost?"
                            placeholderStyle={{color: 'white', fontWeight:'bold'}}
                            containerStyle={{height: 50, marginTop: '40px'}}
                            style={{backgroundColor: '#25315C', width: '100%', borderRadius:'10px'}}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            arrowColor='white'
                            dropDownStyle={{backgroundColor: '#fafafa'}}
                            onChangeItem={item => this.setState({
                                state: item.value
                            })}
                    />
                    <DropDownPicker
                            items={[
                                {label: 'Banks love new customers!', value: 'Banks love new customers!'},
                            ]}
                            defaultValue={this.state.state}
                            placeholder="Is this safe?"
                            placeholderStyle={{color: 'white', fontWeight:'bold'}}
                            containerStyle={{height: 50, marginTop: '40px'}}
                            style={{backgroundColor: '#25315C', width: '100%', borderRadius:'10px'}}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            arrowColor='white'
                            dropDownStyle={{backgroundColor: '#fafafa'}}
                            onChangeItem={item => this.setState({
                                state: item.value
                            })}
                    />
                </View>
            </View>
        )
    }
}