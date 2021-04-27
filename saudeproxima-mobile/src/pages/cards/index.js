import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagemFundo from '../../assets/fundoAzul.png'
import logoImg from '../../assets/logoSaudeProxima.png';

import api from '../../services/api';

import styles from './styles';

export default function Cards() {
    const [unidades, setUnidades] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function navigationToDatail(unidade) {
        navigation.navigate('Details', { unidade });
    }

    function navigationToGoogleMaps(urlGoogleMaps) {
        Linking.openURL(urlGoogleMaps).catch(err => console.error("Couldn't load page", err));
    }

    async function loadUnidades() {
        if (loading) {
            return;
        }
        if (total > 0 && unidades.length === total) {
            return;
        }
        setLoading(true);
        
        const response = await api.get('unidade-saude', {});

        setUnidades([ ... unidades, ... response.data]);
        setTotal(response.data.length);
        setLoading(false);
    }

    useEffect(() => {
        loadUnidades();
        setInterval(function(){ loadUnidades(); }, 5000);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.viewLogo}>
                <Image source={logoImg} style={styles.logo}/>
            </View>
            <ImageBackground source={ImagemFundo} style={styles.imagemFundo}>
                <FlatList
                    style={styles.cardsList}
                    data={unidades}
                    keyExtractor={unidade => String(unidade.id)}
                    renderItem={({ item: unidade }) => (
                        <View style={styles.cards}>
                            <View style={styles.dadosDoCard}>
                                <Icon name="hospital-o" size={15} color="#2B2B2B" backgroundColor="transparent" />
                                <Text style={{fontWeight: 'bold', fontSize: 15, marginLeft: 10}}>{unidade.nome}</Text>
                            </View>
                        
                            <View style={styles.dadosDoCard}>
                                <Icon name="clock-o" size={15} color="#2B2B2B" backgroundColor="transparent" />
                                <Text style={styles.cardsValue}>Tempo médio de espera:</Text> 
                                <Text style={{fontWeight: 'bold', fontSize: 15,  marginLeft: 5, color: "#36A800"}}>20 min</Text>
                            </View>
                            
                            <View  style={styles.dadosDoCard}>
                                <View>
                                    <Icon name="arrow-left" size={15} color="#2B2B2B" backgroundColor="transparent" />
                                    <Icon name="arrow-right" size={15} color="#2B2B2B" backgroundColor="transparent" />
                                </View>
                                
                                <Text style={styles.cardsValue}>Total de pessoas na fila:</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 15,  marginLeft: 5}}>{unidade.total}</Text>
                            </View>
                        
                            <View style={styles.dadosDoCard}>
                                <TouchableOpacity 
                                    onPress={() => navigationToGoogleMaps(unidade.urlGoogleMaps)}>
                                    <Icon name="location-arrow" size={17} color="#2B2B2B" backgroundColor="transparent" />
                                    <Text style={styles.enderecoValue}>{unidade.endereco}</Text>
                                </TouchableOpacity>
                            </View>
                            
                            <View style={styles.viewBtn}>
                                <TouchableOpacity
                                    style={styles.detailsButton}
                                    onPress={() => navigationToDatail(unidade)}>
                                    <View style={styles.dadosBtn}>
                                        <Text style={styles.detailsButtonText}>VER MAIS DETALHES</Text>
                                        <Feather name="arrow-right" size={16} color="#FFF" style={{ marginLeft: 10}}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                    )}
                />
            </ImageBackground>
        </View>
    );
}