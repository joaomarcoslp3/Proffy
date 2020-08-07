import React from 'react';
import {View, Image, Text} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'

const TeacherItem: React.FC = () => {
  return(
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{uri: "https://github.com/joaomarcoslp3.png"}}/>

        <View style={styles.profileInfo}>
          <Text style={styles.name}>João Marcos Lopes Pinto</Text>
          <Text style={styles.subject}>Física</Text>
        </View>
      </View>

      <Text style={styles.bio}>
      A brazilian full stack developer. Tech enthusiastic. Love (and work w/) for NodeJS, ReactJS and React-Native.
      </Text>

      <View style={styles.footer}>
       <Text style={styles.price}>
         Preço/hora{'  '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
       </Text>

       <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartIcon}/> */}
            <Image source={unfavoriteIcon}/>
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon}/>
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
       </View>

      </View>
    </View>
  )
};

export default TeacherItem