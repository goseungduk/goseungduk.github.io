import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import {TouchableOpactiy} from 'react-native-gesture-handler';

const Sidebar = () =>{
    <View>
        <View>
            <View>
                <View style={{marginLeft:12}}>
                    <Text style={{opacity:0.6}}> Logged in as</Text>
                    <Text style={{fontSize:22, colore:'white', opacity:0.9}}>Dean</Text>
                </View>
            </View>
        </View>
    </View>
}