import React from 'react'
import { View, Component } from 'react-native';
import Footer from './components/footer'
import Header from './components/header'
import Gameboard from './components/gameboard'
import styles from './style/style'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <Gameboard/>
        <Footer/>
      </View>
    )
  }

}
