import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Register({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center',  backgroundColor: '#25315C', justifyContent: 'center'}}>
            <Image flex={1} style={{ width: 300, height: 100, position: 'absolute', top: 30 }} source={require('./bankwhite.png')} resizeMode={'center'} />
            <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', position: 'absolute', top: 150  }}>   
            Join BankScout!
            </Text> 
            <Input
                containerStyle = {{ width: 300, marginTop: '170px'}}
                inputContainerStyle = {{ borderColor:'white'}}
                inputStyle = {{ color:'white' }}
                label = 'Email'
                labelStyle = {{ color:'white', fontSize: '20px' }}
            />
            <Input
                containerStyle = {{ width: 300, marginTop: '20px'}}
                inputContainerStyle = {{ borderColor:'white'}}
                inputStyle = {{ color:'white' }}
                label = 'First Name'
                labelStyle = {{ color:'white', fontSize: '20px' }}
            />
            <Input
                containerStyle = {{ width: 300, marginTop: '20px'}}
                inputContainerStyle = {{ borderColor:'white'}}
                inputStyle = {{ color:'white' }}
                label = 'Last Name'
                labelStyle = {{ color:'white', fontSize: '20px' }}
            />
            <Input
                containerStyle = {{ width: 300, marginTop: '20px'}}
                inputContainerStyle = {{ borderColor:'white' }}
                inputStyle = {{ color:'white' }}
                secureTextEntry={true} 
                label = 'Password'
                labelStyle = {{ color:'white', fontSize: '20px' }}
                rightIcon={
                    <Icon
                    name='eye'
                    size={24}
                    color='white'
                    />
                }
            />
            <Button
                title="Sign Up"
                type="outline"
                buttonStyle = {{ width: 100, marginTop: '30px', borderColor: '#2BF594', borderRadius:'10px'}}
                titleStyle = {{ color: '#2BF594'}}
                onPress={() => navigation.navigate("Login")}
            />

        </View>
    )
}
