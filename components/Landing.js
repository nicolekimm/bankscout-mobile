import React from 'react';
import { Text, View, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Landing({navigation}) { 
    const [text, setText] = React.useState('');
    return (
        <View style={{ flex: 1, alignItems: 'center',  backgroundColor: '#25315C', justifyContent: 'center'}}>
            <Image flex={1} style={{ width: 300, height: 100, position: 'absolute', top: 30 }} source={require('./bankwhite.png')} resizeMode={'center'} /> 
            <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', position: 'absolute', top: 180  }}>   
                Log In
            </Text> 
            <Input
                containerStyle = {{ width: 300, marginTop: '90px'}}
                inputContainerStyle = {{ borderColor:'white'}}
                inputStyle = {{ color:'white' }}
                label = 'Email'
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
                title="Submit"
                type="outline"
                buttonStyle = {{ width: 100, marginTop: '30px', borderColor: '#2BF594', borderRadius:'10px'}}
                titleStyle = {{ color: '#2BF594'}}
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="Create a new account"
                type="clear"
                buttonStyle = {{ width: 210, marginTop: '20px', borderColor: '#2BF594', borderRadius:'10px'}}
                titleStyle = {{ color: 'white', fontWeight:'bold', textDecorationLine:'underline'}}
                onPress={() => 
                    navigation.navigate("Register")}
            />
        </View>
    )
}
