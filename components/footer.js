import React , {Component} from 'react';
import {Text, View, Pressable} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from '../style/style'


export default class Footer extends React.Component {
    render () {
        return (
        <View style={styles.footer}>
            <Text style={styles.author}>
               Author: Aleksi Honkanen
            </Text>
        </View>
        )
    }
}
