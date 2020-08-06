import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler'

import LandingImage from '../../assets/images/landing.png';
import StudyIcon from '../../assets/images/icons/study.png';
import GiveClassesIcon from '../../assets/images/icons/give-classes.png'
import HeartIcon from '../../assets/images/icons/heart.png'

import styles from './styles';


function Landing(){
  const navigator = useNavigation()

  function navigateToGiveClasses() {
    navigator.navigate('GiveClasses')
  }
  
  return (
    <View style={styles.container}>
      <Image source={LandingImage} style={styles.banner}/>

      <Text style={styles.title}>
        Seja bem vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton style={[styles.button, styles.buttonPrimary]}>
          <Image source={StudyIcon}/>
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>
        <RectButton onPress={navigateToGiveClasses} style={[styles.button, styles.buttonSecondary]}>
          <Image source={GiveClassesIcon}/>
          <Text style={styles.buttonText}>Dar Aulas</Text>
        </RectButton>
      </View>
 
      <Text style={styles.totalConnections}>
        Total de 285 conexões já realizadas {' '}
        <Image source={HeartIcon}/>
      </Text>
    </View>
  )
}

export default Landing;