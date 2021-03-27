import React, { Component, useContext } from 'react';
import { Text, View, Image } from 'react-native';
import { Input, Button, Header, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state  = {
            filterBy: false,
            state: null,
            bank: null,

        }
        this.showFilter = this.showFilter.bind(this);
        this.closeFilter = this.closeFilter.bind(this);
    }
    showFilter(){
        this.setState({filterBy: true});
    }
    closeFilter(){
        this.setState({filterBy: false});
    }
    useStyles = makeStyles((theme) => ({
        root: {
          width: 300,
        },
        margin: {
          height: theme.spacing(3),
        },
    }));
    valuetext(value) {
        return `$${value}`;
    }
    render() {
    const filterBy = this.state.filterBy;
    let card;
    if (filterBy){
        card =  
        <Card containerStyle={{borderTopLeftRadius:'10px', borderTopRightRadius:'10px'}}>
            <Card.Title h3 h3Style={{color:'black'}}>Filter By</Card.Title>
            <View style={{flexDirection:"row", justifyContent: "space-between"}}>
                <DropDownPicker
                    items={[
                        {label: 'California', value: 'California'},
                    ]}
                    defaultValue={this.state.state}
                    placeholder="State"
                    containerStyle={{height: 40}}
                    style={{backgroundColor: '#fafafa', width: 170}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => this.setState({
                        state: item.value
                    })}
                />
                <DropDownPicker
                    items={[
                        {label: 'Chase', value: 'Chase'},
                    ]}
                    defaultValue={this.state.bank}
                    placeholder="Bank"
                    containerStyle={{height: 40}}
                    style={{backgroundColor: '#fafafa', width: 170}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => this.setState({
                        bank: item.value
                    })}
                />
            </View>
            
            <div style={{marginTop: '30px'}}>
            <Typography id="discrete-slider-custom" gutterBottom>
                Savings Required
            </Typography>
            <Slider
                style={{ width: 340}}
                defaultValue={0}
                getAriaValueText={this.valuetext}
                aria-labelledby="discrete-slider-custom"
                step={50}
                marks= {[
                    {
                      value: 0,
                      label: "$0"
                    },
                    {
                        value: 50,
                        label: "$5k"
                    },
                    {
                      value: 100,
                      label: "$10k+"
                    }
                  ]}
            />
            </div>
            <div>
            <Typography id="discrete-slider-custom" gutterBottom>
                Monthly direct deposits required
            </Typography>
            <Slider
                style={{ width: 340}}
                defaultValue={0}
                getAriaValueText={this.valuetext}
                aria-labelledby="discrete-slider-custom"
                step={50}
                marks= {[
                    {
                      value: 0,
                      label: "$0"
                    },
                    {
                        value: 50,
                        label: "$2k"
                    },
                    {
                      value: 100,
                      label: "$4k"
                    }
                  ]}
            />
            </div>
            <div>
            <Typography id="discrete-slider-custom" gutterBottom>
                Monthly direct purchases required
            </Typography>
            <Slider
                style={{ width: 340}}
                defaultValue={0}
                getAriaValueText={this.valuetext}
                aria-labelledby="discrete-slider-custom"
                step={50}
                marks= {[
                    {
                      value: 0,
                      label: "0"
                    },
                    {
                        value: 50,
                        label: "50"
                    },
                    {
                      value: 100,
                      label: "100"
                    }
                  ]}
            />
            </div>
            <View style={{flexDirection:"row", justifyContent: "center", marginTop: '20px'}}>
            <Button
                    title="APPLY"
                    buttonStyle = {{ width: 80, borderRadius:'10px'}}
                    titleStyle = {{ color: 'white'}}
                    onPress={this.closeFilter}
            />
            </View>
        </Card>
    }
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
            <View style={{ flex: 1, flexDirection:'row', marginTop: '30px'}}>
                <Text style={{ fontSize: 30, color: '#2BF594', fontWeight: 'bold', position: 'absolute', marginLeft:'20px', marginRight:'30px'}}>   
                    Find Offers 
                </Text> 
                <Button
                    title="Filter"
                    type="outline"
                    buttonStyle = {{ width: 80, borderColor: 'white', borderRadius:'10px', marginLeft:'310px'}}
                    titleStyle = {{ color: 'white'}}
                    onPress={this.showFilter}
                />
            </View>
            {card}
        </View>
    )
}
}
