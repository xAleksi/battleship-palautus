import React, {Component} from 'react';
import {Text, View, Pressable} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from '../style/style'

export default class Header extends React.Component {
    render () {
        return (
        <View style={styles.header}>
            <Text style={styles.title}>
                Battleship game
            </Text>
        </View>
        )
    }
}
