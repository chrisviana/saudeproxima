import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';

import logoImg from '../../assets/logo.png';

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
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <View style={styles.header}>
                <Image 
                    source={logoImg}
                    style={{
                        resizeMode: "contain",
                        height: 100,
                        width: 200
                    }}/>
            </View>
            <FlatList
                style={styles.cardsList}
                data={unidades}
                keyExtractor={unidade => String(unidade.id)}
                renderItem={({ item: unidade }) => (
                    <View style={styles.cards}>

                        <Icon name="hospital-o" size={18} color="#999"/>
                        <Text style={styles.cardsValue}>{unidade.nome}</Text>

                        <Text style={styles.cardsValue}>Tempo médio de espera: xx</Text>

                        <Text style={styles.cardsValue}>Total de pessoas na fila: xx</Text>

                        <Text style={styles.cardsValue}>Endereco - precisa ser cadastrado: IR</Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigationToDatail(unidade)}>
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#35AEF1" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}