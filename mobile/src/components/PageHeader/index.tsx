import React from 'react';
import {View, Text, Image} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import backIcon from  '../../assets/images/icons/back.png'
import logoImage from  '../../assets/images/logo.png'

import styles from './styles';

interface PageHeaderProps {
  title: string,
}

const PageHeader: React.FC<PageHeaderProps> = ({title}) => {
  const navigator = useNavigation();

  function goBack(){
    navigator.navigate('Landing')
  }

  return(
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={goBack}>
          <Image source={backIcon} resizeMode="contain"/>
        </BorderlessButton>

        <Image source={logoImage} resizeMode="contain"/>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
};

export default PageHeader;
