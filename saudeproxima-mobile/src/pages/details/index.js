import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Image, Text, TouchableOpacity, ImageBackground} from 'react-native';
import ImagemFundo from '../../assets/fundoAzul.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import logoImg from '../../assets/logoSaudeProxima.png';

import styles from './styles';

export default function Cards() {
    const navigation = useNavigation();
    const route = useRoute();

    const unidade = route.params.unidade;
    const message = `Olá ${unidade.nome}, estou entrando em contato pois gostaria de ajudar no caso com o valor de`;


    function navigateBack() {
        navigation.goBack();
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} style={styles.logo}/>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#35AEF1" />
                </TouchableOpacity>
            </View>
            <ImageBackground source={ImagemFundo} style={styles.imagemFundo}>
                <View style={styles.cards}>
                    <View style={{ alignItems: 'center', flexDirection: 'column'}}>
                        <Text style={styles.nomeUnidade}>UPA - PROSPERA</Text>
                    </View>

                    <View style={styles.dadosDoCard}>
                        <Icon name="clock-o" size={15} color="#2B2B2B" backgroundColor="transparent" />
                        <Text style={styles.cardsValue}>Tempo médio total de espera:</Text> 
                        <Text style={{fontWeight: 'bold', fontSize: 15,  marginLeft: 5, color: "#36A800"}}>20 min</Text>
                     </View>
                </View>

            </ImageBackground>
            
        </View>
    );
}