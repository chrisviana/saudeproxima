import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Cards() {
    const navigation = useNavigation();
    const route = useRoute();

    const unidade = route.params.unidade;
    const message = `Olá ${unidade.nome}, estou entrando em contato pois gostaria de ajudar no caso com o valor de`;


    function navigateBack() {
        navigation.goBack();
    }

    function sendEmail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${unidade.title}`,
            recipients: ['lucas@sss.cas'],
            body: message
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${unidade.whatsapp}&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#35AEF1" />
                </TouchableOpacity>
            </View>

            <View style={styles.cards}>
                <Text style={styles.cardsProperty}>Icon:</Text>
                <Text style={styles.cardsValue}>{unidade.nome}</Text>

                <Text style={styles.cardsProperty}>Icon:</Text>
                <Text style={styles.cardsValue}>Tempo médio de espera: xx</Text>

                <Text style={styles.cardsProperty}>Icon:</Text>
                <Text style={styles.cardsValue}>Total de pessoas na fila: xx</Text>

                <Text style={styles.cardsProperty}>Icon:</Text>
                <Text style={styles.cardsValue}>Endereco - precisa ser cadastrado: IR</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp} >
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendEmail} >
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}