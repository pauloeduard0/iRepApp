import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper/src';

export default function SwiperComponent() {
 return (
   <Swiper
   style={styles.wrapper}
   dotStyle={{
       backgroundColor: '#000',
       borderColor: '#000',
       borderWidth: 1,
       width: 10,
       height: 10,
       borderRadius: 10,
   }}
   activeDotColor='#FFF'
   activeDotStyle={{
    borderColor: '#000',
    borderWidth: 1,
    width: 10,
    height: 10,
    borderRadius: 10,
   }}
   >
       <View style={styles.slide}>
        <Image
        source={require('../assets/casa-1-quarto.jpg')}
        style={{ width: '100%', height: 400}}
        />
       </View>

       <View style={styles.slide}>
        <Image
        source={require('../assets/casa-1-sala.jpg')}
        style={{ width: '100%', height: 400}}
        />
       </View>

       <View style={styles.slide}>
        <Image
        source={require('../assets/casa-1-area.jpg')}
        style={{ width: '100%', height: 400}}
        />
       </View>

       <View style={styles.slide}>
        <Image
        source={require('../assets/casa-1-banheiro.jpg')}
        style={{ width: '100%', height: 400}}
        />
       </View>

       <View style={styles.slide}>
        <Image
        source={require('../assets/casa-1-quarto_2.jpg')}
        style={{ width: '100%', height: 400}}
        />
       </View>

   </Swiper>
  );
}

const styles = StyleSheet.create({
    wrapper:{

    },
    slide:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    }
});