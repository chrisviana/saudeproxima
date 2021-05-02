import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Image, Text, TouchableOpacity, ImageBackground, Linking} from 'react-native';
import ImagemFundo from '../../assets/fundoAzul.png'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import logoImg from '../../assets/logoSaudeProxima.png';

import styles from './styles';

export default function Cards() {
    const navigation = useNavigation();
    const route = useRoute();

    const unidade = route.params.unidade;


    function navigateBack() {
        navigation.goBack();
    }

    function navigationToGoogleMaps(urlGoogleMaps) {
        Linking.openURL(urlGoogleMaps).catch(err => console.error("Couldn't load page", err));
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
                        <Text style={styles.nomeUnidade}>{unidade.nome}</Text>
                    </View>

                    <View  style={styles.dadosDoCard}>
                        <Icon name="transit-transfer" size={15} color="#2B2B2B" backgroundColor="transparent" />   
                        <Text style={styles.cardsValue}>Total de pessoas na fila:</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 15,  marginLeft: 5}}>{unidade.total}</Text>
                    </View>

                    <View style={styles.dadosDoCard}>
                        <Icon name="google-maps" size={17} color="#2B2B2B" backgroundColor="transparent" />
                        <Text style={styles.cardsValue}>{unidade.endereco}</Text>
                        <TouchableOpacity 
                            style={styles.btnAbrirMapa}
                            onPress={() => navigationToGoogleMaps(unidade.urlGoogleMaps)}>
                            <Text style={styles.textAbrirMapa}>IR</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.dadosDoCard}>
                        <Icon name="phone" size={17} color="#2B2B2B" backgroundColor="transparent" />
                        <Text style={styles.cardsValue}>{unidade.telefone}</Text>
                    </View>
                    <View style={styles.dadosDoCard}>
                        <Icon name="medical-bag" size={17} color="#2B2B2B" backgroundColor="transparent" />
                        <Text style={styles.cardsValue}>Médicos de Plantão:</Text>
                        <Text style={styles.cardsValue}>{unidade.medicosPlantao}</Text>
                    </View>
                   <View style={styles.cardPulseiras}>
                        <Text style={styles.pulseiras}>
                            Numero de Pacientes por Pulseira 
                            <Icon name="information" styles={styles.iconInformacao} size={17} color="#2B2B2B" backgroundColor="transparent" />
                        </Text>
                    </View>
                        <View style={styles.categorias}>
                            <Text style={styles.emergencia} >EMERGÊNCIA: {unidade.emergencia}</Text>
                            <Text style={styles.muitoUrgente}>MUITO URGENTE: {unidade.muitoUrgente}</Text>
                            <Text style={styles.urgente}>URGENTE: {unidade.urgente}</Text>
                            <Text style={styles.poucoUrgente}>POUCO URGENTE: {unidade.poucoUrgente}</Text>
                            <Text style={styles.naoUrgente}>NÃO URGENTE: {unidade.naoUrgente}</Text>
                        </View>
                </View>

            </ImageBackground>
            
        </View>
    );
}