import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        //paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: "#FFF"
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    logo: {
        resizeMode: "contain",
        height: 100,
        width: 200,

    },

    imagemFundo: {
        flex:2,
        resizeMode: 'repeat',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },


    cards: {
        padding: 20,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 200,
        marginBottom: 16,
        flex: 1

    },

    cardsProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },

    cardsValue: {
        marginLeft: 10,
        fontSize: 15,
        color: '#7D7D7D'

    },

    nomeUnidade: {
        fontSize: 22,
        fontWeight: 'bold',
        color: "#35AEF1"
    },
    dadosDoCard: {
        flexDirection: 'row'
    }
});