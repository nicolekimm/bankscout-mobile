import React, { Component, useContext } from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import { Input, Button, Header, Card, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { ProgressBar, Colors } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Accounts extends React.Component {
    constructor(props){
        super(props);
        this.state  = {
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
                        My Accounts
                    </Text> 
                </View>

                <TouchableOpacity onPress={() => this.props.navigation.navigate("AccountInfoPage")}>
                    <View style={{ flex: 1, backgroundColor: '#25315C', marginTop: '40px' }}>
                        <Card containerStyle={{width: '93%', borderRadius:'10px', backgroundColor:'#C4C4C4'}}>
                        <View style={{flexDirection:'row'}}>
                            <Image
                                style={{ width: 50,
                                    height: 50}}
                                source= {{uri: 'https://i.pinimg.com/originals/70/4a/1e/704a1e534e8dc0138eee3ded449555d5.png'}}
                            />
                            <View style={{flexDirection:'column', marginLeft: '20px'}}>
                                <Text style={{fontSize: '25px', fontWeight: 'bold'}}>Chase Bank</Text>
                                <Text style={{fontSize: '15px', marginTop: '5px'}}>Regular Checking</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', marginTop: '30px'}}>
                            <Text style={{fontSize: '20px', fontWeight: 'bold'}}>Balance:</Text>
                            <Text style={{fontSize: '20px', color: '#3F518F', marginLeft: '2px'}}>-$100.00</Text>
                        </View>
                        </Card>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}